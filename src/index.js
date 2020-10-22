module.exports = function check(str, bracketsConfig) {
	let arr = [];

	function checkPairs(symb, symbInArr) {
		if (symbInArr == null) {
			return false;
		} else if (symb === ']' && symbInArr === '[') {
			return true;
		} else if (symb === ')' && symbInArr === '(') {
			return true;
		} else if (symb === '}' && symbInArr === '{') {
			return true;
		}
	}

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '[' || str[i] === '(' || str[i] === '{') {
			arr.push(str[i]);
		} else if (str[i] === ']' || str[i] === ')' || str[i] === '}') {
			
			if (arr.length === 0) {
				return false;
			} else if (checkPairs(str[i], arr[arr.length-1])) {
				arr.pop();
			}
		}
	}
	if (arr.length === 0) {
		return true;
	} else {
		return false;
	}
}