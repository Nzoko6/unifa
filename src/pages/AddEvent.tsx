import { useForm } from "react-hook-form";
import Footer from "../composants/footer";
import { motion, scale } from "framer-motion";
import bur from "../assets/bur.jpg"
import axios from "axios";
import { Typography, TextField, formControlClasses, duration} from "@mui/material";
import {Accordion, AccordionBody, Button, Card, Modal} from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Bar from "../composants/Bar";
import {Container, Col, Row } from "react-bootstrap";
import { useState,useEffect } from "react";


const api = axios.create({ baseURL: "http://localhost:3000" });

interface Evenement {
  id:  number | string
  titre: string;
  description: string;
  image: string;
  date: string;
}
interface UserAdm {
  id: number | string;
  nom: string;
  postNom: string;
  password: number;
}

export default function AddEvenement() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true)

const [iniLetter, setInitLetter] = useState()
   const [events, setEvents] = useState<Evenement[]>([]);
   const [userAdm, setUserAdm] = useState<UserAdm[]>([])
  
    const navigation = useNavigate()
  const connectedUser = localStorage.getItem("user");
  const user = connectedUser ? JSON.parse(connectedUser) : null;

  const { register, handleSubmit, reset, formState: { } } = useForm<Evenement>();

  if (!user) {
    
      toast.error('vous devait etre connecter');
      navigation("/login")
      
    
  }

