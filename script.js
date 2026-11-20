const menuButton = document.querySelector('.menu-button')
const navLinks = document.querySelector('.nav-links')

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open')
  menuButton.setAttribute('aria-expanded', String(isOpen))
})

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
    menuButton.setAttribute('aria-expanded', 'false')
  })
})

const quoteForm = document.querySelector('.quote-form')

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new URLSearchParams(new FormData(quoteForm))

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString(),
  }).then((response) => {
    if (!response.ok) throw new Error('Form submission failed')

    quoteForm.innerHTML = `
      <div class="success" role="status">
        <span>✓</span>
        <h3>Tack för din förfrågan!</h3>
        <p>Vi hör av oss inom 24 timmar.</p>
        <button type="button" class="reset-form">Skicka en ny förfrågan</button>
      </div>`

    document.querySelector('.reset-form').addEventListener('click', () => location.reload())
  }).catch(() => {
    quoteForm.submit()
  })
})
