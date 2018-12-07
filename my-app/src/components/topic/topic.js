import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';
import {topics} from '../../database'



const styles = {
  list: {
    width: '100%',
    overflow: 'auto',
  }
};

class Topic extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };


  filtergroup = (item) => item.weeks === this.props.week;


  render() {
    const { classes } = this.props;
    return (
      <List disablePadding className='list' style={styles.list} >
        {topics.filter(this.filtergroup).map(topic => (
          <ListItem  key={topic.id} role={undefined} dense button onClick={this.handleToggle(topic)}>
            <Checkbox
              checked={this.state.checked.indexOf(topic) !== -1}
              tabIndex={-1}
              color="primary"
              disableRipple
            />
            <Typography variant='subtitle1'>{`${topic.description}`} </Typography>
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default Topic;