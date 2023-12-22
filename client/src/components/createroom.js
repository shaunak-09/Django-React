import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import axios from "axios"
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function CreateRoomPage()
{
  
const [votes_to_skip, setVotes_to_skip] = useState(1)
const [guest_can_pause, setGuest_can_pause] = useState(true)

 function handleVotesChange(e) {
    setVotes_to_skip(e.target.value);
  }

 function handleGuestCanPauseChange(e) {
    setGuest_can_pause( e.target.value === "true" ? true : false);
  }

 async function handleCreate() {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     votes_to_skip: this.state.votesToSkip,
    //     guest_can_pause: this.state.guestCanPause,
    //   }),
    // };
    // fetch("/api/create-room", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
      try{
        const res=await axios.post(`${server}/create_room`,
        JSON.stringify({
          votes_to_skip:votes_to_skip,
          guest_can_pause:guest_can_pause
        }))
        console.log(res);
      }
      catch(err){
        console.log(err);
      }
  }


    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Guest Control of Playback State</div>
            </FormHelperText>
            <RadioGroup
              row
              value={guest_can_pause}
              onChange={handleGuestCanPauseChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="number"
              onChange={handleVotesChange}
              value={votes_to_skip}
              inputProps={{
                min: 1,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Votes Required To Skip Song</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={handleCreate}
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }
