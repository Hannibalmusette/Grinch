import "../App.css";
import React, { useState } from "react";
import Header from './Header';
import Button from './Button';
import Checkbox from './CheckBox';
  
function Inscription({ done, itsDone, lecture, jeVeuxLire, text, participe, sayYes }) {

    const [data, setData] = useState({
        name: "",
        email: "",
        lettre: "",
      })
    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value })
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const [accept, Accept] = useState(false)
    const [messname, writeMN] = useState("")
    const [messemail, writeME] = useState("")
    const [messaccept, writeMA] = useState("")

    const checkSubmit = () => {
        data.name === ""
            ? writeMN("Veuillez entrer un nom.")
            : writeMN("")
        data.email === "" || !(validEmail.test(data.email))
            ? writeME("Veuillez entrer une adresse e-mail valide.")
            : writeME("")
        !accept
            ? writeMA("Veuillez accepter les conditions de participation.")
            : writeMA("")
        let dataok = (data.name !== "" && (validEmail.test(data.email)) && accept) ? true : false;
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
            body: JSON.stringify([[data.name, data.email, data.lettre]]),
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
        
                <form><br />
            <div><label>Nom :<br />
                <input
                    className="form"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
            </label></div>
            <br />
            <div><label>Email :<br />
                <input
                    className="form"
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange} />
            </label></div>
            <br />
            <div><label>As-tu un petit mot à faire passer au Père Noel ?<br />
                <input
                    className="form"
                    type="text"
                    name="lettre"
                    value={data.lettre}
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
                <p>{messname}</p>
                <p>{messemail}</p>
                <p>{messaccept}</p>
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