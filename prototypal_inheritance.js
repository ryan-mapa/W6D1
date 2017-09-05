function MovingObject (speed) {
  this.speed = speed;
}

MovingObject.prototype.accelerate = function(){
  console.log('shit');
};

Function.prototype.inherits = function(parent) {
  // function Surrogate() {}
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function Ship (name, length) {
  this.name = name;
  this.length = length;
}
Ship.inherits(MovingObject);

function Asteroid (size) {
  this.size = size;
}
Asteroid.inherits(MovingObject);