const onSubmit = async (data: Evenement) => {
  try {
  const response = await api.post("/evenements", data);
   setEvents([...events, response.data]);
    toast.success("Événement ajouté avec succès !");
    reset();
    setEvents([...events, data]);

  } catch (err) {
    console.error(err);
    toast.error("Erreur lors de l'ajout de l'événement");
  }
};

   const handleDelete = async (id:  number | string) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cet événement ?")) return;

    try {
      console.log("Suppression ID:", id);
      await toast.promise(
         api.delete(`/evenements/${id}`),
            {
              loading: 'Ajout de l’événement en cours...',
              success: 'Événement ajouté avec succès !',
              error: 'Erreur lors de l’ajout de l’événement'
            }
          );
      
      setEvents(events.filter((ev) => ev.id !== id));

    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la suppression de l'événement");
    }
  };
  
  
    useEffect(() => {
      api
        .get("/evenements")
        .then((response) => setEvents(response.data))
        .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
      api.get("/userAdm")
      .then((response) => {
        setUserAdm(response.data)
      const nom = response.data[0].nom
      const post = response.data[1].postNom
      console.log(nom)

      const firstLetter = nom.charAt(0).toUpperCase() 
                          post.charAt(0).toUpperCase()
      setInitLetter(iniLetter)
      console.log(firstLetter)
      })
      .catch((error) =>console.error(error))
    }, [])
  

  return (
   <>

 <Bar/>
    <Container  style={{
       backgroundImage:`url(${bur})`,
      backgroundSize:'cover',
       boxShadow: '0 6px 18px rgba(2, 5, 12, 0.51)'
    }} fluid>

    <Container>
       {userAdm.map(us =>
      <Row key={us.id} style={{
        
        fontFamily:'Times New Roman, Times, serif',
      }}>
        
              
                <Col  md="6" style={{
                  marginTop:'6rem'
                }}>
                    <Typography variant="h2" id="gradient-text">Espace 
                      <br /> Administrateur
                    </Typography> 
                    <p id="gradient-text" style={{
                      marginTop:'2rem',
                      fontFamily:'Times New Roman, Times, serif',
                    }}>Cette interface est reversé au utilisateur authentifié et au employé <br />
                    d'ici on gere les evenements et quelques modification lié a la representation du site
                    </p>
                     <motion.div
                          initial ={{scale : 1.00}}
                          whileHover={{scale:1.10}}
                          whileTap={{rotate:5 , scale:1.00}}
                          transition={{duration:1, type:'spring'}}
                          >
                            <Button variant="outline-info" className="profil" style={{
                      borderRadius:'3rem',
                      width:'100px'
                    }}> <strong>profil</strong> </Button>
                          </motion.div>
                    

              
             </Col>

       
       



        <Col md="6" className="align-items-center justify-content-center" style={{
          justifyContent:'center',
          justifyItems:'center',
          textAlign:'center',
          marginTop:'6rem'
        }}>
        
           <div className="align-items-center justify-content-center">
            <motion.div
            initial={{ scale : 1.00}}
            whileHover={{scale : 1.15}}
            transition={{ duration : 1 , type:'spring'}}
            
            >
              <Card className="rounded-card shadow-md" style={{
              backgroundColor:'rgba(0, 0, 0, 0.8)',
               boxShadow: '0 6px 18px rgba(2, 5, 12, 0.33)',
               marginLeft:'3rem',
               
              textAlign:'center',
              borderRadius:'30rem',
              width:'170px',
              height:'170px'
            }}>
              <br /> <br /> 
                <Typography id="gradient-text" variant="h3" > MK </Typography>
            </Card>
            </motion.div>
            
             <br />
                <Typography id="gradient-text"  variant="h4" style={{
                  fontFamily:'Times New Roman, Times, serif',
                   fontWeight: 'bold'
                }}>{us.nom} {us.postNom} </Typography>
                <span><i>Administrateur</i></span>
              <br />
   <motion.div
   initial ={{scale : 1.00}}
   whileHover={{scale:1.10}}
   whileTap={{rotate:5 , scale:1.00}}
   transition={{duration:1, type:'spring'}}
   >
    <Button className="profil" variant="outline-info" onClick={handleShow} style={{
                  width:'260px',
                  height:'50px',
                  borderRadius:'10rem'
                  
                }}> <strong>Ajouter evenements</strong> </Button>
   </motion.div>
           </div>
                 <br />
        </Col>
              
           
         
      </Row>

)}

    </Container>


     
    </Container>

    <br />
    <Container>
      <Row>
       {events.map(ev =>(
         <Col md='12' key={ev.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            > <hr />
              <Accordion alwaysOpen className="transparent-accordion">
                <Accordion.Item eventKey={String(ev.id)}>
                  <Accordion.Header>
                 <p style={{
                  fontFamily:'Times New Roman, Times, serif',
                  fontWeight:'bolder'
                 }}>
                       <b>
                    {new Date(ev.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                    </b > <br />
                    <strong> <br />{ev.titre}</strong>
                 </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p style={{
                  fontFamily:'Times New Roman, Times, serif',
                  fontWeight:'bolder'
                 }}>{ev.description}  
                    </p>
                   <p className="d-flex gap-2" style={{
                       justifyContent:'right'
                    }}>
                     <Button variant="btn btn-outline-primary" size="sm">
                      En savoir plus
                      </Button>
                   <Button  variant="outline-danger" size="sm" onClick={() => handleDelete(ev.id)}>
                    Supprimer
                  </Button>
                   </p>
                   
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <hr />
            </motion.div>
        
        </Col>
       ))}
      </Row>
    </Container>
     <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Ajout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
                <>
                   <form onSubmit={handleSubmit(onSubmit)}
            className="w-100"
            style={{ maxWidth: "350px", alignItems:'right'}}>
        <TextField
          label="Titre"
          fullWidth
          
          {...register("titre", { required: "Le titre est requis" })}
          
        />

        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          {...register("description", { required: "La description est requise" })}
          
        />

        <TextField
          label="Image (URL)"
          fullWidth
          margin="normal"
          {...register("image", { required: "L'image est requise" })}
         
        />

        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          {...register("date", { required: "La date est requise" })}
    
        />

        <Button
        type="submit"
          variant="btn btn-primary" 
          style={{ marginTop: 20 , width:'280px'}}
        >
          Publier
        </Button>
      </form>
              
                </>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
    
        <Footer/>

   </>
  );
}
