let wBtn = document.getElementById('Withdraw Money');
let dBtn = document.getElementById('Deposit Money');
let bBtn = document.getElementById('Balance Inquiry');

let balance = 0;

wBtn.addEventListener('click', function() {
    let withdrawString = prompt('Enter amount');
    let withdraw = parseInt(withdrawString);
    if (withdraw < balance) {
        balance = balance - withdraw;

    } else {
        alert('Insufficient Balance');
    }
});

dBtn.addEventListener('click', function() {
    alert('Deposit no more than 10000$')
    let amount = prompt('Enter amount');
    let number = parseInt(amount);
    if (number <= 10000) {
        balance = number + balance;
    } else {
        alert('Deposite failed:amount over $1000');
    };
});

bBtn.addEventListener('click', function() {
    if (balance < 1) {
        alert('Balance lower than 100$');
    };
    alert(balance);
});