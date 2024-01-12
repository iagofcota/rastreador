import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function PersonagemCard({ name, ki, race, image }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="100%"
          objectFit="cover"
          image={image}
          alt="imagens personagens"
          sx={{
            marginTop: 'auto',
            transition: 'transform 0.3s', // Adicionando uma transição suave
            '&:hover': {
              transform: 'scale(1.1)', // Zoom de 10% no hover
            },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </CardActionArea>
      
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
            }}
          >
            <p>Base Ki:</p>
            {ki}
          </Typography>
        </CardContent>
        
      <CardActions>
        <Typography gutterBottom variant="h7" component="div">
          Race: <br />
          {race}
        </Typography>
      </CardActions>
    </Card>
  );
}
