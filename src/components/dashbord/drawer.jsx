import React from "react";
import clsx from 'clsx';
import "./drawer.css"
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function drawer() {
  return <div className="drawerBox">
        <Drawer variant="permanent">
        <Divider />
        <List>
            <ListItem button>
            <ListItemIcon>
              <EmojiObjectsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddAlertOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Reminders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Labels" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SystemUpdateAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="trash" />
          </ListItem>
     
        </List>
      </Drawer>

  </div>;
}
