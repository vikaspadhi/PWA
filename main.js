const BASE_URL ="https://newsapi.org/v2/";
const KEY = "apiKey=2941c0e4a01f45ada8f9c866cea4b3be";

container = document.getElementById('newslist');

const getTodoItems = async () => {
  try 
  {
    const response =
      await axios.get(`${BASE_URL}everything?q='ALL'&${KEY}`);
    news_list=response.data.articles
    console.log(news_list)
    let design = ``
    news_list.map((item)=>{
        design += `<div class="col-12 col-md-3 my-1 p-1">
          <div class="card m-0">
            <img src="${item.urlToImage}" class="card-img-top card-img" alt="..."/>
            <div class="card-body">
              <p class="card-text">
                ${item.title}
              </p>
            </div>
          </div>
        </div>`;
    })
    
    container.innerHTML = design

    
  } 
  catch (errors) 
  {
    console.error(errors);
  }
};

getTodoItems();


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}