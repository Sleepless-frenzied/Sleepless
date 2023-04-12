

import React from "react";


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faInstagram, faDiscord} from '@fortawesome/free-brands-svg-icons';




function Portfolio(){
    const links = [
        {name: "GitHub", url: "https://github.com/Xyphes", icon: faGithub},
        {name: "LinkedIn", url: "https://www.linkedin.com/in/willy-somkhit-3818411b1/", icon: faLinkedin},
        {name: "Instagram", url: "https://www.instagram.com/sleepless.frenzied/", icon: faInstagram},
        {name: "Xyphes̷#8697", url: "https://discord.com/users/410510463240241163", icon: faDiscord},
        {name: "sleepless.frenzied@gmail.com ", url: "mailto:sleepless.frenzied@gmail.com ", icon: faEnvelope},
    ]

    const skills =
        [
            {lang: "C#", color: "blue", "logo": "devicon-csharp-plain"},
            {lang: "C/C++", color: "blue", "logo": "devicon-c-plain"},
            {lang: "Java", color: "blue", "logo": "devicon-java-plain"},
            {lang: "HTML", color: "blue", "logo": "devicon-html5-plain"},
            {lang: "CSS", color: "blue", "logo": "devicon-css3-plain"},
            {lang: "JS", color: "blue", "logo": "devicon-nodejs-plain"},
            {lang: "Python", color: "blue", "logo": "devicon-python-plain"},
            {lang: "OCaml", color: "blue", "logo": "devicon-ocaml-plain"},
        ]
    const tools = [
        {lang: "React", color: "blue", "logo": "devicon-react-original"},
        {lang: "Unity", color: "blue", "logo": "devicon-unity-original"},
        {lang: "Linux", color: "blue", "logo": "devicon-linux-plain"},
        {lang: "Flutter", color: "blue", "logo": "devicon-flutter-plain"},
        {lang: "Git", color: "blue", "logo": "devicon-git-plain"},

    ]



    return(
        <div className="mt-5 grid grid-cols-2 text-white">
            <div>
                <div className="">
                    <img src={require("../img/misc/willy.somkhit-square.png")}
                         alt="..." className="w-1/3 mx-auto shadow rounded-full border-none"/>


                    <h1 className="text-3xl font-bold">Willy SOMKHIT</h1>
                    <h2 className="text-lg">Etudiant & Développeur</h2>

                    <div className="mt-4 mb-5">
                        <a href={process.env.PUBLIC_URL + '/CV.pdf'}
                           className=" rounded-full border-4 py-2 px-3 text-xl font-bold border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white"
                           download="CV-Willy-Somkhit-FR&ENG.pdf"
                           target="_blank"
                           rel="noreferrer noopener">Mon CV
                        </a>
                    </div>


                </div>
                <div className="grid grid-cols-2 ml-12 2xl:ml-32">
                    {links.map((link, index) => (
                        (link.icon !== undefined) ?
                            <a href={link.url}
                               className="text-left w-full  p-4 text-blue-600 hover:text-white"
                               target="_blank"
                               rel="noreferrer noopener" key={index}>
                                <FontAwesomeIcon icon={link.icon} size="2x"/>
                                <span className="text-xl ml-4 invisible md:visible">{link.name}</span>
                            </a> :
                            <div
                                className="text-left w-full w-1/6 md:w-1/2 p-4 text-green-500 hover:text-white"
                                key={index}>
                                <i className={`${link.icon} fa-2x`}/>
                                <span className="text-xl ml-4 invisible md:visible">{link.name}</span>
                            </div>
                    ))}
                </div>
            </div>
            <div className="">
                <h1 className="text-4xl md:text-5xl font-Lato text-left text-blue-600 font-bold ml-3 md:ml-0 ">À propos de moi</h1>
                <p className="text-xl mx-6 text-justify">
                    Étudiant en 1er année de cycle expert en informatique (EPITA), je suis à la recherche d’une alternance de 3 ans à partir de septembre 2023. Ayant déjà participé dans plusieurs projets de développement (web, application mobile et jeux vidéo), je suis curieux et impatient d'apprendre avec vous.
                </p>
                <h1 className="text-4xl md:text-5xl font-Lato text-left text-blue-600 font-bold ml-3 md:ml-0 md:mt-7">Compétences</h1>
                <h2 className="text-xl font-Lato text-left text-blue-500 ml-5 font-bold py-6">Languages</h2>
                <div className="flex flex-wrap gap-4 ml-5">
                    {skills.map((item, index) => (
                        <p key={index}
                           className={`font-Lato hover:scale-110 duration-300 min-w-[10%] font-bold rounded-full bg-blue-600 border-8 border-blue-600`}>
                            {item.lang} <i className={`${item.logo}`}/>
                        </p>
                    ))}
                </div>
                <h2 className="text-xl font-Lato text-left text-blue-500 ml-5 font-bold py-8">Framework et outils</h2>
                <div className="flex flex-wrap gap-4 ml-5">
                    {tools.map((item, index) => (
                        <p key={index}
                           className={`font-Lato hover:scale-110 duration-300 min-w-[10%]  font-bold rounded-full bg-blue-600 border-8 border-blue-600`}>
                            {item.lang} <i className={`${item.logo} `}/>
                        </p>

                    ))}
                </div>

            </div>
        </div>
    )

}

export default Portfolio;