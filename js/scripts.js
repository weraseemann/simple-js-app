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
for (let i=0; i<pokemonList.length; i++){
    if (pokemonList[i].height>3)
    {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")"+ " - WOW! That's big!<br>");
} else 
    {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
}
}