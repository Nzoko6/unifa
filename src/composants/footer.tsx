import { motion } from 'framer-motion';
import { Button, Container , Row, Col } from 'react-bootstrap';



export default function Footer(){



    return (
       <Container fluid style={{
        backgroundColor:'black',
        color:'white',
        height:500,
        
       }}>
        <Row style={{
            marginLeft:30
        }}>
            <Col>
            <br />
                <b>Nos Reseaux</b> <br /> <br />
                <motion.button className='btn btn-secondary '  style={{
                    backgroundColor:'rgb(12, 12, 12)',
                    border:'1px solid rgb(72, 51, 255)'  }}     
                   
                    initial={{ scale:0.30 , opacity:0}}
                    whileInView={{ scale: 1.00 , opacity:1}}
                    whileHover={{scale:1.10}}
                    whileTap={{scale:0.95}}
                    transition={{ duration:1, type:"spring" }}>
                         FB
                 </motion.button>
                 <motion.button className='btn btn-secondary ' id='two'  style={{
                    backgroundColor:'rgb(12, 12, 12)',
                    border:'1px solid rgb(238, 85, 85)',
                    marginLeft:10
                  }}     
                  initial={{ scale:0.30 , opacity:0}}
                  whileInView={{ scale: 1.00 , opacity:1}}
                  whileHover={{scale:1.10}}
                  whileTap={{scale:0.95}}
                  transition={{ duration:2, type:"spring" }}
                    
                    >
                        instagram
                 </motion.button> <br /> <br />

                 <motion.button className='btn btn-secondary ' id='three' style={{
                    backgroundColor:'rgb(12, 12, 12)',
                    border:'1px solid rgb(4, 156, 73)',
                   
                  }}     
                   
                  initial={{ scale:0.30 , opacity:0}}
                  whileInView={{ scale: 1.00 , opacity:1}}
                  whileHover={{scale:1.10}}
                  whileTap={{scale:0.95}}
                  transition={{ duration:2.30, type:"spring" }}>
                        WhatsApp
                 </motion.button>
                 <motion.button className='btn btn-secondary' id='four'  style={{
                    backgroundColor:'rgb(12, 12, 12)',
                     border:'1px solid rgb(226, 23, 23)',
                    marginLeft:10
                  }}     
                   
                  initial={{ scale:0.30 , opacity:0}}
                  whileInView={{ scale: 1.00 , opacity:1}}
                  whileHover={{scale:1.10}}
                  whileTap={{scale:0.95}}
                  transition={{ duration:2.60, type:"spring" }}>
                    YouTube
                 </motion.button> <br />
                
            </Col>
            <Col>
            <br />
                <b>Tous Savoir sur Nous</b><br />
              <button className='btn' style={{
                color:'silver'
              }}>  Qui sommes-nous?</button>

              <button className='btn' style={{
                color:'white'
              }}>  Suivez-Nous</button><br />

                <button className='btn' style={{
                color:'white'
              }}> Publicité</button>
              <button className='btn' style={{
                color:'white'
              }}> </button>



            </Col>
            <Col>
            <br />
                <b>Partenaire</b> <br />
                 <button className='btn' style={{
                color:'white'
              }}>  </button>
            </Col>
            <Col>
            <br />
                <b>Autres Services</b><br />
                <p>indisponible</p>
                <hr />
                <motion.button className='btn btn-secondary '  style={{
                    backgroundColor:'rgb(12, 12, 12)',
                    border:'1px solid rgb(44, 44, 44)',
                   
                  }}     
                   
                    whileHover={{scale:1.10}}
                    initial={{ scale:0.30 , opacity:0}}
                    whileInView={{ scale: 1.00 , opacity:1}}
                    whileTap={{scale:0.95}}
                    transition={{ duration:2, type:"spring" }}
                      >
                        Propositions
                 </motion.button>
                 <motion.button className='btn btn-secondary '  style={{
                    backgroundColor:'rgb(12, 12, 12)',
                    border:'1px solid rgb(44, 44, 44)',
                    marginLeft:10
                  }}     
                   
                  whileHover={{scale:1.10}}
                  initial={{ scale:0.30 , opacity:0}}
                  whileInView={{ scale: 1.00 , opacity:1}}
                  whileTap={{scale:0.95}}
                  transition={{ duration:2.30, type:"spring" }}>
                       Vous
                 </motion.button>
            </Col>
        </Row>
        <br />
        <br />
        <hr />
       </Container>
    )
}