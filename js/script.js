
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
  }
]



console.log(teamCards)


//inizializzo i contenuti html

const cardContainer = document.querySelector('.team-container');

const teamCard = document.createElement('div');
teamCard.className = 'team-card';


const cardImage = document.createElement('div');
cardImage.className = 'card-image';
cardImage.innerHTML = `

<img
src="${teamCards[1].cardImage}"
alt="${teamCards[1].cardName}"
/>

`;

const cardText = document.createElement('div');
cardText.className = 'card-text';
cardText.innerHTML = `
<h3>${teamCards[1].cardName}</h3>
<p>${teamCards[1].cardJob}</p>

`;

teamCard.append(cardImage);
teamCard.append(cardText);
cardContainer.append(teamCard);

//estraggo i dati dalla card singola 
//appendo i dati nel Dom


