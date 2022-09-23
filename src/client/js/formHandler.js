const { isValidURL } = require('./checkValidURL')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlInput = document.getElementById('url').value

    console.log("::: Form Submitted :::")

    if (isValidURL(urlInput)) {
        fetch('http://localhost:8080/check')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
    })
    } else {
        alert("Please provide a valid url.")
    }

    fetch('http://localhost:8080/check')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
