import { Col, Container, Row ,Card, Modal ,Button} from "react-bootstrap";
import Bar from "../composants/Bar";
import professor from "../assets/professor.png";
import { Typography } from "@mui/material";
import Last from "../composants/last";
import Footer from "../composants/footer";
import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL:'http://localhost:3000'
});

interface professeurs{
    id:number;
    nom:string;
    image:string;
    departement:string;
    numero:string;

}







export default function Teacher(){

    const [professeurs, setProfesseurs] = useState<professeurs[]>([])

    useEffect(() =>{
        api.get('/professeurs')
        .then(response=>{
            console.log(response.data)
            setProfesseurs(response.data)
        })
        .catch(error => console.error(error))
    },[]);

const [showModal, setShowModal] = useState(false);
const [selectedProf, setSelectedProf] = useState<professeurs | null>(null);

 

  const handleOpen = (prof: professeurs) => {
    setSelectedProf(prof);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProf(null);
  };

    return <>
    <Container fluid>
        <Bar/>
    </Container>
    <Container>
          <Row  style={{
            marginTop:80
        }}> 
        <Col>
            <img src={professor} alt="" style={{
                width:'300px'
            }}/>
            <Typography variant="h1">
                CORPS EDUCATIFS
            </Typography>
            </Col>
            <hr  style={{
                color:'black',
                fontSize:'large'
            }}/>
        </Row>
        <Row style={{
            marginTop:80,
             boxShadow: '0 6px 18px rgba(3, 9, 24, 0.29)',
        }}>
            <Last/>
        </Row>
      </Container>
      <br /><br />



               <Container>

         <Typography variant="h2" style={{
            textAlign:'center'
            
        }}>
            Enseignants
        </Typography> <br /> <br />
       <Row style={{
        backgroundColor:'transparent',
        justifyContent:'center',
        justifyItems:'center',
        textAlign:'center',
        padding:50
       }}
       >
           {professeurs.map(professeur => (

       
       
        <Col key={professeur.id} xs={12} sm={6} md={4} lg={3}>
        <Card className="card-soft-shadow text-dark" style={{
           border: 'none',
            borderRadius: '22px',
            boxShadow: '0 6px 18px rgba(3, 9, 24, 0.38)',
            transition: 'transform 180ms ease, box-shadow 180ms ease',
            width:"auto",
            height:"350px"
        }}
        
        >
            <div style={{
                marginTop:30,
                marginLeft:10
            }}>

                <img src={professeur.image} alt=""
                width={"195px"} style={{
                    borderRadius:'18px',
                     boxShadow: '0 3px 9px rgba(3, 9, 24, 0.38)',
                         transition: 'transform 180ms ease, box-shadow 180ms ease',
                }}
                /> 
                <div
                style={{
                    marginTop:'13px'
                }}
                >
                     <b>professeur</b>:
                <Typography variant="h5"> {professeur.nom} </Typography>
                <b style={{
                    color:'rgba(63, 63, 63, 1)'
                }}> <b>Departement: <br /></b>{professeur.departement} </b>
                </div>
            </div>
            



        <Button variant="success" 
         onClick={() => handleOpen(professeur)}
        > contacter</Button>
   

        </Card>
        </Col>

           ))}
           </Row>
   </Container>
           <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enseignant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProf &&(
            <>
             <img
            src={selectedProf.image}
            alt={selectedProf.nom}
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          />
           <Typography variant="body1">
            <strong>Noms :</strong> {selectedProf. nom}
          </Typography>
          <Typography variant="body1">
            <strong>Département :</strong> {selectedProf.departement}
          </Typography>
          <Typography variant="body2" style={{ marginTop: 10 }}>
            {selectedProf.numero ||
              "indisponible."}
          </Typography>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

    <Footer/>
    
    </>
}