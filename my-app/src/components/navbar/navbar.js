import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo-reprograma.png'
import './navbar.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft:  20,
    }
}

class Navbar extends React.Component {
    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };
    
      render() {
        const { anchorEl } = this.state;
    return(
    <AppBar position="fixed" color="primary">
        <Toolbar>
            <Typography variant="headline" color="inherit" className='grow' style={styles.grow}>
            <img 
                className='navbar__logo' 
                src={logo}
                alt='Reprograma'
            />
            </Typography>

            <Badge color="secondary" badgeContent={3}>
                <MailIcon/>
            </Badge>
            
            <IconButton className='button' color="inherit" aria-label="Menu"style={styles.button} onClick={this.handleClick}>
                <MenuIcon />
            </IconButton>
            
            <Avatar className='button' style={styles.button}>JS</Avatar>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                >
                <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                <MenuItem onClick={this.handleClose}>Meu desenvolvimento</MenuItem>
                <MenuItem onClick={this.handleClose}>Presença e Assiduidade</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
    )}
}

export default Navbar