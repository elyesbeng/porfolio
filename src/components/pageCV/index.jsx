import React from 'react';
import MenuDeroulant from '../menuDeroulant/menuDeroulant.js';
import '../pageCV/pageCV.scss';

function Projects() {
    return (
        <div className='projects'>
            <h1>Voici mon CV en ligne!</h1>
            <div>
                <div className='competences'>
                    <MenuDeroulant title={"compétences"} description={["HTML", "CSS", "JavaScript", "React" ]}/>
                </div>
                <div className='expériences'>
                    <MenuDeroulant title={"expériences"} description={["2023 : Serveur barman","2022 : Employé de caisse","2022 : Animateur","2019 : Bénévolat dans une boutique d'aide alimentaire"]}/>
                </div>
                <div className='formations et diplômes'>
                    <MenuDeroulant title={"Formations et diplômes"} description={["BAC spécialités Mathématiques, SES, Numérique et sciences informatiques", "Brevet des collèges, mention très bien", 'Formation "intégrateur web" Openclassrooms']}/>
                </div>
                <div className='lettre de motivation'>
                    <h3>Voici ma lettre de motivation</h3>
                    <a href="/lettre-de-motivation.pdf" download="lettre-de-motivation-Ben-Guirat-Elyes.pdf">
                        <button className="download-button">Télécharger</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;