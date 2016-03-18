var inputs = process.argv.slice(2);
var result = inputs.map((x) => {
    /* ここにアロー関数を使って一文字だけ取得しましょう */
    return x[0];
})
    .reduce((result, x) => {
    /* ここにアロー関数を使って文字列結合しましょう */
    return result += x;
});
console.log(result);