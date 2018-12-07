import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textBox: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '100%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function Feedback(props) {
  const { classes } = props;
  return (
    <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant='h5' color='primary' className='heading'>Feedback</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        <div>
            <p>O projeto deste módulo consites na elaboração de um site...Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil consectetur ipsum deleniti molestiae. Aliquid fugiat consequatur obcaecati cumque fuga pariatur, quo nesciunt aperiam delectus enim necessitatibus hic illum veniam.</p>
        <br/>
        <TextField
                    id="outlined-name"
                    label="Sua percepção da semana"
                    variant="outlined"
                    className='textBox'
                    style={styles.textBox}
                />
        <br/>
            <Button  size="medium" color="secondary">
                Enviar
            </Button>
            </div>
    </ExpansionPanelDetails>
</ExpansionPanel>

  );
}


export default Feedback;