// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 10000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 'white', 2.0 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight(255);

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 0.5 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	

	// Tallo
    
    var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.5 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.02, 0.0, 0.5 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.5 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.02, 0.5 ) );

	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.02, -0.3 ) );

	migeometria.vertices.push( new THREE.Vector3( 0.02, 0.0, -0.3 ) );

	migeometria.vertices.push( new THREE.Vector3( 0.02, 0.02, -0.3 ) );


	
	
	migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria.faces.push( new THREE.Face3( 2, 3, 0 ) );

	migeometria.faces.push( new THREE.Face3( 0, 3, 5 ) );
	migeometria.faces.push( new THREE.Face3( 5, 4, 0 ) );

	migeometria.faces.push( new THREE.Face3( 0, 1, 6 ) );
	migeometria.faces.push( new THREE.Face3( 6, 4, 0 ) );

    migeometria.faces.push( new THREE.Face3( 3, 2, 7 ) );
	migeometria.faces.push( new THREE.Face3( 7, 5, 3 ) );

	migeometria.faces.push( new THREE.Face3( 4, 6, 7 ) );
	migeometria.faces.push( new THREE.Face3( 7, 5, 4 ) );

	migeometria.faces.push( new THREE.Face3( 1, 2, 7 ) );
	migeometria.faces.push( new THREE.Face3( 7, 6, 1 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0x4B3621 } ); // cafe
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto

    //estrella
    var estrella = new THREE.Geometry();

    estrella.vertices.push( new THREE.Vector3( -0.02, 0.01, 0.5 ) );
    estrella.vertices.push( new THREE.Vector3( 0.04, 0.01, 0.5 ) );
    estrella.vertices.push( new THREE.Vector3( 0.02, 0.01, 0.7 ) );

    estrella.vertices.push( new THREE.Vector3( -0.14, 0.01, 0.6 ) );
    estrella.vertices.push( new THREE.Vector3( 0.03, 0.01, 0.55 ) );

    estrella.vertices.push( new THREE.Vector3( 0.18, 0.01, 0.6 ) );
    estrella.vertices.push( new THREE.Vector3( 0.02, 0.01, 0.55 ) );

    estrella.vertices.push( new THREE.Vector3( -0.11, 0.01, 0.40 ) );

    estrella.vertices.push( new THREE.Vector3( 0.15, 0.01, 0.40 ) );

	
	estrella.faces.push(new THREE.Face3( 0,1,2 ) );

	estrella.faces.push(new THREE.Face3( 0,3,4 ) );

	estrella.faces.push(new THREE.Face3( 1,5,6 ) );

	estrella.faces.push(new THREE.Face3( 1,6,7 ) );

	estrella.faces.push(new THREE.Face3( 0,4,8 ) );

	var materiale = new THREE.MeshBasicMaterial( { color: 0xFFFF00 } ); // Material de color rojo
    var objetoest = new THREE.Mesh (estrella, materiale); // Crea el objeto
	
    //capa1arbol

    var arb1 = new THREE.Geometry();

    arb1.vertices.push( new THREE.Vector3( 0, 0, 0.46 ) );
    arb1.vertices.push( new THREE.Vector3( 0.02, 0, 0.46 ) );
    arb1.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.46 ) );
    arb1.vertices.push( new THREE.Vector3( 0, 0.02, 0.46 ) );
    
    arb1.vertices.push( new THREE.Vector3( -0.1, 0.1, 0.36 ) );
    arb1.vertices.push( new THREE.Vector3( 0.12, 0.1, 0.36 ) );
    arb1.vertices.push( new THREE.Vector3( 0.12, -0.12, 0.36 ) );
    arb1.vertices.push( new THREE.Vector3( -0.1, -0.12, 0.36 ) );

    arb1.faces.push(new THREE.Face3( 0,4,5 ) );
    arb1.faces.push(new THREE.Face3( 1,4,5 ) );

    arb1.faces.push(new THREE.Face3( 1,5,6 ) );
    arb1.faces.push(new THREE.Face3( 3,5,6 ) );

    arb1.faces.push(new THREE.Face3( 3,6,7 ) );
    arb1.faces.push(new THREE.Face3( 7,6,2 ) );

    arb1.faces.push(new THREE.Face3( 3,4,7 ) );
    arb1.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb1 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb1 = new THREE.Mesh (arb1, materialarb1); // Crea el objeto

    //capa2carb

    var arb2 = new THREE.Geometry();

    arb2.vertices.push( new THREE.Vector3( 0, 0., 0.4 ) );
    arb2.vertices.push( new THREE.Vector3( 0.02, 0, 0.4 ) );
    arb2.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.4 ) );
    arb2.vertices.push( new THREE.Vector3( 0, 0.02, 0.4 ) );
    
    arb2.vertices.push( new THREE.Vector3( -0.13, 0.13, 0.3 ) );
    arb2.vertices.push( new THREE.Vector3( 0.15, 0.13, 0.3 ) );
    arb2.vertices.push( new THREE.Vector3( 0.15, -0.15, 0.3 ) );
    arb2.vertices.push( new THREE.Vector3( -0.13, -0.15, 0.3 ) );

    arb2.faces.push(new THREE.Face3( 0,4,5 ) );
    arb2.faces.push(new THREE.Face3( 1,4,5 ) );

    arb2.faces.push(new THREE.Face3( 1,5,6 ) );
    arb2.faces.push(new THREE.Face3( 3,5,6 ) );

    arb2.faces.push(new THREE.Face3( 3,6,7 ) );
    arb2.faces.push(new THREE.Face3( 7,6,2 ) );

    arb2.faces.push(new THREE.Face3( 3,4,7 ) );
    arb2.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb2 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb2 = new THREE.Mesh (arb2, materialarb2); // Crea el objeto

    //capa3arb

    var arb3 = new THREE.Geometry();

    arb3.vertices.push( new THREE.Vector3( 0, 0., 0.34 ) );
    arb3.vertices.push( new THREE.Vector3( 0.02, 0, 0.34 ) );
    arb3.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.34 ) );
    arb3.vertices.push( new THREE.Vector3( 0, 0.02, 0.34 ) );
    
    arb3.vertices.push( new THREE.Vector3( -0.16, 0.16, 0.24 ) );
    arb3.vertices.push( new THREE.Vector3( 0.18, 0.16, 0.24 ) );
    arb3.vertices.push( new THREE.Vector3( 0.18, -0.18, 0.24 ) );
    arb3.vertices.push( new THREE.Vector3( -0.16, -0.18, 0.24 ) );

    arb3.faces.push(new THREE.Face3( 0,4,5 ) );
    arb3.faces.push(new THREE.Face3( 1,4,5 ) );

    arb3.faces.push(new THREE.Face3( 1,5,6 ) );
    arb3.faces.push(new THREE.Face3( 3,5,6 ) );

    arb3.faces.push(new THREE.Face3( 3,6,7 ) );
    arb3.faces.push(new THREE.Face3( 7,6,2 ) );

    arb3.faces.push(new THREE.Face3( 3,4,7 ) );
    arb3.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb3 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb3 = new THREE.Mesh (arb3, materialarb3); // Crea el objeto

    //capa4arb

    var arb4 = new THREE.Geometry();

    arb4.vertices.push( new THREE.Vector3( 0, 0., 0.28 ) );
    arb4.vertices.push( new THREE.Vector3( 0.02, 0, 0.28 ) );
    arb4.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.28 ) );
    arb4.vertices.push( new THREE.Vector3( 0, 0.02, 0.28 ) );
    
    arb4.vertices.push( new THREE.Vector3( -0.19, 0.19, 0.18 ) );
    arb4.vertices.push( new THREE.Vector3( 0.21, 0.19, 0.18 ) );
    arb4.vertices.push( new THREE.Vector3( 0.21, -0.21, 0.18 ) );
    arb4.vertices.push( new THREE.Vector3( -0.19, -0.21, 0.18 ) );

    arb4.faces.push(new THREE.Face3( 0,4,5 ) );
    arb4.faces.push(new THREE.Face3( 1,4,5 ) );

    arb4.faces.push(new THREE.Face3( 1,5,6 ) );
    arb4.faces.push(new THREE.Face3( 3,5,6 ) );

    arb4.faces.push(new THREE.Face3( 3,6,7 ) );
    arb4.faces.push(new THREE.Face3( 7,6,2 ) );

    arb4.faces.push(new THREE.Face3( 3,4,7 ) );
    arb4.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb4 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb4 = new THREE.Mesh (arb4, materialarb4); // Crea el objeto

    //capa5arb

    var arb5 = new THREE.Geometry();

    arb5.vertices.push( new THREE.Vector3( 0, 0., 0.22 ) );
    arb5.vertices.push( new THREE.Vector3( 0.02, 0, 0.22 ) );
    arb5.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.22 ) );
    arb5.vertices.push( new THREE.Vector3( 0, 0.02, 0.22 ) );
    
    arb5.vertices.push( new THREE.Vector3( -0.22, 0.22, 0.12 ) );
    arb5.vertices.push( new THREE.Vector3( 0.24, 0.22, 0.12 ) );
    arb5.vertices.push( new THREE.Vector3( 0.24, -0.24, 0.12 ) );
    arb5.vertices.push( new THREE.Vector3( -0.22, -0.24, 0.12 ) );

    arb5.faces.push(new THREE.Face3( 0,4,5 ) );
    arb5.faces.push(new THREE.Face3( 1,4,5 ) );

    arb5.faces.push(new THREE.Face3( 1,5,6 ) );
    arb5.faces.push(new THREE.Face3( 3,5,6 ) );

    arb5.faces.push(new THREE.Face3( 3,6,7 ) );
    arb5.faces.push(new THREE.Face3( 7,6,2 ) );

    arb5.faces.push(new THREE.Face3( 3,4,7 ) );
    arb5.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb5 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb5 = new THREE.Mesh (arb5, materialarb5); // Crea el objeto

    //capa6arb

    var arb6 = new THREE.Geometry();

    arb6.vertices.push( new THREE.Vector3( 0, 0., 0.16 ) );
    arb6.vertices.push( new THREE.Vector3( 0.02, 0, 0.16 ) );
    arb6.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.16 ) );
    arb6.vertices.push( new THREE.Vector3( 0, 0.02, 0.16 ) );
    
    arb6.vertices.push( new THREE.Vector3( -0.25, 0.25, 0.06 ) );
    arb6.vertices.push( new THREE.Vector3( 0.27, 0.25, 0.06 ) );
    arb6.vertices.push( new THREE.Vector3( 0.27, -0.27, 0.06 ) );
    arb6.vertices.push( new THREE.Vector3( -0.25, -0.27, 0.06 ) );

    arb6.faces.push(new THREE.Face3( 0,4,5 ) );
    arb6.faces.push(new THREE.Face3( 1,4,5 ) );

    arb6.faces.push(new THREE.Face3( 1,5,6 ) );
    arb6.faces.push(new THREE.Face3( 3,5,6 ) );

    arb6.faces.push(new THREE.Face3( 3,6,7 ) );
    arb6.faces.push(new THREE.Face3( 7,6,2 ) );

    arb6.faces.push(new THREE.Face3( 3,4,7 ) );
    arb6.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb6 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb6 = new THREE.Mesh (arb6, materialarb6); // Crea el objeto


    //capa7arb

    var arb7 = new THREE.Geometry();

    arb7.vertices.push( new THREE.Vector3( 0, 0., 0.1 ) );
    arb7.vertices.push( new THREE.Vector3( 0.02, 0, 0.1 ) );
    arb7.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.1 ) );
    arb7.vertices.push( new THREE.Vector3( 0, 0.02, 0.1 ) );
    
    arb7.vertices.push( new THREE.Vector3( -0.28, 0.28, 0 ) );
    arb7.vertices.push( new THREE.Vector3( 0.3, 0.28, 0 ) );
    arb7.vertices.push( new THREE.Vector3( 0.3, -0.3, 0 ) );
    arb7.vertices.push( new THREE.Vector3( -0.28, -0.3, 0 ) );

    arb7.faces.push(new THREE.Face3( 0,4,5 ) );
    arb7.faces.push(new THREE.Face3( 1,4,5 ) );

    arb7.faces.push(new THREE.Face3( 1,5,6 ) );
    arb7.faces.push(new THREE.Face3( 3,5,6 ) );

    arb7.faces.push(new THREE.Face3( 3,6,7 ) );
    arb7.faces.push(new THREE.Face3( 7,6,2 ) );

    arb7.faces.push(new THREE.Face3( 3,4,7 ) );
    arb7.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb7 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb7 = new THREE.Mesh (arb7, materialarb7); // Crea el objeto


    //capa8arb

    var arb8 = new THREE.Geometry();

    arb8.vertices.push( new THREE.Vector3( 0, 0., 0.04 ) );
    arb8.vertices.push( new THREE.Vector3( 0.02, 0, 0.04 ) );
    arb8.vertices.push( new THREE.Vector3( 0.02, 0.02, 0.04 ) );
    arb8.vertices.push( new THREE.Vector3( 0, 0.02, 0.04 ) );
    
    arb8.vertices.push( new THREE.Vector3( -0.31, 0.31, -0.04 ) );
    arb8.vertices.push( new THREE.Vector3( 0.33, 0.31, -0.04 ) );
    arb8.vertices.push( new THREE.Vector3( 0.33, -0.33, -0.04 ) );
    arb8.vertices.push( new THREE.Vector3( -0.31, -0.33, -0.04 ) );

    arb8.faces.push(new THREE.Face3( 0,4,5 ) );
    arb8.faces.push(new THREE.Face3( 1,4,5 ) );

    arb8.faces.push(new THREE.Face3( 1,5,6 ) );
    arb8.faces.push(new THREE.Face3( 3,5,6 ) );

    arb8.faces.push(new THREE.Face3( 3,6,7 ) );
    arb8.faces.push(new THREE.Face3( 7,6,2 ) );

    arb8.faces.push(new THREE.Face3( 3,4,7 ) );
    arb8.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb8 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb8 = new THREE.Mesh (arb8, materialarb8); // Crea el objeto


    //capa9arb

    var arb9 = new THREE.Geometry();

    arb9.vertices.push( new THREE.Vector3( 0, 0., -0.01 ) );
    arb9.vertices.push( new THREE.Vector3( 0.02, 0, -0.01 ) );
    arb9.vertices.push( new THREE.Vector3( 0.02, 0.02, -0.01 ) );
    arb9.vertices.push( new THREE.Vector3( 0, 0.02, -0.01 ) );
    
    arb9.vertices.push( new THREE.Vector3( -0.34, 0.34, -0.11 ) );
    arb9.vertices.push( new THREE.Vector3( 0.36, 0.34, -0.11 ) );
    arb9.vertices.push( new THREE.Vector3( 0.36, -0.36, -0.11 ) );
    arb9.vertices.push( new THREE.Vector3( -0.34, -0.36, -0.11 ) );

    arb9.faces.push(new THREE.Face3( 0,4,5 ) );
    arb9.faces.push(new THREE.Face3( 1,4,5 ) );

    arb9.faces.push(new THREE.Face3( 1,5,6 ) );
    arb9.faces.push(new THREE.Face3( 3,5,6 ) );

    arb9.faces.push(new THREE.Face3( 3,6,7 ) );
    arb9.faces.push(new THREE.Face3( 7,6,2 ) );

    arb9.faces.push(new THREE.Face3( 3,4,7 ) );
    arb9.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb9 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb9 = new THREE.Mesh (arb9, materialarb9); // Crea el objeto

    //capa10arb

    var arb10 = new THREE.Geometry();

    arb10.vertices.push( new THREE.Vector3( 0, 0., -0.06 ) );
    arb10.vertices.push( new THREE.Vector3( 0.02, 0, -0.06 ) );
    arb10.vertices.push( new THREE.Vector3( 0.02, 0.02, -0.06 ) );
    arb10.vertices.push( new THREE.Vector3( 0, 0.02, -0.06 ) );
    
    arb10.vertices.push( new THREE.Vector3( -0.37, 0.37, -0.16 ) );
    arb10.vertices.push( new THREE.Vector3( 0.39, 0.37, -0.16 ) );
    arb10.vertices.push( new THREE.Vector3( 0.39, -0.39, -0.16 ) );
    arb10.vertices.push( new THREE.Vector3( -0.37, -0.39, -0.16 ) );

    arb10.faces.push(new THREE.Face3( 0,4,5 ) );
    arb10.faces.push(new THREE.Face3( 1,4,5 ) );

    arb10.faces.push(new THREE.Face3( 1,5,6 ) );
    arb10.faces.push(new THREE.Face3( 3,5,6 ) );

    arb10.faces.push(new THREE.Face3( 3,6,7 ) );
    arb10.faces.push(new THREE.Face3( 7,6,2 ) );

    arb10.faces.push(new THREE.Face3( 3,4,7 ) );
    arb10.faces.push(new THREE.Face3( 7,4,0 ) );

    var materialarb10 = new THREE.MeshBasicMaterial( { color: 0x008F39 } ); // Material de color rojo
    var objetoarb10 = new THREE.Mesh (arb10, materialarb10); // Crea el objeto
	

    //esfera

	var esf= new THREE.SphereGeometry(0.035,8,5);
    var materiales1 = new THREE.MeshBasicMaterial( { color: 0xEE1111 } );
    var materiales2 = new THREE.MeshBasicMaterial( { color: 0xFFF22C } );
    var materiales3 = new THREE.MeshBasicMaterial( { color: 0xFF2CFF } );
    var materiales4 = new THREE.MeshBasicMaterial( { color: 0x0028B0 } );

    //esferas1

    var esfera1a = new THREE.Mesh(esf,materiales1);
	esfera1a.position.x=-0.1;
	esfera1a.position.y=0.1;
	esfera1a.position.z=0.36;

    var esfera1b = new THREE.Mesh(esf,materiales2);
	esfera1b.position.x=0.12;
	esfera1b.position.y=0.1;
	esfera1b.position.z=0.36;

    var esfera1c = new THREE.Mesh(esf,materiales3);
	esfera1c.position.x=0.12;
	esfera1c.position.y=-0.12;
	esfera1c.position.z=0.36;

    var esfera1d = new THREE.Mesh(esf,materiales4);
	esfera1d.position.x=-0.1;
	esfera1d.position.y=-0.12;
	esfera1d.position.z=0.36;

	//esferas2

    var esfera2a = new THREE.Mesh(esf,materiales4);
	esfera2a.position.x=0.15;
	esfera2a.position.y=0;
	esfera2a.position.z=0.3;

    var esfera2b = new THREE.Mesh(esf,materiales1);
	esfera2b.position.x=0;
	esfera2b.position.y=0.15;
	esfera2b.position.z=0.3;

    var esfera2c = new THREE.Mesh(esf,materiales2);
	esfera2c.position.x=-0.13;
	esfera2c.position.y=0;
	esfera2c.position.z=0.3;

    var esfera2d = new THREE.Mesh(esf,materiales3);
	esfera2d.position.x=0;
	esfera2d.position.y=-0.13;
	esfera2d.position.z=0.3;

	//esferas3

    var esfera3a = new THREE.Mesh(esf,materiales4);
	esfera3a.position.x=-0.16;
	esfera3a.position.y=0.16;
	esfera3a.position.z=0.24;

    var esfera3b = new THREE.Mesh(esf,materiales1);
	esfera3b.position.x=0.18;
	esfera3b.position.y=0.16;
	esfera3b.position.z=0.24;

    var esfera3c = new THREE.Mesh(esf,materiales2);
	esfera3c.position.x=0.18;
	esfera3c.position.y=-0.18;
	esfera3c.position.z=0.24;

    var esfera3d = new THREE.Mesh(esf,materiales3);
	esfera3d.position.x=-0.16;
	esfera3d.position.y=-0.18;
	esfera3d.position.z=0.24;

    //esferas4

    var esfera4a = new THREE.Mesh(esf,materiales3);
    esfera4a.position.x=0.21;
    esfera4a.position.y=0;
    esfera4a.position.z=0.18;

    var esfera4b = new THREE.Mesh(esf,materiales4);
    esfera4b.position.x=0;
    esfera4b.position.y=0.21;
    esfera4b.position.z=0.18;

    var esfera4c = new THREE.Mesh(esf,materiales1);
    esfera4c.position.x=-0.19;
    esfera4c.position.y=0;
    esfera4c.position.z=0.18;

    var esfera4d = new THREE.Mesh(esf,materiales2);
    esfera4d.position.x=0;
    esfera4d.position.y=-0.19;
    esfera4d.position.z=0.18;

    //esferas5

    var esfera5a = new THREE.Mesh(esf,materiales3);
    esfera5a.position.x=-0.22;
    esfera5a.position.y=0.22;
    esfera5a.position.z=0.12;

    var esfera5b = new THREE.Mesh(esf,materiales4);
    esfera5b.position.x=0.24;
    esfera5b.position.y=0.22;
    esfera5b.position.z=0.12;

    var esfera5c = new THREE.Mesh(esf,materiales1);
    esfera5c.position.x=0.24;
    esfera5c.position.y=-0.24;
    esfera5c.position.z=0.12;

    var esfera5d = new THREE.Mesh(esf,materiales2);
    esfera5d.position.x=-0.22;
    esfera5d.position.y=-0.24;
    esfera5d.position.z=0.12;

    //esferas6

    var esfera6a = new THREE.Mesh(esf,materiales2);
    esfera6a.position.x=0.27;
    esfera6a.position.y=0;
    esfera6a.position.z=0.06;

    var esfera6b = new THREE.Mesh(esf,materiales3);
    esfera6b.position.x=0;
    esfera6b.position.y=0.27;
    esfera6b.position.z=0.06;

    var esfera6c = new THREE.Mesh(esf,materiales4);
    esfera6c.position.x=-0.25;
    esfera6c.position.y=0;
    esfera6c.position.z=0.06;

    var esfera6d = new THREE.Mesh(esf,materiales1);
    esfera6d.position.x=0;
    esfera6d.position.y=-0.24;
    esfera6d.position.z=0.06;

    //esferas7

    var esfera7a = new THREE.Mesh(esf,materiales2);
    esfera7a.position.x=-0.28;
    esfera7a.position.y=0.28;
    esfera7a.position.z=0;

    var esfera7b = new THREE.Mesh(esf,materiales3);
    esfera7b.position.x=0.3;
    esfera7b.position.y=0.28;
    esfera7b.position.z=0;

    var esfera7c = new THREE.Mesh(esf,materiales4);
    esfera7c.position.x=0.3;
    esfera7c.position.y=-0.3;
    esfera7c.position.z=0;

    var esfera7d = new THREE.Mesh(esf,materiales1);
    esfera7d.position.x=-0.28;
    esfera7d.position.y=-0.3;
    esfera7d.position.z=0;

    //esferas8

    var esfera8a = new THREE.Mesh(esf,materiales1);
    esfera8a.position.x=0.33;
    esfera8a.position.y=0;
    esfera8a.position.z=-0.06;

    var esfera8b = new THREE.Mesh(esf,materiales2);
    esfera8b.position.x=0;
    esfera8b.position.y=0.33;
    esfera8b.position.z=-0.06;

    var esfera8c = new THREE.Mesh(esf,materiales3);
    esfera8c.position.x=-0.31;
    esfera8c.position.y=0;
    esfera8c.position.z=-0.06;

    var esfera8d = new THREE.Mesh(esf,materiales4);
    esfera8d.position.x=0;
    esfera8d.position.y=-0.31;
    esfera8d.position.z=-0.06;

    //esferas9

    var esfera9a = new THREE.Mesh(esf,materiales1);
    esfera9a.position.x=-0.34;
    esfera9a.position.y=0.34;
    esfera9a.position.z=-0.12;

    var esfera9b = new THREE.Mesh(esf,materiales2);
    esfera9b.position.x=0.36;
    esfera9b.position.y=0.34;
    esfera9b.position.z=-0.12;

    var esfera9c = new THREE.Mesh(esf,materiales3);
    esfera9c.position.x=0.36;
    esfera9c.position.y=-0.36;
    esfera9c.position.z=-0.12;

    var esfera9d = new THREE.Mesh(esf,materiales4);
    esfera9d.position.x=-0.34;
    esfera9d.position.y=-0.36;
    esfera9d.position.z=-0.12;

    //esferas10

    var esfera10a = new THREE.Mesh(esf,materiales4);
    esfera10a.position.x=0.39;
    esfera10a.position.y=0;
    esfera10a.position.z=-0.18;

    var esfera10b = new THREE.Mesh(esf,materiales1);
    esfera10b.position.x=0;
    esfera10b.position.y=0.39;
    esfera10b.position.z=-0.18;

    var esfera10c = new THREE.Mesh(esf,materiales2);
    esfera10c.position.x=-0.37;
    esfera10c.position.y=0;
    esfera10c.position.z=-0.18;

    var esfera10d = new THREE.Mesh(esf,materiales3);
    esfera10d.position.x=0;
    esfera10d.position.y=-0.37;
    esfera10d.position.z=-0.18;

	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	scene.add( miobjeto );
	scene.add( objetoest );
	scene.add( objetoarb1 );
	scene.add( objetoarb2 );
	scene.add( objetoarb3 );
	scene.add( objetoarb4 );
	scene.add( objetoarb5 );
	scene.add( objetoarb6 );
	scene.add( objetoarb7 );
	scene.add( objetoarb8 );
	scene.add( objetoarb9 );
	scene.add( objetoarb10 );
	scene.add( esfera1a );
	scene.add( esfera1b );
	scene.add( esfera1c );
	scene.add( esfera1d );
	scene.add( esfera2a );
	scene.add( esfera2b );
	scene.add( esfera2c );
	scene.add( esfera2d );
	scene.add( esfera3a );
	scene.add( esfera3b );
	scene.add( esfera3c );
	scene.add( esfera3d );
    scene.add( esfera4a );
    scene.add( esfera4b );
    scene.add( esfera4c );
    scene.add( esfera4d );
    scene.add( esfera5a );
    scene.add( esfera5b );
    scene.add( esfera5c );
    scene.add( esfera5d );
    scene.add( esfera6a );
    scene.add( esfera6b );
    scene.add( esfera6c );
    scene.add( esfera6d );
    scene.add( esfera7a );
    scene.add( esfera7b );
    scene.add( esfera7c );
    scene.add( esfera7d );
    scene.add( esfera8a );
    scene.add( esfera8b );
    scene.add( esfera8c );
    scene.add( esfera8d );
    scene.add( esfera9a );
    scene.add( esfera9b );
    scene.add( esfera9c );
    scene.add( esfera9d );
    scene.add( esfera10a );
    scene.add( esfera10b );
    scene.add( esfera10c );
    scene.add( esfera10d );
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
