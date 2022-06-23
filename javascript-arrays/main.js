let test = [200, 'baik', -1222, undefined, null, 'jason'];


test.push('brendon', undefined);
console.log(test);
let newTest = [];
for(let i = 0; i < test.length; i++) {
  if(test[i]) {
    console.log("truthy: " + test[i]);
    newTest.push(test[i]);
  }
}
console.log(newTest);


// falsy values = null, undefined, -0, 0, NaN, '';
