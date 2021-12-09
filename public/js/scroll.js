const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('#all > nav > div > div > a')

window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id')
        }
    })
    navLi.forEach((a) => {
        a.classList.remove('active')
        if (a.classList.contains(current)) {
            a.classList.add('active')
            console.log(a)
        }
    })
})

function goTo(name) {
    document.getElementById(name).scrollIntoView()
}
