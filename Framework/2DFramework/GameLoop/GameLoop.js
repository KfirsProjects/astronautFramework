class GameLoop
{
    //Game loop is the most impoprtant part of any game engine or framework it provide the main cycle that keeps the game running
    //Game loop constructor
    constructor({callback, canvas ,canvasContext, isRunning=true}={})
    {
        this.callback = callback;
        this.canvas = canvas;
        this.canvasContext = canvasContext;
        this.isRunning = isRunning;
    }      

    //--Getters setters are part of my approch to encapsulation
    setCallback(callback)
    {
        this.callback = callback;
    }
    getCallback()
    {
        return this.callback();
    }

    setCanvasContext(canvasContext)
    {
        this.canvasContext = canvasContext;
    }
    getCanvasContext()
    {
        return this.canvasContext;
    }

    setCanvas(canvas)
    {
        this.canvas = canvas;
    }

    getCanvas()
    {
        return this.canvas;
    }

    setIsRunning(isRunning)
    {
        this.isRunning = isRunning;
    }

    getIsRunning()
    {
        return this.isRunning;
    }

    run()
    {
        try
        {
            if(this.getIsRunning())
            {
            //Use arrow function and requestAnimationFrame for smooth looping and high perfomance---------
            const myLoop = ()=>
            {
                this.getCanvasContext().clearRect(0, 0, this.getCanvas().width, this.getCanvas().height); //Clear canvas before each frame
                this.getCallback();
                requestAnimationFrame(myLoop);

            };
            myLoop();
            //------------------end of game loop implementation------------------------
            //---> keep running the game loop-----------------------
        }
        else{
            //stop the game loop
            this.stop();
        }
         }
        catch(e)
        {
            console.error("Error in Game Loop: " + e.message);
        }
    }

    stop()
    {
        //Stopping game loop can be implemented by canceling the requestAnimationFrame
        //This is a placeholder for future implementation
        this.isRunning = false;
        let runId = this.run;
        cancelAnimationFrame(runId);

    }

}