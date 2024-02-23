# pokedex

Project description

Pokedex is a dynamic and interactive web application which displays a list of Pokemons and allows a user to interact with each pokemon from the list to view the details.

The JavaScript program code uses an API to fetch a list of Pokémon and their details, and then displays them on the web page. The code defines a IIFE function called pokemonRepository() that encapsulates the list of Pokémon and provides methods to add a new Pokémon, retrieve the full list and load Pokémon details from the API.

The addListItem() method dynamically creates a list of Pokémon on the web page and adds a button for each Pokémon to show more details. The loadList() method fetches the Pokémon list from the API, and the loadDetails method fetches additional details for each Pokémon, such as its image, height and type.

The showDetails() method displays the Pokémon's details in a modal, which is a Bootstrap component, when the corresponding button is clicked. This modal includes the Pokémon's image, name, height and type.

With the JavaScript code it is built a dynamic and interactive web application for users to browse and view details of different Pokémon.

The App is built with HTML, JS, Jquery, CSS and Bootstrap Components.

Project dependencies:

-all dependencies are included in the code.
-Bootstrap 4.3.1 is used for the user interface elements;
-the Project API: PokeAPI - https://pokeapi.co/api/v2/pokemon/?limit=60
-JavaScript version - ES6


EsLint and Prettier-Code formatter
