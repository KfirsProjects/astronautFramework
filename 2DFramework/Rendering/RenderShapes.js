class RenderShapes {
    //think like architect nott coder
    //Thinking in mathematic terms
    //_ It indicate private variables
    _vertex = [{}]; //Array of vertex objects {x: number, y: number}
    _shapeType = ""; //String representing the shape type e.g. "circle", "rectangle", "polygon"
    _color = ""; //String representing the color e.g. "#FF0000"
    _context = null; //Rendering context (e.g., CanvasRenderingContext2D)
    _position = {x:0, y:0};
    constructor(_vertex, _shapeType, _color, _context, _position={x:0, y:0}) {
        //Initialize the private variables with the provided parameters
        this._vertex = _vertex;
        this._shapeType = _shapeType;
        this._color = _color;
        this._context = _context;
        this._position = _position;
    }

    //I like  to set getter and setter methods for encapsulation
    setVertex(_vertex) {
        this._vertex = _vertex;
    }
    getVertex() {
        return this._vertex;
    }

    setShapeType(_shapeType) {
        this._shapeType = _shapeType;
    }
    getShapeType() {
        return this._shapeType;
    }
    setColor(_color) {
        this._color = _color;
    }
    getColor() {
        return this._color;
    }
    setContext(_context) {
        this._context = _context;
    }
    getContext() {  
        return this._context;
    }
    //position is must in many cases
    setPosition(_position) {
        this._position = _position;
    }
    getPosition() {
        return this._position;
    }
//added validation to avoid runtime errors in all shape rendering methods

renderRect() {
    try {
        const ctx = this.getContext();
        const v = this.getVertex();
        if (!ctx) throw new Error("Canvas context is missing");
        if (!Array.isArray(v) || v.length < 2) throw new Error("Rectangle requires 2 vertices");
        ctx.fillStyle = this.getColor();
        const ox = this.getPosition().x || 0;
        const oy = this.getPosition().y || 0;
        const x0 = v[0].x + ox, y0 = v[0].y + oy;
        const x1 = v[1].x + ox, y1 = v[1].y + oy;
        const x = Math.min(x0, x1);
        const y = Math.min(y0, y1);
        const w = Math.abs(x1 - x0);
        const h = Math.abs(y1 - y0);
        ctx.fillRect(x, y, w, h);
    } catch (e) {
        console.error("Error rendering rectangle: " + e.message);
    }
}

renderCircle() {
    try {
        const ctx = this.getContext();
        const v = this.getVertex();
        if (!ctx) throw new Error("Canvas context is missing");
        if (!Array.isArray(v) || v.length < 2) throw new Error("Circle requires center and radius");
        ctx.fillStyle = this.getColor();
        const ox = this.getPosition().x || 0;
        const oy = this.getPosition().y || 0;
        const centerX = (v[0].x || 0) + ox;
        const centerY = (v[0].y || 0) + oy;

        const rIn = v[1];
        let radius = 0;
        if (typeof rIn === "number") radius = rIn;
        else if (typeof rIn?.r === "number") radius = rIn.r;
        else if (typeof rIn?.x === "number" || typeof rIn?.y === "number") {
            radius = (typeof rIn.x === "number" && typeof rIn.y === "number")
                ? Math.hypot(rIn.x, rIn.y)
                : (rIn.x ?? rIn.y ?? 0);
        } else throw new Error("Invalid radius");

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
    } catch (e) {
        console.error("Error rendering circle: " + e.message);
    }
}
renderPolygon() {
    try {
        const ctx = this.getContext();
        const v = this.getVertex();
        if (!ctx) throw new Error("Canvas context is missing");
        if (!Array.isArray(v) || v.length < 3) throw new Error("Polygon requires at least 3 vertices");
        ctx.fillStyle = this.getColor();
        const ox = this.getPosition().x || 0;
        const oy = this.getPosition().y || 0;

        ctx.beginPath();
        ctx.moveTo(v[0].x + ox, v[0].y + oy);
        for (let i = 1; i < v.length; i++) {
            ctx.lineTo(v[i].x + ox, v[i].y + oy);
        }
        ctx.closePath();
        ctx.fill();
    } catch (e) {
        console.error("Error rendering polygon: " + e.message);
    }
}

render() {
    try {
        const strategies = {
            rectangle: () => this.renderRect(),
            circle:    () => this.renderCircle(),
            polygon:   () => this.renderPolygon(),
        };
        const fn = strategies[this.getShapeType()];
        if (!fn) {
            console.error("Unsupported shape type: " + this.getShapeType());
            return;
        }
        fn();
    } catch (e) {
        console.error("Error in render method: " + e.message);
    }
}
// ...existing code...
    render(){

            try{
            //Render the shape based on its type
            switch (this.getShapeType()) {
                case "rectangle":
                    this.renderRect();
                    break;
                case "circle":
                    this.renderCircle();
                    break;
                case "polygon":
                    this.renderPolygon();
                    break;
                default:
                    console.error("Unsupported shape type: " + this.getShapeType());
            }

        }
        catch(e){
            console.error("Error in render method: " + e.message);
        }
    }
}