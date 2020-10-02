function reverseString(str){

var splitStr = str.split("");
var reverseArr = splitStr.reverse();
var joinArray = reverseArr.join("");

return joinArray;
}

reverseString("hello");