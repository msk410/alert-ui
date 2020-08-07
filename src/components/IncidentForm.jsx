import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, RadioGroup, FormControlLabel, Radio, Card, Button,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  input: {
    marginLeft: '10px',
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
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={() => alert('u die')} style={{ width: '80%' }}>
        <TextField
          className={classes.input}
          label="Location"
          required
          fullWidth
        />
        <RadioGroup
          className={classes.input}
          defaultValue="city"
          aria-label="location"
          name="location"
          value={value}
          onClick={(e) => handleRadioChange(e)}
        >
          <FormControlLabel value="city" control={<Radio />} label="City" />
          <FormControlLabel value="county" control={<Radio />} label="County" />
        </RadioGroup>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          // value={selectedDate}
          // onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <TextField
          className={classes.input}
          label="Officer Last Name"
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Officer First Name"
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Badge Number"
          fullWidth
        />
        <TextField
          className={classes.input}
          id="standard-multiline-flexible"
          label="Incident Description"
          multiline
          rowsMax={4}
          required
          // value={value}
          // onChange={() => ()}
          fullWidth
        />

        <TextField
          className={classes.input}
          label="Youtube Link"
          fullWidth
        />
        <Button onClick={() => handleSubmit()}>submit</Button>
      </form>
      <div style={{ margin: '10px' }}>
        Please fill out as much information as you can. Only the location, date, and description of the incident are required.

        Reporting an incident is completely anonymous.
      </div>

    </Card>
  );
};
