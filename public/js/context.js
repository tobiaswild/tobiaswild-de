let all = document.getElementById('all')
let popup = document.getElementById('popup')

all.addEventListener('contextmenu', function (e) {
    e.preventDefault()
    popup.style.setProperty('visibility', 'visible')
    return false
})

popup.addEventListener('mousedown', function (e) {
    e.preventDefault()
    popup.style.setProperty('visibility', 'hidden')
    return false
})

popup.addEventListener('contextmenu', function (e) {
    e.preventDefault()
    return false
})
