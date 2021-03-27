import logo from './logo.svg';

import MainContainer from './Components/MainContainer';
import JuiceBox from './Components/JuiceBox';
import Feed from './Components/Feed';

import './App.css';

function App() {
  return (
    <div className="main__app">
      <div className="main__left"> {/*Main left contains mainContainer and juicebox*/}

        <div className="main__left__container"> {/*Main left container contains logo/name / streetview/facts */}
          <MainContainer />
        
        </div>

        <div className="main__left__juicebox"> {/*Main left juicebox contains juice*/}
          <JuiceBox/>
        </div>

      </div>

      <div className="main__right"> {/*Main right contains feed*/}
        <Feed/>
      </div>

    </div>
  );
}

export default App;
