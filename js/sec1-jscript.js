let button = document.getElementById("search-button");
let button1 = document.getElementById("search-button1");
let search = document.getElementById("search-input");
let search1 = document.getElementById("search-input1");
let reloadpage = document.getElementById("heading1");

function search_button()
{
  button.style.display = "none";
  search.style.display = "block";
}

function search_button1()
{
  button1.style.display = "none";
  search1.style.display = "block";
}

function showbar() {
  const showbar = document.querySelector("#sidebar");
  showbar.style.display = "flex";
}

function hidebar() {
  const hidebar = document.querySelector("#sidebar");
  hidebar.style.display = "none";
}

function reload() {
  location.reload(true);
}

function home() {
  const element1 = document.getElementById("home");
  element1.scroll(0, element1.scrollHeight);
}

function category() {
  const element2 = document.getElementById("category");
  element2.scroll(0, element2.scrollHeight);
}

function trending() {
  const element3 = document.getElementById("trending");
  element3.scroll(0, element3.scrollHeight);
}

function recentnews() {
  const element4 = document.getElementById("recentnews");
  element4.scroll(0, element4.scrollHeight);
}

function clubranking() {
  const element5 = document.getElementById("clubranking");
  element5.scroll(0, element5.scrollHeight);
}

function sportArticle() {
  const element6 = document.getElementById("sportArticle");
  element6.scroll(0, element6.scrollHeight);
}