import "../App.css";
import React, { useState } from "react";
import Header from './Header';
import Button from './Button';
  

function Inscription({ done, itsDone, lecture, jeVeuxLire, text, participe, sayYes }) {

    const [data, setData] = useState({
        nom: "",
        email: "",
        lettre: "",
        accept: false,
      })
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
        disableButton(false)
    }
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const [bdisabled, disableButton] = useState(false)
    const [messname, writeMN] = useState("")
    const [messemail, writeME] = useState("")
    const [messaccept, writeMA] = useState("")

    const checkSubmit = () => {
        disableButton(true)
        console.log(bdisabled)
        data.nom === ""
            ? writeMN("Veuillez entrer un nom.")
            : writeMN("")
        data.email === "" || !(validEmail.test(data.email))
            ? writeME("Veuillez entrer une adresse e-mail valide.")
            : writeME("")
        !data.accept
            ? writeMA("Veuillez accepter les conditions de participation.")
            : writeMA("")
        let dataok = (data.nom !== "" && (validEmail.test(data.email)) && data.accept) ? true : false;
        return dataok
    }

    const sendData = async e => {
        e.preventDefault()
        try {
          await fetch("https://v1.nocodeapi.com/whoville/google_sheets/bEdyajOazNbaVQFQ?tabId=Sheet1", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([[data.nom, data.email, data.lettre]]),
          })
        } catch (err) {
          console.log(err)
        }
        itsDone(true)
      }

    const handleSubmit = async e => (checkSubmit() ? sendData(e) : itsDone(false))

    return (<>
        <Header 
            dontgoback={participe}
            sayYes={sayYes}/>
        <div className="App-intro">
            <p className="App-subtitle">Veuillez compléter le formulaire.</p>      
        
            <form>
                <div className="form-item">
                    <label>Nom :<br />
                    <input
                        className="form-input"
                        type="text"
                        name="nom"
                        value={data.nom}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className="form-item">
                    <label>Email :<br />
                    <input
                        className="form-input"
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={handleChange} />
                    </label>
                </div>
                <div className="form-item">
                    <label>As-tu un petit mot à faire passer au Père Noel ?<br />
                    <input
                        className="form-input"
                        type="text"
                        name="lettre"
                        value={data.lettre}
                        onChange={handleChange}/>
                    </label>
                </div>
                <div className="form-item">
                    <label>
                    <input
                        type="checkbox"
                        name="accept"
                        checked={data.accept}
                        onChange={handleChange}/>
                    </label>
                    J'ai lu et j'accepte les&nbsp; <button onClick={() => jeVeuxLire(true)}> conditions de participation</button>.
                </div>
            
            </form>
            
        </div>
        <div className="App-whitetxt">
                <p>{messname}</p>
                <p>{messemail}</p>
                <p>{messaccept}</p>
        </div>
        <Button
            txt="Valider"
            onClick={handleSubmit}
            disabled={bdisabled} disableButton={disableButton}
        />
        
    </>)
}

export default Inscription;