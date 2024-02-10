function SetupCounter() {
  const button = document.querySelector<HTMLButtonElement>('#counter')

  if(!button) {
    return
  }

  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    button.innerHTML = `count is ${counter}`
  }

  button.addEventListener('click', () => setCounter(counter + 1))

  setCounter(0)
}

export default SetupCounter()
