import { motion } from "framer-motion";
import { Container , Row} from "react-bootstrap";
import { Typography } from "@mui/material";
import Footer from "../composants/footer";
import UNIFA from '../assets/UNIFA.jpg'




export default function Propos(){


    return <>
    <Container style={{
        textAlign:'center',
        justifyContent:'center',
        justifyItems:'center'
    }}>
        <img src={UNIFA} alt="" />
        <Typography variant="h2">Université Francophone D'afrique</Typography>
        <Typography variant="h4">Science au Service de L'homme</Typography><br />
          <Row style={{
            marginTop:80,
             boxShadow: '0 6px 18px rgba(3, 9, 24, 0.29)',
             borderRadius:10,
             height:'400px',
             width: '800px',
             padding:20
        }}>
                <Typography variant="h3" style={{
                    marginTop:20
                }}>En savoir plus</Typography>
                <p>
                    L’UNIFA est un établissement d’enseignement supérieur dédié à la recherche, à l’innovation et à la formation des leaders de demain.
Depuis sa création, elle s’engage à offrir un environnement d’apprentissage stimulant, centré sur la rigueur scientifique et l’ouverture au monde
<br /> <br />

Vision :

Devenir une référence africaine dans la formation scientifique et technologique, en contribuant activement au développement durable et à l’émergence d’une société du savoir.
<br /><br />    
Mission :

Former des étudiants compétents, éthiques et innovants, capables d’appliquer la science et la technologie au service de la communauté.
                </p>
        </Row>

        <Row style={{
            marginTop:80,
             boxShadow: '0 6px 18px rgba(3, 9, 24, 0.29)',
             borderRadius:10,
             height:'400px',
             width: '800px',
             padding:20
        }}>
                <Typography variant="h3" style={{
                    marginTop:20
                }}>Adresse</Typography>

        </Row>

        <br />
         <Row style={{
            marginTop:80,
             boxShadow: '0 6px 18px rgba(3, 9, 24, 0.29)',
             borderRadius:10,
             height:'400px',
             width: '800px',
             padding:20
        }}>
                <Typography variant="h3" style={{
                    marginTop:20
                }}>Philosophie</Typography>
                <p>
                    Fondée sur la conviction que la science est la clé du progrès humain, notre université rassemble des enseignants passionnés, des chercheurs ambitieux et des étudiants déterminés à façonner l’avenir.
Chaque programme, chaque projet et chaque expérience d’apprentissage visent à faire émerger un esprit critique et créatif
                </p>
        </Row>
        <br />
         <Row style={{
            marginTop:80,
             boxShadow: '0 6px 18px rgba(3, 9, 24, 0.29)',
             borderRadius:10,
             height:'400px',
             width: '800px',
             padding:20
        }}>
                <Typography variant="h3" style={{
                    marginTop:20
                }}>Organes officiels</Typography>
                <p>
                    Les organes officiels de l'UNIFA sont au nombre de deux :
1. le Conseil de l’Université qui regroupe tous les doyens des Facultés, les directeurs des centres ainsi que les membres du comité de gestion de l’UNIFA. <br />
2. Le Comité de Gestion qui gère au quotidien , est composé des personnalités suivantes : <br />
• Recteur ; <br />
• Secrétaire Général Académique ; <br />
• Secrétaire général à la recherche ; <br />
• Secrétaire Général Administratif ; <br />
• Administrateur du Budget
                </p>
        </Row>
    </Container>
    <Footer/>
    </>
}