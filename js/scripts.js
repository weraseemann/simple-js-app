let pokemonList = [
    {
    name: 'Bulbasaur',
    height: 7, 
    type:['grass', 'poison']
    },
    {
    name: 'Venusaur',
    height: 2, 
    type:['grass', 'poison']
    },
    {
    name: 'Charmander',
    height: 0.6, 
    type:'fire'
    }
]
// for (let i=0; i<pokemonList.length; i++){
//     if (pokemonList[i].height>3)
//     {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")"+ " - WOW! That's big!<br>");
// } else 
//     {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
// }
// }

// Used a forEach() function instead of the for loop.
pokemonList.forEach(function(pokemon) {
    document.write('<p>' + pokemon.name +' (height: ' + pokemon.height + '; type: ' + pokemon.type + ')</p>');
});
//Another way: 
// function myLoopFunction(pokemon) {document.write('<p>' + pokemon.name +' (height: ' + pokemon.height + '; type: ' + pokemon.type + ')</p>');
// };
// pokemonList.forEach(myLoopFunction);

let pokemonRepository = (function() {
    let pokemonList = [
      {name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
      {name: 'Venusaur', height: 2, types: ['grass', 'poison']},
      {name: 'Charmander', height: 0.6, type: 'fire'}
    ];
    
      function add(pokemon) {
        pokemonList.push(pokemon);
      }
      function getAll() {
        return pokemonList;
      }
      
    return {
      
      add: add,
      getAll: getAll
    };
  })();

  console.log(pokemonRepository.getAll());
  pokemonRepository.add({name: 'Charmeleon', height: 3.07, type: 'fire'});
  console.log(pokemonRepository.getAll());

//to print the repository 
pokemonRepository.getAll().forEach(function(pokemon) {
     if (pokemon.height > 3) {
         document.write('<p>', pokemon.name + ' - ' + pokemon.height + ' Wow, that\'s big!; </p>');
    } else {
        document.write('<p>', pokemon.name + ' - ' + pokemon.height + '; </p>');
    }
});