const nomePokemon = document.querySelector(".pokemor__nome");
const nmeroPokemon = document.querySelector(".numero_do_pokemon");
const imagemPokemon = document.querySelector(".imagem__pokemon");

// formulario
const formularioPokemon = document.querySelector(".formulario");
const impurteoPokemon = document.querySelector(".inpute__de__pesquisa");

// botoes
const botaoDeIr = document.querySelector(".btn-next")
const botaoDeVoltar = document.querySelector(".btn-prev")

let valorDoID = 1;

const APIPokemon = async (pokemon) =>{
    const APIresponce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
   
    if(APIresponce.status === 200){
        const APIPokemonConverida = await APIresponce.json()
        return APIPokemonConverida
    }

    
}

const mostarPokemon = async (pokemon)=>{
    nomePokemon.innerHTML = 'Loaing...'
    nmeroPokemon.innerHTML ='...'
    const dataPokemon = await APIPokemon(pokemon);

    if(dataPokemon){
    imagemPokemon.style.display='block'
    nomePokemon.innerHTML= dataPokemon.name;
    nmeroPokemon.innerHTML= dataPokemon.id;
    imagemPokemon.src = dataPokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    impurteoPokemon.value = ''
    valorDoID = dataPokemon.id
    } else{
        imagemPokemon.style.display = 'none'
        nomePokemon.innerHTML ="ERRO"
        nmeroPokemon.innerHTML ="00"
    }
}


formularioPokemon.addEventListener('submit', (event)=>{
    event.preventDefault();

    mostarPokemon(impurteoPokemon.value.toLowerCase());

});

botaoDeIr.addEventListener("click",()=>{
    valorDoID += 1
    mostarPokemon(valorDoID)
})
botaoDeVoltar.addEventListener("click",()=>{
    if(valorDoID > 1){
    valorDoID -= 1
    mostarPokemon(valorDoID)}
})

mostarPokemon(valorDoID)