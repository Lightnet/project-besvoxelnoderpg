var gun = Gun("http://127.0.0.1/gun");
var user = gun.user();


// Browser Native Web Crypto API is used to PBKDF2 extend your password.
//user.create('alice', 'unsafepassword', function(ack){
  // done creating user!
//});

// Browser Native Web Crypto API is used to PBKDF2 extend your password.
user.auth('alice', 'unsafepassword', function(ack){
  // logged in!
  console.log("login?");
  //console.log(ack);
  //var alice = {name: "Alice"};
  //alice.boss = {name: "Fluffy", species: "Kitty", slave: alice};
  //user.get('profile').put(alice);

  //user.get('profile').get('boss').get('slave').get('name').val(function(data){
    //console.log("The boss's slave's name is:", data); // Alice
  //});
});









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