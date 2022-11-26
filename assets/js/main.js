/* ScrollReveal */ 
const sr = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})
sr.reveal(`.project__card`)
sr.reveal(`.project__name`,{delay:500})
sr.reveal(`.label`,{delay:500})
sr.reveal(`.project__location`,{delay:500})


