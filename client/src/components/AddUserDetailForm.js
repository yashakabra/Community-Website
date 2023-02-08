import { useState } from "react";
import { addUserDetails } from "../service/api";
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
  City:"",
  State:"",
  Pincode:"",
  Introduction:"",
};

export const AddUserDetailForm = () => {
  const [user, setUser] = useState(defaultValue);
  const [value, setValue] = useState(0);
  // const job_type=
  const onValueChange = (e) => {
    if(e.target.name=='Job_Type')
    {
    setValue(e.target.value);
    console.log(e.target.value);
    }
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value});
  };

  const handleSubmit =async ()=>{
    await addUserDetails(user);

  };
  
  return (
    <>
      <Container>
        <Typography variant="h2">Add Your Details</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="Name" />
        </FormControl>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="Age" />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="UserName" />
        </FormControl>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Job Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Job_Type"
            value={value}
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
          <Input onChange={(e) => onValueChange(e)} name="City" />
        </FormControl>
        <FormControl>
          <InputLabel>State</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="State" />
        </FormControl>
        <FormControl>
          <InputLabel>Pincode</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="Pincode" />
        </FormControl>
        <FormControl>
          <InputLabel>Introduction About Yourself</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="Introduction" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={()=>handleSubmit()}>Submit</Button>
        </FormControl>
      </Container>
    </>
  );
};