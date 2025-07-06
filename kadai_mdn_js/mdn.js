//プログラム実行日を出力
const today = new Date();
console.log(today);
const [year, month, day] = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
];

const date = year + '年' + month + '月' + day + '日';
console.log(date);
