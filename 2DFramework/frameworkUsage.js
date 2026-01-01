




let canvas = document.getElementById('myCanvas');
let canvasContext = canvas.getContext('2d');
 let rect = new RenderShapes(
        [ {x: 50, y: 50}, {x: 150, y: 100} ], //vertex for rectangle
        "rectangle", //shape type
        "#FF5733", //color
        canvasContext //assuming canvasContext is defined elsewhere
        , {x:0, y:0} //position
        , {x:0, y:50} //velocity
    );

    let circle = new RenderShapes(
        [ {x: 100, y: 75}, {x: 50, y: 0} ], //vertex for circle (center and radius)
        "circle", //shape type
        "#33FF57", //color
        canvasContext,
        {x:300, y:0} //position
        , {x:0, y:50} //velocity
    );

    let polygon = new RenderShapes(
        [ {x: 400, y: 50}, {x: 450, y: 100}, {x: 350, y: 100} ], //vertex for polygon
        "polygon", //shape type
        "#3357FF", //color
        canvasContext,
        {x:300, y:0} //position
        , {x:0, y:50} //velocity
    );
let physics = new Gravity({position:rect.getPosition(), velocity:rect.getVelocity()}, {x:0, y:4.8}, 5); //apply gravity to rectangle with mass 5

const gameloop = new GameLoop(()=>{
//using classes of framework
//Game loop in action-------

   
    
    rect.render(); //Render the rectangle
    circle.render(); //Render the circle
    polygon.render(); //Render the polygon
    physics.applayGravity(); //Apply gravity to the rectangle
    
},canvas, canvasContext).run(); 