const max = process.argv[2];
let FizzBuzz = function*() {
    let cnt = 1;
    // iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
    while (cnt <= max) {
        let value = "";
        if ((cnt % 15) == 0) {
            value = "FizzBuzz";
        } else if ((cnt % 3) == 0) {
            value = "Fizz"
        } else if ((cnt % 5) == 0){
            value = "Buzz";
        } else {
            value = cnt;
        }

        cnt++;

        yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}


