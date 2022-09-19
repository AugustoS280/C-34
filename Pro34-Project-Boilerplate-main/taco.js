class Taco{
    constructor(x,y,w,h){
        this.x = x 
        this.y = y
        this.width = w
        this.height = h
        this.angle = -10
        this.morreu = false
        var option2 = {
            isStatic: true
        }
        this.r = 5
        this.body = Bodies.rectangle(x,y,w,h,option2)
        this.image = loadImage("pngwing.com__2_-removebg-preview.png")
        World.add(world, this.body)
        
    }


    aparecer(){
        if(!this.morreu){
            let pos = this.body.position

            push()
            translate(pos.x , pos.y)
            angleMode(DEGREES)
            rotate(this.angle)
            //teste.x = 
            //image(this.image,-20, -150, 50, 200)
            /*rect(0, 0, this.width, this.height)
            rectMode(CENTER)
            fill("green")
            rect(0, 0, this.width, this.height)*/
            //this.body.angle = this.angle
            //rect(330, 600, 20, 350)
            pop()

            push()
            /*var cos = Math.cos(rotation),
            sin = Math.sin(rotation);

            var dx = body.position.x - point.x,
            dy = body.position.y - point.y;
  
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);*/
            let v = createVector(pos.x-teste.x, pos.y -teste.y)
            translate(pos.x - v.x ,pos.y - v.y)
            rotate(this.angle)
            teste.rotation = this.angle
            //rect(-10,-10, this.width, this.height)
            rectMode(CENTER)
            fill("green")
            //translate(pos.x-20, pos.y-80)
            //translate(teste.x, teste.y)
            //rect(0,0, this.width, this.height)
            pop()

            push()
            translate(pos.x - v.x ,pos.y - v.y)
            rotate(this.angle)
            image(this.image,0, 0, 20, 250)
            pop()
        }
    }

    rotacionar(){
        let pos = this.body.position
        let v = createVector(pos.x-teste.x, pos.y -teste.y)



        
        if(this.angle > -45){
            //angleMode(DEGREES)
            /*eu pesquisei um pouco e eu vi q o melhor geito seria pelo composite, porque ele meio q junta dois corpos diferentes
            mas acabou que ele está em outras pastas da biblioteca matter, até tentei achar mas eram MUITAS, ent eu peguei a formula
            do composite e coloquei, que no caso seria essa abaixo*/

            let rad = this.r*PI/180
            var cos = Math.cos(rad)
            var sin = Math.sin(rad)
    
            Body.setPosition(this.body,{
                x: teste.x + (v.x * cos - v.y * sin),
                y: teste.y + (v.x * sin + v.y * cos)
            })
            Body.rotate(this.body, rad*180/PI)
            this.angle -= rad*180/PI
        }else{
            this.angle = 0
            this.morreu = true
            World.remove(world,this.body)
            tacos.pop()
        }
        
    }
}