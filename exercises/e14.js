
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  var wrongBalance = []
  for (var i = 0; i < array.length; i++) {  
    var withdrawal = array[i].withdrawals;
    var deposit = array[i].deposits; 
    var withdrawalSum = 0;
    var depositSum = 0;
    if (deposit && deposit.length > 0) { 
      for (var x = 0; x < deposit.length; x++) {  
        depositSum += deposit[x];
      }
    }
    if (withdrawal && withdrawal.length > 0) { 
      for (var x = 0; x < withdrawal.length; x++) {  
        withdrawalSum += withdrawal[x];
      }
    }
    var rightBalance = depositSum - withdrawalSum
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
