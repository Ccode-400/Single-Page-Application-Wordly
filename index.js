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

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!response.ok) {
      throw new Error("Word not found");
    }

    const data = await response.json();
    displayWord(data[0]);

  } catch (error) {
    resultDiv.innerHTML = "";
    errorDiv.textContent = error.message;
  }
}

// Display word 
function displayWord(data) {
  resultDiv.innerHTML = "";

  const word = data.word;
  const phonetic = data.phonetic || "Not available";

  const meaning = data.meanings[0];
  const partOfSpeech = meaning.partOfSpeech;

  const definition = meaning.definitions[0].definition;
  const example = meaning.definitions[0].example || "No example available";

  // Get audio
  const audio = data.phonetics.find(p => p.audio)?.audio;

  