import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

document.title = "Portfolio"

function App() {
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {aboutSelected && <About />}
        {portfolioSelected && <Portfolio />}
        {contactSelected && <ContactForm />}
        {resumeSelected && <Resume />}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
