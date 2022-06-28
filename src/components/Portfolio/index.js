import React from "react";

function Portfolio() {

    const projects = [
        {
            name: "Reel Me In",
            description: "A movie website built using JavaScript and MySQl. Users can create an account, login, create posts and comment on existing post. Each post pulls the movie info from the IMDB API",
            image: "../../assets/images/",
            gitHub: "https://github.com/SergieoL/Reel-Me-In",
            deployedApp: "https://reel-me-in-2020.herokuapp.com/"
        },
        {
            name: "Movie Genie",
            description: "A website built with HTML, CSS, JavaScript and the IMDB API. Users can search any movie and the site will pull the movie data (movie poster, title, year, summary, reviews) from the IMDB API",
            image: "../../assets/images/",
            gitHub: "https://github.com/TheBatMatt/Movie-Genie",
            deployedApp: "https://tedmjablonowski.github.io/Movie-Genie/"
        },
        {
            name: "Weather Dashboard",
            description: "A built with a third party API to display the current and 5 forcast for any searched city.",
            image: "../../assets/images/",
            gitHub: "https://github.com/SergieoL/Weather-Dashboard",
            deployedApp: "https://sergieol.github.io/Weather-Dashboard/"
        },
        {
            name: "Employee Tracker",
            description: "A backend node application used to view, update, and create employees in a database.",
            image: "../../assets/images/",
            gitHub: "https://github.com/SergieoL/Employee-Tracker",
            deployedApp: "https://github.com/SergieoL/Employee-Tracker"
        },
        {
            name: "Tech Blog",
            description: "A website built with HTML, CSS, and MySQl used to create blog post. Users can create an account, login, create posts, and comment on existing posts.",
            image: "../../assets/images/",
            gitHub: "https://github.com/SergieoL/Tech-Blog",
            deployedApp: "https://challenge-14-techblog.herokuapp.com/"
        },
        {
            name: "Note Taker",
            description: "A website used to create and save notes on to be loaded whenecer the user navigates back to the website.",
            image: "../../assets/images/",
            gitHub: "https://github.com/SergieoL/Note-Taker",
            deployedApp: "https://reallyuniquechallengename11.herokuapp.com/notes"
        }
    ]

    return (
        <section>
            <h1>Portfolio</h1>
            <div>
                <div className="flex-row">
                    {projects.map((project, i) => (
                    <section>
                        <a href={project.gitHub}>
                        <h1>{project.name}</h1>
                        <img
                            src={require(`../../assets/images/${i}.jpg`)}
                            alt={project.name}
                            className="img-thumbnail mx-1"
                        /> 
                        </a>
                        <p>{project.description}</p>
                        <a href={project.gitHub}>
                            <p>Github Repo</p>
                        </a>
                        <a href={project.deployedApp}>
                            <p>Deployed Application</p>
                        </a>
                    </section>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;