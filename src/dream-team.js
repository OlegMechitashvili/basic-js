const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
	let newName = [];
if(Array.isArray(arr)){
	  for (let i = 0; i < arr.length; i++) {
		  if (typeof arr[i] === 'string') {
			  for (let j = 0; j < arr[i].length; j++) {
				  if(arr[i][j] !== ' ') {
					  newName.push((arr[i][j]).toUpperCase());
					  break;
				  }
			  }
		  }
	  }
	  return newName.sort().join('');
} else {
  return false;
}
//   throw new CustomError('Not implemented');
// remove line with error and write your code here
};