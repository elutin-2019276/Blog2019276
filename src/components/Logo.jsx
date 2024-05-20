import logo from '../assets/img/Logo.png'
import fondo from '../assets/img/Fondo.png'
import ahorcado from '../assets/img/Ahorcado.png'
import kinal from '../assets/img/Kinal.png'

export const logo = () => {
  return (
    <div>
      <img src={logo}/>
      <img src={fondo}/>
      <img src={ahorcado}/>
      <img src={kinal}/>
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  )
}
