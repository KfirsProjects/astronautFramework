




let canvas = document.getElementById('myCanvas');
let canvasContext = canvas.getContext('2d');


    let circle = $callSystem.component.render.shapes(
        [ {x: 100, y: 75}, {x: 50, y: 0} ], //vertex for circle (center and radius)
        "circle", //shape type
        "#df1515ff", //color
        canvasContext,
        {x:300, y:0} //position
        , {x:0, y:50} //velocity
    );
    let circle2 = $callSystem.component.render.shapes(
            [ {x: 100, y: 75}, {x: 50, y: 0} ], //vertex for circle (center and radius)
            "circle", //shape type
            "#df1515ff", //color
            canvasContext,
            {x:600, y:0} //position
            , {x:0, y:50} //velocity
        );       
    let bush = $callSystem.component.render.sprite({
        context: canvasContext,
        width:100,
        height:100,
        image: "../../Assets/bush.png",
        position: {x: 0, y: 0},
    });

   let physics = $callSystem.component.physics.gravity({object:[{position:circle.getPosition(), velocity:circle.getVelocity(), gravityForce:{x:0, y:9.8}, mass:1, } , {position:circle2.getPosition(), velocity:circle2.getVelocity(), gravityForce:{x:0, y:9.8}, mass:5}]}); //apply gravity to circle with mass 5
   // let physics = new Gravity({object:[{position:circle.getPosition(), velocity:circle.getVelocity(), gravityForce:{x:0, y:9.8}, mass:1, } , {position:circle2.getPosition(), velocity:circle2.getVelocity(), gravityForce:{x:0, y:9.8}, mass:5}]}); //apply gravity to circle with mass 5
    bush.render();

    // $callSystem.component.loop.gameLoop({callback:()=>{
    // //using classes of framework
    //     //Game loop in action-------
    //     //physics.applayGravity();
    //     // bush.calculateVertices();

    //     // circle.render();
    //     // circle2.render();   

    // },canvas:canvas, canvasContext:canvasContext, isRunning:true}).run(); 


