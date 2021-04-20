import React, {Component} from 'react';
import './App.css';
import Contacto from '../components/Contacto';
import Scroll from '../components/Scroll';
import Particles from 'react-particles-js';

const particlesOptions = { /*son las particulas del background*/
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '20A56F'
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: 7,
      random: {
        enable: true
      }
    }
  }
}

class App extends Component {
  render (){
      return (
        <div>
            <Particles className='particles' /*solo muestra las particulas del background*/
              params={particlesOptions} 
            />
            <h1 className='tc f1'>Joceline Yadira Martínez Vidal</h1>
            <Contacto/>
            <div className="ma2 pv2 pa6 pr0 pt0 mw4 mw8-ns center">
              <Scroll/>
            </div>
        </div>
      ); 
  }
}

export default App;

