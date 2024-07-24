import React from 'react';
import { Navigate } from 'react-router-dom';
import './projets.scss';
import MenuDeroulant from '../menuDeroulant/menuDeroulant.js';


function Projects() {
    return (
        <div className='section-projets'>
            <h1>Projets</h1>
            <div className='liste-projets'>
                <div className='projet'>
                    <a href='https://github.com/elyesbeng/ohmyfood'><img className='ohmyfood' src="/ohmyfood.jpg" /></a>
                    <div className='description-projet'>
                        <p className='description-projet'>
                            Ce projet a été réalisé dans le cadre de ma formation sur la plateforme "Openclassrooms".
                            L'objectif de ce projet était de créer une apllication React de location type "Airbnb".
                        </p>
                        <MenuDeroulant title={"langages utilisés"} description={["HTML", "CSS" ]}/>
                    </div>
                </div>
                <div className='projet'>
                    <a href='https://github.com/elyesbeng/kasa'><img className='kasa' src='/kasa.jpg' alt='ohmyfood project' /></a>
                    <div className='description-projet'>
                        <p>
                            Ce projet a été réalisé dans le cadre de ma formation sur la plateforme "Openclassrooms".
                            L'objectif de ce projet était de prendre en main les transitions et animations CSS.
                        </p>
                        <MenuDeroulant title={"description"} description={["HTML", "CSS","React" ]}/>
                    </div>
                </div>
                <div className='projet'>
                    <a href='https://github.com/elyesbeng/ArgentBank-website'><img className='argentBank' src='/argentBank.png' alt='argentBank project' /></a>
                    <div className='description-projet'>
                        <p>
                            Ce projet a été réalisé dans le cadre de ma formation sur la plateforme "Openclassrooms".
                            L'objectif de ce projet était d'approfondir l'apprentissage de React ainsi que la manipulation d'API et de prendre en main "Redux".
                        </p>
                        <MenuDeroulant title={"description"} description={["HTML", "CSS","React" ]}/>
                    </div>
                </div>
                <div className='projet'>
                    <a href='https://github.com/elyesbeng/Portfolio-architecte-sophie-bluel-master'><img className='sophieBluel' src='/sophieBluel.png' alt='SophieBluel Portfolio' /></a>
                    <div className='description-projet'>
                        <p>
                            Ce projet a été réalisé dans le cadre de ma formation sur la plateforme "Openclassrooms".
                            L'objectif de ce projet était d'apprendre le "Javascript" ainsi que la manipulation d'API.
                        </p>
                        <MenuDeroulant title={"description"} description={["HTML", "CSS","Javascript" ]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;