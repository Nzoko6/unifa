import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Container, Row , Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";


const api = axios.create({
  baseURL: "http://localhost:3000",
});

interface Evenement {
  id: number;
  titre: string;
  image: string;
  description: string;
  date:string
}

export default function EvtCome() {
  const [events, setEvents] = useState<Evenement[]>([]);

  useEffect(() => {
    api
      .get("/evenements")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container className="my-5">
      <Typography variant="h2" id="gradient-text">
        Evénements a venir
      </Typography>
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={12} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            > <hr />
              <Accordion alwaysOpen className="transparent-accordion">
                <Accordion.Item eventKey={String(event.id)}>
                  <Accordion.Header>
                 <p style={{
                  fontFamily:'Times New Roman, Times, serif',
                  fontWeight:'bolder'
                 }}>
                       <b>
                    {new Date(event.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                    </b > <br />
                    <strong> <br />{event.titre}</strong>
                 </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p style={{
                  fontFamily:'Times New Roman, Times, serif',
                  fontWeight:'bolder'
                 }}>{event.description}  <Button variant="outline-primary"
                    style={{
                        marginLeft:'350px'
                    }}
                    >En savoir plus</Button></p>
                   
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <hr />
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
