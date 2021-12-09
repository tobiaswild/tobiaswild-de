let body = document.getElementsByTagName('body')[0]

body.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    return false
})
