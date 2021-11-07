import React from "react";
import "../App.css";
import Header from './Header';
import Button from './Button';

function Accueil({ participe, sayYes, }) {

    return (<>
        <Header />
        <div className="App-intro">
            <p className="App-title">Bienvenue !</p>
            <p className="App-title">Ici, vous pouvez vous inscrire pour participer aux célébrations de Noël de Whoville.</p>
        </div>
        <br />
        <Button
                txt="Je participe !"
                onClick={() => sayYes(true)}
        />
    </>)
}

export default Accueil;