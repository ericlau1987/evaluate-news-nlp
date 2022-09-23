const { isValidURL } = require('./checkValidURL')
const { fetchData } = require('/fetchData')
const { showResults } = require('./updateResult')

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let urlInput = document.getElementById('url').value

    console.log("::: Form Submitted :::")

    if (isValidURL(urlInput)) {
        const data = await fetchData('http://localhost:8080/check', {url: urlInput})
        showResults({data})

    } else {
        alert("Please provide a valid url.")
    }
}

export { handleSubmit }
