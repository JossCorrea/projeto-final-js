import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {modulos} from '../../database'
import { history } from '../../App';

import'./course.css'

const styles = {
    page: {
        marginTop: 80
     },

     card: {
        marginLeft:10,
        marginRight:10,
        marginBottom: 20

    },

  };

const pushPage = (module) => {
    history.push('/module',{module})
}

function Course(){
    return(
        <div className='page' style={styles.page}>
            {modulos.map(modulo =>
                <Card key={modulo.id} className='card'style={styles.card} onClick={() => pushPage(modulo) }>
                    <CardActionArea> 
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2" color="primary">
                                {modulo.title}
                            </Typography>
                            <Typography component="p" variant="subheading">
                                {modulo.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="medium" color="primary">
                            Projeto
                        </Button>
                        <Button size="medium" color="primary">
                            Meu desenvolvimento
                        </Button>
                    </CardActions>
                </Card>
            )
        }
        </div>
    )
}

export default Course