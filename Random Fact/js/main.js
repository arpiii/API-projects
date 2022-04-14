//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = 'https://asli-fun-fact-api.herokuapp.com'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.data.fact
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}