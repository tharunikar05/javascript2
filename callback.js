//Callback
/*
function ramuSomu(welcomeMessage,callback){
    setTimeout(function(){
        console.log(welcomeMessage)
        callback();
    },2000)
}
function miniAni(){
    console.log("Odi Poiru vanthudatha da thambi!!!!")
}
ramuSomu("Hello Ramu and Somu\nWelcome to Kongu Engineering College",miniAni)*/
//form submisssion example
function submitForm(buttonClick,db)
{
    setTimeout(function(){  //settimeout is a function, it includes function()-->it is a type of callback.
        console.log(buttonClick) //submit form functionality execute.
        db();
    },2000)
}
function database()
{
    console.log("Form Submitted successfully")
}
submitForm("form submit button clicked",database)//pass the database function as a parameter.

