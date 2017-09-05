const MovingObject = function(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};
// const mo = new MovingObject(
  // { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );


MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beingPath();
  let x = this.pos[0];
  let y = this.pos[1];
  ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
  ctx.fill();
};

module.exports = MovingObject;

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};
