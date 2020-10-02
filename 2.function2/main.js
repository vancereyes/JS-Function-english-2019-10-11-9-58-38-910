function palindrome(message){

 

var splitMsg = message.split("");
var reverseMsg = splitMsg.reverse();
var joinMsg = reverseMsg.join("");

 

if (message == joinMsg){
return true;
} else {
return false;
 }
}

palindrome('hello');
palindrome('abcba');