import React from 'react';
import { Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Check, Markunread } from '@material-ui/icons';

import './NotificationRow.css';

const NotificationRow = (props) => {



  return (
    <ListItem button style={{ backgroundColor: props.notification.read ? 'white' : '#3f51b5' }} divider onClick={() => props.toggleRead(props.notification.id)}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ListItemIcon>
            {props.notification.read ? <Check /> : <Markunread />}
          </ListItemIcon>
        </Grid>
        <Grid item xs={6}>
          <ListItemText className="notification-row-msg"><Typography align="center">{props.notification.msg}</Typography></ListItemText>
        </Grid>
        <Grid item xs={4}>
          <ListItemText><Typography align="right">{new Date(props.notification.date).toLocaleDateString()}</Typography></ListItemText>
        </Grid>
      </Grid>
    </ListItem>

  )
}

export default NotificationRow;