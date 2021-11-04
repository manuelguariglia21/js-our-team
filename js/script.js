
//creo l'array di cards

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




//estraggo i dati dalla card singola 
//appendo i dati nel Dom

for(let i = 0; i < teamCards.length; i++){

//inizializzo i contenuti html

const cardContainer = document.querySelector('.team-container');

const teamCard = document.createElement('div');
teamCard.className = 'team-card';


const cardImage = document.createElement('div');
cardImage.className = 'card-image';
cardImage.innerHTML = `

<img
src="${teamCards[i].cardImage}"
alt="${teamCards[i].cardName}"
/>

`;

const cardText = document.createElement('div');
cardText.className = 'card-text';
cardText.innerHTML = `
<h3>${teamCards[i].cardName}</h3>
<p>${teamCards[i].cardJob}</p>

`;

teamCard.append(cardImage);
teamCard.append(cardText);
cardContainer.append(teamCard);
  
}

