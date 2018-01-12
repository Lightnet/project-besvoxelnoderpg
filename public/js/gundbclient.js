var gun = Gun();

gun.get('mark').put({
    name: "Mark",
    email: "mark@gunDB.io",
  });
  
gun.get('mark').on(function(data, key){
    console.log("update:", data);
  });