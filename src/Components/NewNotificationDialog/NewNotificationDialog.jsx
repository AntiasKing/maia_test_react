import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

const NewNotificationDialog = (props) => {
  const [msg, setMsg] = useState('');

  const submit = () => {
    props.postNotification(msg);
    props.handleClose();
  }

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Create a new notification</DialogTitle>
      <DialogContent>
        <TextField autoFocus label="Notification message" fullWidth onChange={e => setMsg(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={submit} color="primary">
          Create
      </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewNotificationDialog;