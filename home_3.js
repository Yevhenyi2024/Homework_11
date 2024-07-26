function retry(fn, maxAttempts) {
    return function(...args) {
      let attempts = 0;
  
      function attempt() {
        try {
          return fn.apply(this, args);
        } catch (error) {
          attempts++;
          if (attempts < maxAttempts) {
            return attempt();
          }
          throw error;
        }
      }
  
      return attempt();
    };
  }
  
  ////////////////////////////////////////////////////////////////////////////
  function mayFailOperation() {
    if (Math.random() < 0.5) {
      throw new Error('Operation failed');
    }
    return 'Success!';
  }
  
  const retriedOperation = retry(mayFailOperation, 3);
  
  try {
    console.log(retriedOperation());
  } catch (e) {
    console.error(e.message);
  }
  