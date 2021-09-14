import React from "react";
import NavBarCom from './NavBarComp';

import { Hidden, makeStyles } from "@material-ui/core";
import Cajon from "./Cajon";
import Graph from "./Graph";
import Tabla from "./Tabla";
import DataDisplay from "./DataDisplay"

import { Switch, Route, BrowserRouter } from "react-router-dom";

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flewGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))

const ContainerComp = (props) => {

    const classes = estilos()

    const [abrir, setAbrir] = React.useState(false);

    const desplegar = () => {
    setAbrir(!abrir);
    };

    return (
        <div className={classes.root}>
        <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
        <NavBarCom desplegar={desplegar} />
        <Hidden xsDown>
            <Cajon variant="permanent" open={true} />
        </Hidden>
        <Hidden smUp>
            <Cajon variant="temporary" open={abrir} onClose={desplegar} />
        </Hidden>

        </nav>
        <main className={classes.content}>
        <div className={classes.toolbar}></div>
        

        <Switch>
            <Route exact path="/" render={() => <div>Home Page</div>} />
            <Route path="/MainContent" render={() => <div style={{    position: 'absolute', left: '60%', top: '180%',  transform: 'translate(-50%, -50%)'   }}><Graph /> <Tabla /> <DataDisplay /></div>} />
            <Route path="/pagina2" render={() => <div><DataDisplay /></div>} />
          </Switch>
        </main>
        </BrowserRouter>
        </div>

    );
}

export default ContainerComp