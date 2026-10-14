//Variables declaration and there types
//var ,let, const
//var variable can be re-declare and re-assign
//it has function scope
//we can re-use n number of times
// we can declare variable without initializing it
//declare var a and assign value 50
var a = 50
console.log("Value of a is : " + a)
// var = Keyword
//a = variable name
// = : Assign operator
//20 = value assign into variable
 a =60
 console.log("Value of a is : " + a)

 console.log("********************************************")
 //let variable properties
 //let variable can not be redeclare
 //user can reassign value
 // it has block scope
 let p = 40 
 console.log("Value of p is : " + p)
 p = 60 
  console.log("Value of p is : " + p)// reassigning value
   p =80
   console.log("Value of p is : " + p)

   if(true){

    var s = 80;
    console.log("Var s inside scope : " + s)

    
    let t = 800;
    console.log("let t inside scope : " +t )



   }

   
console.log("var s outside scope : " + s)
//console.log("let t ourside scope : " + t )


function first()

{
    var x =40;

    if(true)
        {
            var y = 50;
            
console.log("var s inside function : " + x)
 



    }

    if(true)
        
        {
       console.log("let y inside scope : " + y )       

}
}

first()

console.log("********************************************************")
//1.console variable can not be re-declared and re-assigned
//2.we need to initialize the constant
//3.it has block scope

const c = 100;
console.log("Value of c is : " + c)
c =500;
console.log("Value of c is : " + c)

console.log("********************************************************")

//rules to declare variables name

//1.Variable name should not start with number
//2.Variable name should not contain special characters except $ and _
//3.Variable name should not be a reserved keyword
//4.Variable name should not contain space
//5.Variable name should be meaningful
//7.Variable name should be in camelCase
//8.Variable name should not be a single character
//9.Varibale name is case Sensitive