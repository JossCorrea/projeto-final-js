import React from 'react'
import'./week.css'
import Topic from '../../components/topic'
import Quiz from '../../components/quiz'
import Feedback from '../../components/feedback'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { history } from '../../App';
import Divider from '@material-ui/core/Divider';


const styles = {
    grow: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft:10,
      },
    growsub: {
        flexGrow: 1,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      backButton: {
        marginLeft:  10
      },
    page: {
        marginTop: 80,
        marginLeft:10,
        marginRight:10,
        marginBottom: 20
    },
    titulo:{
        marginTop: 10,
        marginLeft:10,
        marginBottom: 10
    },
    panel:{
        marginLeft:100,
        marginRight:100,
    }
  };

function Week(props){
  
    return(
        <React.Fragment>
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <IconButton onClick={() => history.goBack()} className='menuButton' color="inherit" aria-label="Menu"style={styles.backButton}>
                <i className="material-icons">keyboard_arrow_left</i>
                </IconButton>
                <Typography variant="h4" color="inherit" className='grow'style={styles.grow}>
                    Módulo 1
                </Typography>
            </Toolbar>
        </AppBar>
        <div className='panel' style={styles.panel}> 
            <Typography variant="h4" color="primary" className='growsub' style={styles.growsub}>
                {props.history.location.state.week}               
            </Typography>
            <Typography variant="subtitle1" color="inherit"className='growsub' style={styles.growsub}>
                Selecione os tópicos correspondentes aos conteúdos que você considera ter aprendido durante a semana           
            </Typography>
            <Divider variant="fullWidth" ligth/>
            <Topic week={props.history.location.state.week} />
            <br/>
            <Quiz/>
           
            <br/>
            <Feedback/>
            <br/>
        </div>
        </React.Fragment>
    )

}

export default Week