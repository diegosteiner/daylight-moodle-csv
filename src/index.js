import csvHandler from './csv_handler'

document.addEventListener('DOMContentLoaded', () => {
  const csvInput = document.querySelector('#csv-input')
  const csvOutput = document.querySelector('#csv-output')
  const courseInput = document.querySelector('#course-input')
  const passwordInput = document.querySelector('#password-input')
  const eventInput = document.querySelector('#event-input')

  csvHandler.setup(csvInput, csvOutput, courseInput, passwordInput)
  // eventInput.addEventListener('change', (ev) => {

  // })
})
