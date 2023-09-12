import React, {useEffect, useState} from "react";
import Axios from "axios";
import logo from "../imgs/Logos/GISNY.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import randomizeBackground from "../components/utils/randomizeBackground";

function Impressum(){
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
                                                                             p-5" onClick={()=>navigate("/database")}>
                Datenbank
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
        <div className="w-screen h-screen bg-cover" id="database-root-parent" onClick={()=>setSelect(false)}>

            <div className="
                               w-screen h-screen
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
    );
}

export default Impressum;