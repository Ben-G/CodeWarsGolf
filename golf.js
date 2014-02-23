
/*
	2014 EA Code Wars Hackathon
	Team RandomZ
	Project PuttZ
	Amy
	Benji
	Jacob
	Sean

	Quintus Javascript HTML5 Game Engine: http://html5quintus.com/
*/

//////////////////
// KNOWN ISSUES //
//////////////////
/*
	-Touch drag is automatically called in Chrome on Windows; Use FireFox;
*/
//////////////////////
// END KNOWN ISSUES //
//////////////////////

/////////////
// GLOBALS //
/////////////

/////////////////
// END GLOBALS //
/////////////////

///////////////////////
// DRAWING FUNCTIONS //
///////////////////////

///////////////////////
// END DRAWING FUNCTIONS //
///////////////////////


// SOURCE: http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

////////////////////////
// DRAW SHAPES REGION //
////////////////////////

function drawSquare(p)
{
	// not sure what these are for??
	p = p || {};
	p.points = [];

	// my code;
	p.points.push([-32,-32]);
	p.points.push([32,-32]);
	p.points.push([32,32]);
	p.points.push([-32,32]);
		  
	p.w=64;
	p.h=64;	
	//p.x = 200*Math.random()+p.w/2;
	//p.y = 200*Math.random()+p.h/2;
	p.cx = p.w/2;
	p.cy = p.h/2;
	p.angle = 90; // it breaks at 0?? why??
	p.type = 1;
	return p;
}

function drawBar(p, orientation)
{
	// not sure what these are for??
	p = p || {};
	p.points = [];

	// my code;
	p.points.push([-32,-16]);
	p.points.push([32,-16]);
	p.points.push([32,16]);
	p.points.push([-32,16]);
		  
	switch (orientation)
	{
		case 0:
		p.angle = 90; // it breaks at 0?? why??
		break;
		case 1:
		p.angle = 180; // it breaks at 0?? why??
		break;
	}
		  
	p.w=64;
	p.h=64;	
	//p.x = 200*Math.random()+p.w/2;
	//p.y = 200*Math.random()+p.h/2;
	p.cx = p.w/2;
	p.cy = p.h/2;	
	p.type = 1;
	return p;
}

function drawDiamond(p)
{
	// not sure what these are for??
	p = p || {};
	p.points = [];

	// my code;
	p.points.push([32,0]);
	p.points.push([0,32]);
	p.points.push([-32,0]);
	p.points.push([0,-32]);
		  
	p.w=64;
	p.h=64;	
	//p.x = 200*Math.random()+p.w/2;
	//p.y = 200*Math.random()+p.h/2;
	p.cx = p.w/2;
	p.cy = p.h/2;
	p.angle = 1; // it breaks at 0?? why??
	p.type = 1;
	return p;
}

function drawAngle(p, orientation)
{
	// not sure what these are for??
	p = p || {};
	p.points = [];

	// my code;
	p.points.push([-32,-32]);
	p.points.push([32,-32]);
	p.points.push([32,32]);
	//console.log(orientation + " SS");
	switch (orientation)
	{
		case 0:		
		p.angle = 360; // it breaks at 0?? why??
		break;
		
		case 1:		
		p.angle = 90; // it breaks at 0?? why??
		break;
		
		case 2:		
		p.angle = 180; // it breaks at 0?? why??
		break;
		
		case 3:		
		p.angle = 270; // it breaks at 0?? why??
		break;
	}
		  
	p.w=64;
	p.h=64;	
	//p.x = 200*Math.random()+p.w/2;
	//p.y = 200*Math.random()+p.h/2;
	p.cx = p.w/2;
	p.cy = p.h/2;
	p.type = 1;
	return p;
}

function drawCircleDeprecated(p, size)
{
	// not sure what these are for??
     p = p || {};
     p.points = [];

     // my code;
     var theta = 0;
     var newX = 0,
      newY = 0;
     var count = 24.0;
     for (var i=0; i<count; i++)
     { 
      var x = size,
       y = 0;  
      newX = x*Math.cos(theta) - y*Math.sin(theta);
      newY = x*Math.sin(theta) + y*Math.cos(theta);
      x = newX;
      y = newY;
      theta += 2*Math.PI/count;
      
      p.points.push([x,y]);
     }
        
     p.w=size;
     p.h=size; 
     p.x = 200*Math.random()+p.w/2;
     p.y = 200*Math.random()+p.h/2;
     p.cx = p.w/2;
     p.cy = p.h/2;
     p.angle = 1; // it breaks at 0?? why??
     p.type = 1;
     return p;
}

