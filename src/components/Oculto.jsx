import React from "react";
import { withWidth, Typography, Hidden } from "@material-ui/core";

const NavOculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>
            <Hidden xsDown>

            </Hidden>
        </div>
    )
}

export default withWidth()(NavOculto)