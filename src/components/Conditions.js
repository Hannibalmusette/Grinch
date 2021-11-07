import "../App.css";
import React from "react";
import Header from './Header';
import Button from './Button';

function Conditions({ lecture, jeVeuxLire }) {

    return (<>
        <Header />
        <div>
            <p className="App-txt">

<p className="App-title">Conditions de service</p>

Bienvenue à Whoville !

Whoville développe des services permettant à tous d’accéder à la magie de Noël. Les présentes Conditions régissent votre séjour à Whoville.

Nous ne vous facturons pas votre séjour à Whoville. À la place, nous vous demandons d’apporter un cadeau, et des denrées pour alimenter le buffet.

Nous ne vendons pas vos données personnelles aux annonceurs, elles seront uniquement utilisées pour confirmer votre inscription, et traitées par un programme sophistiqué pour vous désigner au hasard une personne à qui offrir un cadeau, et vous attribuer à votre tour un Père Noël secret, ci-après désigné par l’acronyme PN.

<p className="App-subtitle">1. Les services que nous fournissons</p>
Notre mission consiste à donner à tous la possibilité de célébrer Noël et de rapprocher le monde entier. Pour faire avancer cette mission, nous vous fournissons les services décrits ci-dessous :

<p className="App-subsubtitle">Nous vous fournissons une expérience personnalisée :</p>
votre expérience à Whoville ne ressemble à celle de personne d’autre. En effet vous recevrez un cadeau personnalisé, choisi spécialement pour vous par votre PN.

<p className="App-subsubtitle">Nous vous mettons en contact avec les personnes qui comptent pour vous :</p>
Seules seront conviées des personnes avec lesquelles vous êtes, ou pourriez vouloir devenir ami(e). Les vraies communautés sont fondées sur des liens forts et nous pensons que la vie est plus belle lorsque les gens sont connectés aux personnes qui comptent pour eux.

<p className="App-subsubtitle">Nous vous donnons les moyens de vous exprimer et de communiquer à propos de ce qui compte pour vous :</p>
Mais pas besoin d’amener un micro, de hurler ou de remonter les basses dès qu’on ne vous voit pas.

<p className="App-subsubtitle">Nous luttons contre les comportements préjudiciables, et nous protégeons et soutenons notre communauté :</p>
Les personnes ne créeront une communauté à Whoville que si elles s’y sentent en sécurité. Donc faut être gentil sinon je vous tej.

<p className="App-subsubtitle">Nous utilisons et développons des technologies avancées pour fournir des services sécurisés et fonctionnels à tous :</p>
Le formulaire rempli lors de votre inscription sera traité par un programme hautement complexe et sécurisé afin de transmettre toutes les informations nécessaires à votre PN.

<p className="App-subtitle">2. Comment nos services sont financés</p>
Au lieu de payer pour votre séjour à Whoville, vous acceptez que tous les frais ne soient pas supportés par la mairie : en vous inscrivant, vous vous envisagez à amener un cadeau, et à participer à l’approvisionnement du buffet.

<p className="App-subtitle">3. Vos engagements envers Whoville et sa communauté</p>
Nous fournissons ces services à vous et à d’autres personnes pour faire progresser notre mission. En échange, nous avons besoin que vous preniez les engagements suivants : 

<p className="App-subsubtitle">3.1 Qui peut venir à Whoville :</p>
Lorsque les personnes répondent de leur avis et de leurs actions, notre communauté est plus sûre et plus responsable. Pour cette raison, vous devez :
< br/>- être explicitement invité ou +1é
< br/>- fournir une adresse e-mail valide et à laquelle vous avez toujours accès
< br/>- ne vous inscrire qu’une fois (vous n’aurez qu’un seul cadeau dans tous les cas !)
< br/>- ne pas divulguer à qui vous devez offrir un cadeau, ou le cadeau que vous comptez offrir.

Nous essayons de rendre Whoville largement accessible à tous, mais vous ne pouvez pas venir à Whoville si :
< br/>- vous avez moins de 13 ans ;
< br/>- vous êtes un délinquant sexuel condamné ;
< br/>- vous n’êtes pas invité

<p className="App-subsubtitle">3.2 Ce que vous devez préparer avant votre venue</p>
En vous inscrivant, vous vous engagez à être présent(e) le jour de la célébration, sauf circonstances exceptionnelles vous empêchant au dernier moment de vous y rendre. Vous vous engagez également à apporter :
< br/>- un cadeau
< br/>- de la nourriture et / ou boisson à partager
< br/>
< br/>En cas d’événement exceptionnel et imprévu vous empêchant de vous rendre au buffet, vous remettrez et recevrez votre cadeau un peu plus tard.  </p>
        </div>
        <br></br><br></br>
        <Button
            txt="J'ai compris"
            onClick={() => jeVeuxLire(false)}
        />
        <br></br><br></br><br></br><br></br>
        
    </>)
}

export default Conditions;