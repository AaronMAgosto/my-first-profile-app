import About from './components/About.jsx';
// import PictCarousel from './components/PictCarousel.jsx';
import Footer from './components/Footer.jsx';
import Grid from './components/Grid.jsx';
import Quote from './components/Quote.jsx';
import Video from './components/Video.jsx';


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <About/>
      <Quote/>
      <Grid/>
      {/* <PictCarousel/> */}
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
