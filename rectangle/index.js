class Rectangle{
    constructor(ctx,pos){
        this.ctx = ctx
        this.color = ["red","yellow","purple","blue","purple"]   
        this.speed = 1  
        this.pos = pos
        this.seed = Math.floor((Math.random() * 10) % this.color.length)
    }   
    drawRectangle(x,y,w,h){
        const ctx = this.ctx
        ctx.beginPath();
        ctx.rect(x,y,w,h);

        ctx.fill();
    }
    rectMovement(){
        const ctx = this.ctx;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y , this.pos.w, this.pos.h);
        ctx.fillStyle = this.color[this.seed];
        ctx.fill();
    }
}



class Canvas{
    constructor(){
        this.maxWidth = 50
        this.maxHeight = 50
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.size = 100
    }
    init(){
        const canvas = document.createElement('canvas')
        canvas.width = this.innerWidth
        canvas.height = this.innerHeight;
        document.body.appendChild(canvas)

        const ctx = canvas.getContext('2d');      
        const rand = (max) => Math.floor((Math.random() * 10000) % max)
        
        for(let i =0 ; i<this.size;i++){
            const pos = {
                x : rand(this.innerWidth),
                y : rand(this.innerHeight),
                w : rand(this.maxWidth),
                h : rand(this.maxHeight)
            }
            new Rectangle(ctx,pos).rectMovement()

        }
     
    }
}
const canvas = new Canvas()
canvas.init()