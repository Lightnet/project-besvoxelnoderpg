var gun = Gun("http://127.0.0.1/gun");
//var gun = Gun();
var user = gun.user();

function clicklogin(){
  //console.log(document.getElementById("user").value);
  //console.log(document.getElementById("password").value);
  var iuser = document.getElementById("user").value;
  var ipassword = document.getElementById("password").value;
  user.auth(iuser,ipassword, function(ack){
    //console.log("login?");
    //console.log(ack);
    if(ack.err != null){
      console.log("login fail");
    }else{
      console.log("login pass");
    }
  });
}

function clicklogout(){
  //console.log(user);
  user.leave(function(data){
    console.log(data);
  });
  //console.log(user);
}

function clickcreate(){
  //console.log(document.getElementById("user").value);
  //console.log(document.getElementById("password").value);
  var iuser = document.getElementById("user").value;
  var ipassword = document.getElementById("password").value;
  console.log(iuser,ipassword);
  user.create(iuser,ipassword, function(ack){
    console.log("creating?");
    console.log(ack);
    if(ack.pub){
      //gun.get('users').put('alias/'+iuser);
      gun.get('users').get(iuser).put(gun.get('alias/'+iuser));
      console.log("user created!");
    }
  });
}

function chatmessage(){
  if(user.alias !=null){
    console.log(user);

    user.get('pub').val(function(data, key){
      console.log("key:"+ key);
      console.log("data:"+ data);
    });
  }else{
    console.log("no user!" + user);
    //console.log(user.get('alias').val());
  }
}

function setpubmessage(){
  user.get('pub').val(function(data, key){
    //console.log("key:"+ key);
    //console.log("data:"+ data);
    //console.log(data);
    gun.get("pub/" + data).put({hello:"world"});
  });
}

function getpubmessage(){
  user.get('pub').val(function(data, key){
    gun.get("pub/" + data).get('hello').val(function(val, key){
      console.log("READ:", val, key);
    });
  });
}

function aliaslist(){

  console.log("alias:");

  var alias = gun.get('alias');

  alias.val(function(data, key){
    console.log("data: ",data," key:",key);
  });

  //console.log(gun.get('alias'));



}


function userlist(){
  console.log("userlist");

  var users = gun.get('users');

  //users.get('test').put('alias');
  //users.get('test1').put('alias');

  //users.set({name:"test",id:"0"});
  //users.set({name:"test",id:"1"});
  //users.put({name:"test1"});
  users.map().val(function(data, key){
    console.log("data: ",data," key:",key);
  });



  //gun.get('users').val(function(user, id){
    //console.log("USER!",user,id);
  //});

  //gun.get('userslist').path('alias').set('test1');
  //gun.get('userslist').path('alias').set('test2');

  //gun.get('userslist').get('alias').val(function(user, id){
    //console.log("alias!",user,id);
  //});


  //gun.get('userslist').get('alias').map().val(function(user, id){
    //console.log("alias!",user,id);
  //});

  //gun.get('users').map().val(function(user, id){
    //console.log("alias!",user,id);
  //});

  //console.log(gun.get('users').val());

  //console.log(gun.get('users'));
  //console.log(gun.get('alias'));


  //gun.get('*').map().val(function(data, id){
    //ui.list.user(user);
    //console.log("val!",data,id);
  //});

  //user.get('users').on(function(data, key){
    //console.log("user:", data);
  //});

  //console.log(user);
  //console.log(gun);

  //gun.get('root').map().val(function(val,key){
    //console.log(val,key);
  //});

  //console.log(gun.toJSON());
  //gun.map().val(function(val,key){
    //console.log(val,key);
  //});

  //localStorage.clear()
  /*
  user.get('pub').val(function(data, key){
    gun.get("pub/" + data).get('hello').val(function(val, key){
      console.log("READ:", val, key);
    });
  });
  */

  //gun.map().on(function(data, key) {
    //console.log('data',data,key);
  //})
  //console.log("end users");
  //console.log(user);

  //console.log(gun);

  //gun.get('user').map().val(function(user, id){
    //ui.list.user(user);
    //console.log("USER!");
  //});
  /*
  gun.get('alias').map().val(function(data, id){
    //ui.list.user(user);
    console.log("val!",data,id);
  });
  */
  //gun.get('alias').val(function(data, id){
    //ui.list.user(user);
    //console.log("val!",data,id);
  //});

  //console.log(gun);

  //gun.get('_').map().val(function(data, id){
    //ui.list.user(user);
    //console.log("val!",data,id);
  //});

  //gun.get('alias').map().val(function(user, id){
    //ui.list.user(user);
    //console.log("alias!");
  //});
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