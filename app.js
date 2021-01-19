'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    if (memo.has(n)) {
        // メモにデータがあればそれを使う
        return memo.get(n);
    }
    // メモにデータがないので計算する
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log( i + "のフィボナッチ数は" + fib(i) + "です。");
}