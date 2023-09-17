import React, {useEffect, useState} from "react";
import logo from "../imgs/Logos/GISNY.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import randomizeBackground from "../components/utils/randomizeBackground";

function Impressum(){
    const navigate = useNavigate();
    const [select, setSelect] = useState(false);

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);

    let blackBg = <div></div>
    let settingsWnd = <div> </div>



    /* FAQ settings section */
    let firstCard =
        <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-2xl">
            <div className="pl-5">
                <FontAwesomeIcon icon={faArrowRight}/> Was darf ich alles mit den Daten machen?
            </div>
        </div>
    let secondCard =
        <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-2xl">
            <div className="pl-5">
                <FontAwesomeIcon  icon={faArrowRight}/> Wie kann ich alle Daten aus der Datenbank abrufen?
            </div>
        </div>
    let thirdCard =
        <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-2xl">
            <div className="pl-5">
                <FontAwesomeIcon icon={faArrowRight}/> An wen soll ich mich wenden, wenn ich einen anderen Sensor will?
            </div>
        </div>
    let fourthCard =
        <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-2xl">
            <div className="pl-5">
                <FontAwesomeIcon icon={faArrowRight}/> Was ist das Energiehaus/Warum gibt es dieses Projekt?
            </div>
        </div>
    let fifthCard =
        <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-2xl">
            <div className="pl-5">
                <FontAwesomeIcon icon={faArrowRight}/> Kann ich bei dem Projekt mitmachen/Kann ich die Website erweitern?
            </div>
        </div>



    let firstFAQ = <div></div>
    let secondFAQ = <div></div>
    let thirdFAQ = <div></div>
    let fourthFAQ = <div></div>
    let fifthFAQ = <div></div>

    function resetFAQ(){
        setFirst(false)
        setSecond(false)
        setThird(false)
        setFourth(false)
        setFifth(false)
    }
    if(first){
        firstFAQ =
            <div className="w-full h-72 bg-white rounded-b-2xl pt-3 border-t-black border-2 shadow-md flex items-center justify-center">
                <div className="w-85p h-fit text-2xl">
                    Die Daten stehen jedem zur freien Verfügung. Primär sind sie dazu gedacht, am
                    Gymnasium Isny als Forschungsdaten zu dienen, damit Schülerinnen und
                    Schüler aus den Daten Grafiken, Studien oder Nachforschungen erstellen können,
                    für z.B. eine GFS.
                    Wir freuen uns trotzdem über jedes Projekt das mit unseren Daten verwirklicht wird
                    und befürworten auch eine Nutzung außerhalb unsere Schule.
                </div>
            </div>
        firstCard = <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-t-2xl shadow-2xl">
            <div className="pl-5">
                <FontAwesomeIcon icon={faArrowDown}/> Was darf ich alles mit den Daten machen?
            </div>
        </div>
    }

    if(second){
        secondFAQ =
            <div className="w-full h-72 bg-white rounded-b-2xl pt-3 border-t-black border-2 shadow-md flex items-center justify-center">
                <div className="w-85p h-fit text-2xl">
                    Unsere Datenbank läuft separat zur Website auf einer eignen Subdomain. Diese
                    dient euch als REST-API, womit ihr Daten ganz einfach mit einer GET oder POST
                    Request abrufen könnt.  <br/>
                    Eine ausführliche Dokumentation findet ihr in unserem Github-Repository, dort
                    sind alle wichtigen Informationen aufgelistet und ihr findet dort auch Beispiele.
                    Bitte bedenkt, dass unsere Datenbank monetär bedingt nur eine begrenzte Rechenleistung hat
                    und ihr eure Anfragen so effizient wie möglich gestaltet.
                </div>
            </div>

        secondCard =
            <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-t-2xl shadow-2xl">
                <div className="pl-5">
                    <FontAwesomeIcon  icon={faArrowDown}/> Wie kann ich alle Daten aus der Datenbank abrufen?
                </div>
            </div>
    }

    if(third){

        thirdFAQ =
            <div className="w-full h-72 bg-white rounded-b-2xl pt-3 border-t-black border-2 shadow-md flex items-center justify-center">
                <div className="w-85p h-fit text-2xl">
                    Bitte wendet euch an Luca Perri oder Philipp Wolf, sollten die nicht
                    mehr auf der Schule sein, wendet euch an die Energiehausleitung.
                    Jeder neuer Sensor der eingebaut wird, kriegt eine eigene Tabelle
                    in der Datenbank und muss daher programmiert werden.
                </div>
            </div>

        thirdCard =
            <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-t-2xl shadow-2xl">
                <div className="pl-5">
                    <FontAwesomeIcon icon={faArrowDown}/> An wen soll ich mich wenden, wenn ich einen anderen Sensor will?
                </div>
            </div>

    }

    if(fourth){
        fourthFAQ =
            <div className="w-full h-72 bg-white rounded-b-2xl pt-3 border-t-black border-2 shadow-md flex items-center justify-center">
                <div className="w-85p h-fit text-2xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </div>
            </div>
        fourthCard =
            <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-t-2xl shadow-2xl">
                <div className="pl-5">
                    <FontAwesomeIcon icon={faArrowDown}/> Was ist das Energiehaus/Warum gibt es dieses Projekt?
                </div>
            </div>
    }
    if(fifth){
        fifthFAQ =
            <div className="w-full h-96 bg-white rounded-b-2xl pt-3 border-t-black border-2 shadow-md flex items-center justify-center">
                <div className="w-85p h-fit text-2xl">
                    Die Energie-AG sucht immer neue motivierte Mitglieder die sich
                    für das Projekt interessieren. Das einzige was ihr mitbringen müsst
                    sind Motivation, Interesse und Freude an der Sache. Stand jetzt müsst
                    ihr mindestens in der 8. Klasse sein, um dem Energiehaus beitreten zu können. <br/>
                    Wendet euch an Herr Ahmann oder Herr Schättiger für weitere Informationen <br/>
                    <br/>
                    Des weiteren gibt es die Möglichkeit, an dieser Website zu arbeiten. Wenn ihr euch
                    dafür interessiert, traut euch ruhig unser Github-Repository zu Forken und eure eigenen
                    Erweiterungen zu erstellen. Auf unserem Repository findet ihr auch Informationen
                    zu den Bibliotheken die benutzt wurden und einigen Formalitäten die ihr beachten
                    solltet.
                </div>
            </div>
        fifthCard =
            <div className="w-full h-28 flex items-center
                                        bg-white text-4xl
                                        rounded-t-2xl shadow-2xl">
                <div className="pl-5">
                    <FontAwesomeIcon icon={faArrowDown}/> Kann ich bei dem Projekt mitmachen/Kann ich die Website erweitern?
                </div>
            </div>
    }





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
            let root = document.getElementById("impressum-root-parent")
            randomizeBackground(root)
        }
        runOnMount().then(() => console.log("Component successfully mounted"))
    }, [])

    return(
        <div className="h-fit w-full">
            <div className="w-fullF h-screen bg-cover overflow-x-hidden" id="impressum-root-parent" onClick={()=>setSelect(false)}>

                <div className="
                               w-fullF h-screen
                               bg-black-t-50 top-0 left-0 absolute
                               flex items-center justify-center
                               ">
                    <div className="flex items-start justify-between">
                        <img src={logo} alt="" className="absolute top-10 left-10 h-8p w-15p"/>
                        {settingsSelect}
                    </div>
                    <div className="text-white w-fit h-fit text-center top-13p" id="impressum-desc-text">
                        <p className="xl:text-8xl md:text-6xl mobile:text-4xl"> Impressum</p>
                    </div>
                </div>
                {blackBg}
                {settingsWnd}
            </div>
            <div className="h-400 w-fullF bg-gradient-to-br from-native-green to-native-green-hover overflow-x-hidden" id="impressum-scroll-container">

                <div className="w-full h-fit flex justify-center pt-10" id="impressum-scroll-textcontainer">
                    <div className="h-fit w-fit" id="impressum-scroll-contributors">
                        <div className="h-5p w-full
                                text-white text-5xl text-center
                                flex justify-center items-center">
                            Mitwirkende
                        </div>
                        <div className="h-fit w-full flex justify-center items-center">
                            <div className="h-fit w-75p
                                    text-white text-3xl
                                    ">
                                <ul className="list-none">
                                    <li className="p-3">Schulleitung: Jochen Müller  </li>
                                    <li className="p-3">Energiehausleitung: David Ahmann und Christian Schättiger</li>
                                    <li className="p-3"> Bau der Wetterstation: Jella Müller </li>
                                    <li className="p-3">Website-Design: Philipp Wolf </li>
                                    <li className="p-3">Backend-Design: Luca Perri </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-fit w-fit">
                        <div className="h-5p w-full
                                text-white text-5xl text-center
                                flex justify-center items-center">
                            Kontaktdaten
                        </div>
                        <div className="h-fit w-full flex justify-center items-center">
                            <div className="h-fit w-75p
                                    text-white text-3xl
                                    ">
                                <ul className="list-none">
                                    <li className="p-3">Gymnasium Isny: +49(0) 07562 97565</li>
                                    <li className="p-3">Luca Perri: <br/> schueler-luca.perri@gisny.wwschool.de</li>
                                    <li className="p-3">Unser Github: https://github.com/Tund101HD/Energiehaus</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex justify-center items-center pt-32" id="impressum-scroll-helpcontainer">
                    <div className="w-75p h-fit" onMouseEnter={()=>setFirst(true)} onMouseLeave={()=>resetFAQ()}>
                        {firstCard}
                        {firstFAQ}
                    </div>
                </div>
                <div className="w-full h-fit flex justify-center items-center pt-10" id="impressum-scroll-helpcontainer">
                    <div className="w-75p h-fit" onMouseEnter={()=>setSecond(true)} onMouseLeave={()=>resetFAQ()}>
                        {secondCard}
                        {secondFAQ}
                    </div>
                </div>
                <div className="w-full h-fit flex justify-center items-center pt-10" id="impressum-scroll-helpcontainer">
                    <div className="w-75p h-fit" onMouseEnter={()=>setThird(true)} onMouseLeave={()=>resetFAQ()}>
                        {thirdCard}
                        {thirdFAQ}
                    </div>
                </div>
                <div className="w-full h-fit flex justify-center items-center pt-10" id="impressum-scroll-helpcontainer">
                    <div className="w-75p h-fit"  onMouseEnter={()=>setFourth(true)} onMouseLeave={()=>resetFAQ()}>
                        {fourthCard}
                        {fourthFAQ}
                    </div>
                </div>
                <div className="w-full h-fit flex justify-center items-center pt-10" id="impressum-scroll-helpcontainer">
                    <div className="w-75p h-fit" onMouseEnter={()=>setFifth(true)} onMouseLeave={()=>resetFAQ()}>
                        {fifthCard}
                        {fifthFAQ}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Impressum;