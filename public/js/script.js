let body = document.getElementsByTagName('body')[0]
let navLi = document.querySelectorAll('nav > div > div > a')
let sections = document.querySelectorAll('section')

body.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    return false
})

window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach((section) => {
        let sectionTop = section.offsetTop
        let sectionHeight = section.clientHeight
        if (scrollY >= sectionTop - sectionHeight / 2) {
            current = section.getAttribute('id')
        }
    })
    navLi.forEach((a) => {
        a.classList.remove('active')
        if (a.classList.contains(current)) {
            a.classList.add('active')
        }
    })
})

function goTo(name) {
    document.getElementById(name).scrollIntoView()
}
