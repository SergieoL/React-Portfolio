import React from "react";

function Resume() {


    return (
        <section className="my-5 resume">
            <div className="resume">
            <h1>Resume</h1>
            <a href="https://drive.google.com/uc?export=download&id=1NalShCle-xJRuCZ29c0HXORELvRyEd-k">Download my Resume</a>

            <h2>Front-end Proficiencies</h2>
            <ul className="resume">
                <li>HTML</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
            <h2 className="resume">Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
            </ul>
            </div>
        </section>
    )
}

export default Resume;