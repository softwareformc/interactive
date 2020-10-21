const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header-desktop')

desktopHeader.innerHTML = header.innerHTML 

// when the .header enter the viewport, hide the desktop header
// when the header leaves, show it (by adding visible class)
inView('.header')
    .on('enter', el => desktopHeader.classList.remove('visible'))
    .on('exit', el => desktopHeader.classList.add('visible'))

VanillaTilt.init(document.querySelectorAll(".image"), {
		max: 25,
		speed: 400
});

inView('.fade')
  .on('enter', img => img.classList.add('visible'))
  .on('exit', img => img.classList.remove('visible'))

  // grab all the anchor tags on the page
const anchors = document.querySelectorAll('a')
// loop over them
anchors.forEach(anchor => {
  // listen for clicks on each one
  anchor.addEventListener('click', event => {
    // grab the href attribute
    const href = anchor.getAttribute('href')
    // if the href starts with a #
    if (href.charAt(0) === '#') {
      // stop the default action
      event.preventDefault()
      // find the element the href points to and scroll it into view
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
})