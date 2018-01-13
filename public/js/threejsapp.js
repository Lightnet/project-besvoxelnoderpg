var scene = new THREE.Scene();
//scene.background = new THREE.Color( 0xff0000 );//red
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({ alpha: true });


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    //cube.rotation.x += 0.1;
    //cube.rotation.y += 0.1;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

//animate();

window.addEventListener("load", function(){
    console.log("LOADED!");
    var divapp = document.getElementById("appcontent");
    //renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( divapp.offsetWidth, divapp.offsetHeight);
    divapp.appendChild( renderer.domElement );
    divapp =null;
    animate();
});