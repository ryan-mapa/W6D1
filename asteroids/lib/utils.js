const Util = {
  inherits (childClass, parentClass) {
    // function Surrogate() {}
    // Surrogate.prototype = parentClass.prototype;
    // childClass.prototype = new Surrogate();
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Util;
