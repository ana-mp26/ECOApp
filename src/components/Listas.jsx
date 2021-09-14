import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import { Link } from "react-router-dom";


const Lista = () => {
  return (
    <div>
      <List component="nav" aria-label="cicle">

      {["MainContent", "pagina2","pagina3", "pagina4"].map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text}>
            <ListItemIcon>
              {index % 2 === 0 ? <ViewColumnOutlinedIcon /> : <MailIcon /> }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Lista;