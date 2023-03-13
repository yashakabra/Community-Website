import { useEffect, useState } from "react";
import { addUserDetails } from "../../service/userDetailsAPI";
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
import {  useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { updateFlag } from "../../service/loginUserAPI";
import { useUserDetails } from "../../context/UserDetailsContext";
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
  Image:"",
  Age: "",
  UserName: "",
  Job_Type: 0,
  City: "",
  State: "",
  Pincode: "",
  Introduction: "",
};

export const AddUserDetailForm = () => {
  const PORT = 8000;

  const { user: userCurr, token } = useUserAuth();
  const { setAccount}=useUserDetails();
  const [user, setUser] = useState(defaultValue);
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    if (e.target.name == "Job_Type") {
      setValue(e.target.value);
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    user._id = userCurr.email;
    setAccount(user);
    const packet1 = {
      token:token,
      data: user
    };
    await addUserDetails(packet1);
    const data = {
      email: userCurr.email,
      flag: true,
    };
    const packet = {
      data : data,
      token:token,
    }
    await updateFlag(packet);
    navigate("/home");
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
          <Button variant="contained" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </FormControl>
      </Container>
    </>
  );
};