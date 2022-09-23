const showResult = ({data}) => {
    document.getElementById("results").innerHTML = `${data.agreement}`;
}

module.exports = {
    showResult,
  }