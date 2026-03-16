// ================== 1.1.1 第 1 题 ==================
// 生成 1 到 50 的随机整数
var num = Math.floor(Math.random() * 50) + 1;
// 判断奇偶并打印到控制台，对2取余数>0为偶数,否则为奇数
if (num % 2 === 0) {
  console.log(num + " 是偶数");
} else {
  console.log(num + " 是奇数");
}
// ================== 1.1.1 第 2 题 ==================
// 随机生成 0~100 的整数成绩
var score = Math.floor(Math.random() * 101);
var level;
if (score >= 90 && score <= 100) {
  level = "A级";
} else if (score >= 80) {      // [80,90)
  level = "B级";
} else if (score >= 70) {      // [70,80)
  level = "C级";
} else if (score >= 60) {      // [60,70)
  level = "D级";
} else if (score >= 0) {       // [0,60)
  level = "E级";
} else {
  level = "成绩不合法";
}
console.log("成绩：" + score + " 等级：" + level);
// 随机产生 1~12 月
var month = Math.floor(Math.random() * 12) + 1;
var season = "";
var idioms = "";
var activities = "";

if (month === 3 || month === 4 || month === 5) {
  season = "春季";
  idioms = "春暖花开、鸟语花香";
  activities = "踏青、放风筝";
} else if (month === 6 || month === 7 || month === 8) {
  season = "夏季";
  idioms = "骄阳似火、烈日炎炎";
  activities = "游泳、吃冷饮";
} else if (month === 9 || month === 10 || month === 11) {
  season = "秋季";
  idioms = "秋高气爽、硕果累累";
  activities = "赏枫、丰收采摘";
} else {
  season = "冬季";
  idioms = "天寒地冻、白雪皑皑";
  activities = "堆雪人、滑冰";
}

console.log(
  "月份：" + month +
  "，季节：" + season +
  "，成语：" + idioms +
  "，活动：" + activities
);
// 定义一个班 5 个学生的分数
var scores = [85, 92, 76, 88, 95];

// 求和
var sum = 0;
for (var i = 0; i < scores.length; i++) {
  sum += scores[i];
}

// 输出总分
console.log("5 个学生的总分为：" + sum);
// ================== 1.1.1 第 5 题 ==================
// 5、输出1(包含)到100(包含)之间所有的能对3整除的数, 分别以递增和递减的方式实现

// 递增
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("递增 能被3整除：", i);
  }
}

// 递减
for (var j = 100; j >= 1; j--) {
  if (j % 3 === 0) {
    console.log("递减 能被3整除：", j);
  }
}

// ================== 1.1.1 第 6 题 ==================
// 6、输出1到100之间所有既能被3整除又能被5整除的偶数

for (var k = 1; k <= 100; k++) {
  if (k % 2 === 0 && k % 3 === 0 && k % 5 === 0) {
    console.log("既被3整除又被5整除的偶数：", k);
  }
}

// ================== 1.1.1 第 7 题 ==================
// 7、输入一个正整数n，计算[1,n]之间的偶数和，并统计有多少个偶数,并打印。

var n = 50; // 可以改成任意正整数
var sumEven = 0;
var countEven = 0;

for (var a = 1; a <= n; a++) {
  if (a % 2 === 0) {
    sumEven += a;
    countEven++;
  }
}

console.log("[1," + n + "] 偶数和为：" + sumEven + "，偶数个数为：" + countEven);

// ================== 1.1.1 第 8 题 ==================
// 8、输出1到1000之间既能被5整除又能被3整除的数，
// 并且每行输出4个，并打印输出满足条件的数的个数。

var countMul3And5 = 0;
var lineStr = "";

for (var b = 1; b <= 1000; b++) {
  if (b % 3 === 0 && b % 5 === 0) {
    countMul3And5++;
    lineStr += b + "\t";
    if (countMul3And5 % 4 === 0) {
      console.log(lineStr);
      lineStr = "";
    }
  }
}
if (lineStr !== "") {
  console.log(lineStr);
}

console.log("1~1000 中既能被3整除又能被5整除的数个数为：" + countMul3And5);

// ================== 1.1.1 第 9 题 ==================
// 9、求100到999之间的水仙花数，并求出所有水仙花数的和。

var totalNarcissistic = 0;

for (var c = 100; c <= 999; c++) {
  var gw = c % 10;               // 个位
  var sw = Math.floor(c / 10) % 10; // 十位
  var bw = Math.floor(c / 100);  // 百位

  var sumCube = gw * gw * gw + sw * sw * sw + bw * bw * bw;
  if (sumCube === c) {
    console.log("水仙花数：", c);
    totalNarcissistic += c;
  }
}

console.log("所有水仙花数的和为：" + totalNarcissistic);

// ================== 1.1.1 第 10 题 ==================
// 10、找出四位整数abcd中满足 (ab+cd)^2 = abcd 的数，统计个数并求和。

var countSpecial = 0;
var sumSpecial = 0;

for (var d = 1000; d <= 9999; d++) {
  var ab = Math.floor(d / 100); // 前两位
  var cd = d % 100;             // 后两位
  var s = ab + cd;

  if (s * s === d) {
    console.log("满足 (ab+cd)^2 = abcd 的数：", d);
    countSpecial++;
    sumSpecial += d;
  }
}

