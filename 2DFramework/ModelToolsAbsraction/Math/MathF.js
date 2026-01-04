class MathF {

    //Returns a random number between min (inclusive) and max (exclusive)
    randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    //Rounds value to nearest buttom 
    roundButtom(value, step) {
        return Math.floor(value / step) * step;
    }

    //Rounds value to nearest top
    roundTop(value, step) {
        return Math.ceil(value / step) * step;
    }

    



}