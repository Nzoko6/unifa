import { Col, Container, Row ,Card } from "react-bootstrap";
import{ motion } from "framer-motion"
import Bar from "../composants/Bar";
import { Typography } from "@mui/material";
import Footer from "../composants/footer";



import axios from "axios";
import { useEffect, useState } from "react";



const api = axios.create({
    baseURL:'http://localhost:3000'
});

interface facultes {
    id:number;
    nom:string;
    image:string;
    description:string;
    departement:string

}

export default function Faculté() {
const gradientMap: { [key: string]: string } = {
  Maths: 'linear-gradient(135deg, #6A1B9A, #8E24AA)',
  pharmacie: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
  comptabilité: 'linear-gradient(135deg, #0277BD, #29B6F6)',
  economie: 'linear-gradient(135deg, #F9A825, #FFEB3B)',
  droitPrive: 'linear-gradient(135deg, #C62828, #EF5350)',
  SciencesCriminelle: 'linear-gradient(135deg, #4E342E, #8D6E63)',
};




    
const [facultes, setFacultes] = useState<facultes[]> ([]);

useEffect(() => {
    api.get('/departements')
    .then(response => {
        console.log(response.data)
        setFacultes(response.data)})
    .catch(error => console.error(error));
},[]);


    return <>
     <Container fluid>
        <Bar/>
        <Row style={{
        textAlign:'center',
        justifyContent:'center',
        justifyItems:'center',
        marginTop:'80px',
        padding:3
        }}> <br /> <br />
            <div style={{marginTop:'80px'}}>
                <Typography variant="h2" className="gradient-text">UNIFA</Typography>
            <Typography variant="h1" className="gradient-text">Universté</Typography>
            <Typography variant="h2" className="gradient-text">Francophone d'afrique</Typography>
            <Typography variant="h3" className="gradient-text">Départements</Typography><br />

            <b className="intro">Découvrez l’ensemble des départements qui composent notre université,</b> <br />
            <b className="intro1">chacun dédié à l’excellence,
                 à la recherche et à la formation de futurs leaders dans leur domaine."</b> <br />
                  <b className="intro">"Nos départements sont le cœur battant de notre institution, offrant des parcours riches,
                    </b> <br />
                    <b className="intro1"> rigoureux et adaptés aux enjeux contemporains.",</b> <br />
            </div>

                     <div className="d-flex gap-4" style={{
                        justifyContent:'center', 
                        justifyItems:'center', 
                        textAlign:'center',
                        marginTop:20
                        }}>
                             <motion.button
                             style={
                                {
                                     background: 'linear-gradient(135deg, #3f105c, #cc65e9ff)',
                                    color:'white',
                                    border:'none',
                                }
                             }
                            initial={{scale:1.10}}
                            whileHover={{rotate:5}}
                            whileTap={{scaleX:0.80}}
                            className="btn btn lg text-bold">
                                     <b>Decouvrir </b>
                            </motion.button> <motion.button
                            initial={{scale:1.10}}
                            whileHover={{rotate:5}}
                            whileTap={{scaleX:0.80}}
                            className="btn btn-outline lg text-bold bt" id="btn">
                                    <b>Postuler</b>
                            </motion.button>
                           </div>
        </Row>
     </Container>
     <Container>
         
            <Row className="d-flex flex-wrap gap-4" style={{ marginTop: '100px' }} >
                
                 {facultes.map(faculte => (
                    
                     <Col md='6' key={faculte.id}>
                <motion.div
                 whileHover={{ scale:1.10 }}
                initial={{ scale: 1.00 , opacity:0}}
                whileInView={{opacity:1}}
               
                 transition={{ duration: 1, type:'spring' }}
                 
                >
                     <Card  style={{
                        backgroundImage: gradientMap[faculte.departement] || 'linear-gradient(135deg, #333, #591388ff)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            border: 'none',
                            boxShadow: '0 6px 18px rgba(2, 5, 12, 0.7)',
                            transition: 'transform 180ms ease, box-shadow 180ms ease',
                            width: 'auto',
                            height: '300px',
                            color: 'white',

                    }} className="card-soft-shadow text-dark gardiants1">
                        <div style={{
                            marginTop:30,
                            marginLeft:10,
                             color:'white',

                        }}>
                                


                            <Typography variant="h3"> {faculte.departement} </Typography>
                           <div className="d-flex gap-4">
                             <motion.button
                            initial={{scale:1.10}}
                            whileHover={{rotate:5}}
                            whileTap={{scaleX:0.80}}
                            className="btn btn lg text-bold gardiants6" style={{color:'white'}}>
                                    Decouvrir
                            </motion.button> <motion.button
                            initial={{scale:1.10}}
                            whileHover={{rotate:5}}
                            whileTap={{scaleX:0.80}}
                            className="btn btn-outline lg text-bold bt" id="btn1">
                                    Postuler
                            </motion.button>
                           </div>
                        </div>

                        </Card>
                    </motion.div>
                </Col>
                 )
                   
                    
             
                
                )}
               
                
            </Row>

 <Row style={{
               marginTop:'60px'
            }}>
                <h2><b>PENSEES</b></h2>
                <br />
                <Col md='4'>
                     <motion.div
                    initial={{scale:0.90, opacity:0}}
                    whileInView={{scale:1.00, opacity:1}}
                    transition={{ duration: 2, type:'spring' }}
                    >
                         <Typography variant="h3"></Typography>
                    <b className="intro1">
                        Le monde évolue vite. Les frontières entre la technologie,
                        la médecine et le social s’effacent pour donner naissance à une nouvelle génération de solutions humaines et intelligentes.
                        Ici, nous formons des étudiants capables de créer ces passerelles.
                         Grâce à la puissance du numérique, ils apprennent à diagnostiquer plus vite, à soigner mieux.<br /> <br /> <br />
                         <hr />
                    </b>
                    </motion.div>
                   
                </Col>

                <Col md='4'>
                                     <motion.div
                    initial={{scale:0.90, opacity:0}}
                    whileInView={{scale:1.00, opacity:1}}
                    transition={{ duration: 2, type:'spring' }}
                    >
                        <Typography variant="h3"></Typography>
                 <b className="intro">
                    À l’ère de la transformation numérique, notre établissement se positionne à la croisée de la technologie, de la médecine et du développement social.
                    Nous croyons fermement que le progrès scientifique n’a de sens que s’il sert l’humain.
                     C’est pourquoi nos programmes favorisent une approche interdisciplinaire :
                      l’ingénierie et l’intelligence artificielle y rencontrent la recherche médicale,
                     la biotechnologie et les sciences sociales.
                     <hr />

                 </b >
                    </motion.div>
                 
                </Col>

                <Col md='4'>
                 <motion.div
                    initial={{ opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ duration: 2, type:'spring' }}
                    >
                          <Typography variant="h3"></Typography>
                 <b className="intro1">
                    Ensemble, ces domaines construisent une vision d’avenir où la technologie soutient la santé,
                  où la médecine s’appuie sur la donnée, et où le social guide chaque innovation.
                Nos étudiants apprennent à devenir des acteurs du changement — capables de concevoir des solutions technologiques,
                    d’améliorer la qualité de vie et de renforcer la solidarité au sein de nos communautés <br /></b><br />
                    <hr />
                    </motion.div>
               
                </Col>
            </Row>

        </Container>
                  <div style={{
                    marginTop:'80px'
                  }}>
                      <Footer/>
                  </div>
  
    </>
}