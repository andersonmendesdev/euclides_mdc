function main(input) {
    input.split("\n").forEach(function(n) {
        console.log(n); 
    });
}
function mdc(valueOne, valueTwo){
    let rest = 1
    while( rest !== 0){
        rest = valueTwo % valueOne
        valueTwo = valueOne
        if(rest) valueOne = rest
    }
    return valueOne
}
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;
    let numbers = stdin_input.split('\r\n')
    numbers = numbers[0].split(' ')
    stdin_input = []
    if(numbers.length === 1){
        console.log(numbers[0])
        return
    }
    if(numbers.length === 2){
        if(numbers[0] === '0') return console.log(numbers[1])
        if(numbers[1] === '0') return console.log(numbers[0])
        console.log(mdc(numbers[0], numbers[1]))
    }
});
process.stdin.on("end", function () {
   main(stdin_input);
});


