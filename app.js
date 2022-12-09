// Progression 1: create a function and fetch the api using axios

const articleGrid = document.getElementById('articleGrid')

function populateData(){
  axios.get('https://gnews.io/api/v4/top-headlines?token=1a9626e7302d8cd9e9640bd66180f36c&lang=en').then((res) => {
    const articles = res.data.articles
    articles.forEach((NewArticle) => {
      const articleElement = document.createElement('div')
      const articleTitle = document.createElement('h3')
      const articleImage = document.createElement('img')
      const articleContent = document.createElement('p')
      articleTitle.innerText = NewArticle.title;
      articleImage.setAttribute('src', NewArticle.image);
      articleContent.innerHTML = NewArticle.content;
      articleElement.appendChild(articleTitle);
      articleElement.appendChild(articleImage);
      articleElement.appendChild(articleContent);
      articleElement.setAttribute('class','article');
      articleGrid.appendChild(articleElement);
    })
  })
}
populateData();
