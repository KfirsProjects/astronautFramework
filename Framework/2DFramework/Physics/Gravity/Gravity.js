class Gravity {
    //Gravity formula: F = m * g  ----- / g =  9.8 in earth surface Newton's first law of motion
    //Adding Newton's second law of motion: F = m * a  ----- / a = F / m ---> friction and air resistance adding now --> it called kenetic friction
    constructor({object=[{position:{x:0, y:0}, velocity:{x:0, y:0}, gravityForce:{x:0, y:9.8}, mass:[], friction:{x:0, y:0},isComponentSymbolOn:false}]}={})
    {
        this.object = object;
        this.gravityForce = object.gravityForce;
        this.mass = object.mass;
        this.friction = object.friction;
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
            //loop through all objects
            this.object.forEach(object => {
            //Calculate the gravitational acceleration
            let accelerationToEarthCenter = {x: object.gravityForce.x * object.mass, y: object.gravityForce.y * object.mass};
            //Update the object's velocity and position
            object.velocity.x += accelerationToEarthCenter.x;
            object.velocity.y += accelerationToEarthCenter.y;
            //---> optional if acceleration should affect position directly
            // this.object.position.x += this.object.velocity.x;
            // this.object.position.y += this.object.velocity.y;
            });
        }
        catch(e)
        {
            console.error("Error calculating gravity: " + e.message);
        }
    
    }

    componentSymbol(context)
    {
        try
        {
            //Check if component symbol is on for each object
            this.object.forEach(object => {
                if(object.isComponentSymbolOn)
                {
                    //Apply component symbol logic here
                    //Implementing component symbol to visualize gravity
                    context.strokeStyle = "rgba(0, 0, 255, 0.5)"; // Blue color for gravity representation
                    context.beginPath();
                    context.arc(object.position.x, object.position.y, 5, 0, Math.PI * 2);
                    context.stroke();
                }
            });
        }
        catch(e)
        {
            console.error("Error in component symbol method: " + e.message);
        }
    }


}