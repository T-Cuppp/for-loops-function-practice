
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let maxBalance = 0;
  let maxAccount = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > maxBalance){
      maxBalance = array[i].balance;
      maxAccount = [];
      maxAccount.push(array[i])
    }
    else if (array[i].balance === maxBalance){
      maxAccount.push(array[i])
    }
  }
  return maxAccount;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
