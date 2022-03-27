function randomSelector(Array) {
  const index = Math.floor(Math.random() * Array.length)
  return Array[index]
}


function generatePassword() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '0123456789'

  const selection = lowerCaseLetters + upperCaseLetters + number

  let randomIndex = ''
  
  for (let i = 1; i <= 5; i++) {
    randomIndex += randomSelector(selection)
  } 
  
  
  return randomIndex
}

module.exports = generatePassword