let pokemones;

console.log('------------API POKEMON CALLBACK---------------');

const apiPokemon = () => {
    // handleAsincronia (llamar a la api con fetch)
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then((data) => {
        pokemones = data;
        console.log('2 pokemones: ', pokemones);  })
    //.then( ()=> {console.log('3 final: ');}    )
    .catch(error =>{
        console.log('error');
        //console.log('3 final: ');
    })
    .finally(()=>{
        console.log('3 final: ');
    });

};

const api= (param) => {
    param();
}

console.log('1 loading information..');
api(apiPokemon);
