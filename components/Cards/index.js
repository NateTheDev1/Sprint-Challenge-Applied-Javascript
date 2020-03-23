// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articlePrefix = "https://lambda-times-backend.herokuapp.com/articles";
const cardsContainer = document.querySelector(".cards-container");

axios
  .get(articlePrefix)
  .then(response => {
    handleData(response);
  })
  .catch(err => {
    console.log(err);
  });

const createCard = a => {
  const container = document.createElement("div");
  container.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = a.headline;
  container.appendChild(headline);

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = a.authorPhoto;
  imgContainer.appendChild(img);

  author.appendChild(imgContainer);

  const authorName = document.createElement("span");
  authorName.textContent = a.authorName;

  author.appendChild(authorName);

  container.appendChild(author);
  cardsContainer.appendChild(container);
};

const handleData = d => {
  console.log(d.data.articles);
  d.data.articles.javascript.forEach(a => {
    createCard(a);
  });
  d.data.articles.bootstrap.forEach(a => {
    createCard(a);
  });
  d.data.articles.technology.forEach(a => {
    createCard(a);
  });
  d.data.articles.jquery.forEach(a => {
    createCard(a);
  });
  d.data.articles.node.forEach(a => {
    createCard(a);
  });
};
