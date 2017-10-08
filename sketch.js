function setup() {createCanvas(500,500);
					background(250, 250, 190);
					angleMode(DEGREES);
  
}

function draw() {					
          
          translate(width/2, height/2+60);
					stroke('#ea0043')
					line(0,0,0,120);

					stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/360));
					if (frameCount>=180) {stroke(lerpColor(color('#0fefca'), color('#ea0043'), frameCount/360));}
					push();
					rotate(-frameCount);

					var Xb=-frameCount;
					if (frameCount==251) {noLoop();}
					line(0, 0,Xb, 100+20*cos(8*frameCount)); 
					pop();

					push();
					rotate(frameCount);
					var Yb=frameCount;
					if (frameCount==251) {noLoop();}
					line(0, 0,Yb, 100+20*cos(8*frameCount)); 
					pop();
  
}