import { parse, stringify } from 'csv';

async function setup(inputSource, outputTarget, courseSource, passwordSource) {
  inputSource.addEventListener('change', async (ev) => {
    const input = await ev.target.files[0].text();
    const output = await handleCSV(input, courseSource.value, passwordSource.value);
    putCSV(output, outputTarget);
  });
}

async function handleCSV(input, course, password) {
  return await buildCSV(transformCSV(await readCSV(input), course, password));
}

function readCSV(data) {
  const options = {
    delimiter: ';',
    columns: true,
    skip_empty_lines: true
  }

  return new Promise((resolve, reject) => {
    parse(data, options, (error, records) => {
      if (error) {
        reject(error);
      } else {
        resolve(records);
      }
    });
  });
}

function transformCSV(records, course, password) {
  return records.map(record => {
    if (record['E-Mail-Adresse'] == undefined) { return null }

    const email = record['E-Mail-Adresse'].toLowerCase();
    return ({
      username: email,
      firstname: record['Vorname'],
      lastname: record['Nachname'],
      email: email,
      course1: course,
      password: password
    });
  })
}

function putCSV(data, target) {
  target.href = `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`;
  target.download = 'test.csv';
  target.innerText = 'Ergebnis';
}

async function buildCSV(records) {
  const options = {
    delimiter: ',',
    header: true
  }

  return new Promise((resolve, reject) => {
    stringify(records, options, (error, output) => {
      if (error) {
        reject(error);
      } else {
        resolve(output);
      }
    })
  });
}

export default { setup, handleCSV }
