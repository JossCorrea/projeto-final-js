import React from 'react'
import'./module.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {weeks} from  '../../database'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { history } from '../../App';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
    grow: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft:10,
      },
      backButton: {
        marginLeft:  10
      },
    page: {
        marginTop: 20,
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
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
    },
    card: {
        marginLeft:10,
        marginRight:10,
        marginBottom: 20
    },
    textBox: {
        width: '100%',
    }
  };

  const pushPage = (week) => {
    history.push('/week', { week })
}

function Module(props){
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
        <div className='page' style={styles.page}>
            {weeks.map(group =>
                <Card  key={Math.random()} className='card'style={styles.card} onClick={() => pushPage(group) }>
                    <CardActionArea> 
                        <CardContent>
                            <Typography gutterBottom variant="h5" color="primary">
                                {group}
                            </Typography>
                        </CardContent>
                    </CardActionArea> 
                    <CardActions>
                         <Button size="medium" color="primary">
                            Quiz
                        </Button>
                        <Button size="medium" color="primary">
                            Feedback
                        </Button>
                    </CardActions>
                </Card>
            )}
                <ExpansionPanel className='panel'style={styles.panel} >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant='h5' color='primary' className='heading'>Projeto</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className='panel_content'style={styles.panel_content} >
                        <div>
                            <p>O projeto deste módulo consites na elaboração de um site...Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil consectetur ipsum deleniti molestiae. Aliquid fugiat consequatur obcaecati cumque fuga pariatur, quo nesciunt aperiam delectus enim necessitatibus hic illum veniam.</p>
                        <br/>
                            <TextField
                                id="outlined-name"
                                label="Link do seu projeto"
                                variant="outlined"
                                className='textBox'
                                style={styles.textBox}
                            />
                        <br/>
                            <Button  size="medium" color="secondary">
                                Submeter
                            </Button>
                         </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        </div>
    </React.Fragment>
    )
}

export default Module