let fetchData = callback => {

   // promises
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
            callback('Done!')
         }, 1500);
      });
   return promise;
};

setTimeout(() => {
   console.log('Timer is done!');
   fetchData().then(text => {
      console.log(text);

      return fetchData();
   })
   .then(text2 => {
      console.log(text2)
   })
}, 3000);

