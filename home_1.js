function logArguments(fn) {
    return function(...args) {
      console.log('Arguments:', ...args);
      return fn.apply(this, args);
    };
  }
  /////////////////////////////////////////////////
  function sum(a, b) {
    return a + b;
  }
  const loggedSum = logArguments(sum);
  console.log(loggedSum(2, 3)); 
  