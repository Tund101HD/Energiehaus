import bg1 from "../../imgs/Backgrounds/BG1.jpeg";
import bg2 from "../../imgs/Backgrounds/BG2.jpeg";
import bg3 from "../../imgs/Backgrounds/BG3.jpeg";
import bg4 from "../../imgs/Backgrounds/BG4.jpeg";
import bg5 from "../../imgs/Backgrounds/BG5.jpeg";
import bg6 from "../../imgs/Backgrounds/BG6.jpeg";
import bg7 from "../../imgs/Backgrounds/BG7.jpeg";
import bg8 from "../../imgs/Backgrounds/BG8.jpeg";


function randomizeBackground(root){
    const pictureArray = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];
    console.log(selectedPicture);
    root.style.backgroundImage = 'url(' + selectedPicture + ')';
}

export default randomizeBackground;