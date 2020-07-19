const button = document.getElementById('button')
const jokeText = document.getElementById('joke-text')
const jokeUrl = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"

jokeText.innerText = ""

async function getJoke() {
    try {
        const response = await fetch(jokeUrl)
        const data = await response.json()
        jokeText.innerText = await data.joke
    } catch (error) {
        console.log("Error!", error)
        jokeText.innerText = "Sorry, \nsomething went wrong.\nPlease, try again later!"
    }
}

button.addEventListener('click', getJoke)
