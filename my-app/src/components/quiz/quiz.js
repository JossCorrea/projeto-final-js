import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Question from './question'


function Quiz(){
    return (
      <React.Fragment>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant='h5' color='primary'>Quiz</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className='details'>
          <div>
            <Typography variant='heading' className='heading'>Teste seus conhecimentos sobre os tópicos dessa semana</Typography>
            <br/>
            <div>
            <Question/>
            </div>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button variant="contained" size="large" color="primary">Enviar</Button>
          </ExpansionPanelActions>
        </ExpansionPanel> 
      </React.Fragment>
    )
  };
export default Quiz


       
