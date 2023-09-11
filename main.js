const prime = require("@drhex/prime-x");
const lower = 1;
const upper = 50000000;
const primesInRange = prime.computePrime(lower, upper);
console.log("Prime numbers:", primesInRange);