import React, {useEffect, useState} from "react";
import Axios from "axios";
import logo from "../imgs/Logos/GISNY.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import randomizeBackground from "../components/utils/randomizeBackground";

function Database(){
    const navigate = useNavigate();
    const [select, setSelect] = useState(false);
    let blackBg = <div></div>
    let settingsWnd = <div> </div>
    let settingsSelect = <div className="xl:w-14 xl:h-14 xl:text-3xl
                                    absolute top-0 right-0
                                    mobile:w-10 mobile:h-10  mobile:text-2xl
                                    bg-native-green rounded-bl-xl shadow-md shadow-black
                                    hover:bg-native-green-hover
                                    flex items-center justify-center" onMouseEnter={()=>setSelect(true)} onClick={()=>setSelect(true)}>
        <FontAwesomeIcon icon={faBars}/>
    </div>
    if(select){
        blackBg = <div className="w-screen h-screen bg-black-t-50" onClick={()=>setSelect(false)}></div>
        settingsWnd = <div className="h-fit md:w-20p mobile:w-1/2  absolute top-0 right-0" onMouseLeave={()=>setSelect(false)}>
            <div id="dashboard-settings-database" className="w-full h-13p
                                                                             text-center text-white mobile:text-lg md:text-xl
                                                                             bg-native-green hover:bg-native-green-hover
                                                                             border-black border-2 rounded-2xl
                                                                             p-5" onClick={()=>navigate("/")}>
                Home
            </div>
            <div id="dashboard-settings-wetterstation" className="w-full h-13p
                                                                             text-center text-white mobile:text-lg md:text-xl
                                                                             bg-native-green hover:bg-native-green-hover
                                                                             border-black border-2 rounded-2xl
                                                                             p-5" onClick={()=>navigate("/weatherstation")}>
                Wetterstation
            </div>
            <div id="dashboard-settings-wetterstation" className="w-full h-13p
                                                                             text-center text-white mobile:text-lg md:text-xl
                                                                             bg-native-green hover:bg-native-green-hover
                                                                             border-black border-2 rounded-2xl
                                                                             p-5" onClick={()=>navigate("/sensors")}>
                Sensorik
            </div>
            <div id="dashboard-settings-wetterstation" className="w-full h-13p
                                                                             text-center text-white mobile:text-lg md:text-xl
                                                                             bg-native-green hover:bg-native-green-hover
                                                                             border-black border-2 rounded-2xl
                                                                             p-5" onClick={()=>navigate("/impressum")}>
                Impressum
            </div>
        </div>
        settingsSelect = <div></div>
    }

    useEffect(() => {
        const runOnMount = async () => {
            //Background selection
            let root = document.getElementById("database-root-parent")
            randomizeBackground(root)
        }
        runOnMount().then(r => console.log("Component successfully mounted"))
    }, [])

    return(
        <div className="h-fit w-full">
            <div className="w-fullF h-screen bg-cover overflow-x-hidden" id="database-root-parent" onClick={()=>setSelect(false)}>

                <div className="
                               w-fullF h-screen
                               bg-black-t-50 top-0 left-0 absolute
                               flex items-center justify-center
                               ">
                    <div className="flex items-start justify-between">
                        <img src={logo} alt="" className="absolute top-10 left-10 h-8p w-15p"/>
                        {settingsSelect}
                    </div>
                    <div className="text-white w-fit h-fit text-center" id="database-desc-text">
                        <p className="xl:text-8xl md:text-6xl mobile:text-4xl"> Die Energiehaus Wetterstation. </p>
                        <p className="xl:text-4xl md:text-2xl mobile:text-lg pt-5">Zugriff auf unsere Daten. Sofort. Von Überall.</p>
                    </div>
                </div>
                {blackBg}
                {settingsWnd}
            </div>
            <div className="h-400 w-fullF bg-gradient-to-br from-native-green to-native-green-hover overflow-x-hidden " id="database-scroll-container">
                <div className="h-5p w-full
                                text-white text-5xl text-center
                                flex justify-center items-center">
                    Unsere Datenbank - Kurz beschrieben
                </div>
                <div className="h-fit w-full flex justify-center items-center">
                    <div className="h-fit w-75p
                                    text-white text-3xl
                                    ">
                        Hier findet ihr alle Werte die jemals gesammelt wurden. Ihr könnt euch alles vom
                        Ersten je gemessenen Wert, bis hin zum aktuellsten Wert, anzeigen
                        lassen. Daten werden automatisch in ihre Zeitspanne sortiert und sinnvoll
                        gekürzt, um die Diagramme sauber darzustellen.
                        Ihr habt jedoch auch die Möglichkeit, alle Daten aus einer
                        bestimmten Zeitspanne auszulesen.
                    </div>
                </div>
                <div className="h-fit w-full flex justify-center items-center" onClick={()=>navigate("/impressum")}>
                    <div className="h-fit w-75p
                                    text-white text-xl text-center
                                    ">
                        (Wie das geht, lest ihr hier.)
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Database;