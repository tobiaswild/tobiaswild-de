// https://github.com/ottomated/portfolio/blob/master/js/age.js

let ageEl = document.getElementById('age')

setInterval(() => {
    let time =
        (new Date() - new Date(1107333960)) / (1000 * 60 * 60 * 24 * 365.25) -
        35
    ageEl.innerText = time.toString().substring(0, 12)
}, 50)
