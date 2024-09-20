function generatePoem(event) {
    event.preventDefault();
   
   ;
    new Typewriter('#poem', {
    //strings: ['Hello', 'World', 'Gloria😚'],//erases when you use array
    strings: 'La tombe dit a la rose',
    autoStart: true,
    cursor: "",
        delay: 1
});
}




let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit",generatePoem)
