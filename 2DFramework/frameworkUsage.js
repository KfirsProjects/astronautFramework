





let canvasContext = document.getElementById('myCanvas').getContext('2d');
//Game loop in action-------
const gameloop = new GameLoop(()=>{
//using classes of framework
    const physics = new Gravity();
    let rect = new RenderShapes(
        [ {x: 50, y: 50}, {x: 150, y: 100} ], //vertex for rectangle
        "rectangle", //shape type
        "#FF5733", //color
        canvasContext //assuming canvasContext is defined elsewhere
        , {x:0, y:0} //position
    );

    let circle = new RenderShapes(
        [ {x: 100, y: 75}, {x: 50, y: 0} ], //vertex for circle (center and radius)
        "circle", //shape type
        "#33FF57", //color
        canvasContext,
        {x:300, y:0} //position
    );

    let polygon = new RenderShapes(
        [ {x: 400, y: 50}, {x: 450, y: 100}, {x: 350, y: 100} ], //vertex for polygon
        "polygon", //shape type
        "#3357FF", //color
        canvasContext,
        {x:300, y:0} //position
    );

    rect.render(); //Render the rectangle
    circle.render(); //Render the circle
    polygon.render(); //Render the polygon
}, canvasContext).run(); 