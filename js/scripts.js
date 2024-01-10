let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl ='https://pokeapi.co/api/v2/pokemon/';

    
      function add(pokemon) {
        pokemonList.push(pokemon);
      }
    

      function getAll() {
        return pokemonList;
      }
      function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
      }
    
      function loadList() {
        return fetch (apiUrl).then(function (response){
            return response.json();
        }).then(function (json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e){
            console.error(e);
        });
      }
      function loadDetails(item){
        let url = item.detailsUrl;
        return fetch(url).then(function (response){
            return response.json();
        }).then(function (details){
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
        }).catch(function(e){
            console.error(e);
        });
      }
      function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function(){
            console.log(item);
        });
      }

    return {
      
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails:showDetails,
    };
  })();


  console.log(pokemonRepository.getAll());

//To add a pokemon to a repository:
//pokemonRepository.add({name: 'Charmeleon', height: 3.07, type: 'fire'});
//   console.log(pokemonRepository.getAll());

//to print the repository 
// pokemonRepository.getAll().forEach(function(pokemon) {
//      if (pokemon.height > 3) {
//          document.write('<p>', pokemon.name + ' - ' + pokemon.height + ' Wow, that\'s big!; </p>');
//     } else {
//         document.write('<p>', pokemon.name + ' - ' + pokemon.height + '; </p>');
//     }
// });

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
});
});

// let pokemonList = [
//     {
//     name: 'Bulbasaur',
//     height: 7, 
//     type:['grass', 'poison']
//     },
//     {
//     name: 'Venusaur',
//     height: 2, 
//     type:['grass', 'poison']
//     },
//     {
//     name: 'Charmander',
//     height: 0.6, 
//     type:'fire'
//     }
// ]
// for (let i=0; i<pokemonList.length; i++){
//     if (pokemonList[i].height>3)
//     {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")"+ " - WOW! That's big!<br>");
// } else 
//     {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
// }
// }

// Used a forEach() function instead of the for loop.
// pokemonList.forEach(function (pokemon) {
//     document.write('<p>' + pokemon.name +' (height: ' + pokemon.height + '; type: ' + pokemon.type + ')</p>');
// });
//Another way: 
// function myLoopFunction(pokemon) {document.write('<p>' + pokemon.name +' (height: ' + pokemon.height + '; type: ' + pokemon.type + ')</p>');
// };
// pokemonList.forEach(myLoopFunction);

// let pokemonRepository = (function() {
//     let repository = [
//       {name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
//       {name: 'Venusaur', height: 2, types: ['grass', 'poison']},
//       {name: 'Charmander', height: 0.6, type: 'fire'},
//     ];
    
//       function add(pokemon) {
//         repository.push(pokemon);
//       }
//       function getAll() {
//         return repository;
//       }
//       function addListItem(pokemon) {
//         let pokemonList = document.querySelector('.pokemon-list');
//         let listpokemon = document.createElement('li');
//         let button = document.createElement('button');
//         button.innerText = pokemon.name;
//         button.classList.add('button-class');
//         listpokemon.appendChild(button);
//         pokemonList.appendChild(listpokemon);
//         button.addEventListener('click', function (event) {
//             console.log(event);
//           });
//         button.addEventListener('click', function (event) {
//             showDetails(pokemon);
//         });
//       }
//       function showDetails(pokemon) {
//           console.log(pokemon);
//       }
//     return {
      
//       add: add,
//       getAll: getAll,
//       addListItem: addListItem,
//       showDetails:showDetails,
//     };
//   })();


//   console.log(pokemonRepository.getAll());
//   pokemonRepository.add({name: 'Charmeleon', height: 3.07, type: 'fire'});
//   console.log(pokemonRepository.getAll());

// //to print the repository 
// // pokemonRepository.getAll().forEach(function(pokemon) {
// //      if (pokemon.height > 3) {
// //          document.write('<p>', pokemon.name + ' - ' + pokemon.height + ' Wow, that\'s big!; </p>');
// //     } else {
// //         document.write('<p>', pokemon.name + ' - ' + pokemon.height + '; </p>');
// //     }
// // });

// pokemonRepository.getAll().forEach(function (pokemon) {
//     pokemonRepository.addListItem(pokemon);

// });