function drawCircle(p, sides, phi)
{
	// not sure what these are for??
	p = p || {};
	p.points = [];

	// my code;
	var theta = 0;
	var newX = 0,
		newY = 0;
	var count = sides;
	for (var i=0; i<count; i++)
	{	
		var x = 32,
			y = 0;		
		newX = x*Math.cos(theta) - y*Math.sin(theta);
		newY = x*Math.sin(theta) + y*Math.cos(theta);
		x = newX;
		y = newY;
		theta += 2*Math.PI/count;
		
		p.points.push([x,y]);
	}
		  
	p.w=32;
	p.h=32;	
	//p.x = 200*Math.random()+p.w/2;
	//p.y = 200*Math.random()+p.h/2;
	p.cx = p.w/2;
	p.cy = p.h/2;
	p.angle = phi; // it breaks at 0?? why??
	p.type = 1;
	return p;
}

function drawRandomShape(p) 
{
	var angle = Math.random()*2*Math.PI,
		numPoints = 3 + Math.floor(Math.random()*5),
		minX = 0, maxX = 0,
		minY = 0, maxY = 0,
		curX, curY;

	p = p || {};

	p.z = 1;
	p.points = [];

	var startAmount = 40;

	for(var i = 0;i < numPoints;i++) {
	  curX = Math.floor(Math.cos(angle)*startAmount);
	  curY = Math.floor(Math.sin(angle)*startAmount);

	  if(curX < minX) minX = curX;
	  if(curX > maxX) maxX = curX;

	  if(curY < minY) minY = curY;
	  if(curY > maxY) maxY = curY;


	  p.points.push([curX,curY]);

	  startAmount += Math.floor(Math.random()*10);
	  angle += (Math.PI * 2) / (numPoints+1);
	};

	maxX += 30;
	minX -= 30;
	maxY += 30;
	minY -= 30;

	p.w = maxX - minX;
	p.h = maxY - minY;

	for(var i = 0;i < numPoints;i++) {
	  p.points[i][0] -= minX + p.w/2;
	  p.points[i][1] -= minY + p.h/2;
	}

	p.cx = p.w/2;
	p.cy = p.h/2;
	p.angle = angle;
   return p;
 }
	
function advanceShape(p, shape, orientation)
{
//console.log(orientation);
	var nextShape = shape;
	switch (shape)
	{
		case "circle":
		nextShape = "bar";
		break;
		
		case "bar":
		switch (orientation)
		{
			case 0:
			p.orientation = 1;
			break;
			
			case 1:
			p.orientation = 0;
			nextShape = "square";
			break;		
		}
		break;
		
		case "square":
		nextShape = "hexagon";
		break;
		
		case "hexagon":
		nextShape = "octagon";
		break;
		
		case "octagon":
		nextShape = "diamond";
		break;
		
		case "diamond":
		nextShape = "angle";
		break;
		
		case "angle":
		switch (orientation)
		{
			case 0:
			p.orientation = 1;
			break;
			
			case 1:
			p.orientation = 2;
			break;
			
			case 2:
			p.orientation = 3;
			break;
			
			case 3:
			p.orientation = 0;
			nextShape = "circle";
			break;			
		}
		break;		
		
		/*
		case "random":
		nextShape = "circle";
		break;
		*/
	}
	return nextShape;
}
 
// advance is a flag to toggle to the next shape;
function drawShapes(p, shape, orientation, advance)
{
	if (advance == true)
	{
		shape = advanceShape(p, shape, orientation);
		p.shape = shape;
	}
		
	switch (shape)
	{
		case "circle":
		return drawCircle(p, 24, 1);
		break;
		
		case "hexagon":
		return drawCircle(p, 6, 180);
		break;
		
		case "octagon":
		return drawCircle(p, 8, 22.5);
		break;
		
		case "square":
		return drawSquare(p);
		break;
		
		case "bar":
		return drawBar(p, p.orientation);
		break;
		
		case "diamond":
		return drawDiamond(p);
		break;
		
		case "angle":
		return drawAngle(p, p.orientation);
		break;		
		
		case "random":
		return drawRandomShape(p, orientation);
		break;
	}
}

////////////////////////////
// END DRAW SHAPES REGION //
////////////////////////////

/////////////////////////
// MAIN QUINTUS REGION //
/////////////////////////

