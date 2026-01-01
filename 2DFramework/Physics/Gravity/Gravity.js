class Gravity {
    //Gravity formula: F = m * g  ----- / 9.8
    constructor(object={position:{x:0, y:0}, velocity:{x:0, y:0}}, gravityForce={x:0, y:9.8}, mass=1)
    {
        this.object = object;
        this.gravityForce = gravityForce;
        this.mass = mass;
    }

    //love getters setters
    setObject(object){
        this.object = object;
    }

    getObject(){
        return this.object;
    }

    setGravityForce(gravityForce){
        this.gravityForce = gravityForce;
    }

    getGravityForce(){
        return this.gravityForce;
    }

    setMass(mass){
        this.mass = mass;
    }

    getMass(){
        return this.mass;
    }

    applayGravity(){
        try
        {

            //Validate data
            if(typeof this.getMass() !== 'number' || this.getMass() <= 0 || isNaN(this.getMass()) || !isFinite(this.getMass()))
            {
                throw new Error("Invalid mass value");
            }
            if(typeof this.getGravityForce() !== 'object' || this.getGravityForce() === null || isNaN(this.getGravityForce().x) || isNaN(this.getGravityForce().y) || !isFinite(this.getGravityForce().x) || !isFinite(this.getGravityForce().y))
            {
                throw new Error("Invalid gravity force value");
            }

            //Calculate the gravitational acceleration
            let accelerationToEarthCenter = {x: this.getGravityForce().x / this.getMass(), y: this.getGravityForce().y / this.getMass()};
            //Update the object's velocity and position
            this.object.velocity.x += accelerationToEarthCenter.x;
            this.object.velocity.y += accelerationToEarthCenter.y;
            this.object.position.x += this.object.velocity.x;
            this.object.position.y += this.object.velocity.y;
            
        }
        catch(e)
        {
            console.error("Error calculating gravity: " + e.message);
        }
    
    }
}