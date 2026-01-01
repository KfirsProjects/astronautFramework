class Sprite
{
    _context = null;
    _vertices=[{}];
    _image=null;
    _position={x:0,y:0};
    constructor(context, _vertices=[{}], _image="", _position={x:0,y:0})
    {
        this._context = context;
        this._vertices = _vertices;
        this._image = _image;
        this._position = _position;
    }

    //getters setters like I love
    setVertices(vertices)
    {
        this._vertices = vertices;
    }

    getVertices()
    {
        return this._vertices;
    }
    setImage(image)
    {
        this._image = image;
    }
    getImage()
    {
        return this._image;
    }
    setPosition(position)
    {
        this._position = position;
    }
    getPosition()
    {
        return this._position;
    }

    calculateVertices()
    {
        try
        {
            let calculatedVertices = this.getVertices().map(vertex => {
                return {
                    x: vertex.x + this.getPosition().x,
                    y: vertex.y + this.getPosition().y
                };
            });
            return calculatedVertices;
        }
        catch(e)
        {
            console.error("Error calculating vertices: " + e.message);
        }
    }


    render()
    {
        try
        {
            let img = new Image();
            img.src = this.getImage();
            img.onload = () => {
                const ctx = this._context;
                ctx.drawImage(img, this.getPosition().x, this.getPosition().y, this.calculateVertices()[1].x - this.calculateVertices()[0].x, this.calculateVertices()[1].y - this.calculateVertices()[0].y );
            };
        }
        catch(e)
        {
            console.error("Error rendering sprite: " + e.message);
        }
    }
}