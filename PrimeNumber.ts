function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeNumbers(): void {
  for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
      console.log(`${i} is prime.`);
    }
  }
}

printPrimeNumbers();
