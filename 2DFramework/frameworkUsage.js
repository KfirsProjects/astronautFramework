




let canvas = document.getElementById('myCanvas');
let canvasContext = canvas.getContext('2d');


    let circle = new RenderShapes(
        [ {x: 100, y: 75}, {x: 50, y: 0} ], //vertex for circle (center and radius)
        "circle", //shape type
        "#df1515ff", //color
        canvasContext,
        {x:300, y:0} //position
        , {x:0, y:50} //velocity
    );
    let circle2 = new RenderShapes(
            [ {x: 100, y: 75}, {x: 50, y: 0} ], //vertex for circle (center and radius)
            "circle", //shape type
            "#df1515ff", //color
            canvasContext,
            {x:600, y:0} //position
            , {x:0, y:50} //velocity
        );
       
    let bush = new Sprite({
        context: canvasContext,
        _vertices: [ {x:0, y:0}, {x:50, y:50} ],
        _image: "../assets/bush.png",
        _position: {x: 200, y: 200},
    });

    
let physics = new Gravity({object:[{position:circle.getPosition(), velocity:circle.getVelocity(), gravityForce:{x:0, y:9.8}, mass:1, } , {position:circle2.getPosition(), velocity:circle2.getVelocity(), gravityForce:{x:0, y:9.8}, mass:5}]}); //apply gravity to circle with mass 5

const gameloop = new GameLoop(()=>{
//using classes of framework
    //Game loop in action-------
    physics.applayGravity();
    physics.componentSymbol(canvasContext);
    bush.render();       
},canvas, canvasContext).run(); 