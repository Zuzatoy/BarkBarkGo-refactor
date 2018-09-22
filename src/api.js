import request from 'superagent'

const rootUrl = 'http://localhost:3000/api'


export function getRSS() {
  return window.fetch(rootUrl + '/rss')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getRandomJoke() {
  return window.fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}



export function getGoodLisaData() {
  return window.fetch('http://belikebill.azurewebsites.net/billgen-API.php', {
    method: 'POST',
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}