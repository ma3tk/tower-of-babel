const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let cnt = 1;
        // iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
        return {
            next() {
                // nextの中では返す値(cnt)と次で終わりかどうかを示すプロパティ(done)を返す
                if (cnt > max) {
                    return {
                        done: true
                    };
                }

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

                return {
                    done: false,
                    value: value
                };
            }
        };
    }
};

for (var n of FizzBuzz) {
    console.log(n);
}
