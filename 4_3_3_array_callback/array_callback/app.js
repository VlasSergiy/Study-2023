const arr = [1,2,3,4,5];
const coef = 1.5;
const result = [];

arr.forEach(function(item){
	result.push(item * coef);
});
console.log(arr);
console.log(result);