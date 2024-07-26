function validate(fn, validator) {
    return function(...args) {
      if (!validator(...args)) {
        throw new Error('Arguments do not pass validation.');/////throw   -це щось по типу викидання помилки яка потім оброблюється 'catch' 
      }
      return fn.apply(this, args);
    };
  }
  //////////////////////////////////////////////////////////////
  function sum(a, b) {
    return a + b;
  }
  function isNumber(number) {
    return typeof number === 'number';
  }
  function validator(a, b) {
    return isNumber(a) && isNumber(b);
  }
  const validatedSum = validate(sum, validator);
  try {
    console.log(validatedSum(2, 3)); 
    console.log(validatedSum(2, '3'));
  } catch (error) {
    console.error(error.message); 
  }
  