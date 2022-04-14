//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

async function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  // fetch(url)
  //     .then(res => res.json()) // parse response as JSON
  //     .then(data => {
  //       console.log(data)
  //       document.querySelector('img').src = data.sprites.front_default
  //       document.querySelector('h3').innerText += data.abilities[0].ability.name
  //       document.querySelector('h3').innerText += data.abilities[1].ability.name
  //     })
  //     .catch(err => {
  //         console.log(`error ${err}`)
  //     });



      let resChoice = await fetch(url)
      let dataChoice = await resChoice.json()
      // console.log(dataChoice)

      document.querySelector('.choice').src = dataChoice.sprites.front_default

      document.querySelector('h2').innerText = "Name: " +choice.charAt(0).toUpperCase() + choice.slice(1)

      let resSpecies = await fetch(dataChoice.species.url)
      let dataSpecies = await resSpecies.json()
      // console.log(dataSpecies)

      let resEvolution = await fetch(dataSpecies.evolution_chain.url)
      let dataEvolution = await resEvolution.json()
      // console.log(dataEvolution)

      let firstEvo = dataEvolution.chain.species.name
      let secondEvo = dataEvolution.chain.evolves_to[0].evolves_to[0].species.name

      let resFirstPokeEvo = await fetch('https://pokeapi.co/api/v2/pokemon/' +firstEvo)
      let dataFirstPokeEvo = await resFirstPokeEvo.json()

      document.querySelector('.evoOne').src = dataFirstPokeEvo.sprites.front_default

      let resSecondPokeEvo = await fetch('https://pokeapi.co/api/v2/pokemon/' +secondEvo)
      let dataSecondPokeEvo = await resSecondPokeEvo.json()

      document.querySelector('.evoTwo').src = dataSecondPokeEvo.sprites.front_default

}
