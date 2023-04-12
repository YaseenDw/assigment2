function fetchRandomPokemon() {
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonHeight = document.getElementById('pokemon-height');
    const randomNumber = Math.floor(Math.random() * 898) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        pokemonName.textContent = `Random Pokemon: ${data.name}`;
        pokemonHeight.textContent = `Random Pokemon Height: ${data.height}`;
      })
      .catch(error => console.error(error));
  }