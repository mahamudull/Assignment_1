class Bankaccount{

constructor(accountnumber,ownername,balance=0 ) {

this.accountnumber=accountnumber;
this.ownername=ownername;
this.balance=balance;


}
 
deposit(amount){

if(amount>0){

this.balance +=amount;
console.log
( ` diposited    $${amount} into account $ { this.accountnumber} and amount this.ownername is ${this.ownername}. `  )
}
else{



    console.log("sorry,you can't deposit this type of amount.please try again. ");

}


}

withdraw(amount){

    if(amount>0 && amount<=this.balance){
this.balance-=amount;
console.log(  `$${amount}this.withdraw from account ${this.accountnumber}` )
}
else{
    console.log( " insufficient funds. " )
}

}



getbalance(){
console.log( "your current balance is $ " +this.balance )
}



displayaccountinfo(){
console.log("account number: " + this.accountnumber);
console.log("ownername :"+ this.ownername );
console.log("balance :$" + this.balance );


}

}


const person1 = new Bankaccount(1001,"john",700);
person1.deposit(5000)
person1.withdraw(3000)
person1.getbalance()
person1.displayaccountinfo()


console.log();
console.log();

const person2 = new Bankaccount(1002 ,"Deo", 1000);

person2.deposit(500)
person2.withdraw(2001)
person2.getbalance()
person2.displayaccountinfo()


