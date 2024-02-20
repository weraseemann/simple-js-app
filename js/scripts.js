let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=60";

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("wrong data type");
    }
  }

  function getAll() {
    return pokemonList;
  }
  //add unordered list <ul>, list of items <li> and <button> with innerText
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");

    pokemonList.classList.add("list-group");
    listpokemon.classList.add("list-group-item");
    button.classList.add("btn", "btn-primary", "button-class");
    button.classList.add("btn", "btn-primary", "btn-block"); 
    button.setAttribute("data-target", "#exampleModal"); 
    button.setAttribute("data-toggle", "modal");
    button.innerText = pokemon.name;

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        let responseJson = response.json();
        return responseJson;
      })
      .then(function (details) {
        item.imgUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types.map((type) => type.type.name);
        item.abilities = details.abilities.map((ability) => ability.ability.name);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $("modal-header");

    //to clear the existing content of the modal
    modalTitle.empty();
    modalBody.empty();
    modalHeader.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElement = $('<img class ="modal-image"/>'); 
    imageElement.attr("src", item.imgUrl);
    let heightElement = $("<p>" + "Height: " + item.height + "</p>");
    let weightElement = $("<p>" + "Weight: " + item.weight + "</p>");
    let typesElement = $("<p>" + "Types: " + item.types + "</p>");
    let abilitiesElement = $("<p>" + "Abilities: " + item.abilities + "</p>");


    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});