import { useState, useEffect } from "react";
import { addUserDetails, getUserDetails, editUserDetails } from "../service/userDetailsAPI";
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
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  _id: "",
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
  const { user: userCurr } = useUserAuth();
  const [id, setId] = useState("yac984@gmail.byn");
  const navigate = useNavigate();


  const onValueChange = (e) => {
    if (e.target.name == "Job_Type") {
      setValue(e.target.value);
      console.log(e.target.value);
    }
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!userCurr) {
      console.log("RETURN USER");
      return ;
    }
    if(userCurr.email == id){
      loadUserDetails();
      return ;
    }
    if (userCurr) {
      setId(userCurr.email);
    }
  }, [userCurr, id]);

  const loadUserDetails = async () => {
    console.log("INSIDE LOAD   ", id);
    const data={
      id : id,
    }
    const response = await getUserDetails(data);
    setUser(response.data[0]);
  }
  const handleSubmit = async () => {
    user._id = id;
    console.log("INSIDE HANDLE SUBMIT", user);
    const data = {
      id: id,
    }
    await editUserDetails(user, data);
    navigate('/home');
  };

  return (
    <>
      <Container>
        <div>{userCurr&& userCurr.email}</div>
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
