import { useState, useEffect, useMemo } from 'react';
import img from '../Imgs/IMG_E7578.JPG'
import './about.css';
const About = () => {
    const [text, setText] = useState("");

    const table = useMemo(() => [
        "M", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "B", "a", "r", "f", "a", "i", "d", " ", "Y", "a", "s", "s", "i", "n", "e", ",", " ",
        "a", "n", "d", " ", "I", " ", "a", "m", " ", "a", " ", "d", "e", "d", "i", "c", "a", "t", "e", "d", " ", "f", "u", "l", "l", "-", "s", "t", "a", "c", "k", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", " ",
        "w", "i", "t", "h", " ", "a", " ", "s", "t", "r", "o", "n", "g", " ", "f", "o", "u", "n", "d", "a", "t", "i", "o", "n", " ", "i", "n", " ", "b", "o", "t", "h", " ", "f", "r", "o", "n", "t", "e", "n", "d", " ",
        "a", "n", "d", " ", "b", "a", "c", "k", "e", "n", "d", " ", "d", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t", ".", " ", "W", "i", "t", "h", " ", "a", " ", "d", "e", "e", "p", "-", "s", "e", "a", "t", "e", "d", " ", "p", "a", "s", "s", "i", "o", "n", " ",
        "f", "o", "r", " ", "t", "h", "e", " ", "c", "o", "n", "v", "e", "r", "g", "e", "n", "c", "e", " ", "o", "f", " ", "d", "e", "s", "i", "g", "n", " ", "a", "n", "d", " ", "t", "e", "c", "h", "n", "o", "l", "o", "g", "y", ",", " ", "I", " ", "t", "h", "r", "i", "v", "e", " ", "o", "n", " ", "c", "r", "e", "a", "t", "i", "n", "g", " ",
        "c", "o", "m", "p", "r", "e", "h", "e", "n", "s", "i", "v", "e", " ", "s", "o", "l", "u", "t", "i", "o", "n", "s", " ", "t", "h", "a", "t", " ", "a", "r", "e", " ", "n", "o", "t", " ", "o", "n", "l", "y", " ", "v", "i", "s", "u", "a", "l", "l", "y", " ",
        "c", "o", "m", "p", "e", "l", "l", "i", "n", "g", " ", "b", "u", "t", " ", "a", "l", "s", "o", " ", "f", "u", "n", "c", "t", "i", "o", "n", "a", "l", "l", "y", " ", "r", "o", "b", "u", "s", "t", ".", " ",
        "M", "y", " ", "f", "r", "o", "n", "t", "e", "n", "d", " ", "e", "x", "p", "e", "r", "t", "i", "s", "e", " ", "i", "n", "c", "l", "u", "d", "e", "s", " ", "c", "r", "a", "f", "t", "i", "n", "g", " ", "b", "e", "a", "u", "t", "i", "f", "u", "l", ",",
        " ", "u", "s", "e", "r", "-", "f", "r", "i", "e", "n", "d", "l", "y", " ", "i", "n", "t", "e", "r", "f", "a", "c", "e", "s", " ", "w", "i", "t", "h", " ", "H", "T", "M", "L", ",", " ", "C", "S", "S", ",", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t", ",", " ",
        "a", "n", "d", " ", "f", "r", "a", "m", "e", "w", "o", "r", "k", "s", " ", "l", "i", "k", "e", " ", "R", "e", "a", "c", "t", " ", "a", "n", "d", " ", "N", "e", "x", "t", ".", "j", "s", ",", " ", "e", "n", "s", "u", "r", "i", "n", "g", " ", "a", " ",
        "s", "e", "a", "m", "l", "e", "s", "s", " ", "e", "x", "p", "e", "r", "i", "e", "n", "c", "e", " ", "a", "c", "r", "o", "s", "s", " ", "a", "l", "l", " ", "d", "e", "v", "i", "c", "e", "s", ".", "/n",

        "O", "n", " ", "t", "h", "e", " ", "b", "a", "c", "k", "e", "n", "d", ",", " ", "I", " ", "a", "m", " ",
        "p", "r", "o", "f", "i", "c", "i", "e", "n", "t", " ", "i", "n", " ", "N", "o", "d", "e", ".", "j", "s", " ",
        "a", "n", "d", " ", "E", "x", "p", "r", "e", "s", "s", ",", " ", "w", "i", "t", "h", " ", "a", " ", "f", "o", "c", "u", "s", " ",
        "o", "n", " ", "b", "u", "i", "l", "d", "i", "n", "g", " ", "s", "c", "a", "l", "a", "b", "l", "e", " ", "a", "n", "d", " ",
        "s", "e", "c", "u", "r", "e", " ", "s", "e", "r", "v", "e", "r", "-", "s", "i", "d", "e", " ", "a", "p", "p", "l", "i", "c", "a", "t", "i", "o", "n", "s", ".", " ",
        "I", " ", "h", "a", "v", "e", " ", "e", "x", "p", "e", "r", "i", "e", "n", "c", "e", " ", "w", "i", "t", "h", " ",
        "d", "a", "t", "a", "b", "a", "s", "e", "s", " ", "l", "i", "k", "e", " ", "M", "o", "n", "g", "o", "D", "B", " ", "a", "n", "d", " ",
        "S", "Q", "L", ",", " ", "e", "n", "a", "b", "l", "i", "n", "g", " ", "m", "e", " ", "t", "o", " ", "d", "e", "v", "e", "l", "o", "p", " ",
        "w", "e", "l", "l", "-", "r", "o", "u", "n", "d", "e", "d", " ", "a", "p", "p", "l", "i", "c", "a", "t", "i", "o", "n", "s", " ",
        "t", "h", "a", "t", " ", "h", "a", "n", "d", "l", "e", " ", "d", "a", "t", "a", " ", "e", "f", "f", "i", "c", "i", "e", "n", "t", "l", "y", ".", " ",
        "S", "t", "a", "y", "i", "n", "g", " ", "u", "p", "d", "a", "t", "e", "d", " ", "w", "i", "t", "h", " ",
        "i", "n", "d", "u", "s", "t", "r", "y", " ", "t", "r", "e", "n", "d", "s", " ", "a", "n", "d", " ", "c", "o", "n", "t", "i", "n", "u", "o", "u", "s", "l", "y", " ",
        "e", "x", "p", "a", "n", "d", "i", "n", "g", " ", "m", "y", " ", "s", "k", "i", "l", "l", " ", "s", "e", "t", " ", "i", "s", " ",
        "e", "s", "s", "e", "n", "t", "i", "a", "l", " ", "t", "o", " ", "m", "y", " ", "w", "o", "r", "k", ".", " ", "I", " ", "a", "m", " ",
        "c", "o", "n", "s", "t", "a", "n", "t", "l", "y", " ", "e", "x", "p", "l", "o", "r", "i", "n", "g", " ", "n", "e", "w", " ",
        "t", "o", "o", "l", "s", ",", " ", "f", "r", "a", "m", "e", "w", "o", "r", "k", "s", ",", " ", "a", "n", "d", " ",
        "t", "e", "c", "h", "n", "i", "q", "u", "e", "s", " ", "t", "o", " ", "d", "e", "l", "i", "v", "e", "r", " ",
        "c", "u", "t", "t", "i", "n", "g", "-", "e", "d", "g", "e", " ", "s", "o", "l", "u", "t", "i", "o", "n", "s", " ",
        "t", "h", "a", "t", " ", "m", "e", "e", "t", " ", "a", "n", "d", " ", "e", "x", "c", "e", "e", "d", " ",
        "c", "l", "i", "e", "n", "t", " ", "e", "x", "p", "e", "c", "t", "a", "t", "i", "o", "n", "s", "."
    ], []);

    useEffect(() => {
        let text = '';

        table.forEach((char, index) => {
            setTimeout(() => {
                text += char;
                setText(text);
            }, index * 5);
        });
    }, [table]);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '../CV/barfaid-yassine.pdf';
        link.download = 'CV_Barfad_Yassine.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="container">
            <div className="container-img">
                <img src={img} alt="Profile" />
            </div>
            <div className="container-text">
                <h1>•About me</h1>
                <h4>{text}</h4>
                <div class='divbutton'>
                    <div class="button" data-tooltip="Size: 20Mb">
                        <div class="button-wrapper" onClick={downloadCV}>
                            <div class="text">Download Cv</div>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
