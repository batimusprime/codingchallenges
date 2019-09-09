      
      
    
    //pipe / obstruction class
    class Pipe{

        constructor(){
            //start at the edge
            this.x = width;

            //width of pipe
            this.w = 50;
            
            //movement speed
            this.speed = 2;

            //gap between the pipes
            this.gap = 100;

            //center of the gap is in a random location, and expanded from there
            this.cent = random(this.gap,height - this.gap);
            
            //top of pipe is the center point minus half of the gap space 
            this.top = this.cent - this.gap / 2;
            this.bottom = height - (this.cent + this.gap / 2);
        
            }
            show(){
                
                fill(155);
                //top
                rect(this.x, 0, this.w, this.top);
                //bottom
                fill(55);
                rect(this.x, height-this.bottom, this.w, this.bottom);
                
            }
            
            update(){this.x -= this.speed}
            
            //this evaluates to T/F depending on if the pipe is past the width of the screen
            offscreen(){return this.x < -this.w}

            //determines collision, this returns true while the bird is in the box
            hits(b){
                
                //check if sprite (b) is in between the zone from top of gap to top of screeen and bottom of gap to bot of screen (Y axis)
                if (b.y < this.top || b.y > height-this.bottom){
                    
                    //check if sprite (b) is ALSO in between the width of the pipe (X axis)
                    if(b.x > this.x && b.x < this.x + this.w){
                        return true;
                    }
                }
            }
        }
