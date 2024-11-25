
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalance = []
  for (let i = 0; i < array.length; i++) {  
    let withdrawal = array[i].withdrawals;
    let deposit = array[i].deposits; 
    let withdrawalSum = 0;
    let depositSum = 0;
    if (deposit && deposit.length > 0) { 
      for (let x = 0; x < deposit.length; x++) {  
        depositSum += deposit[x];
      }
    }
    if (withdrawal && withdrawal.length > 0) { 
      for (let x = 0; x < withdrawal.length; x++) {  
        withdrawalSum += withdrawal[x];
      }
    }
    let rightBalance = depositSum - withdrawalSum
    if (rightBalance !== array[i].balance){
    wrongBalance.push(array[i])
    }
  }
  return wrongBalance
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
