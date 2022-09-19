class wew{
    constructor(y){
        this.y = y
        this.image = loadImage("New Piskel (1).png")
        this.clock = 20
    }

    contar(){
        if(this.clock>0){
            this.clock -=1
            push()
            translate(width-220, this.y)
            image(this.image,0, 0, 200,200)
            pop()
        }
    }

}