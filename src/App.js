import './App.css'

import { Header } from './Components/Header'
import { AboutMe } from './Components/AboutMe';
import { dataAboutMe } from './externalFile';

function App() {
  return (
    <div className='containerApp'>
      <div className='containerAppHeader'>
        <Header />
      </div> 
      <div className='containerAboutMe'>
        { dataAboutMe.map((item)=>(
          
          <AboutMe 
            key={item.id}
            // image={item.imgdev}
            name={item.name}
            profesion={item.profesion}
            experience={item.experience}
            stack={item.stack}
            master={item.master}
          />
          ))
        }
      </div> 
    </div> 
  );
}

export default App;
// imagenDev="dev04380380"
// name="Claudio Muñoz"
// profesion="Programmer Computer"
// experience="20 years of experience in the computer industry."
// stack="Frontend developer Junior"
// master="Full Stack Development JUNIOR"
