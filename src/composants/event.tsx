import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCome from "./evtCome";
import EvtCome from "./evtCome";


const api = axios.create({ baseURL: "http://localhost:3000" });

interface Evenement {
  id: number;
  titre: string;
  image: string;
  date: string; 
  description: string;
}

export default function Event() {
  const [index, setIndex] = useState(0);
  const [evenements, setEvenements] = useState<Evenement[]>([]);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    api
      .get("/evenements")
      .then((response) => setEvenements(response.data))
      .catch(console.error);
  }, []);

  return (


    
    <Container>
      <Row
        style={{
          marginTop: "20px",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "18px",
          boxShadow: "0 6px 18px rgba(2, 5, 12, 0.56)",
        }}
      >
                      <Container style={{ marginTop: '50px', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom id="gradient-text">
                  Nos événements récents
                </Typography>
                <Typography variant="body2" style={{ maxWidth: '600px', margin: '0 auto' }} id="gradient-text2">
                  Découvrez les activités et projets qui rythment la vie de notre université. 
                  Chaque événement reflète notre engagement pour l'excellence académique et l'innovation.
                </Typography>
</Container> 

        <Col style={{
          marginTop:'10px'
        }}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {evenements.map((evt) => (
              <Carousel.Item key={evt.id}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  className="d-block w-100"
                  src={evt.image}
                  alt={evt.titre}
                />
                <Carousel.Caption>
                  <Typography variant="h2"
                 className="evtText"
                  >{evt.titre}</Typography>
                  <Typography variant="h5"
                   className="evtText"
                  >{evt.description}</Typography>
                  <p>
                    {new Date(evt.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <Button variant="btn btn-success"> <Link to={"/AddEvent"}
                  style={{
                    textDecoration:'none',
                    color:'white'
                  }}
                  >Ajouter</Link></Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
     <EvtCome/>
    </Container>
  );
}
