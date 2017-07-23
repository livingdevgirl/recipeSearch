// let myHeaders = new Headers();
//
// let myInit = {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'no-cors'
//   origin: recipepuppy.com/
// }

let searchbar = document.getElementById('searchbar')
document.querySelector('#submit').addEventListener("click", function() {


let instances = document.getElementById('instances');
instances.innerHTML += ''
fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchbar.value}`)
  .then(function(response){
  console.log(response.status)

})

fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchbar.value}`)
 // Data is fetched and we get a promise.
 .then(
  // The promise returns a response from the server.
  function(response) {
   // We process the response accordingly.
   if (response.status !== 200) {
    console.log(response.status);
    return;
   }
   response.json().then(function(data) {
        console.log("Here is the data:", data);
        console.log(data.results)
        for (let i = 0; i < data.results.length; i++) {

          instances.innerHTML +=`

      <section class=recipe><a href=${data.href}><h2>${data.results[i].title}</h2></a>
      <img src=${data.results[i].thumbnail} class="recipeImage"></img>
      <h3>${data.results[i].ingredients}</h3>
      </section>`;

      }
   });


  }
 )
 .catch(function(err) {
  console.log("Fetch Error :-S", err);
 });});

 
