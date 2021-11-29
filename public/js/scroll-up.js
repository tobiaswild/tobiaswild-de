var mybutton = document.getElementById('top')

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

mybutton.addEventListener('click', topFunction)
