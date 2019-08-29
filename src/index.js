import csvHandler from './csv_handler'

document.addEventListener('DOMContentLoaded', () => {
  const csvInput = document.querySelector('#csv-input')
  const csvOutput = document.querySelector('#csv-output')
  const courseInput = document.querySelector('#course-input')
  const passwordInput = document.querySelector('#password-input')
  const eventInput = document.querySelector('#event-input')
  const mailInput = document.querySelector('#mail-input')

  csvHandler.setup(csvInput, csvOutput, courseInput, passwordInput)
  courseInput.addEventListener('change', (ev) => {
    const courseName = courseInput.value
    const password = passwordInput.value
    const text = `
Liebe

Dein Moodle-Kurs für das Modul ${courseName} steht dir ab sofort unter [LINK] zur Verfügung. Das Standardpasswort
für die Teilnehmenden lautet ${password}

Freundliche Grüsse
          `
    mailInput.value = text

  })
})
