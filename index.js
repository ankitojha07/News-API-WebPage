console.log("This is my Index js file");

// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '3ce23509387c4ea991c5b7bd14e126d3'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
  true


xhr.onload = function () {
  if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
            <h4>Breaking News</h4>
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <h3>${index+1}</h3>
                                <img src="${element['urlToImage']} " alt="News Image" width="600" height="300"> 
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                     ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
                        newsHtml += news;
                      });
                      newsAccordion.innerHTML = newsHtml;
                  }
                  else {
                      console.log("Some error occured")
                  }
              }
              
              xhr.send()
