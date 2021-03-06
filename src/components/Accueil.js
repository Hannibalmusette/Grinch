import React from "react";
import "../App.css";
import Header from './Header';
import Button from './Button';

function Accueil({ participe, sayYes }) {

    return (<>
        <Header 
            dontgoback={participe}
            sayYes={sayYes}/>
        <div>
            <p className="App-title">Bienvenue !</p>
            <p className="App-subtitle">Ici, vous pouvez vous inscrire pour participer aux célébrations de Noël de Whoville.</p>
        </div>
        <Button
                txt="Je participe !"
                onClick={() => sayYes(true)}
        />
    </>)
}

export default Accueil;