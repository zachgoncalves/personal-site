import logo from './logo.svg';
import './App.scss';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <Jumbotron tagline="Hi, I’m Zach. I’m a full-stack software developer from Philadelphia currently working at Vertex Inc."/>
      </div>
    </div>
  );
}

export default App;
