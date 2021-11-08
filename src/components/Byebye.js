import "../App.css";
import React from "react";
import Header from './Header';
import Button from './Button';

function Byebye({ participe, sayYes, done, itsDone}) {

    return (<>
        <Header 
            dontgoback={participe}
            sayYes={sayYes}/>
        <div>
            <p className="App-title">Ton inscription a été validée !</p>
            <p className="App-subtitle">Félicitations et scrute bien ta boîte mail pour connaître le nom de la personne à qui tu devras offrir un cadeau !< br/>
            Ensuite, rendez-vous à Whoville le 7 janvier !</p>
        </div>
        <Button
                txt="Retour à l'accueil"
                onClick={() => {sayYes(false); itsDone(false)}}
        />
    </>)
}

export default Byebye;
