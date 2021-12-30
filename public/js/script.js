let body = document.getElementsByTagName('body')[0]
let navLi = document.querySelectorAll('nav > div > div > a')
let sections = document.querySelectorAll('section')
let topBtn = document.getElementById('topBtn')

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

    let distance = 500
    if (
        document.body.scrollTop > distance ||
        document.documentElement.scrollTop > distance
    ) {
        topBtn.style.display = 'block'
    } else {
        topBtn.style.display = 'none'
    }
})

function goTo(name) {
    document.getElementById(name).scrollIntoView()
}
