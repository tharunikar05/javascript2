//Function
//Example => Function without argument and without return type
function fu()
{
    console.log("Function sample example")
}
fu()
//Function
//Example => Function with argument and  without return type
function fun(a,b) 
{
    console.log("Function with argument and  without return type")
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number "+i+" is even")
        }
        else{

        }console.log("The number "+i+" is odd")
    }
}
fun(5,10)
//example =>Function without Argument and with return type
function func()
{
    console.log("Function without argument and with return type")
    a=10
    b=4
   if(a>b)
    {
       return a;
    }
    else{
        return b;
    }
}
console.log(func())
//example      function with argument with return type
function func3(a,b)
{
    console.log("Function with argument and with return type")
   if(a>b)
    {
       return a;
    }
    else{
        return b;
    }
}
console.log(func(20,30))