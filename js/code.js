var s;
var scl = 2;

function setup() {
  var canv = createCanvas(windowWidth, windowHeight);
  canv.parent("canvas");
	s = new Snake();	
}

function draw() {
	translate(width / 4, height / 4);
	s.update();
	s.show();

}
function isPrime(value) {
    var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }	
	return primes;
}

//simple snake object, which draws my line ;))
function Snake() {
  this.flip= true;
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 1;
	this.primes = [];
	this.cnt = 0;
	this.primes = isPrime(100000);
	
	this.update = function() {
		this.cnt++;

		if(this.cnt % 1000 === 0) {
			console.log(this.cnt);
		}

		if(this.primes[this.cnt] === true) {
      if(this.flip === true) {
        if(this.xspeed === 1 && this.yspeed === 0){ // right -> down
          this.dir(0,1);
        } else if(this.xspeed === 0 && this.yspeed === 1){ // down -> left
          this.dir(-1,0);
        } else if(this.xspeed === -1 && this.yspeed === 0){ // left -> up
          this.dir(0,-1);
        } else if(this.xspeed === 0 && this.yspeed === -1){ // up -> right
          this.dir(1,0);
        } 
        this.flip = false;
      }
      else {
        this.flip = true;
      }
		}
		
		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;
		
		//this.x = constrain(this.x, 0, width-scl);
		//this.y = constrain(this.y, 0, height-scl);
	}

	this.show = function() {
		fill(255);
		point(this.x, this.y, scl);
	}

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}
}
