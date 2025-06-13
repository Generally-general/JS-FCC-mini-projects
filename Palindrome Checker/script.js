const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", () => {
  textInput.value = "";
  result.innerText = "";
  textInput.focus();
});

function check_palindrome(str) {
  const lowerStr = str.toLowerCase();
  const regexStr = /[^a-z0-9]/g;
  const currStr = lowerStr.replace(regexStr, '');
  const reverse = currStr.split('').reverse().join('');

  if(reverse !== currStr){
    return false;
  }
  return true;
}

checkButton.addEventListener("click", () => {
  if(textInput.value === "") {
    alert("Please input a value");
  } else if(check_palindrome(textInput.value)) {
    result.innerText = `${textInput.value} is a palindrome`
  } else {
    result.innerText = `${textInput.value} is not a palindrome`
  }
});