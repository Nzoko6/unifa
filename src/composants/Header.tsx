import { motion } from "framer-motion";
import {  Col, Container, Row } from "react-bootstrap"
import { Typography } from "@mui/material"
import biblio2 from "../assets/biblio2.jpg"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





export default function Header(){
    

    return <>

       <Container fluid>
        <Row style={{
            backgroundImage:`url(${biblio2})`,
            backgroundSize:'cover',
            height:500,  
            width:'auto',
            justifyContent:'center',
            justifyItems:'center'
            
        }}>
            <Col md='12' >
            <div style={{
                textAlign:'center',
                justifyContent:'center',
                justifyItems:'center',
                 marginTop:80,     
                 gap:1                                          
            }}>
                
                  <Typography variant="h1" sx={{
                    color:'white',
                    marginTop:'150px'
                  }} >
                    <strong>Bienvenue a <br />l'UNIFA</strong>
                  </Typography>
                
            
               <div className="d-flex gap-1" >
                 <motion.button
             whileHover={{ rotate: 8 }}
             whileTap={{ scale: 0.95 }}
             className="btn btn"
             style={{
                border:'3px solid white',
                borderRadius:28,
                color:'white',
                height:60
             }}
             >
               <strong> Inscription 2025-2026</strong>
             </motion.button> 
             <motion.button
              whileHover={{ rotate: 8 }}
             whileTap={{ scale: 0.95 }}
             className="btn btn" 
              style={{
                border:'3px solid white',
                 borderRadius:28,
                color:'white',
                height:60
             }}
            
             ><Link to="/login" style={{ fontWeight: 'bold' , textDecoration:'none', color:'white' }}>
                Log In
                </Link></motion.button>
               </div>
            </div>
            </Col>
            
        </Row>
       </Container>
            
    </>
}