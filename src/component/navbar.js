import "./navbar.css"
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuListRef = useRef(null);
    const toggleMenu = () => {
        if (menuListRef.current.style.maxHeight === "0px" || !menuListRef.current.style.maxHeight) {
            menuListRef.current.style.maxHeight = "300px";
        } else {
            menuListRef.current.style.maxHeight = "0px";
        }
    };
    return (
        <div className="header">
            <Link className="link" to="/"><h1><span>Barfaid</span>.Dev</h1></Link>
            <ul className="ul" ref={menuListRef}>
                <Link className="link" to="/"><li className="li" onClick={toggleMenu}>Home</li></Link>
                <Link className="link" to="/About"><li className="li" onClick={toggleMenu}>About</li></Link>
                <Link className="link" to="/skills"><li className="li" onClick={toggleMenu}>Skills</li></Link>
                <Link className="link" to="/projects"><li className="li" onClick={toggleMenu}>Projects</li></Link>
                <Link className="link" to="/contact"><li className="li" onClick={toggleMenu}>Contact</li></Link>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
            <img alt="img" className="iconlist" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA19JREFUaEPNW+F6gzAITPri+/ric7W1NpEAdxBX+3MecAdIUL/V4v5qKWVxUd8CsOxW/IRfLbUs89LyVEFIIaG74DaO8NH+wQlAxJ+QbM7Fq8Iaw1nMiWRx9De0ybO/CLX0xwTLAIsPiUSMBnRJwUgUDRNsI4W0vMU1YM8HEiwkYIWGszO1I4D54hALqguawVlqb19zwrYe19Okn9HDeGdwP8MnkqxYSyOezfEPO3AKICewtyJ1x9I3s/4mOuYwj5lSYSwAhspVU90RgpOUbOl/kRjMEMYNF4wco1hMWBASEnHW+ukEPy9kSGdsWeZmS+tE4AovyyIGYK1V2O+4Fe15RzCbMBO6lFJvksvo/oendCd4iy4E11KWX5kYWTxHqaNuKbXUA2aUfBkXXDxWQ7rCSItOxGCC/abbKUGC4QprSrEeH6GOgq2BB+UZEqx0AhQAARn5SFf47IGL6OMwGGNvjgb3GY4qjN40YdLGXmnBGrkQiZBRy4DIQAOFE4wC0zrQQAFcrMIZRaYt4hjB6JmICQ5k9iomiuBcFllxx+XefjZmvfd4uMKPc/jnGOpW670j91o8BO5th60VBto+h+9IKlTBxxqnFo8nUZ2tdoVJUHrxOGaLEcwQ7ePELb8quBUhJAQ1eX52wc74aVra/gIoK7yUWm/687B5Q7Gq/aZfBSOjlhxafeBHDDEoRsMNGSZZzCP59/Y79lh89zwcDImkNejaN2ODEy8ARsHZcL6AIEI7yAfu4JZWqVxGNZasvGAsTgglckk8HGkB4cVDvgHUSouUfIBBzCwV3kelzfbSFW71IflAMaF2kyv5KMU9BWK2TOA0dgFXmFktT2NrOL7uanlGNp5fHtatz7+Rz6twu5Sxm2QgKekKs4+Hb/yo9V/856kev4j/doUDVdpN4E9PH2C6whm+vq12DmPnM3L80IuHT1pHhAiFjHiW9tCasMrBlBDBCMYJCE/pl58JEZsVzz9ExiEzLKC3BJO1TkwcL52sMNyg/wsknmMuLfijg6+k1pWXEMzKMQvqOMsLxo7OZItj/1OBJC4leBwACauNasIWSaFSjJmnjaBhSpisz8xBs1MguXLWqgnMp7rQnaVams3UBE1gyNmC4T4lJBJQUPUQJiscDBw0y3CHbVtuf5LsY1CktGm9AAAAAElFTkSuQmCC"/>
            </div>
        </div>
    )
}

export default Navbar;