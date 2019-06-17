import './hello-world.css'

class helloWorldButton{
  buttonClass = 'hello-world-button'

  render(){
    const div = document.createElement('div')
    const button = document.createElement('button')
    button.innerHTML = 'Click on Me'
    const body = document.querySelector('body')
    body.innerWidth = '100%'
    button.classList.add(this.buttonClass)
    button.onclick = function () {
      const p = document.createElement('p')
      p.innerHTML = 'Hello to this World'
      p.classList.add('hello-world-text')
      body.appendChild(p)
    }
    body.appendChild(div)
    div.appendChild(button)
  }
}

export default helloWorldButton;
