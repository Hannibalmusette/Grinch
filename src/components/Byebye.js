import "../App.css";
import React from "react";
import Header from './Header';
import Button from './Button';

function Byebye({ participe, sayYes, done, itsDone, text }) {

    return (<>
        <Header />
        <div>
            <p className="App-intro">Ton inscription a été validée !<br /><br />
            Félicitations et scrute bien ta boîte mail pour connaître le nom de la personne à qui tu devras offrir un cadeau !
            Ensuite, rendez-vous à Whoville le 7 janvier !</p>
        </div>
        <Button
                txt="Retour à l'accueil"
                onClick={() => {sayYes(false); itsDone(false)}}
        />
    </>)
}

export default Byebye;
