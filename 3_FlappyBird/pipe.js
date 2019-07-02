function Pipe(){


      this.spacing = 175;
  this.top = random(height / 6, 3 / 4 * height);
this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 30;
    this.speed = 2;
    
    this.hightlight = false;
    this.hits = function(bird){
        
        //check bird y position
        if(bird.y < this.top || bird.y > height - this.bottom){
        
            if(bird.x > this.x && bird.x < this.x + this.w){
            this.highlight = true;
                return true;
            
            }
        
        }
            this.hightlight = false;

            return false;

    }

    this.show = function(){
        fill(255);
        noStroke();
        if (this.highlight){
            fill(0,255,0);
        
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    
    }

    this.update = function(){
    
        this.x -= this.speed;
    };
    
    this.offscreen = function(){
        if (this.x < -this.w){
            return true;
        
        } else {
            return false;
        
        }
    
    
    }

}

