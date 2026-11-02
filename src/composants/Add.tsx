import { Typography, Button , TextField} from "@mui/material";
import Last from "./last";
import { Container,Row, Col } from "react-bootstrap";
import UNIFA from "../assets/UNIFA.jpg"






export default function Add(){



    return  <>
    <Container fluid>
        <Row>
            
            <Col md="6  "  style={{
                height:500,
                 backgroundColor:'#11b1740a',
            }}>
           <div className="d-flex gap-4" style={{
            padding:20,
            marginTop:70    
           }}>
                 <img src={UNIFA} alt="" width={"100px"} />
                 <Typography variant="h4" id="gradient-text"><strong>Université francophone <br /> d'afrique</strong></Typography>
           </div><br />

           <strong style={{
            color:'#267557ff'
           }}>
            L’UNIFA est un établissement d’enseignement supérieur dédié à l’excellence dans la recherche et la formation. <br /> 
             Nous formons des générations d’étudiants passionnés par les sciences, la technologie et l’innovation. <br />
              Notre mission est de développer des compétences solides, <br /> une pensée critique et
               un esprit d’innovation capables de répondre aux défis scientifiques et technologiques du monde moderne.
           </strong>

               
 
            </Col>

            <Col md="6" style={{
                backgroundColor:'#11b1741a',
                height:500,
                justifyContent:'center',
                justifyItems:'center'
            }}>
                 <Typography variant="h4" id="gradient-text" sx={{
                    marginTop:3
                 }}>Nous contacter</Typography>
                 <div className="d-flex gap-4" style={{
            padding:20,
              
           }}>
           
            <form
           
            className="w-100"
            style={{ maxWidth: "350px" }}
          >
            <TextField
              label="Nom"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
             sx={{
                backgroundColor:'white'
                
             }}
            />

            <TextField
              label="Nom de famille"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
             sx={{
                backgroundColor:'white'
             }}
            />


             <TextField
              label="Email"
              type="mail"
              variant="outlined"
              fullWidth
              margin="normal"
             sx={{
                backgroundColor:'white'
             }}
            />

             <TextField
              label="Telephone"
              type="number"
              variant="outlined"
              fullWidth
              margin="normal"
             sx={{
                backgroundColor:'white'
             }}
            />

           

        

            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              className="mt-4"
              style={{ borderRadius: "10px", padding: "10px" }}
            >
              Envoyer
            </Button>
    
          </form>
           </div>
            
            </Col>
        </Row>
    </Container>
    
    
    </>
}