var apiNews = {
  getNews(){
      
    var key = "87b58285e28144dfa2aa9b93517de5a9";
    var url = "https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=latest&apiKey="+key;
    console.log(url);
    return fetch(url).then((response) => response.json());
  }
};

module.exports = apiNews;

