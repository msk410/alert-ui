import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Incident() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea
        // disableSpacing
        onClick={handleExpandClick}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Officer Poop of Poopy Police Department
          </Typography>
        </CardContent>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Badge Number: 234
            </Typography>
            <Typography paragraph>
              Description of Incident: he beat me with his night stick and then maced my puppy
            </Typography>
            {/* <Typography paragraph> */}
            <ReactPlayer width="auto" url="https://www.youtube.com/watch?v=N5koIMwLTJ4" />
            {/* </Typography> */}
          </CardContent>
        </Collapse>
      </CardActionArea>

    </Card>
  );
}
