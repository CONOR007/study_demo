new Promise((resolve) => {
  resolve();
})
  .then(() => {
    new Promise((resolve) => {
      console.log(000);
      resolve();
    })
      .then(() => {
        console.log(111);
      })
      .then(() => {
        console.log(222);
      });
    // return undefined;
  })
  .then(() => {
    console.log(333);
  });