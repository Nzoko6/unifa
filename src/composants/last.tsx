import { Col, Container, Row ,Card, Button } from "react-bootstrap";
import Bar from "../composants/Bar";
import professor from "../assets/professor.png";
import { Typography } from "@mui/material";
import Footer from "../composants/footer";
import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL:'http://localhost:3000'
});


interface autorites{
     id:number;
    nom:string;
    image:string;
    poste:string;
}






export default function Last(){

    const [autorites, setAutorites] = useState<autorites[]>([])

    useEffect(() => {
        api.get('/autorites')
        .then(response=> {
            console.log(response.data)
            setAutorites(response.data)
        })
        .catch(error => console.error(error))
    },[]);



    return <>
    <Container fluid>
        <Bar/>
    </Container>
    <Container>
     
        <Row style={{
         
        }}>
            
        </Row>
      </Container>
      <br /><br />



               <Container>

         <br /> <br />
       <Row style={{
        backgroundColor:'transparent',
        justifyContent:'center',
        justifyItems:'center',
        textAlign:'center',
        padding:20
       }}
       >
           {autorites.map(autorite => (

       
       
        <Col key={autorite.id} xs={12} sm={6} md={4} lg={3}>
        <Card className="card-soft-shadow text-dark" style={{
           border: 'none',
            borderRadius: '22px',
            boxShadow: '0 6px 18px rgba(3, 9, 24, 0.38)',
            transition: 'transform 180ms ease, box-shadow 180ms ease',
            width:"auto",
            height:"350px"
        }}>
            <div style={{
                marginTop:30,
                marginLeft:10
            }}>

                <img src={autorite.image} alt=""
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
                <Typography variant="h5"> {autorite.nom} </Typography>
                <b style={{
                    color:'rgba(63, 63, 63, 1)'
                }}> <b>Postest: <br /></b>{autorite.poste} </b>
                </div>
            </div>
            <Button variant="success">Contacter</Button>
        </Card>
        </Col>

           ))}
           </Row>
   </Container>
    
    
    </>
}