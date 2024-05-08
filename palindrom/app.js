document.getElementById("palindromeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.getElementById("inputText").value.toLowerCase();
    let reverse = userInput.split("").reverse().join("");
    let resultDiv = document.getElementById("result");
  
    if (userInput === reverse) {
      resultDiv.textContent = "Yes, it's a palindrome!";
    } else {
      resultDiv.textContent = "Sorry, it's not a palindrome.";
    }
  });
  



