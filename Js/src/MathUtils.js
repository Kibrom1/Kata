MathUtils = function(){}

MathUtils.prototype.sum = function(number1, number2){
    return number1 + number2;
}

MathUtils.prototype.subtract = function(number1, number2){
    return number1 - number2;
}

MathUtils.prototype.multiply = function(number1, number2){
    return number1 * number2;
}
MathUtils.prototype.devide = function(number1, number2) {
    if(number2 != 0){
        return number1 / number2;
    }
    return NaN;
}
MathUtils.prototype.average = function(number1, number2){
    return (number1 + number2)/2;
}
MathUtils.prototype.factorial = function(num){
    if(num < 0){
        throw new Error("There is no factorial for negative numbers");
    } else if(num == 0 || num == 1){
        return 1;
    } else{
        return num * this.factorial(num-1);
    }
}