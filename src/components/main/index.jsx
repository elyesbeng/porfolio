import React from "react";
import '../main/style.scss';

function MainPage(){
    return(
        <div className="Accueil">
            <h2>Bienvenue sur mon portfolio!</h2>
            <p>Vous trouverez ici plusieurs sections afin d'en savoir plus sur moi, sur mon parcours, ainsi que sur une partie de mes projets!</p>
            <div className="aboutMe">
                <article className="qui-suis-je">
                    <h3>Qui suis-je?</h3>
                    <p>Développeur web en devenir, je
                        suis a la recherche d'une
                        alternance à compter d'octobre
                        2024. Persévérant et autonome, je
                        souhaite développer mes
                        compétences et les mettre au
                        service de votre business.</p>
                </article>
                <article className="introduction">
                    <p>Vous trouverez sur ce site, toutes les informations importantes me concernant, mes diplômes, mes projets, ainsi que mes informations de contact</p>
                </article>
            </div>
            
        </div>
    )
}

export default MainPage;