var createCounter = function (n) {
	return function () {
		const count = n++;
		console.log(count);
		return count;
	};
};
const count = createCounter(10);
setInterval(() => {
	count();
}, 1000);
/* 
  依次输出:
  10
  11
  12
  13
  ...
*/
