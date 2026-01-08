class Transform{
    //Configuration pattern in javascript is more comfortable way to use classes
    constructor({position={x:0, y:0}, rotation=0, scale={x:1, y:1}}={})
    {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
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
    //set rotation number
    setRotation(rotation)
    {
        this.rotation = rotation;
    }
    //return rotation number
    getRotation()
    {
        return this.rotation;
    }
    //set scale object {x:?, y:?}
    setScale(scale)
    {
        this.scale = scale;
    }
    //return scale object {x:?, y:?}
    getScale()
    {
        return this.scale;
    }

    translate(dx, dy)
    {
        //move position by dx and dy
        this.position.x += dx;
        this.position.y += dy;
        return this;
    }

    rotate(dTheta)
    {
        //rotate by dTheta ---> dTheta in radians ---> 180 degrees = π radians 
        this.rotation += dTheta;
        return this;
    }

    scaleBy(sx, sy)
    {
        //scale by sx and sy
        this.scale.x *= sx;
        this.scale.y *= sy;
        return this;
    }

}