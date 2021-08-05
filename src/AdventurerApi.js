class AdventurerApi {
  constructor(baseURL) {
    this.baseURL = baseURL;
  };

  fetchCharacters() {
    fetch(this.baseURL)
    .then(resp => resp.json())
    .then(data => Adventurer.renderChars(data))
  };

  // createCharacter(charObj) {
  //   const config = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(charObj)
  //   };

  //   fetch(this.baseURL, config)
  //   .then(resp => resp.json())
  //   .then(char => {
  //     const newChar = new Adventurer(char)
  //     newChar.renderChar();
  //   });
  // };

};