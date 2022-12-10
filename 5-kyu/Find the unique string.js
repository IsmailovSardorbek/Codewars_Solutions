/*
    There is an array of strings. All strings contains similar letters except one. Try to find it!

    findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
    findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
* */

function findUniq(arr) {
  let res = arr
    .map((el) => el.trim().toLowerCase().split(""))
    .map((el) => [...new Set(el)])
    .map((el) => el.reduce((total, item) => total + item.charCodeAt(0), 0));

  let data = {};

  for (let i = 0; i < res.length; i++) {
    let current = res[i];
    if (data[current]) {
      data[current] += 1;
    } else {
      data[current] = 1;
    }
  }
  let temp = [];

  for (let key in data) {
    temp.push([key, data[key]]);
  }
  temp.sort((a, b) => a[1] - b[1]);

  let uniq = Number(temp[0][0]);

  for (let i = 0; i < res.length; i++) {
    if (res[i] === uniq) {
      return arr[i];
    }
  }
}
