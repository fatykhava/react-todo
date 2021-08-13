import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import DeleteIcon from '@material-ui/icons/Delete';

const TasksList = (props) => {
  return (
    <List>
      {props.tasks.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;

        return (
          <ListItem key={`item-${item.id}`} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                checked={item.isCompleted}
                disableRipple
                inputProps={{'aria-labelledby': labelId}}
                onChange={() => props.onStatusChange(item._id, !item.isCompleted)}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.name}/>
            <ListItemSecondaryAction onClick={() => props.onTrashClick(item._id)}>
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default TasksList;
