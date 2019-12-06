// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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





function CardCreator(arg)  {

    // new elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div')
        const img = document.createElement('img');
    const byLine = document.createElement('span');

    // class list
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    img.src = arg.authorPhoto;

    //text content
    headline.textContent = arg.headline;
    author.textContent = arg.authorName;

    //append children to parent
    card.appendChild(headline);
    headline.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(byLine);    
    

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
    const cardContainer = document.querySelector('.cards-container');
    const values = Object.values(res.data.articles);
    values.forEach(items => {
        for (let object of items) {
            cardContainer.appendChild(CardCreator(object));    
        }      
    });  
});
