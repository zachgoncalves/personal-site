import logo from './logo.svg';
import './App.scss';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Header from './components/Header/Header.js';
import Experience from './components/Experience/Experience.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <Jumbotron tagline="Hi, I’m Zach. I’m a full-stack software developer from Philadelphia currently working at Vertex Inc."/>
      </div>

      <div class="justify-content-between">
        <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;
