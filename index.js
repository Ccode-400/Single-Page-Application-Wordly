const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const word = input.value.trim();

  if (!word) {
    errorDiv.textContent = "Please enter a word.";
    return;
  }

  fetchWord(word);
});

// Fetch function using async and await
async function fetchWord(word) {
  try {
    errorDiv.textContent = "";
    resultDiv.innerHTML = "Loading...";

    const response = await fetch(https://api.dictionaryapi.dev/api/v2/entries/en/${word});

    if (!response.ok) {
      throw new Error("Word not found");
    }

    