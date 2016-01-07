/**
 * Created by Hinge on 1/6/16.
 */
var random = require('./random');

var dollar = require('./dollar');

function randomBalance() {
    return dollar(random(100, 1000000));
}


function returnText() {
    return ("Account balance:\n");
}

exports.balance = randomBalance;
exports.text = returnText;
