import React, { useEffect, useState } from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';

import './NotificationView.css';
import NotificationList from '../../Components/NotificationList/NotificationList'
import { Add } from '@material-ui/icons';
import NewNotificationDialog from '../../Components/NewNotificationDialog/NewNotificationDialog';

const NotificationView = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    fetch('http://127.0.0.1:5000/notifications')
      .then(r => {
        r.json()
          .then(json => setNotifications(json))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e))
  }

  const postNotification = (msg) => {
    fetch('http://127.0.0.1:5000/notification', {
      method: 'POST',
      body: JSON.stringify({ msg: msg }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(r => fetchNotifications())
      .catch(e => console.log(e));
  }

  const toggleRead = (id) => {
    fetch(`http://127.0.0.1:5000/notification/${id}`, {
      method: 'PUT'
    })
      .then(r => {
        r.json()
          .then(json => {
            let tmpNotification = [...notifications];
            let n = tmpNotification.find(n => n.id === json.id);
            n.read = json.read;
            setNotifications(tmpNotification);
          })
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    fetchNotifications();
  }, [])

  return (
    <>
      <Container>
        <Grid container direction="column" justify="center" alignItems="center" className="notification-view-container">
          <Grid item xs={12} lg={6} style={{ overflowY: "auto" }}>
            <NotificationList notifications={notifications} toggleRead={toggleRead} />
          </Grid>
        </Grid>
        <div className="notification-view-div">
          <IconButton size="medium" aria-label="create a notification" onClick={() => setDialogOpen(true)}>
            <Add />
          </IconButton>
        </div>

        <NewNotificationDialog open={dialogOpen} handleClose={() => setDialogOpen(false)} postNotification={postNotification} />
      </Container>
    </>
  )
}

export default NotificationView;