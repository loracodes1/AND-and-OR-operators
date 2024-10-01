     //AND OPERATOR
const temp = 25;
if (temp >0 && temp <=30){
    console.log('The weather is GOOD');
}
else {
    console.log('The weather is BAD');
}
//for it to be true, both conditions must pass
//the outout will be first condition because temp 25 is greater than 0 and less than 30
//if the const temp was either below 0 or above 30, the output would be 'The weather is BAD' 


     //OR OPERATOR
const degree =20;
if (degree ==0 || degree<=30){
    console.log('The degrees are FAVOURIBLE');
}
else{
    console.log('The tempersture is so HIGH');
}
//If the first expression is truthy, || returns the value of the first expression. If the first expression is falsey, || returns the value of the second expression.


0 && false;
console.log(0 && false) //0

0 && true;
console.log(0 && true) //0

true && NaN;
console.log(true && NaN) //NaN

true && !1;
console.log(true && !1) //false

!0 && "This is a string"; 
console.log(!0 && "This is a string") //This is a string

!0 && "";
console.log(!0 && "") //an empty space

!0 && !!"";
console.log(!0 && !!"") //false



// Practice with OR
0 || false;
console.log(0 || false) //false because both are falsey

true || false;
console.log(true || false)

true || 1;

!true || !false

!1 || !0