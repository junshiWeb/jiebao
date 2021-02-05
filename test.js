let time1 = '2021/1/12 13:40'
let time2 = '2021/1/12 15:53'
let date1 = new Date(time1).getTime()
let date2 = new Date(time2).getTime()
let res = date2 - date1
console.log(date1);
console.log(date2);
console.log(res);

console.log((new Date('2021/1/12 13:40').getTime() - new Date('2021/1/12 15:53').getTime()) / 1000);
