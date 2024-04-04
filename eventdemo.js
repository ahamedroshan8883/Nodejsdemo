const {EventEmitter} = require('stream');

const Event =  new EventEmitter();
let accountHolder = {
    name:"Roshan",
    accNo:"1038247293",
    balance:0
};

Event.on('Deposite',(ammount)=>{
    accountHolder.balance += ammount;
    console.log('Ammount Credited');
})
Event.on('Balance',()=>{
    console.log('Balance : '+accountHolder.balance);
})
Event.on('Withdrawl',(ammount)=>{
    if(accountHolder.balance < ammount){
        console.log('Insufficent Balance...');
    }else{
        accountHolder.balance -= ammount;
        console.log('Ammount Debited');
    }
})
let ammountdep = 0;
Event.emit('Deposite',ammountdep);
Event.emit('Balance');

let wdammount = 1000;
Event.emit('Withdrawl',wdammount);
Event.emit('Balance');

Event.on('InsufficentBalance',()=>{
    console.log('Insufficent Balance...');
})
