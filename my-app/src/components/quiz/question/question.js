import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const perguntas = [
   {id:1, question:'Pergunta 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo nemo libero voluptates architecto magni consequatur consequuntur delectus. Autem, molestias voluptatem animi blanditiis consequuntur ad architecto et laborum atque asperiores?'},
   {id:2, question:'Pergunta 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo nemo libero voluptates architecto magni consequatur consequuntur delectus. Autem, molestias voluptatem animi blanditiis consequuntur ad architecto et laborum atque asperiores?'}, 
   {id:3, question:'Pergunta 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo nemo libero voluptates architecto magni consequatur consequuntur delectus. Autem, molestias voluptatem animi blanditiis consequuntur ad architecto et laborum atque asperiores?'}
]
class Question extends React.Component {
    state = {
      value: 'Respondido',
    };
  
    handleChange = event => {
      this.setState({ value: event.target.value });
    };
  
    render() {
      const { classes } = this.props;

        return(
        <React.Fragment>
            {perguntas.map(pergunta =>
            <FormControl  key={pergunta.id} component="fieldset" className='formControl' style={styles.formControl}>
                <FormLabel component="legend">{pergunta.question}</FormLabel>
                <RadioGroup
                        aria-label="gender"
                        name="pergunta"
                        className='group'
                        style={styles.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    <FormControlLabel
                        control={<Radio color="primary" />}
                        value="opcao1"
                        label="Opção 1"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        control={<Radio color="primary" />}
                        value="opcao2"
                        label="Opção 2"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        control={<Radio color="primary" />}
                        value="opcao3"
                        label="Opção 3"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        control={<Radio color="primary" />}
                        value="opcao4"
                        label="Opção 4"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl>   
           
        )}
        </React.Fragment>
        )
    }
};
  
export default Question