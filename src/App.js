import logo from './logo.svg';
import './App.scss';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Header from './components/Header/Header.js';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills.js'
import Footer from './components/Footer/Footer.js'
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Jumbotron tagline="Hi, I’m Zach. I’m a full-stack software developer from Philadelphia currently working at Vertex Inc."/>
      </div>

      <div className="justify-content-between">
        <TechnicalSkills />
      </div>
      <div className="accordion" id="accordionExample">
        <Experience 
          job_title="Software Developer II"
          job_length="November 2021 - Present"
          job_location="King of Prussia, PA"
          company="Vertex, Inc"
        />
        <Experience 
          job_title="Software Developer I"
          job_length="April 2021 - November 2021"
          job_location="King of Prussia, PA"
          company="Vertex, Inc"
        />
        <Experience 
          job_title="Vertex Advance Program - Technical Track"
          job_length="August 2020 – April 2021"
          job_location="King of Prussia, PA"
          company="Vertex, Inc"
        />
        <Experience 
          job_title="Junior Web Developer"
          job_length="May 2019 – August 2020"
          job_location="Philadelphia, PA"
          company="Temple University, Fox School of Business"
        />
        <Experience 
          job_title="Creative Director + Partner"
          job_length="June 2017 – September 2019"
          job_location="Bensalem, PA"
          company="Rubiar, LLC"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
