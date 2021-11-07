import React, { useState } from "react";
import "./App.css";
import Accueil from './components/Accueil';
import Inscription from './components/Inscription';
import Conditions from './components/Conditions';
import Byebye from './components/Byebye'



function App() {
  const [participe, sayYes] = useState(false)
  const [lecture, jeVeuxLire] = useState(false)
  const [done, itsDone] = useState(false)

  if (!participe) {
      return (
        <div className="App">
          <Accueil
            participe={participe} sayYes={sayYes}
          />
        </div>
      );
  } else if (participe && !done && !lecture){
      return (
        <div className="App">
          <Inscription
            done={done} itsDone={itsDone}
            lecture={lecture} jeVeuxLire={jeVeuxLire}
          />
        </div>
      );
  } else if (lecture){
      return (
        <div className="App">
          <Conditions
            lecture={lecture} jeVeuxLire={jeVeuxLire}
          />
        </div>
      );  
  } else if (done) {
      return (
        <div className="App">
          <Byebye
            participe={participe} sayYes={sayYes}
            done={done} itsDone={itsDone}
          />
        </div>
      );
    }
  }

export default App;