
function Calculator (skin){
    this.skin = skin;
}

Calculator.prototype.pingPong = function(number) {
    var output = [];
    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            output.push("ping-pong");
        } else if (i % 3 === 0) {
            output.push("ping");
        } else if (i % 5 === 0) {
            output.push("pong");
        } else {
            output.push(i);
        }
    }
    return output;
};

exports.calculatorModule = Calculator;
