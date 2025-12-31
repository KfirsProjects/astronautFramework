class GameLoop
{
    constructor(callback, canvasContext)
    {
        this.callback = callback;
        this.canvasContext = canvasContext;
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
    run()
    {
        try
        {
            //Use arrow function and requestAnimationFrame for smooth looping and high perfomance---------
            const myLoop = ()=>
            {
                this.getCanvasContext().clearRect(0, 0, this.getCanvasContext().canvas.width, this.getCanvasContext().canvas.height);
                this.getCallback();
                requestAnimationFrame(myLoop);
            };
            myLoop();
         }
        catch(e)
        {
            console.error("Error in Game Loop: " + e.message);
        }
    }
}