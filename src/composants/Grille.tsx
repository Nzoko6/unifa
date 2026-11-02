import { Typography } from "@mui/material";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from 'framer-motion';

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api = axios.create({
    baseURL:'http://localhost:3000'
});

interface facultes{
    id:number;
    nom:string;
    image:string;
    description:string;

}

export default function Grille(){

  const gradientMap: { [key: string]: string } = {
  Maths: 'linear-gradient(135deg, #6A1B9A, #8E24AA)',
  pharmacie: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
  comptabilité: 'linear-gradient(135deg, #0277BD, #29B6F6)',
  economie: 'linear-gradient(135deg, #F9A825, #FFEB3B)',
  droitPrive: 'linear-gradient(135deg, #C62828, #EF5350)',
  SciencesCriminelle: 'linear-gradient(135deg, #4E342E, #8D6E63)',
};



  const controls = useAnimation();



  const [facultes, setFacultes] = useState<facultes[]>([]);

  useEffect(() =>{
    api.get('/facultes')
    .then(response => {
      console.log(response.data)
      setFacultes(response.data)
    })
    .catch(error => console.error(error));
  },[])

 


    return <>


   

       
      <Container>
         
            <Row className="d-flex flex-wrap gap-4" style={{ 
              marginTop: '100px',
              justifyContent:'center',
              justifyItems:'center',
              textAlign:'center',
             borderRadius:'18px',
                  border: 'none',
              boxShadow: '0 6px 18px rgba(2, 5, 12, 0.56)',
               transition: 'transform 180ms ease, box-shadow 180ms ease',
               
              }} >

                              <h1
                      style={{
                        textAlign:'center',
                        marginTop:'20px'
                      }}
                      >Nos Faculté</h1>


          {facultes.map(faculte => (
                    
                     <Col md='4' key={faculte.id} style={
                      {
                        

                      }
                     }>
                <motion.div
                 whileHover={{ scale:1.10 }}
                initial={{ scale: 1.00 , opacity:0}}
                whileInView={{opacity:1}}
               
                 transition={{ duration: 1, type:'spring' }}
                 
                >
                     <Card  style={{
                       
                             backgroundImage: gradientMap[facultes.nom] || 'linear-gradient(135deg, #224741ff, #11b174d2)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            border:'none',
                            borderRadius:'19px',
                            boxShadow: '0 6px 18px rgba(2, 5, 12, 0.83)',
                            transition: 'transform 180ms ease, box-shadow 180ms ease',
                            width: 'auto',
                            height: '300px',
                            color: 'white',
                            fontFamily:'Times New Roman, Times, serif',
                            fontWeight:'bolder',
                            fontSize:'small'

                    }} className="card-soft-shadow text-dark gardiants1">
                        <div style={{
                            marginTop:30,
                            marginLeft:10,
                             color:'white',

                        }}>
                                <img
                                src={faculte.image}
                                alt=""
                                style={{ height: '100px', objectFit: 'cover' }}
                                />


                            <h1> {faculte.nom} </h1>
                            
                            <p> {faculte.description} </p>
                           <div className="d-flex gap-4" style={{
                            justifyContent:'center'
                           }}>
                             <motion.button
                            initial={{scale:1.10}}
                            whileHover={{rotate:20}}
                            whileTap={{scaleX:0.80}}
                            className="btn btn lg text-bold " id="bt1" style={{
                              color:'white'
                            }}>
                                   <Link to="/dep" style={{ fontWeight: 'bold' , textDecoration:'none', color:'white' }}>
                                   Decouvrir
                                   </Link>
                            </motion.button>
                           </div>
                        </div>

                        </Card>
                    </motion.div>
                </Col>
                 ) 

)} <br />
 
      </Row>

      <Row style={{
        marginTop:'30px'
      }}>
        <Typography variant="h2" id="gradient-text" style={{
          fontFamily:'Times New Roman, Times, serif'
        }}>Nos Facultés</Typography>
        <Col md="6">
        <motion.p  id="gradient-text2"
         initial={{ scale:1.15 , opacity:0}}
        whileInView={{ scale: 1.00 , opacity:1}}
        transition={{ duration:2, type:"spring" }}
        >Nos facultés incarnent la diversité et l’excellence académique de notre université. Chacune d’elles est un véritable centre de savoir, offrant aux étudiants un enseignement de qualité et des programmes adaptés aux exigences du monde contemporain.
<br />
Dans chaque faculté, des équipes pédagogiques expérimentées guident les étudiants avec passion et rigueur, favorisant l’acquisition de connaissances solides, la réflexion critique et le développement de compétences pratiques indispensables à la réussite professionnelle

        </motion.p>
        </Col>
        <Col md="6">
        <p id="gradient-text2">
Au-delà des cours, nos facultés encouragent l’innovation, la recherche et l’expérimentation. Les laboratoires, projets et activités scientifiques permettent aux étudiants de mettre en pratique leurs acquis et de se préparer aux défis réels de leur futur métier.
<br />
Qu’il s’agisse des sciences, de l’ingénierie, du droit, de la médecine, de l’économie ou des sciences humaines, chaque faculté offre un environnement stimulant, où curiosité, créativité et excellence se conjuguent pour former des professionnels compétents et des citoyens éclairés.
<br />
En choisissant nos facultés, les étudiants rejoignent une communauté dynamique, engagée et tournée vers l’avenir, où chaque talent peut s’épanouir et chaque ambition se réaliser.
        </p>
        </Col>
      </Row>
   </Container> 
    </>
}