function showSectionHideOthers(section){
  const sectionElement = document.getElementById(section);

  const sections = document.querySelectorAll("div.section");

  console.log(sections);
  
  sections.forEach(section => {
    section.style.display = "none";
  });

  sectionElement.style.display = "block";
}

function rollDice(){
    
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    console.log()

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value); 
        images.push(`<img src="src/images/dice_${value}.png" alt="Dice ${value}">`);
    }

    console.log(`[DEBUG] Number of dice: ${numOfDice}, Values: [${values}]`);
    console.log(`[DEBUG] Images: ${images}`);

    // displaying result of throwing dices 
    diceResult.textContent = `Dices: ${values.join(', ')}`;

    // create single string with links to all images
    diceImages.innerHTML = images.join('');
}


//----google maps integration----
