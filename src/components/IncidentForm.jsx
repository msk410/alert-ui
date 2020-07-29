import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, RadioGroup, FormControlLabel, Radio, Card, Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    width: '60%',
    display: 'flex',
    // flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

export const IncidentForm = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('city');
  const dispatch = useDispatch();

  const handleRadioChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: 'OPEN_FORM', isFormOpen: false });
    dispatch({ type: 'OPEN_CARD', isCardOpen: false });
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={() => alert('u die')} style={{ width: '80%' }}>
        <TextField
          label="Location"
          required
          fullWidth
        />
        <RadioGroup defaultValue="city" aria-label="location" name="location" value={value} onClick={(e) => handleRadioChange(e)}>
          <FormControlLabel value="city" control={<Radio />} label="City" />
          <FormControlLabel value="county" control={<Radio />} label="County" />
        </RadioGroup>

        <TextField
          label="Officer Name"
          fullWidth
        />
        <TextField
          id="standard-multiline-flexible"
          label="Description of Incident"
          multiline
          rowsMax={4}
          required
          // value={value}
          // onChange={() => ()}
          fullWidth
        />

        <TextField
          label="Youtube Link"
          fullWidth
        />
        <Button onClick={() => handleSubmit()}>submit</Button>
      </form>
    </Card>
  );
};
