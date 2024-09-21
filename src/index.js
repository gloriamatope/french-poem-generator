function displayPoem(response) {
    console.log("poem generated");

     new Typewriter('#poem', {
    //strings: ['Hello', 'World', 'Gloria😚'],//erases when you use array
   
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
        delay: 1
}); 
}

function generatePoem(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "c05bc3a7aca0034e2aaf87b4fb0a01ot";
    let prompt = `User instruction are: Generate a poem about ${instructionInput.value}`;
    let context = "You are a romantic Poem expert and love to write short poems.Your mission is generate a 4 line poem in basic HTML and separate each line with a < br/>.Do not include a tittle in the poem. Sign the poem with 'SheCodes AI'inside a <strong> element and do not include html tag inside the poem.Make sure to follow your user instruction.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class = "generating">⏳Generating a poem about ${instructionInput.value}</div>`;

    console.log("Genarating poem");
    console.log(`Prompt:${prompt}`);
    console.log(`Prompt:${context}`);
    

        axios.get(apiUrl).then(displayPoem);
    //Build the API URL
    //Make a to the API
    //Display the generated poem
  
}




let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit",generatePoem)
