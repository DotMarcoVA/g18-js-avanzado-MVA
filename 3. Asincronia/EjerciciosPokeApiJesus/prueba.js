fetch("https://pokeapi.co/api/v2/pokemon/ditto21")
.then(response => response.json())
.catch(function(error) {
    console.log('error:')
});