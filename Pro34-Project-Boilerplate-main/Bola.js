class Bolas{
    constructor(x,y,r){
        this.x = x 
        this.y = y
        this.r = r
        this.V = -20
        this.Vcount = 0
        var options = {
            density: 0.1,
            frictionAir: 0.01,
            restitution: 2
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.image = loadImage("bola.png")
    }

    show() {

        let pos = this.body.position
        ellipseMode(CENTER)
        imageMode(CENTER)
        if(pos.x<500){
            if(400<pos.y<500){
                fill("green")
                push()
                translate(pos.x, pos.y)
                ellipse(50, -50, this.r, this.r)
                rotate(this.V*this.Vcount)
                image(this.image,0, 0, this.r*2, this.r*2)
                this.Vcount +=1
                pop()
            }else{
                if(500<pos.y<540){
                    fill("green")
                    push()
                    translate(pos.x, pos.y)
                    ellipse(50, -50, this.r, this.r)
                    rotate(this.V*this.Vcount)
                    image(this.image,0, 0, this.r*2, this.r*2)
                    this.Vcount +=1
                    pop()
                }else{
                    fill("red")
                    /*var BS = createSprite(pos.x, pos.y, this.r*2, this.r*2)
                    BS.addImage(this.image)
                    BSS.push(BS)*/
                    ellipse(pos.x+50, pos.y-50, this.r, this.r)
                }
            }
        }else{
            fill("red")
            push()
            translate(pos.x, pos.y)
            ellipse(50, -50, this.r, this.r)
            rotate(this.V*this.Vcount)
            image(this.image,0, 0, this.r*2, this.r*2)
            this.Vcount +=1
            pop()
        }
    }



    morrer(i){
        let pos = this.body.position
        let di = this.r*2
        if(pos.x<0-di || pos.y>height+di){
            
        }else{
            if(pos.x>width+di){
                wow = new wew(pos.y)
                wows.push(wow)
                points +=1
                World.remove(world, this.body)
                bolas.splice(i,1)
            }
        }
    }
}