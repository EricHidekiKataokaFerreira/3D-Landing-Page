import './App.css';
import Spline from '@splinetool/react-spline';

const descriptionText = 'Welcome to our website, where we specialize in creating modern 3D landing pages that are sure to captivate your audience. Our team of experts combines innovative design with cutting-edge technology to bring your brand to life. Let us help you make a lasting impression and elevate your online presence today.'

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <p className='gilnger'>Hideki</p>

        <ul className='links'>
          <li className='gilnger'>Home</li>
          <li className='gilnger'>About</li>
          <li className='gilnger'>Contact</li>
        </ul>

        <div className='hamburg'>
          {new Array(3).fill('').map((_, idx) => (
            <div className='hamburg-line'></div>
          ))
          }
        </div>
      </nav>

      <div className='main-content'>
        <div className='main-content-text'>
          <div className='data'>
            <p>September 07</p>
            <div className='line'></div>
            <p>02</p>
          </div>

          <p className='trelink title'>Modern & <span className='stroke'>creative</span></p>

          <p className='gilnger'>{descriptionText}</p>

          <div className='button-container'>
            <button className='button-primary gilnger'>
              View more
            </button>

            <button className='button-secundary gilnger'>
              About
            </button>
          </div>
        </div>

        <Spline style={{height: '100%', width: '100%', cursor: 'pointer'}} className='spline' scene="https://prod.spline.design/60cAuRp135bAoDdt/scene.splinecode" />
      </div>


    </div>
  );
}

export default App;
