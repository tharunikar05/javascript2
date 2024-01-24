
//promise-- giving assurence  ---1)keeping the promise successfull 2)else failure
//example form -- if submitted and database is stored or not.
//another -- form validation check all details or crt then only submit.
function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });
    
   // example 2
   /*instagram -- network connection lost means it shows could not refresh */
   //example 3  -- googlr map
function isvalid()


function location(response,){}


   location().then().catch()