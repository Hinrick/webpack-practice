import helloWorldButton from './components/helloworldbutton/hello-world.js'
import Heading from './components/heading/heading.js'
import addImages from './addImages.js'


const heading = new Heading()
heading.render()
const helloworldbutton = new helloWorldButton()
helloworldbutton.render()
// addImages();

if(process.env.NODE_ENV === 'production'){
  console.log('Produciton Mode')
}else if(process.env.NODE_ENV === 'development'){
  console.log('Produciton Mode')
}
