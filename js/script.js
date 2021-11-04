
//creo l'array di cards
const cardContainer = document.querySelector('.team-container');
const teamCards = [

  {
    cardImage : 'img/wayne-barnett-founder-ceo.jpg',
    cardName : 'Wayne Barnett',
    cardJob : 'Founder & CEO'
  },

  {
    cardImage : 'img/angela-caroll-chief-editor.jpg',
    cardName : 'Angela Caroll',
    cardJob : 'Chief Editor'
  },

  {
    cardImage : 'img/angela-lopez-social-media-manager.jpg',
    cardName : 'Angela Lopez',
    cardJob : 'Social Media Manager'
  },

  {
    cardImage : 'img/barbara-ramos-graphic-designer.jpg',
    cardName : 'Barbara Ramos',
    cardJob : 'Designer'
  },

  {
    cardImage : 'img/scott-estrada-developer.jpg',
    cardName : 'Scott Estrada',
    cardJob : 'Developer'
  },

  {
    cardImage : 'img/walter-gordon-office-manager.jpg',
    cardName : 'Walter Gordon',
    cardJob : 'Office Manager'
  }
]



console.log(teamCards)

for(let i = 0; i < teamCards.length; i++){
  addCard(teamCards[i]);
}

//Aggiunta Card da HTML

//1. al click di 'Add' creo un nuovo Object vuoto
//2. al click di 'Add' prendo il contenuto di 'Name' e lo assegno a cardName del nuovo Object, prendo il contenuto di 'Role' e lo assegno a cardJob del nuovo Object e infine prendo il contenuto di 'Image' e lo assegno a cardImage del nuovo Object.

//prendo il bottone 'Add'

const btnAdd = document.getElementById('addMemberButton');

//Al click di 'Add'

btnAdd.addEventListener('click', function(){

//prendo i vari contenuti

const newName = document.getElementById('name').value;
console.log('Nome inserito:', newName);
const newImage = document.getElementById('image').value;
console.log('src immagine inserita:', newImage);
const newJob = document.getElementById('role').value;
console.log('Lavoro inserito:', newJob);

//creo il nuovo oggetto

const newCard = {
  cardImage : newImage,
  cardName : newName,
  cardJob : newJob
}

teamCards.push(newCard);
console.log(teamCards);

addCard(newCard);

}); //fine azione btn




//funzione addCard passando array come argomento lo aggiungi a teamCards

function addCard(card){

  //inizializzo i contenuti html

  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  
  
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  cardImage.innerHTML = `
  
  <img
  src="${card.cardImage}"
  alt="${card.cardName}"
  />
  
  `;
  
  const cardText = document.createElement('div');
  cardText.className = 'card-text';
  cardText.innerHTML = `
  <h3>${card.cardName}</h3>
  <p>${card.cardJob}</p>
  
  `;
  
  teamCard.append(cardImage);
  teamCard.append(cardText);
  cardContainer.append(teamCard);
    
  }