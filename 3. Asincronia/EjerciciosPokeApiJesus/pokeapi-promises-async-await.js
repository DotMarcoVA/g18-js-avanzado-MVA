let pokemones;
const validApiPokemones= () => {
    //return new Promise((resolve, reject)=>{
        //setTimeout(() => {
            console.log('2- Validando la api');

           return fetch("https://pokeapi.co/api/v2/pokemon/ditto21")
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
 }


async function main(){
    console.log('1 loading information..');
    try{
        const response = await validApiPokemones();
        const pokemones= await response.json();
        console.log('2 pokemones: ', pokemones); 
        }
    catch (error){
        console.log('ERROR: ' + error);
    }
    console.log('3 final: ');
}

main()