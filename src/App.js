
import './App.css';
import Banner from './components/Banner';
import NavBar from "./components/NavBar";

import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
 import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.css';  // .min.css could be missing the min 


// install bootsrap icons     npm i bootstrap-icons
// correct one from react    npm i react-bootstrap-icons
// carousel        npm i react-multi-carousel

// contact 
/*
need node  server 
3 packages 
npm install express cors nodemailer       

create server.js 



*/



// npm i react-mailchimp-subscribe             for mailchimpForm 
// create app password in google 
// remove app password only if not needed 
//npm install animate.css --save        for animation /animation.css


// when user is on component screen      // npm i react-on-screen
function App() {
  return (
    <div className="App">
  <NavBar/>
  <Banner/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;



/*  to do list 

how to add image to project withoout links 
how to make svg file image 
how to create a logo without becomeing an expert in marketing, photoshop, or that segment 





*/