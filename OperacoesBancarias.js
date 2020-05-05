// Program for Transactions at user account

const user = {
    name: 'Mariana',
    transactions: [],
    balance:0
}


 function createTransaction(type, value){

    let transaction = {type:`${type}`,value:value}

    if(transaction.type == 'credit')
    {
        user.balance = value + user.balance
    }else{
        user.balance = user.balance - value
    }

    return user.transactions.push(transaction)
}

function showBalanceMessage()
{
    if(user.balance > 0)
    {
        console.log(`O saldo atual da sua conta é : ${user.balance} reais e você não está negativo`)
    }else{
        console.log(`O saldo atual da sua conta é : ${user.balance} reais e você está negativo`)
    }
}

createTransaction('credit', 100)
createTransaction('credit', 20)
createTransaction('debit', 30)
createTransaction('debit', 50)

showBalanceMessage();


function getHigherTransactionByType(type)
{  
    
    let higherTransactionValue = 0
    let higherTransaction

    for(let transaction of user.transactions)
    {
        if(transaction.type == type && transaction.value > higherTransactionValue)
        {
            higherTransactionValue = transaction.value
            higherTransaction = transaction
        }
    }
    console.log(higherTransaction)

}

getHigherTransactionByType('debit')
getHigherTransactionByType('credit')


function getAverageTransactionValue (UserTransactions) {
    
    let sum = 0
    
    for (let transaction of UserTransactions) {
        sum = sum + transaction.value
    }

    let average = sum / UserTransactions.length
    console.log (average)

    /* Outra forma de fazer a estrutura de repetição:
    for (let i = 0; i < UserTransactions.length; i++) {
        sum = sum + UserTransactions[i].value
    }
    
    let average = sum / UserTransactions.length
    console.log (average)*/

}

getAverageTransactionValue(user.transactions)


function getTransactionsCount (UserTransactions) {
    
    let TransactionsQuantity = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of UserTransactions) {
        
        if (transaction.type == 'credit') {
            TransactionsQuantity.credit = TransactionsQuantity.credit + 1
        } 
        
        else {
            TransactionsQuantity.debit = TransactionsQuantity.debit + 1
        }
    }

    console.log(TransactionsQuantity)

}

getTransactionsCount(user.transactions)