// # Quintus Touch and Drag Example
//
// [Run the example](../examples/touch/index.html)
//
// This example creates a number of random convex shapes 
// and then adds touch and drag support to them.
window.addEventListener('load',function(e) {

  // Set up a standard Quintus instance with only the 
  // Sprites and Scene module (for the stage support) loaded.
  var Q = window.Q = Quintus().include("Sprites, Scenes, Input, Touch, 2D, UI");

  var spawnX = 50;
  var spawnY = 50;

  
  Q.setup("c1")
   .touch(Q.SPRITE_ALL);
  // Sprite class for the randomly shapes
  //
  //
  Q.Sprite.extend("SpawnButton", {
    init: function(p) {
       // Create a random shape (defined below)
       p = p || {};
       p.type = -1;
       p.collisionMask = Q.SPRITE_NONE;
       p.w = 64;
       p.h = 64;
       p.color = "red";
       p.z = -1;

       // Initialize the p hash
       this._super(p);
       this.on("touch");
    },
    
    touch: function(touch) {
      //console.log("touch Layer!");
      currentStage.insert(new Q.RandomShape({ shape:"circle",orientation:0 }));
    }

  });

  Q.MovingSprite.extend("Ball", {
    init: function(p) {
      p = this.createCircle(p, 16);
      p.color = "blue";
      this._super(p);
      this.add("2d");
      this.p.gravity = 0.0;
      this.on("touch");
      this.on("drag");
      this.on("touchEnd");
      this.on("hit",this,"collide");
    },

    collide: function(col) {
      s = this.speed - (0.2 * 100);

      if (s < 0) {
        s = 0.1;
      }

      // Get vector magnitude
      m = Math.sqrt(col.normalX * col.normalX + col.normalY * col.normalY)

      // Divide by magnitude and multiply by desired speed
      x = (col.normalX / m) * s;
      y = (col.normalY / m) * s;

      this.p.vx = x;
      this.p.vy = y;

      this.speed = Math.sqrt(this.p.vx * this.p.vx + this.p.vy * this.p.vy);
    },

    touch: function(touch) {
      // Make sure penguin.png is loaded
      var ball = this;

      Q.load("powerbar.png",function() {
         var powerbar = new Q.PowerBar();
         currentStage.insert(powerbar, ball);
         ball.powerbar = powerbar;
       });
    },

    drag: function(touch) {
      newX = (touch.origX + touch.dx);
      newY = (touch.origY + touch.dy);

      console.log(newX);
      console.log(this.p.x);

        distanceX = this.p.x - newX;


      if (newY > this.p.y) {
        distanceY = newY - this.p.y;
      } else {
        distanceY = this.p.y - newY;
      }

      tan = Math.tan(distanceX / distanceY);
      radians = tan * (180/Math.PI);

      this.powerbar.p.angle = radians;

      distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
      this.powerbar.p.scale = (distance / 200);
    },

     touchEnd: function(touch) {
        this.p.vy = -100;
        this.speed = 100;
        currentStage.remove(this.powerbar);
     },

    createCircle: drawCircleDeprecated,
	
    	step: function(dt) {
      this.p.x += this.p.vx * dt;
      this.p.y += this.p.vy * dt;

      //this.stage.collide(this);
	  
      
        if(this.p.x < 24) { this.p.vx = Math.abs(this.p.vx); }
        if(this.p.x > Q.width - 24) { this.p.vx = -Math.abs(this.p.vx); }

        if(this.p.y < 24) { this.p.vy = Math.abs(this.p.vy); }
		if(this.p.y > Q.height - 24) { this.p.vy = -Math.abs(this.p.vy); }
      

      //if(this.p.y > Q.height) {
       // this.destroy(); // Remove the ball if it's off the screen
      //}
	  
    }
    
  });
  
      Q.Sprite.extend('Target', {
        init: function(p) {
            p = this.createTarget(p, 32);
            p.color = "black";
            this._super(p);
            this.on("drag");
            this.on("touchEnd");
            this.add('physics');
            this.on("hit",this,"checkHit");
        },
        drag: function(touch) {
            this.p.dragging = true;
            this.p.x = touch.origX + touch.dx;
            this.p.y = touch.origY + touch.dy;
        },
        touchEnd: function(touch) {
            this.p.dragging = false;

        },
        createTarget: drawCircleDeprecated,
		
        checkHit: function(sprite) {
            if(sprite.obj.isA("Ball")) {
                Q.clearStages();
                Q.stageScene("endGame", 1, {label: "You Won!"});
            }
        }
    });


  Q.Sprite.extend("PowerBar", {
     init: function(p) { 
      p = p || {};
      p.asset = "powerbar.png"
      p.points = [];
      p.cy = 0;
      p.scale = 0.1;
      p.collisionMask = Q.SPRITE_NONE;
      p.type = -1;
      this._super(p);
     }
  });

  Q.Sprite.extend("RandomShape", {
     init: function(p) {
       // Create a random shape (defined below)
	   p = this.createShape(p, p.shape, p.orientation, false);
       //p = this.createShape(p);
       p.x = spawnX;
       p.y = spawnY;
       //p.color = "yellow";
	   p.color = getRandomColor();
       // Initialize the p hash
       this._super(p);

       // Listen for a drag events, sent by the
       // touch module
       this.on("drag");
       this.on("touchEnd");
       this.on("touch");

       this.timeTouchBegin = 0;
     },

     touch: function(touch) {
      //console.log("touch!");  
      // store the current timestamp 
      this.timeTouchBegin = new Date().getTime();
     },

     drag: function(touch) {
	   //console.log("drag!");
       this.p.dragging = true;
       this.p.x = touch.origX + touch.dx;
       this.p.y = touch.origY + touch.dy;
       this.timeTouchBegin = 0;
     },

     touchEnd: function(touch) {
       this.p.dragging = false;
       currentTime = new Date().getTime();
       // calculate the time difference
       timeDiff = currentTime - this.timeTouchBegin;
	   //console.log(currentTime + " " + this.timeTouchBegin);
       if (timeDiff < 200) {
        this.p = this.createShape(this.p, this.p.shape, this.p.orientation, true); 		
       }
     },

     createShape:	drawShapes,

     // If the mousemove event below sets the
     // hit variable, scale this sucker up a bit.
     //
     // Also move to avoid collisions with any other sprites
     step: function(dt) {
	 /*
       if(this.p.over) {
         this.p.scale = 1.2;
       } else {
         this.p.scale = 1.;
       }
	   */

      // var maxCol = 3, collided = false, p = this.p;
      // p.hit = false;
      // while((collided = this.stage.search(this)) && maxCol > 0) {
      //   if(collided) {
      //     // If we're dragging, move other objects
      //     // otherwise, move us
      //     if(this.p.dragging) { 
      //       collided.obj.p.x += collided.separate[0];
      //       collided.obj.p.y += collided.separate[1];
      //     } else {
      //       this.p.x -= collided.separate[0];
      //       this.p.y -= collided.separate[1];
      //     }
      //   }
      //   maxCol--;
      // }

     }


  });

  // Number of shapes to add to the page
  var numShapes = 5;

  // Scene that actually adds shapes onto the stage
  Q.scene("start",new Q.Scene(function(stage) {
    var gameLayer = stage.insert(new Q.SpawnButton());
    var ball = stage.insert(new Q.Ball);
    ball.p.x = 200;
    ball.p.y = 200;

    var shapesLeft = numShapes;
    while(shapesLeft-- > 0) {
      stage.insert(new Q.RandomShape({ shape:"circle", orientation:0 }));
    }
  }));
  
        // To display a game over / game won popup box, 
    // create a endGame scene that takes in a `label` option
    // to control the displayed message.
    Q.scene('endGame', function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 2, y: Q.height / 2, fill: "rgba(0,0,0,0.5)"
        }));

        var button = container.insert(new Q.UI.Button({x: 0, y: 0, fill: "#CCCCCC",
            label: "Play Again"}))
        var label = container.insert(new Q.UI.Text({x: 10, y: -10 - button.p.h,
            label: stage.options.label}));
        // When the button is clicked, clear all the stages
        // and restart the game.
        button.on("click", function() {
            Q.clearStages();
            Q.stageScene('start');
        });

        // Expand the container to visibily fit it's contents
        container.fit(20);
    });


  // Finally call `stageScene` to start the show
  var currentStage = Q.stageScene("start");

  // Render the elements
  // Turning Q.debug and Q.debugFill on will render
  // the sprites' collision meshes, which is all we want
  // in this situation, otherwise nothing would get rendered
  // Q.debug = true;
  // Q.debugFill = true;

  var currentObj = null;
  // Touch events do most of the work for us, but the
  // touch system doesn't handle mousemouse events, so lets add
  // in an event listener and use `Stage.locate` to highlight
  // sprites on desktop.
  Q.el.addEventListener('mousemove',function(e) {
    var x = e.offsetX || e.layerX,
        y = e.offsetY || e.layerY,
        stage = Q.stage();

    // Use the helper methods from the Input Module on Q to
    // translate from canvas to stage
    var stageX = Q.canvasToStageX(x, stage),
        stageY = Q.canvasToStageY(y, stage);

    // Find the first object at that position on the stage
    var obj = stage.locate(stageX,stageY);
    
    // Set a `hit` property so the step method for the 
    // sprite can handle scale appropriately
    if(currentObj) { currentObj.p.over = false; }
    if(obj) {
      currentObj = obj;
      obj.p.over = true;
    }
  });
});

