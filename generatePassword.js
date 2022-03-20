function randomSelector(Array) {
  const index = Math.floor(Math.random() * Array.length)
  return Array[index]
}


function generatePassword() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '0123456789'

  const selection = lowerCaseLetters + upperCaseLetters + number

  let shortenUrl = ''
  
  for (let i = 1; i <= 5; i++) {
    shortenUrl += randomSelector(selection)
  } 
  console.log(shortenUrl)
  return shortenUrl
}

generatePassword()