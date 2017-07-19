// let myHeaders = new Headers();
//
// let myInit = {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'no-cors'
//   origin: recipepuppy.com/
// }

let instances = document.getElementById('instances');
instances.innerHTML += ''
fetch("https://crossorigin.me/http://www.recipepuppy.com/api/?q=avocado")
  .then(function(response){
  console.log(response.status)

})

fetch("https://crossorigin.me/http://www.recipepuppy.com/api/?q=avocado")
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
      // </section>`;
   };
 });

  }
 )
 .catch(function(err) {
  console.log("Fetch Error :-S", err);
 });



//
// if (
//        response.headers.get("content-type").indexOf("application/json") !== -1
//      ) {
//        // checking response header
//        //.json() parses the response.
//        return response.json();
//      } else {
//        throw new TypeError(
//          'Response from "' + url + '" has unexpected "content-type"'
//        );
//      }
//    })
//    .then(function(data) {
//      console.log('JSON from "' + url + '" parsed successfully!');
//      console.log(data);
//    })
//    .catch(function(error) {
//      console.error(error.message);
//    });
// }
