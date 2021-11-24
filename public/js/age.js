let ageEle = document.getElementById('age')

setInterval(() => {
    let time =
        (new Date() - new Date(1107333960)) / (1000 * 60 * 60 * 24 * 365.25) -
        35
    ageEle.innerText = time.toString().substring(0, 4)
}, 50)
