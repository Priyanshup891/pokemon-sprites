// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    const lebel = document.createElement('span');

    pokemon.classList.add('pokemon');

    lebel.innerText = `#${i}`;

    const img = document.createElement('img');

    img.src = `${baseURL}${i}.png`;
    
    pokemon.appendChild(img);
    pokemon.appendChild(lebel);
    container.appendChild(pokemon);
}