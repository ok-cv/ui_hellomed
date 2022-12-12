(() => {
  const toggle = document.querySelector('.hm-hamburger')
  const sidebar = document.querySelector('.hm-offcanvas')

  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.target.classList.add('init-animation')
      e.target.classList.toggle('is-open')
      sidebar.classList.toggle('is-open')
    })
  }
})()
