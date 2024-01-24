//async Dummy Eg
async function asAw(){
    var promise = new Promise(
        function(response){
            setTimeout(function(){
                response("Example for async/await");

                
            },1000)
        });
        console.log(await promise);  //without await output will be promise{pending}
}
asAw();
//kind of our own instagram
/*async function post()
{
    var promise = new Promise(
        function(postresponse){
            setTimeout(function(){
            postresponse("This is my first post");
            },1000)
        });
        console.log(await post); 
}
post()*/
async function like()
{
    return new promise(
        fun
    )
}