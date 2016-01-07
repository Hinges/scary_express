/**
 * Created by Hinge on 1/6/16.
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNumber;
