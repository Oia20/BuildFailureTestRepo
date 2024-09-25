// index.js
async function getData() {
    return Promise.resolve("Data");
  }
  
  async function main() {
    const result = getData(); // Calling async function without awaiting should trigger an eslint build failure
    console.log(result);
  }
  main();