console.log("满足条件的四位数个数为：" + countSpecial);
console.log("满足条件的四位数的和为：" + sumSpecial);

// ================== 1.1.2 第 1 题 ==================
// 1、分别打印：0-100奇数， 偶数和

var oddSum = 0;
var evenSum = 0;

for (var e = 0; e <= 100; e++) {
  if (e % 2 === 0) {
    evenSum += e;
  } else {
    oddSum += e;
  }
}

console.log("0~100 偶数和：" + evenSum);
console.log("0~100 奇数和：" + oddSum);

// ================== 1.1.2 第 2 题 ==================
// 2、输出1-1000之间能被5整除的数，并且每行输出3个

var count5 = 0;
var line3 = "";

for (var f = 1; f <= 1000; f++) {
  if (f % 5 === 0) {
    count5++;
    line3 += f + "\t";
    if (count5 % 3 === 0) {
      console.log(line3);
      line3 = "";
    }
  }
}
if (line3 !== "") {
  console.log(line3);
}

// ================== 1.1.2 第 3 题 ==================
// 3、求100以内所有能被3整除，但不能被5整除的数字之和

var sum3Not5 = 0;

for (var g = 1; g < 100; g++) {
  if (g % 3 === 0 && g % 5 !== 0) {
    sum3Not5 += g;
  }
}

console.log("100 以内能被3整除但不能被5整除的数字之和：" + sum3Not5);

// ================== 1.1.2 第 4 题 ==================
// 4、嵌套for循环9*9乘法表

for (var h = 1; h <= 9; h++) {
  var row = "";
  for (var m = 1; m <= h; m++) {
    row += m + "×" + h + "=" + (m * h) + "\t";
  }
  console.log(row);
}

// ================== 1.1.2 第 5 题 ==================
// 5、运用break结束当前的循环,计算1,2,3,4,5这一组数据,
// 但要求只计算前三个数的和

var sumBreak = 0;
for (var p = 1; p <= 5; p++) {
  if (p > 3) {
    break;
  }
  sumBreak += p;
}
console.log("只计算前三个数的和：" + sumBreak);

// ================== 1.1.2 第 6 题 ==================
// 6、运用continue跳过当前的循环,计算1,2,3,4,5这一组数据,
// 但要求只计算1,2,3,5的和

var sumContinue = 0;
for (var q = 1; q <= 5; q++) {
  if (q === 4) {
    continue;
  }
  sumContinue += q;
}
console.log("只计算 1,2,3,5 的和：" + sumContinue);

// ================== 1.1.2 第 7 题 ==================
// 7、在控制台打印出一个四行五列的长方形,用*表示

for (var r = 1; r <= 4; r++) {
  var lineRect = "";
  for (var s2 = 1; s2 <= 5; s2++) {
    lineRect += "*";
  }
  console.log(lineRect);
}

// ================== 1.1.2 第 8 题 ==================
// 8、在控制台打印出一个五行的直角三角形和等腰三角形

// 直角三角形
for (var t = 1; t <= 5; t++) {
  var lineRight = "";
  for (var u = 1; u <= t; u++) {
    lineRight += "*";
  }
  console.log(lineRight);
}

console.log("------");

// 等腰三角形
var rows = 5;
for (var v = 1; v <= rows; v++) {
  var lineIso = "";
  for (var sp = 1; sp <= rows - v; sp++) {
    lineIso += " ";
  }
  for (var k2 = 1; k2 <= 2 * v - 1; k2++) {
    lineIso += "*";
  }
  console.log(lineIso);
}

// ================== 1.1.2 第 9 题 ==================
// 9、随机产生一个小于10的整数n，输出它的阶乘。

var nRand = Math.floor(Math.random() * 10); // [0,9]
console.log("随机产生的 n 为：" + nRand);

var fact = 1;
for (var w = 1; w <= nRand; w++) {
  fact *= w;
}
console.log(nRand + " 的阶乘为：" + fact);

// ================== 1.1.2 第 10 题 ==================
// 10、统计[1,100]之间有多少个质数。

var primeCount = 0;

for (var x = 2; x <= 100; x++) {
  var isPrime = true;
  for (var y = 2; y <= Math.sqrt(x); y++) {
    if (x % y === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("质数：" + x);
    primeCount++;
  }
}

console.log("1~100 之间质数个数为：" + primeCount);

// ================== 1.1.2 难题 ==================
// 【难】从随机产生某个【1-100】十进制整数，转换成对应的二进制整数并输出。

var num10 = Math.floor(Math.random() * 100) + 1;
console.log("随机产生的十进制数：" + num10);

// 方法一：toString(2)
var bin1 = num10.toString(2);
console.log("二进制（方法一）：" + bin1);

// 方法二：自己循环除以 2
var tmp = num10;
var bin2 = "";
while (tmp > 0) {
  bin2 = (tmp % 2) + bin2; // 余数在前
  tmp = Math.floor(tmp / 2);
}
console.log("二进制（方法二）：" + bin2);