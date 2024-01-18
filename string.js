const str = "North";
const nbsp = " ";
const str2 = "America";

console.log(str.concat(nbsp, str2));

function conStr(a, b) {
  return a + b;
}

conStr(str, str2);

console.log(conStr(str, str2));
