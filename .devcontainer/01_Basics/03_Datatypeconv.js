let score="33abc"
//************************** */
//https://tc39.es/ecma262/ *
//mdn                       *
//************************** */




let valueInNumber=Number (score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)  //NaN



//"33"==> 33
//"33abc"==> NaN
//true==>1
//fals==>0

let isLoggedin="pp"

let booleanISloggedIN=Boolean(isLoggedin)
//console.log(booleanISloggedIN)



//1==>true
//0==>false
//""==>false
//"preeti"==>true



let someno=33

let stringno=String(someno)
//console.log(stringno)
//console.log(typeof stringno)


//******************* operations********************

let value=3
let negvalue=-value
//console.log(negvalue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2) //power
// console.log(2%2)

let s1="hello"
let s2="preeti"
let s3=s1 + s2
//console.log(s3)

// console.log("1"+ 2)
// console.log(1+ "2")
// console.log("1"+ 2 +2)
// console.log(1+2+"2")

// console.log(+true)
// console.log(+"")

let n1,n2,n3

n1=n2=n3=2+2

let gamecounter=100
gamecounter++;
//console.log(gamecounter)



// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)
console.log("a2">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)


//THE RESON IS THAT AN EQUALITY CHECK == AND COMAPRIOSN < > >= <= 
//WORK DIFFERNTLY COMPARISON CONVERT NULL TO A NUMBER TREAT  IT AS 0
//THATS WHY (3) NULL>=0 IS TRUW AND (1)NULL>0 IS FALSE


console.log(undefined==0)
console.log(undefined<=0)
console.log(undefined>=0)



//====

console.log("2"===2)