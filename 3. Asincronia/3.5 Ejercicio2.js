/**
 * Normal
 */

const fetch = require("cross-fetch");

var url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((resp) => {
        console.log(resp);
    });

/**
 * Callbacks
 */

let pokemones;

console.log("------------API POKEMON CALLBACK---------------");

const apiPokemon = () => {
    // handleAsincronia (llamar a la api con fetch)
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then((data) => {
            pokemones = data;
            console.log("2 pokemones: ", pokemones);
        })
        //.then( ()=> {console.log('3 final: ');}    )
        .catch((error) => {
            console.log("error");
            //console.log('3 final: ');
        })
        .finally(() => {
            console.log("3 final: ");
        });
};

const api = (param) => {
    param();
};

console.log("1 loading information..");
api(apiPokemon);

/**
 * Promises
 */

console.log("------------API POKEMON PROMISES THEN CATCH -----------------");

const validApiPokemones1 = () => {
    //return new Promise((resolve, reject)=>{
    //setTimeout(() => {
    console.log("2- Validando la api");

    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then((data) => {
            pokemones = data;
            console.log("2 pokemones: ", pokemones);
            //resolve('ok');
        })
        .catch((error) => {
            // reject('error');
        });
    //}, 0);
    // });
};

console.log("1 loading information..**");
validApiPokemones1();

/**
 * Async-Wait
 */

const validApiPokemones2 = () => {
    //return new Promise((resolve, reject)=>{
    //setTimeout(() => {
    console.log("2- Validando la api");

    return fetch("https://pokeapi.co/api/v2/pokemon/ditto21");
    // .then(response => response.json())
    // .then((data) => {
    //     pokemones = data;
    //     console.log('2 pokemones: ', pokemones);
    //     resolve('ok');
    // })
    // .catch(error =>{
    //     reject('error');
    // });

    //}, 0);
    // });
};

async function main() {
    console.log("1 loading information..");
    try {
        const response = await validApiPokemones2();
        const pokemones = await response.json();
        console.log("2 pokemones: ", pokemones);
    } catch (error) {
        console.log("ERROR: " + error);
    }
    console.log("3 final: ");
}

main();
