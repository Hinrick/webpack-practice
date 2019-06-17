import raisedhead from './raisedHead.jpg'

function addImages(){
  const img = document.createElement('img')
  img.alt = 'Luke'
  img.width = '500px'
  img.src = raisedhead

  const body = document.querySelector('body')
  body.appendChild(img)

}

export default addImages
