function reverseString(message){

var splitStr = message.split("");
var reverseArr = splitStr.reverse();
var joinArray = reverseArr.join("");

return joinArray;
}

reverseString("hello");