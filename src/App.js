import logo from './logo.svg';
import {NavBar} from "./componets/NavBar";
import { Banner } from  "./componets/Banner";
import { Skills } from "./componets/Skills";
import { Projects } from "./componets/Projects";
import {Footer} from "./componets/Footer";
import {Experience} from "./componets/Experience";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Experience />
      <Skills/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
