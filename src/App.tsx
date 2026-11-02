
import { Container } from 'react-bootstrap';
import './App.css'
import Bar from './composants/Bar';
import Header from './composants/Header';
import Grille from './composants/Grille';
import Event from './composants/event';

import Footer from './composants/footer';
import Add from './composants/Add';


function App() {


  return (
    <>
    

    < Container fluid
    style={{
      backgroundColor:'rgba(238, 238, 238, 1)'
    }}
    >
     
        
        
          <Bar/>
       
         <Header/>
         <br />
         <Grille/>
         <br /><br />
        <Event/>
        <br /> <br />
        <Add/>
        
        <Footer/>
    </Container>
      
    </>
  );
}


export default App
