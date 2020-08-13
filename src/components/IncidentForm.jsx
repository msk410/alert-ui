import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, RadioGroup, FormControlLabel, Radio, Card, Button,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { useDispatch } from 'react-redux';
import LuxonUtils from '@date-io/luxon';

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
  const [locationType, setLocationType] = React.useState('city');
  const [location, setLocation] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [lastName, setLastName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [badge, setBadge] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [link, setLink] = React.useState('');

  const dispatch = useDispatch();

  const handleRadioChange = (e) => {
    setLocationType(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: 'OPEN_FORM', isFormOpen: false });
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={() => handleSubmit()} style={{ width: '80%' }}>
        <TextField
          className={classes.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          label="Location"
          required
          fullWidth
        />
        <RadioGroup
          className={classes.input}
          defaultValue="city"
          aria-label="location"
          name="location"
          value={locationType}
          onClick={(e) => handleRadioChange(e)}
        >
          <FormControlLabel value="city" control={<Radio />} label="City" />
          <FormControlLabel value="county" control={<Radio />} label="County" />
        </RadioGroup>
        <MuiPickersUtilsProvider utils={LuxonUtils}>
          <KeyboardDatePicker
            required
            className={classes.input}
            margin="normal"
            id="date-picker-dialog"
            label="Date of Incident"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={(e) => (setSelectedDate(e))}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          className={classes.input}
          label="Officer Last Name"
          value={lastName}
          onChange={(e) => (setLastName(e.target.value))}
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Officer First Name"
          value={firstName}
          onChange={(e) => (setFirstName(e.target.value))}
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Badge Number"
          value={badge}
          onChange={(e) => (setBadge(e.target.value))}
          fullWidth
        />
        <TextField
          className={classes.input}
          id="standard-multiline-flexible"
          label="Incident Description"
          multiline
          rowsMax={4}
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          fullWidth
        />

        <TextField
          className={classes.input}
          label="Youtube Link"
          value={link}
          onChange={(e) => (setLink(e.target.value))}
          fullWidth
        />
        <Button onClick={() => handleSubmit()}>submit</Button>
      </form>
      <div style={{ margin: '10px' }}>
        Please fill out as much information as you can. Only the location, date, and description of
        the incident are required. Reporting an incident is completely anonymous.
      </div>

    </Card>
  );
};
