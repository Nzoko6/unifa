import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Typography, Button, TextField, Alert } from "@mui/material";
import { motion } from "framer-motion";
import student from "../assets/student.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

interface UserAdm {
  id: number ;
  nom: string;
  postNom: string;
  password: string;

}

interface LoginForm {
  nom: string;
  password: string;
  postNom: string;
}

export default function Login() {
    const navigation = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const [loginError, setLoginError] = useState("");



  const onSubmit = async (data: LoginForm) => {
    try {

      const res = await api.get<UserAdm[]>("/userAdm"); // appel vers la db et la reponse est stocker dans res

    
      const user = res.data.find(
        (u) => u.nom === data.nom && u.postNom === data.postNom && u.password === data.password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        console.log("Connexion réussie :", user);
        toast.success('connexion reussi');
       navigation("/AddEvent")
       
    
      } else {
            toast.error("Nom ou mot de passe incorrect");
       
      }
    } catch (err) {
      console.error(err);
      setLoginError("Erreur serveur, réessaie plus tard.");
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Row
        className="shadow-lg rounded-4 overflow-hidden"
        style={{ width: "70%", backgroundColor: "white" }}
      >
        <Col md={6} className="p-0">
          <motion.img
            src={student}
            alt="Student"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Col>

        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center p-5"
        >
          <Typography variant="h4" gutterBottom>
            Connexion Administrateur
          </Typography>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100"
            style={{ maxWidth: "350px" }}
          >
            <TextField
              label="Nom"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("nom", { required: "Le nom est requis" })}
              error={!!errors.nom}
              helperText={errors.nom?.message}
            />

             <TextField
              label="Postnom"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("postNom", { required: "Le nom est requis" })}
              error={!!errors.postNom}
              helperText={errors.postNom?.message}
            />

            <TextField
              label="Mot de passe"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("password", { required: "Le mot de passe est requis" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            {loginError && (
              <Alert severity="error" className="mt-2">
                {loginError}
              </Alert>
            )}

        

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
              style={{ borderRadius: "10px", padding: "10px" }}
            >
              Se connecter
            </Button>
            <Button variant="outlined"
            color="error"
            className="mt-4"
              style={{ borderRadius: "10px", padding: "10px" }}
            >
                <Link to={"/"} style={{
                    color:'red',
                textDecoration:'none'
            }}>Accueil</Link>
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
