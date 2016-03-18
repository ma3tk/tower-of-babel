var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

// ここに平均を取るavg関数を作る、作る際には
// RESTパラメータを利用すること。
var avg = function(...args){
    return args.reduce((sum, n) => sum + n) / args.length;
};

console.log(avg(...args));
