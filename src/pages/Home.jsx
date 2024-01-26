import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Index'
import { Container, Grid } from '@mui/material'
import axios from 'axios'
import PersonagemCard from '../components/personagens/Index'
import { Height } from '@mui/icons-material'

const Home = () => {
  const [personagens, setPersonagens] = useState([])
  useEffect(() =>{ // esse useeffects chama esse cara quando ele é montado, abaixo.
      getPersonagens();
  }, []);

  const getPersonagens = () => {
    axios
    .get("https://dragonball-api.com/api/characters?limit=56")   // fazendo requisição na API
    .then((res) => setPersonagens(res.data.items)) // valor retornado quando faz a requisição
    .catch((err) => console.log (err)); // se der erro retorna o erro
  };


  const personagemFilter = (name) => {
    if (name === "") {
      // Se o nome estiver vazio, recarregue todos os personagens
      getPersonagens();
    } else {
      // Atualize o estado com base no estado anterior
      setPersonagens(prevPersonagens => {                             //passo 3 > pega o conteudo de "prevPersonagens" e seta em "SetPersonagens", que irá atualizar "personagens"
        return prevPersonagens.filter(personagem =>                   //passo 2 pega o resultado do teste e joga em prevPersonagens > passo 3  (função "filter" cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.)
          personagem.name.toLowerCase().includes(name.toLowerCase()) //passo 1, transforma o nome em minuscula e compara com o nome digitado, se for true>passo 2
        );
      });
    }
  };

  return (
    <div>
      <Navbar personagemFilter={personagemFilter}/>
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {personagens.map((personagem, key) => ( //inseri key aqui e na linha debaixo para tirar erro da key
          <Grid item xs={12} sm={5} md={4} lg={2.4} key={key}>{/* ocupação da tela, divide por 12, ai mostra o quanto vai aparecer: ex:md={4} 12/4 = 3 cards */} 
          <PersonagemCard name={personagem.name} ki={personagem.ki} race={personagem.race} image={personagem.image} imageHeight={500}/>
        </Grid> 
          ))}
          
        </Grid>
      </Container>
      
    </div>
  )
} 

export default Home

