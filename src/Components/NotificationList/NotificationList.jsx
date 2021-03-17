import React from 'react';
import { List } from '@material-ui/core';
import NotificationRow from './NotificationRow/NotificationRow';


const NotificationList = (props) => {
  return (
    <List className="notification-list">
      {
        props.notifications.map(n =>
          <NotificationRow key={n.id} notification={n} toggleRead={props.toggleRead} />
        )
      }
    </List>
  )
}

export default NotificationList;