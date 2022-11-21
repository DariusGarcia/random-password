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
