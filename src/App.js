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
            image={item.imgDev}
            altImagen={item.altImage}
            name={item.name}
            profesion={item.profesion}
            experience={item.experience}
            experience2={item.experience2}
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