const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

const DEFAULT = {
  COLOR: 'yellow',
  RADIUS: 30,
};

const Asteroid = function(options = {}) {
  options.color = DEFAULT.COLOR;
  options.radius = DEFAULT.RADIUS;
  // options.vel = options.vel
  MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);


// // Return a randomly oriented vector with the given length.
// randomVec (length) {
//   const deg = 2 * Math.PI * Math.random();
//   return Util.scale([Math.sin(deg), Math.cos(deg)], length);
// },
// // Scale the length of a vector by the given amount.
// scale (vec, m) {
//   return [vec[0] * m, vec[1] * m];
// }
