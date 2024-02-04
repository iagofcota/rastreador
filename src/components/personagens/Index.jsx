import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function PersonagemCard({ name, ki, race, image, imageHeight}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345, maxHeight: '100%', position: 'relative', backgroundColor:'#4e4f54' }}>
      <CardActionArea sx={{backgroundImage: 'url("https://img.freepik.com/vetores-gratis/design-de-estilo-gradiente-simples-minimalista-de-luxo-de-fundo-novo_483537-1848.jpg?w=740&t=st=1706042701~exp=1706043301~hmac=906a762bc093f2cc3b5d20eeb695dbf32d21fac043b7081ebcedb818d85eaba8")',
      position: 'relative', // Adicionado
      height: imageHeight,
      // width: '100%',
      // display: 'flex',
      // justifyContent: 'center',
       //alignItems: 'center', 
       }}>
      
      <CardMedia
          component="img"
          //height='auto'
          height={imageHeight}
          width= '100%'
          image={image}
          alt="imagens personagens"
          sx={{
            width: 'auto',
            maxHeight: '100%',
            position: 'absolute', // Adicionado
            top: 20, // Adicionado
            left: 0, // Adicionado
            right: 0, // Adicionado
            bottom: 0, // Adicionado
            margin: 'auto', // Adicionado
            zIndex: 1, // Adicionado
            transition: 'transform 0.3s', // Adicionando uma transição suave
            '&:hover': {
              transform: 'scale(1.1)', // Zoom de 10% no hover
            },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </CardActionArea>

      <CardContent  
          sx={{
          position: 'relative', // Adicionado
          zIndex: 2, // Adicionado
            }}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              fontSize:'18px',
              fontWeight:'bold',
              color:'#F9A825'
            }}
          >
          Base Ki:
          </Typography>

          <Typography  sx={{
              fontSize:'18px',
              fontWeight:'bold',
              color:'white'}}>
          {ki}
          </Typography>

        </CardContent>
        
      <CardActions sx={{margin:'0 10px'}} >
        <Typography gutterBottom variant="h7" component="div" sx={{
              fontSize:'18px',
              fontWeight:'bold',
              color:'white'}}>
          <span style={{ color: '#F9A825', fontWeight: 'bold'}}>Race: <br /></span>
          {race}
        </Typography>
      </CardActions>
      
    </Card>
  );
}
