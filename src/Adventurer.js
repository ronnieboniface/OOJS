class Adventurer {
  static all = [];

  constructor({name, charClass, race, image}) {
    this.name = name;
    this.charClass = charClass;
    this.race = race;
    this.image = image;

    Adventurer.all.push(this);
  };

  sayHello(){
    return `Hello! I'm ${this.name} the ${this.race} ${this.charClass}!`;
  };

  static nameCharClass() {
    Adventurer.all.forEach(char => {
      console.log(`${char.name} - ${char.charClass}`)
    });
  };

  static renderChars(chars) {
    return chars.map(char => {
      const character = new Adventurer(char)
      character.renderChar();
    });
  };

  renderChar() {
    const container = document.getElementById('char-list');
    const charCard = document.createElement('section');
    charCard.classList.add('card', 'p-2', 'm-2');

    const charName = document.createElement('h1');
    charName.classList.add('card-header-title', 'is-centered', 'is-size-4')

    const charClass = document.createElement('p');
    charClass.classList.add('is-centered', 'is-size-6');

    const charRace = document.createElement('p');
    charRace.classList.add('is-centered', 'is-size-6');

    charName.innerText = this.name;
    charClass.innerText = `Class: ${this.charClass}`;
    charRace.innerText = `Race: ${this.race}`;

    charCard.classList.add = "character";

    const charImgDiv = this.createImgElement();

    const attrArr = Array.from([charImgDiv, charName, charClass, charRace]);

    attrArr.forEach(attr => {
      charCard.append(attr);
    });

    container.appendChild(charCard);
  };

  createImgElement() {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('card-image');

    const figure = document.createElement('figure');
    figure.classList.add('image', 'is-1by1')

    const charImg = document.createElement('img');
    charImg.classList.add('char-img');
    charImg.src = this.image;

    figure.appendChild(charImg);
    imgDiv.appendChild(figure);

    return imgDiv;
  };
};