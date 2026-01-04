class Sprite
{
    _context = null;
    _vertices=[{}];
    _image=null;
    _position={x:0,y:0};
    constructor({_context=null, _vertices=[{}], _image="", _position={x:0,y:0}}={})//configuration pattern in javascript is more comfortable way to use classes
    {
        this._context = _context;
        this._vertices = _vertices;
        this._image = _image;
        this._position = _position;
    }

    //getters setters like I love
    setContext(context)
    {
        this._context = context;
    }
    getContext()
    {
        return this._context;
    }
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
            //------------------flag boolean for rendering sprite image------------------------
            let isRenderSpriteImage = true; //set to true to render sprite image, false to not render sprite image
            //------> width and height calculation from vertices
            let width = this.calculateVertices()[1].x - this.calculateVertices()[0].x;
            let height = this.calculateVertices()[1].y - this.calculateVertices()[0].y;


            //Render the sprite image at the calculated position
            let img = new Image();
            img.src = this.getImage();
            img.onload = () => {
                if (isRenderSpriteImage) {
                    const ctx = this.getContext();
                    ctx.drawImage(img, this.getPosition().x, this.getPosition().y, width, height);
                }
            };
        }
        catch(e)
        {
            console.error("Error rendering sprite: " + e.message);
        }
    }
}