// strings including the available lowercase letters
var lowerCasedArray =
	'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split('')

// strings including the available uppercase letters
var upperCasedArray =
	'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,R,X,Y,Z'.split('')

// string including the available numbers
var numbersArray = '0,1,2,3,4,5,6,7,8,9'.split('')

// string including the available special characters
var specialCharacters = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.',
]

// checks in the passed in argument is a valid number or not
const isNumber = (value) => {
	if (Number.isNaN(value)) {
		alert('Password has to be at least 8 characters. Try again.')
		return null
	}
}

// checks if chosen password length is more than the max amount, 128.
const moreThan8 = (value) => {
	if (value > 128) {
		alert('Choose a number less than than 128..')
		return null
	}
}

// checks if chosen password length is less than the minimum amount, 8.
const lessThan8 = (value) => {
	if (value < 8) {
		alert('Choose a number greater than 7..')
		return null
	}
}

// check if user wants lowercase chars
const lowerCaseSelection = () => {
	confirm('Do you want lowercase characters?')
}

// check if user wants uppercase chars
const upperCaseSelection = () => {
	confirm('Do you want uppercase characters?')
}

const specialCharsSelection = () => {
	confirm('Do you want special characters?')
}

const numericChars = () => {
	confirm('Do you want special characters?')
}

const promptQuestions = () => {
	// get user input an transform into a number
	var inputLength = parseInt(prompt('Enter the length of the password:'))
}
