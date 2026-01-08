class Vector2{

//Configuration pattern in javascript is more comfortable way to use classes
//Vector is created to handle 2D vectors like position, velocity, acceleration etc.
    constructor({position={x:0, y:0}, velocity={x:0, y:0}}={})
    {
        this.position = position;
        this.velocity = velocity;
    }
    //getters setters like I love
    //set position object {x:?, y:?}
    setPosition(position)
    {
        this.position = position;
    }
    //return position object {x:?, y:?}
    getPosition()
    {
        return this.position;
    }
    //set velocity object {x:?, y:?}
    setVelocity(velocity)
    {
        this.velocity = velocity;
    }
    //return velocity object {x:?, y:?}
    getVelocity()
    {
        return this.velocity;
    }

    //utility methods for vector manipulation
    zero()
    {
        this.position = {x:0, y:0};
        this.velocity = {x:0, y:0};
        return this;
    }
    //move methods
    up()
    {
        this.position.y -= 1;
        return this;
    }
    down()
    {
        this.position.y += 1;
        return this;
    }
    left()
    {
        this.position.x -= 1;
        return this;
    }
    right()
    {
        this.position.x += 1;
        return this;
    }

    //calculate new position based on current velocity
    calculateNewPosition()
    {
        try
        {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            return this;
        }
        catch(e)
        {
            console.error("Error in calculateNewPosition method: " + e.message);
        }
    }


    //Debug method to print current state of the vector
    debug()
    {
        try
        {
            console.log(`Position: x=${this.position.x}, y=${this.position.y} | Velocity: x=${this.velocity.x}, y=${this.velocity.y}`);
                return this;
        }
        catch(e)
        {
            console.error("Error in debug method: " + e.message);
        }
    }
}