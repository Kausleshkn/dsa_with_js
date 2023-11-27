// DP = recursion + memoziation

//  first dp problem - fibonacchi series;

var mem = [];
var fibRecursiveMem = function (n) {
    if (mem[n]) return mem[n];
    if (n <= 2) mem[n] = 1;
    else {
        mem[n] = fibRecursiveMem(n - 1) + fibRecursiveMem(n - 2);
    }
    return mem[n];
}

// console.log(fibRecursiveMem(8));

// DP Bottom Up approach (Optimized runtime)

var fibBottomUp = (n) => {
    var mem = [];
    for (var i = 0; i <= n; i++) {
        if (i == 0) mem[i] = 0;
        else if (i <= 2) mem[i] = 1;
        else {
            mem[i] = mem[i - 1] + mem[i - 2];
        }
    }
    return mem[n];
}

// console.log(fibBottomUp(10));

// DP Bottom Up approach (Optimized space)

var fibBottomUp2 = (n) => {

    let a = 0, b = 1, c = 0;
    if (n == 1) c = 1;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

//  Second DP problem -> Nth staire;

let nST = [];
function nTHstaire(n) {
    if (n == 0) return 1;
    if (n < 0) return 0;

    if (nST[n]) return nST[n];

    return nST[n] = nTHstaire(n - 1) + nTHstaire(n - 2);
}

// console.log(nTHstaire(8));

// console.log(nST);

//  Nth staire - Bottam UP Solution;

function nThbottamUP(n) {
    let nST = [];

    nST[0] = 0; nST[1] = 1; nST[2] = 2;

    for (let i = 3; i <= n; i++) {
        nST[i] = nST[i - 1] + nST[i - 2];
    }
    return nST[n];
}

// console.log(nThbottamUP(5));

//  Nth staire - Space Optimisation Solution;

function nThSpaceOpt(n) {

    let a = 0, b = 1, c = 0;

    for (let i = 1; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

// console.log(nThSpaceOpt(4));

// Third DP problem -> longest Pelidromeic subseqvence of String;

//  it's not a DP problem because it's single recursion call , mosly single recursion calls are not a DP problem; 

let maxlen = [];
function strSolve(str, i, j) {

    if (maxlen[[i, j]] !== undefined) return maxlen[[i, j]];

    if (i >= j) {
        return true;
    }
    else if (str[i] === str[j]) {
        return maxlen[[i, j]] = strSolve(str, i + 1, j - 1);
    }
    else if (str[i] !== str[j]) {
        return false;
    }
    else {
        return true;
    }
}

function longSubSeq(str) {

    let N = str.length - 1;
    let sp = -1, maxlen = 0;

    for (let i = 0; i <= N; i++) {
        for (let k = i; k <= N; k++) {

            if (strSolve(str, i, k)) {
                if (maxlen < k - i + 1) {
                    maxlen = k - i + 1;
                    sp = i;
                }
            }
        }
    }
    return str.substr(sp, maxlen);
}

// console.log(longSubSeq("nelevelcn"));


//  Fourth DP problem -> House robber -||;

let houses = [5, 2, 1, 8, 4, 1, 3, 9];

let robMem = [];
function maxRob(i, n, houseNum) {

    if (i > n) return 0;

    if (robMem[i]) return robMem[i];

    let take = houseNum[i] + maxRob(i + 2, n, houseNum);
    let skip = maxRob(i + 1, n, houseNum);

    return robMem[i] = Math.max(take, skip);
}

function maxTheft(houses) {

    let n = houses.length;

    let take_first = maxRob(0, n - 2, houses);
    robMem = [];
    let take_next = maxRob(1, n - 1, houses);

    return Math.max(take_first, take_next);

    // return maxRob(0, n, houses); // House robber- | code
}

// console.log(maxTheft(houses));

// House Robber - Bottam UP

function houseRobB_up(arr) {

    let mem = [];
    let n = arr.length;

    mem[0] = 0, mem[1] = arr[0];

    for (let i = 2; i <= n; i++) {

        let take = arr[i - 1] + mem[i - 2];
        let skip = mem[i - 1];
        mem[i] = Math.max(take, skip);
    }
    return mem;
}
// console.log(houseRobB_up(houses));
// console.log(houses);

// House Robber - space optimize;

function houseRobS_Op(arr) {

    let n = arr.length;

    let a = 0, b = arr[0], c = 0;

    for (let i = 2; i <= n; i++) {

        let take = arr[i - 1] + a;
        a = b;
        let skip = b;
        c = Math.max(take, skip);
        b = c;

    }
    return c;
}
// console.log(houseRobS_Op(houses));


// Fifth DP problem -> longest comman subseqvence in two string;

let str1 = "color", str2 = "rool";
let m = str1.length, n = str2.length;

let lcsMem = new Array(m + 1);

for (let i = 0; i < m + 1; i++) {
    lcsMem[i] = new Array(n + 1).fill(null);
}

function longestCommSub(s1, s2, i, j) {

    if (i >= m || j >= n) return 0;

    if (lcsMem[i][j]) return lcsMem[i][j];

    if (s1[i] == s2[j]) {
        return lcsMem[i][j] = 1 + longestCommSub(s1, s2, i + 1, j + 1);
    }

    return lcsMem[i][j] = Math.max(longestCommSub(s1, s2, i + 1, j),
        longestCommSub(s1, s2, i, j + 1));

}

// console.log(longestCommSub(str1, str2, 0, 0));

// console.log(lcsMem);

// Longest comman subseqvence - BottamUp;

function bottamUpLcs(s1, s2) {

    let m = str1.length, n = str2.length, dp = new Array(m + 1);

    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
    }

    for (let i = 0; i <= n; i++) {
        dp[0][i] = 0;
    }

    for (let i = 0; i <= m; i++) {
        dp[i][0] = 0;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp;
}

// console.log(bottamUpLcs(str1, str2));

// longest comman subseqvence - space optimized approch;

function lcsSpaceOpt(s1, s2) {

    let m = s1.length, n = s2.length;
    let curr = new Array(n + 1).fill(0);

    for (let i = 1; i <= m; i++) {
        let prev = curr[0];
        for (let j = 1; j <= n; j++) {
            let temp = curr[j];

            if (s1[i - 1] === s2[j - 1]) curr[j] = 1 + prev;
            else {
                curr[j] = Math.max(curr[j - 1], curr[j]);
            }
            prev = temp;
        }
    }
    return curr[n];
}

// console.log(lcsSpaceOpt(str1, str2));

// Sixth Dp problem - longest comman string;

function lcsStr(s1, s2, i, j, count) {

    if (i == s1.length || j == s2.length) return count;


    if (s1[i] === s2[j]) {
        return lcsStr(s1, s2, i + 1, j + 1, count + 1);
    }

    return Math.max(count, Math.max(lcsStr(s1, s2, i + 1, j, count),
        lcsStr(s1, s2, i, j + 1, count)));

}

// console.log(lcsStr("code", "decode", 0, 0, 0));

//  longest comman string - Bottam-Up Solution;

function lcsStrBottam_Up(s1, s2) {

    let m = s1.length; let n = s2.length; let res = 0;

    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                res = Math.max(res, dp[i][j])
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return res;
}

// console.log(lcsStrBottam_Up("decode", "codede"));

