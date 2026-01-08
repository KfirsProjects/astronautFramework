class MathF {

    //Returns a random number between min (inclusive) and max (exclusive)
    randomRange(min, max) {
        try{
        return Math.random() * (max - min) + min;
        }
        catch(e)
        {
            console.error("Error in randomRange method: " + e.message);
        }
    }

    //Rounds value to nearest buttom 
    roundButtom(value, step) {
        try{
            return Math.floor(value / step) * step;
        }
        catch(e)
        {
            console.error("Error in roundButtom method: " + e.message);
        }
    }

    //Rounds value to nearest top
    roundTop(value, step) {
        try{
            return Math.ceil(value / step) * step;
        }
        catch(e)
        {
            console.error("Error in roundTop method: " + e.message);
        }
    }
}