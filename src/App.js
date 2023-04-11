import './App.css'
import { Header } from './Components/Header';
import { AboutMe } from './Components/AboutMe';
import { ScrollY } from './Components/ScrollY';
import { dataScrollY, dataAboutMe } from './externalFile';

function App() {
  return (
  <>
    <div className='containerApp'>
      <div className='containerHeader'>
        <Header />
      </div>

      <div className='wrapperComponentAboutMe'>
        <div className='bgApp'>
        </div>

        <div className='wrapperAboutMe'>
          { dataAboutMe.map((item)=>(
            <AboutMe
            key={item.id}
            image={item.imgDev}
            altImagen={item.altDev}
            bgCardAM={item.imgCard}
            altCardAM={item.altCard}
            name={item.name}
            profesion={item.profesion}
            experience={item.experience}
            experience2={item.experience2}
            stack={item.stack}
            master={item.master}
            />
            ))}
        </div>
        
        <div className='wrapperCompScrollY'>
          { dataScrollY.map((item)=>(
            <ScrollY
            key={item.idScroll}
            
            title={item.titleScroll}
            paragraph1={item.paragraph1Scroll}
            paragraph2={item.paragraph2Scroll}
            linkSocialNet1={item.linkSocialNet1Scroll}
            paragraph3={item.paragraph3Scroll}
            paragraph4={item.paragraph4Scroll}
            paragraph5={item.paragraph5Scroll}
            paragraph6={item.paragraph6Scroll}
            
            socialNet1={item.socialNet1Scroll}
            socialNet2={item.socialNet2Scroll}
            linkSocialNet2={item.linkSocialNet2Scroll}
            />
            ))}
        </div>

      </div>
    </div>
  </>

  );
}

export default App;