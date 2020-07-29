import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { NavBar } from './components/NavBar';
import Incident from './components/IncidentCard';
import { IncidentForm } from './components/IncidentForm';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
}));

export const App = () => {
  const classes = useStyles();
  const isFormOpen = useSelector((state) => state.showContentReducer.isFormOpen);
  const isCardOpen = useSelector((state) => state.showContentReducer.isCardOpen);

  return (
    <div>
      <CssBaseline />
      <NavBar />
      {isFormOpen && (
      <div className={classes.content}>
        <IncidentForm />
      </div>
      )}
      {isCardOpen && (
      <div className={classes.content}>
        <Incident />
      </div>
      )}
    </div>
  );
};
export default App;
