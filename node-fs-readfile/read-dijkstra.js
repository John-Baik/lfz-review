const fs = require('fs');
const dij = 'dijkstra.txt';

fs.readFile(dij, 'utf-8', (err, data) => {
  if (err) {
    console.group(err.message);
  } else {
    console.log(data);
  }
});
