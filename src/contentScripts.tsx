console.log('check-merge-type script start')

const isPullRequest = (path: string) => path.includes('/pull/')

const onClick: EventListener = (event) => {
  event.preventDefault()
  const mergeButton = event.target as HTMLElement
  if (!mergeButton) {
    return
  }
  const mergeType = mergeButton.innerText.trim()
  window.alert(`merge type is ${mergeType}`)
}

window.addEventListener('load', () => {
  if (!isPullRequest(window.location.pathname)) {
    return
  }
  const mergeButtons = document.querySelectorAll('.js-details-target.hx_create-pr-button')
  mergeButtons.forEach((button) => {
    button.addEventListener('click', onClick)
  })
})
