const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const word = input.value.trim();

