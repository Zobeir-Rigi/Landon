import React, {useState, useEffect} from 'react';
// import menuLinkData from "./data/menu_links.json"

export const Header = () => {
    const [menuLinkData,setMenuLinkData] = useState([]);

    const LoadMenuLinkData = async() => {
        const resp = await fetch ('https://ivr5v6jf93.execute-api.us-east-1.amazonaws.com/Production/menu_links');
        let jsonData = await resp.json();
    }

    useEffect(()=>{

    },[])

    return (
        <header id="intro">
            <article className="fullheight">
            <div className="hgroup">
                <h1>Landon Hotel</h1>
                <h2>West London</h2>
                <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
            </div>
            </article>
            <nav id="nav">
            <div className="navbar">
                <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                <ul>
               { menuLinkData.map((link) => (
                    <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                 ))
                }
                </ul>
            </div>
            </nav>
      </header>
    );
}