//GLOBAL.document = new JSDOM(html).window.document;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.setVal = function() {
    var val = jsdom.window.document.getElementById("variable_plot").value;
    return val;
}