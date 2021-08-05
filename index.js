const api = new AdventurerApi('http://localhost:3000/adventurers');
// const charFormContain = document.getElementById('form-container');
// const charForm = document.getElementById('char-form');
// const toggleBtn = document.getElementById('toggle');
// const resetBtn = document.getElementById('clear');

document.addEventListener('DOMContentLoaded', () => {
  api.fetchCharacters();

  // toggleBtn.addEventListener('click', toggleCharForm);

  // resetBtn.addEventListener('click', clearForm);

  // charForm.addEventListener('submit', handleFormSubmit);
});

// const toggleCharForm = () => {
//   if (charFormContain.classList.contains('hidden')) {
//     charFormContain.classList.remove('hidden');
//     event.target.innerText = 'Hide Form';
//   } else {
//     charFormContain.classList.add('hidden');
//     event.target.innerText = 'Show Form';
//   };
// };

// const clearForm = () => {
//   charForm.reset();
// };

// const handleFormSubmit = () => {
//   event.preventDefault();
//   const name = document.getElementById('char-name').value;
//   const charClass = document.getElementById('char-class').value;
//   const race = document.getElementById('char-race').value;
//   const image = document.getElementById('char-image').value;

//   const charObj = { name, charClass, race, image };
//   api.createCharacter(charObj);
  
// };