import { AppBar, Typography } from '@material-ui/core';
import './App.css';
import NotificationView from './View/NotificationView/NotificationView';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Typography variant="h5">
          Notifications
        </Typography>
      </AppBar>
      <NotificationView />
    </div>
  );
}

export default App;
