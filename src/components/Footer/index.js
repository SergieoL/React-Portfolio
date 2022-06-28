import React from "react";
import githubIcon from '../../assets/images/github.png'
import linkedInIcon from '../../assets/images/linkedin.png'

function Footer() {

    return (
        <section>
            <footer className="footer">
                <a href="https://github.com/SergieoL/">
                    <img src={githubIcon} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/sergieo-lopez-3b3b9422b/">
                    <img className="linkedInIcon" src={linkedInIcon} alt="linkedIn"></img>
                </a>
            </footer>
        </section>
    )
}

export default Footer;