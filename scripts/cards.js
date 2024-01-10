//TODO:  can implement extras here, to deal with team members or other stuff... 
var cards=[
  {
      title : "Trippa",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "https://github.com/uoa-compsci399-s2-2023/CarPool-DataDons",
      img: "img/project_imgs/trippa.png",
      extra : {
          team : "member 1, member 2 "
      }
  },
  {
      title : "Elysium",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "https://github.com/Jaorow/Elysium",
      img: "img/project_imgs/elysium.png",
  },
  {
      title : "barcode",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "https://github.com/Jaorow/Barcode_Detection",
      img: "img/project_imgs/barcode.png",
  },
  {
      title : "HyperLearn",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "https://github.com/Jaorow/hyperLearn",
      img: "img/project_imgs/hyperlearn.svg",
  },
  {
    title : "Old Gold",
    description : "description for test 1 this is a test card that will be replaced with real data at a later date",
    link : "https://github.com/Jaorow/hyperLearn",
    img: "img/project_imgs/old-gold.png",
  },
  {
    title : "Jamify",
    description : "description for test 1 this is a test card that will be replaced with real data at a later date",
    link : "https://github.com/Jaorow/Jamify",
    img: "img/project_imgs/jamify.png",
  },
]


// TODO: extend this functionality... 

function displayCards(cards) {
  var projectCards = ""

  // Create and append new cards
  cards.forEach(card => {
    card = `
      <div class="project-card">
        <img class="card-img" src="${card.img}" alt="${card.title}">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <a target="_blank" href="${card.link}">Learn More</a>
      </div>
    `;
    projectCards += card;
  });
  // projectCards += "</div>"
  document.getElementById("project-cards-container").innerHTML = projectCards;
}

displayCards(cards)