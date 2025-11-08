import { Link } from "react-scroll";

function Header() {
  return (
    <section id="Header">
            <div id='navigationBar'>
                <div id='navigationContainer'>
                    <div id='logo'><a href="/">Jarvey<span>.dev</span></a></div>
                    <div id='navigationMenu'>
                        <ul>
                            <li><Link to="homeBanner" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="homeAbout" smooth={true} duration={500}>About</Link></li>
                            <li><Link to="homeProjects" smooth={true} duration={500}>Projects</Link></li>
                            <li><Link to="homeProcess" smooth={true} duration={500}>Process</Link></li>
                            <li><Link to="homeContact" smooth={true} duration={500}>Let's Talk</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;