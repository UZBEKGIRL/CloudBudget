import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Img from './components/Img/Img'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Img width = "100px" height= "100px" radius = "15px" img = "https://avatars.mds.yandex.net/i?id=bc690d199549d835bd3edb77fcf3eb113c2d931b-11951022-images-thumbs&n=13"></Img>
    </>
  )
}

export default App
