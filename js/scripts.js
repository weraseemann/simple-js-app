let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl ='https://pokeapi.co/api/v2/pokemon/';

    
      function add(pokemon) {
        if (typeof (pokemon) === 'object' && 'name' in pokemon && 'detailsUrl'in pokemon) {
        pokemonList.push(pokemon);
         } else {
        console.log('wrong data type');
         }
        }
    
      function getAll() {
        return pokemonList;

      }
      //add unordered list <ul>, list of items <li> and <button> with innerText
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
        return fetch (apiUrl).then(function (response) {
            return response.json();
        }).then(function (json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
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
          let responseJson = response.json();
            return responseJson;
        }).then(function (details){
            item.imgUrl = details.sprites.front_default;
            item.height = details.height;
            item.types =details.types;
        }).catch(function (e){
            console.error(e);
        });
      }
    
      function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function() {
            showModal(item.name, 'Height: ' + item.height, item.imgUrl);
      });
      }   

      let modalContainer = document.querySelector('#modal-container');
        
      function showModal(title, text, imgUrl) {
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button'); //add Close-button
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let contentElement = document.createElement('p'); 
        contentElement.innerText = text;

        let imgElement = document.createElement('img');
        imgElement.src = imgUrl; 

        modal.appendChild(closeButtonElement); 
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imgElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
      }

      function hideModal() { //to remove the modal by clicking to ESC
        modalContainer.classList.remove('is-visible');
      }
    
        window.addEventListener('keydown', (e) => { // to remove the modal with ESC key
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
        });

    //to remove the modal when user cklicks outside of the modal
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay (parentElement)
        modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
                hideModal();
        }
        });

        // document.querySelector('#show-modal').addEventListener('click', () => {
        //     showModal('Modal title', 'Modal text!');
        //     });
        
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

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
});
});


