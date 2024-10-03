import React, {useState, useEffect} from 'react';
// import menuLinkData from "./data/menu_links.json"

export const Header = () => {
    const [menuLinkData,setMenuLinkData] = useState([]);

    const LoadMenuLinkData = async() => {
        const resp = await fetch ('https://ejlgxm9wq5.execute-api.us-east-1.amazonaws.com/Production/menuLinks');
        let jsonData = await resp.json();

        setMenuLinkData(jsonData)
    }

    useEffect(()=>{
        LoadMenuLinkData();
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
                    <li key={link.href}><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                 ))
                }
                </ul>
            </div>
            </nav>
      </header>
    );
}