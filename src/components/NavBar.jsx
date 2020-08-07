import React from 'react';
import {
  AppBar, Toolbar, InputBase, Button, Select, MenuItem,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative !important',
    background: '#24292e',
  },
  search: {
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'OPEN_CARD', isCardOpen: true });
    dispatch({ type: 'OPEN_FORM', isFormOpen: false });
  };

  const onReportSubmit = () => {
    dispatch({ type: 'OPEN_FORM', isFormOpen: true });
    dispatch({ type: 'OPEN_CARD', isCardOpen: false });
  };

  const [age, setAge] = React.useState('');

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4">
          alert
        </Typography>
        <div style={{ flexGrow: 1, padding: '10px' }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="primary" />
            </div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              disableUnderline="true"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <div style={{ width: '100%' }}>
              <form onSubmit={(e) => onSearchSubmit(e)}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </form>
            </div>
          </div>
        </div>
        <Button onClick={() => onReportSubmit()} variant="contained">Report Incident</Button>
      </Toolbar>
    </AppBar>
  );
};
