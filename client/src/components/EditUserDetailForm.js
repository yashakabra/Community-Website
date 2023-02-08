import { useState,useEffect } from "react";
import { addUserDetails,getUserDetails,editUserDetails } from "../service/api";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  Name: "",
  Age: "",
  UserName: "",
  Job_Type: 0,
  City: "",
  State: "",
  Pincode: "",
  Introduction: "",
};

export const EditUserDetailForm = () => {
  const [user, setUser] = useState(defaultValue);
  const [value, setValue] = useState(0);

  const id={
    val:"yuio",
  }
  const onValueChange = (e) => {
    if (e.target.name == "Job_Type") {
      setValue(e.target.value);
      console.log(e.target.value);
    }
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  useEffect(()=>{
    loadUserDetails();
   },[])
  
  const loadUserDetails=async ()=>{
    const response=await getUserDetails(id);
    setUser(response.data[0]);
  }
  const handleSubmit = async () => {
    await editUserDetails(user,id);
  };

  return (
    <>
      <Container>
        <Typography variant="h2">Edit Your Details</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Name"
            value={user.Name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Age"
            value={user.Age}
          />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="UserName"
            value={user.UserName}
          />
        </FormControl>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Job Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Job_Type"
            value={user.Job_Type}
            onChange={(e) => onValueChange(e)}
          >
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="Enterprenear"
            />
            <FormControlLabel value="1" control={<Radio />} label="Organizer" />
            <FormControlLabel value="2" control={<Radio />} label="Investor" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <InputLabel>City</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="City"
            value={user.City}
          />
        </FormControl>
        <FormControl>
          <InputLabel>State</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="State"
            value={user.State}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Pincode</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Pincode"
            value={user.Pincode}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Introduction About Yourself</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Introduction"
            value={user.Introduction}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </FormControl>
      </Container>
    </>
  );
};
