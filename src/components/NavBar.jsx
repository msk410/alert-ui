import React from 'react';
import {
  AppBar, Toolbar, InputBase, Button,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative !important',
    background: '#24292e',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4">
          alert
        </Typography>
        <div style={{ flexGrow: 1, padding: '10px' }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
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
        <Button onClick={() => onReportSubmit()} variant="contained">Report Incident</Button>
      </Toolbar>
    </AppBar>
  );
};
