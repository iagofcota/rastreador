import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Index'
import { Container, Grid } from '@mui/material'
import axios from 'axios'
import PersonagemCard from '../components/personagens/Index'

const Home = () => {
  const [personagens, setPersonagens] = useState([])
  useEffect(() =>{ // esse useeffects chama esse cara quando ele é montado, abaixo.
      getPersonagens()
  });

  
  // const getPersonagens = () => {
  //   var endpoints = [];
  //   for (var i = 1; i<50; i++){
  //       endpoints.push(`https://www.dragonball-api.com/api/${i}/`);
  //   }
  //   var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPersonagens(res));
  // };

  const getPersonagens = () => {
    axios
    .get("https://dragonball-api.com/api/characters?limit=56")   // fazendo requisição na API
    .then((res) => setPersonagens(res.data.items)) // valor retornado quando faz a requisição
    .catch((err) => console.log (err)); // se der erro retorna o erro
  };

  const personagemFilter = (name) => {
    var filteredPersonagens = [];
    for (var i in personagens){
      if (personagens[i].name.includes(name)) {
        filteredPersonagens.push(personagens[i]);
      }
    }
    setPersonagens(filteredPersonagens);
  };

  return (
    <div>
      <Navbar personagemFilter={personagemFilter}/>
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {personagens.map((personagem, key) => ( //inseri key aqui e na linha debaixo para tirar erro da key
          <Grid item xs={3} key={key}> 
          <PersonagemCard name={personagem.name} ki={personagem.ki} race={personagem.race} image={personagem.image}/> 
          </Grid> 
          ))}
          
        </Grid>
      </Container>
      
    </div>
  )
} 

export default Home

