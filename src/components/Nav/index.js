import React, { useState } from "react";


function Nav(props) {
    
    const {
        aboutSelected,
        setAboutSelected,
        portfolioselected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return (
    <header>
        <h2>
            <a href="/">
                Sergieo Lopez
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-1">
                        <a href="#about" onClick={() => {
                            setAboutSelected(true)
                            setContactSelected(false)
                            setPortfolioSelected(false)
                            setResumeSelected(false)
                            }}>
                        About Me
                    </a>
                </li>
                <li className="mx-1">
                    <a href="#portfolio" onClick={() => {
                        setPortfolioSelected(true)
                        setContactSelected(false)
                        setAboutSelected(false)
                        setResumeSelected(false)
                        }}>
                        Portfolio
                    </a>
                </li>
                <li className={`mx-1 ${contactSelected && 'navActive'}`}>
                    <a href="#contact" onClick={() => {
                        setContactSelected(true)
                        setAboutSelected(false)
                        setPortfolioSelected(false)
                        setResumeSelected(false)
                        }}>
                        Contact
                    </a>
                </li>
                <li className="mx-1">
                    <a href="#resume" onClick={() => {
                        setResumeSelected(true)
                        setAboutSelected(false)
                        setPortfolioSelected(false)
                        setContactSelected(false)
                    }}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav;