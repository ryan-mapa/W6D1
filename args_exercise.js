function sum1() {
  let arr = Array.prototype.slice.call(arguments);
  let x = arr.reduce(function(acc ,value) {
    return acc + value;
  });
  console.log(x);
  return x;
}

// sum1(1, 2, 3, 4);
// sum1(1, 2, 3, 4, 5);

function sum2(...args) {
  let x = args.reduce(function(acc ,value) {
    return acc + value;
  });
  console.log(x);
  return x;
}

// sum2(1, 2, 3, 4);
// sum2(1, 2, 3, 4, 5);
//
// Array.prototype.fun = function () {
//   console.log(this);
// };
//
// [1,2].fun.bind([3,4])();

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

Function.prototype.myBind = function () {
  let arr = Array.prototype.slice.call(arguments);
  return this.apply(arr[0], arr.slice(1));
};

// Function.prototype.myBind = function (cat, ...args) {
//
//   return this.call(cat, ...args);
// };

// const drogon = new Cat("Drogon");
// const rhaegal = new Cat("Rhaegal");
//
// drogon.says("meow", "Dany");
// drogon.says.myBind(rhaegal, "mew mew", "Jon");


function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      let total = numbers.reduce(function(acc ,value) {
        acc += value;
        return acc;
      });
      console.log(total);
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const sum = curriedSum(4);
// sum(5)(30)(20)(1);

Function.prototype.curry = function (numArgs) {
  const args = [];
  const funct = this;

  function _curryfn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return funct(...args);
    } else {
      return _curryfn;
    }
  }
  return _curryfn;
};

Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const funct = this;

  function _curryfn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return funct.apply(null, args);
    } else {
      return _curryfn;
    }
  }
  return _curryfn;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let x = sumThree.curry1(3);
x(3);
