import React from "react";
import profileImage from '../../assets/images/profile.jpg';

function About() {

    return (
        <section className="my-5">
            <img className="profileImage" src={profileImage} alt="profile"></img>
            <h1 id="about">About Me</h1>
            <p className="content-text">
                        My name is Sergieo Lopez. I am a graduate of Texas Stae Univeristy where I earned my Bachelor's degree
                        in Computer Information Systems. I have classrom experience in many different area of the IT field including,
                        software development, SQL, networking, and hardware. My goal is to become a full time software language, specializing in object
                        oritned programming. Languages I have studied include C#, Java, Swift, Python, HTML, CSS, and Javascroipt.
            </p>
        </section>
    )
}

export default About;