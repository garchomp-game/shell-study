// Node.js の readline モジュールを使用
const readline = require('readline');

// 標準入力から読み取りを行う readline インターフェイスの作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// 標準入力から一行ずつ読み取り、URLエンコードして出力
rl.on('line', (line) => {
  console.log(encodeURIComponent(line));
});
