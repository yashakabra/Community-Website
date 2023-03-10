import { useState, useEffect } from "react";
import {
  addUserDetails,
  getUserDetails,
  editUserDetails,
} from "../../service/userDetailsAPI";
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
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
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
  Email: "",
  Name: "",
  Age: "",
  UserName: "",
  Job_Type: 0,
  City: "",
  State: "",
  Pincode: "",
  Introduction: "",
};

export const ProfileDetails = () => {
  const [user, setUser] = useState(defaultValue);
  const [value, setValue] = useState(0);
  const { setAccount, account } = useUserDetails();

//   setUser(account);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  
  console.log('hello world',account);
//   setUser(account);
  useEffect(() => {
    // if (!account) {
    //      console.log("op");
    //       return;
    // } else {
      setUser(account);
    // }
  }, [account]);

  
  const gotohome = () => {
    navigate("/home");
  };

  return (
    <>
      <Container>
        <Typography variant="h2">Your Profile Details</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input name="Name" value={user.Name} />
        </FormControl>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Input name="Age" value={user.Age} />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input name="UserName" value={user.UserName} />
        </FormControl>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Job Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Job_Type"
            value={user.Job_Type}
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
          <Input name="City" value={user.City} />
        </FormControl>
        <FormControl>
          <InputLabel>State</InputLabel>
          <Input name="State" value={user.State} />
        </FormControl>
        <FormControl>
          <InputLabel>Pincode</InputLabel>
          <Input name="Pincode" value={user.Pincode} />
        </FormControl>
        <FormControl>
          <InputLabel>Introduction About Yourself</InputLabel>
          <Input name="Introduction" value={user.Introduction} />
        </FormControl>

        <Button onClick={gotohome}>Home </Button>
      </Container>
    </>
  );
};
