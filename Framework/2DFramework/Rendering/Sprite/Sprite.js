class Sprite
{
    constructor({ context=null,isVertex=false, vertices=[{}], width=0, height=0, image=null, position={x:0,y:0}}={})//configuration pattern in javascript is more comfortable way to use classes
    {
        this.context = context;
        this.isVertex = isVertex;
        this.vertices = vertices;
        this.width = width;
        this.height = height;
        this.image = image;
        this.position = position;
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
    setIsVertex(isVertex)
    {
        this._isVertex = isVertex;
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

    setWidth(width)
    {
        this._width = width;
    }

    getWidth()
    {
        return this._width;
    }

    setHeight(height)
    {
        this._height = height;
    }

    getHeight()
    {
        return this._height;
    }

    calculateVertices()
    {
        try
        {

            if(this.getVertices().length===0)
            {
                throw new Error("Vertices array is empty");
            }
            if(this.getPosition()===null)
            {
                throw new Error("Position is null");
            }



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
            if
            const ctx = this.getContext();
            if (!ctx) throw new Error("Canvas context is missing");
            const img = new Image();
            img.src = this.getImage();
            img.onload = () => {
                ctx.drawImage(img, this.getPosition().x, this.getPosition().y, this.getWidth(), this.getHeight());
            };
        }
        catch(e)
        {
            console.error("Error in render method: " + e.message);
        }
    }
}