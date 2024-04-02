async function botaoBuscar(){
    const input = document.getElementById("caixaBusca__input");
    const valorInput = input.value;
    if (!valorInput)
    {
        alert("Digite o nome ou ID do Pokemon");
        return
    }
    else
    {

        const url = 'https://pokeapi.co/api/v2/pokemon/' + valorInput;
        const resposta = await fetch(url);
        const pokemon = await resposta.json();
        const nomePokemon = document.getElementById("nomePokemon");
        const imagemPokemon = document.getElementById("imagemPokemon");
        const tipoPokemon = document.getElementById("tipoPokemon");
        
        var pokemonUpperCamelCase = pokemon.name;


        nomePokemon.innerText = '#' + valorInput + " - " + pokemonUpperCamelCase.toUpperCase();;
        imagemPokemon.src = pokemon.sprites.front_default;
        
        let tiposHtmlzado = ""
        for (let index = 0; index < pokemon.types.length; index++) {
            tiposHtmlzado += `<div class="tipo ${pokemon.types[index].type.name}">${pokemon.types[index].type.name.toUpperCase()}</div>`
        }
        tipoPokemon.innerHTML = tiposHtmlzado
    }
}

