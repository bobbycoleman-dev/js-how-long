Number.prototype.isPrime = function () {
	if (this > 2 && this % 2 == 0) {
		return false;
	}
	for (let i = 3; i < Math.sqrt(this) + 1; i += 2) {
		if (this % i === 0) {
			return false;
		}
	}
	return true;
};

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
//! 10,000th prime took 0.141 seconds
// while (primeCount < 1e4) {
// 	if (num.isPrime()) {
// 		primeCount++;
// 	}
// 	num++;
// }
//! 100,000th prime took 2.786 seconds
// while (primeCount < 1e5) {
// 	if (num.isPrime()) {
// 		primeCount++;
// 	}
// 	num++;
// }
//! 1,000,000 prime took 90.474 seconds
// while (primeCount < 1e6) {
// 	if (num.isPrime()) {
// 		primeCount++;
// 	}
// 	num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// recursive
// n=20 took 0.046 seconds
// n=1000 took too long
function rFib(n) {
	if (n < 2) {
		return n;
	}
	return rFib(n - 1) + rFib(n - 2);
}
// console.log(rFib(1000));
// iterative
// n=20 took 0.046 seconds
// n=1000 took 0.044 seconds
function iFib(n) {
	const vals = [0, 1];
	while (vals.length - 1 < n) {
		let len = vals.length;
		vals.push(vals[len - 1] + vals[len - 2]);
	}
	return vals[n];
}
// console.log(iFib(1000));

const story =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
const reversed2 = (str) => {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
};
// console.log(reversed1); // took 0.045 seconds
console.log(reversed2(story)); // took 0.044 seconds
