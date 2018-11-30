const csv = require('csv-parser')
const fs = require('fs')
const results = [];
var var1 = [];
const setval = require('./setValue');
let glob_var = setval.setVal();

fs.createReadStream('dataset.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        for (var key in alldata) {
            var1.push(alldata[key].glob_var);
        }
    });

console.log(var1);
displayLineChart();