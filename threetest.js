

var self = self || {}; // File:src/Three.js

var canvasWidth = 1024;
var canvasHeight = 1024;

var window = {
    innerWidth: canvasWidth,
    innerHeight: canvasHeight
};

var document = {
    createElement: function(name) {
        if (name == "canvas") {
            return new Canvas(canvasWidth, canvasHeight);
        }
    },
    createElementNS: function(name) {
        if (name == "canvas") {
            return new Canvas(canvasWidth, canvasHeight);
        }
    }
};

global.document = document;

var THREE = require('three');

var scene = new THREE.Scene();
//scene.background = new THREE.Color( 0xff0000 );//red
var camera = new THREE.PerspectiveCamera( 75, 800/600, 0.1, 1000 );

var renderer = new THREE.CanvasRenderer();

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
    //requestAnimationFrame( animate );

    //cube.rotation.x += 0.1;
    //cube.rotation.y += 0.1;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);

    console.log("render!");
};

animate();