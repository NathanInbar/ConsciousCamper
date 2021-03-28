import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import MainContainer from './Components/MainContainer';
import JuiceBox from './Components/JuiceBox';
import Feed from './Components/Feed';

import './App.css';

function App() {
  const[options, setOptions] = useState({position:{ lat: 34.3260653, lng: -117.8325833 }});

  return (
    <div className="main__app">
      <div className="main__left"> {/*Main left contains mainContainer and juicebox*/}

        <div className="main__left__container"> {/*Main left container contains logo/name / streetview/facts */}
          <MainContainer
            options={options}
            setOptions={setOptions}

          />
        
        </div>

        <div className="main__left__juicebox"> {/*Main left juicebox contains juice*/}
          <JuiceBox
            options={options}
            setOptions={setOptions}

          />
        </div>

      </div>

      <div className="main__right"> {/*Main right contains feed*/}
        <Feed/>
      </div>

    </div>
  );
}

export default App;
