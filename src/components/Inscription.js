import "../App.css";
import React, { useState } from "react";
import Header from './Header';
import Button from './Button';
import Checkbox from './CheckBox';
  
function Inscription({ done, itsDone, lecture, jeVeuxLire, text }) {

    const [data, setData] = useState({
        name: "",
        email: "",
        lettre: "",
      })
    const { name, email, lettre } = data
    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value })
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const [accept, Accept] = useState(false)
    const [message, writeMessage] = useState({
        messagename: "",
        messsageemail: "",
        messagelettre: "",
    })
    const { messagename, messageemail, messageaccept } = message
    const [dataok, dataIsOk] = useState(false)

    const checkSubmit = () => {
        name !== ""
            ? writeMessage({...message, messagename: ""})
            : writeMessage({...message, messagename: "Veuillez entrer un nom"})
        email !== "" && (validEmail.test(email))
            ? writeMessage({...message, messageemail: ""})
            : writeMessage({...message, messageemail: "Veuillez entrer une adresse e-mail valide."})
        accept
            ? writeMessage({...message, messageaccept: ""})
            : writeMessage({...message, messageaccept: "Veuillez accepter les conditions de participation."})
        name !== "" && (validEmail.test(email)) && accept
            ? dataIsOk(true)
            : dataIsOk(false)
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
            body: JSON.stringify([[name, email, lettre]]),
          })
        } catch (err) {
          console.log(err)
        }
      }

    const handleSubmit = async e => (checkSubmit() ? sendData(e) : itsDone(false))

    return (<>
        <Header />
        <div className="App-intro">
                <p className="App-subtitle">Veuillez compléter le formulaire.</p>      
        
                <form><br />
            <div><label>Nom :<br />
                <input
                    className="form"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </label></div>
            <br />
            <div><label>Email :<br />
                <input
                    className="form"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange} />
            </label></div>
            <br />
            <div><label>As-tu un petit mot à faire passer au Père Noel ?<br />
                <input
                    className="form"
                    type="text"
                    name="lettre"
                    value={lettre}
                    onChange={handleChange}/>
            </label></div>
            <br />
            </form>

            <br />
            <Checkbox accept={accept} Accept ={Accept}/>
            J'ai lu et j'accepte les&nbsp;
            <button onClick={() => jeVeuxLire(true)}> 
                conditions de participation
            </button>.
        </div>
        <div className="App-greentxt">
                <p>{messagename}</p>
                <p>{messageemail}</p>
                <p>{messageaccept}</p>
        </div>
        <Button
            txt="Valider"
            onClick={handleSubmit}
        />
        <br />
        <br />
        
    </>)
}

export default Inscription;