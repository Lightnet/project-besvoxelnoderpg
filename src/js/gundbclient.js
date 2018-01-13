var gun = Gun("http://127.0.0.1/gun");
var user = gun.user();


function clicklogin(){
  //console.log(document.getElementById("user").value);
  //console.log(document.getElementById("password").value);
  var iuser = document.getElementById("password").value;
  var ipassword = document.getElementById("user").value;

  user.auth(iuser,ipassword, function(ack){
    console.log("login?");
    console.log(ack);
    if(ack.err != null){
      console.log("login fail");
    }else{
      console.log("login pass");
    }
  });
}

function clickcreate(){
  //console.log(document.getElementById("user").value);
  //console.log(document.getElementById("password").value);
  var iuser = document.getElementById("password").value;
  var ipassword = document.getElementById("user").value;

  user.create(iuser,ipassword, function(ack){
    console.log("creating?");
    console.log(ack);
  });
}

function chatmessage(){
  console.log(user);

  user.get('pub').val(function(data, key){
    console.log("key:"+ key);
    console.log("data:"+ data);
  });


}


//user.auth('alice', 'unsafepassword', function(ack){
  //console.log("login?");
  //console.log(ack);
//});

// Browser Native Web Crypto API is used to PBKDF2 extend your password.
//user.create('alice', 'unsafepassword', function(ack){
  // done creating user!
//});

// Browser Native Web Crypto API is used to PBKDF2 extend your password.
//user.auth('alice', 'unsafepassword', function(ack){
  // logged in!
  //console.log("login?");
  //console.log(ack);
  //var alice = {name: "Alice"};
  //alice.boss = {name: "Fluffy", species: "Kitty", slave: alice};
  //user.get('profile').put(alice);

  //user.get('profile').get('boss').get('slave').get('name').val(function(data){
    //console.log("The boss's slave's name is:", data); // Alice
  //});
//});


//gun.get('mark').put({
    //name: "Mark",
    //email: "mark@gunDB.io",
//});
  
//gun.get('mark').on(function(data, key){
    //console.log("update:", data);
//});


//gun.get('test').put({
  //name: "test",
  //email: "test@gunDB.io",
//});

//gun.get('test').on(function(data, key){
  //console.log("update:", data);
//});

//gun.get('beta').put({
  //name: "beta",
  //email: "test@gunDB.io",
//});

//gun.get('beta').on(function(data, key){
//  console.log("update:", data);
//});