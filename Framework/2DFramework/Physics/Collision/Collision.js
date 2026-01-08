class Collision{

    //Add collision detection and response methods here. it work in a way circle radius and diameter collision calculation makes system more efficent
    //Think how to control object's position  after collision with another object
    _radius = 0;
    _diameter = this._radius * 2; //diameter is alway twice the radius
    _mass = 0; //for physics calculations - making collision response more realistic with physics laws
    _object = {position:{x:0, y:0}, velocity:{x:0, y:0}}; //velocity vector for physics calculations
    //p = m * v  (momentum = mass * velocity)
    constructor(_radius=0, _diameter=_radius * 2 ,_mass=0, _object={position:{x:0, y:0}, velocity:{x:0, y:0}})
    {
        this._radius = _radius;
        this._diameter = _diameter;
        this._mass = _mass;
        this._object = _object;

    }

    //getters setters important!
    setRadius(radius)
    {
        this._radius = radius;
    }
    getRadius()
    {
        return this._radius;
    }

    setDiameter(diameter)
    {
        this._diameter = diameter;
    }
    getDiameter()
    {
        return this._diameter;
    }
    setMass(mass)
    {
        this._mass = mass;
    }
    getMass()
    {
        return this._mass;
    }
    setObject(object)
    {
        this._object = object;
    }
    getObject()
    {
        return this._object;
    }

    momentumReaction()
    {
        try
        {
            //Calculate momentum using p = m * v
            return {
                x: this.getMass() * this.getObject().velocity.x,
                y: this.getMass() * this.getObject().velocity.y
            };
        }
        catch (error)
        {
            console.error("Error calculating momentum:", error);
            return {x: 0, y: 0};
        }
    }

    collideWith(otherObject)
    {
        try
        {
            //Simple circle collision detection
            const dx = otherObject.position.x - this.getObject().position.x;
            const dy = otherObject.position.y - this.getObject().position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.getDiameter() / 2 + otherObject.radius)
            {
                //Collision detected
                //For more realistic collision response, you can implement physics calculations here
                return true;
            }
            return false;
        }
        catch (error)
        {
            console.error("Error during collision detection:", error);
            return false;
        }
    }
}