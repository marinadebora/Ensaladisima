import React  from 'react';
import { Link } from 'react-router-dom';
import '../styles/Team.css';
import AlePic from "../images/TeamPics/AlePicClean.png";
import DeboPic from "../images/TeamPics/DeboPicClean.png";
import CristianPic from "../images/TeamPics/CristianPicClean.png";
import DiegoPic from "../images/TeamPics/DiegoPicClean.png";
import NahuelPic from "../images/TeamPics/NahuelPicClean.png";
import Html from "../images/TeamPics/TecnologiasUtilizadas/htmlLogo.png";
import JavaScript from "../images/TeamPics/TecnologiasUtilizadas/JavaScript.png";
import Bootstrap from "../images/TeamPics/TecnologiasUtilizadas/Bootstrap.png";
import Cloudinary from "../images/TeamPics/TecnologiasUtilizadas/Cloudinarysvg.png";
import Express from "../images/TeamPics/TecnologiasUtilizadas/Express.png";
import Mongo from "../images/TeamPics/TecnologiasUtilizadas/Mongo.png";
import ReactLogo from "../images/TeamPics/TecnologiasUtilizadas/React.png";
import Redux from "../images/TeamPics/TecnologiasUtilizadas/Redux.png";



const Team = () => {
  
    return (
        <div>

        <div id="Main" class="container-fluid">
            <div id="titleContent" class="row">
                <h1 id="titleH1">Full Stack Team</h1>
            </div>
            <div id="teamContent" class="row">
                
                <div id="teamGroup" class="row">

                    <div id="picContent" class="col">
                    <img src={AlePic} alt="img" id="teamPicA"/>
                    <h2 id="name">Alexis Piña</h2>
                    <p id="text">dsfgjsdfjkgbdfwfjgbdwfgjwdfbjwdjdrbdrjjdrbwrlbjdsbfd</p>
                    </div>

                    <div id="picContent" class="col">
                    <img src={DeboPic} alt="img" id="teamPicA"/>
                    <h2 id="name">Debo Carabajal</h2>
                    <p id="text">dsfgjsdfjkgbdfwfjgbdwfgjwdfbjwdjdrbdrjjdrbwrlbjdsbfd</p>
                    </div>

                    <div id="picContent" class="col">
                    <img src={CristianPic} alt="img" id="teamPicA"/>
                    <h2 id="name">Cristian Delva</h2>
                    <p id="text">dsfgjsdfjkgbdfwfjgbdwfgjwdfbjwdjdrbdrjjdrbwrlbjdsbfd</p>
                    </div>

                </div>

                <div id="teamGroup" class="row">

                    <div id="picContent" class="col">
                    <img src={DiegoPic} alt="img" id="teamPicB"/>
                    <h2 id="name">Diego Martinotti</h2>
                    <p id="text">dsfgjsdfjkgbdfwfjgbdwfgjwdfbjwdjdrbdrjjdrbwrlbjdsbfd</p>
                    </div>

                    <div id="picContent" class="col">
                    <img src={NahuelPic} alt="img" id="teamPicB"/>
                    <h2 id="name">Nahuel Salomon</h2>
                    <p id="text">dsfgjsdfjkgbdfwfjgbdwfgjwdfbjwdjdrbdrjjdrbwrlbjdsbfd</p>
                    </div>
                </div>
            </div>

            <div id="titleContent" class="row">
                <h2 id="titleH3">Tecnologias utilzadas</h2>
            </div>

            <div id="tecnologias" class="row">
                <div id="logoContent" class="col">
                <img src={Html} alt="img" id="logo"/>
                </div>
                <div id="logoContent" class="col">
                <img src={JavaScript} alt="img" id="logo"/>
                </div>
                <div id="logoContent" class="col">
                <img src={ReactLogo} alt="img" id="logo"/>
                </div>
                <div id="logoContent" class="col">
                <img src={Mongo} alt="img" id="logo"/>
                </div>
                <div id="logoContent" class="col">
                <img src={Redux} alt="img" id="logo"/>
                </div>
                <div id="logoContent" class="col">
                <img src={Express} alt="img" id="logo"/>
                </div>
                <div id="logoContent" class="col">
                <img src={Bootstrap} alt="img" id="logo"/>
                </div>
                <div id="logoContent" class="col">
                <img src={Cloudinary} alt="img" id="logo"/>
                </div>
            </div>

            <div id="buttonChicoTeamContent">
            <Link id="buttonChicoTeam" to="/">
             Volver
            </Link>
            </div>

        </div>

        </div>
  )
}

export default Team