import React from "react";
import { useState, useRef } from "react";
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
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Cancel, Tag } from "@mui/icons-material";
import { addPostDetails } from "../../service/postDetailsAPI";
import { useUserAuth } from "../../context/UserAuthContext";
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
  Choice: 0,
  Title: "",
  photo: "",
  Details: "",
  Tags: [],
};
const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export const CreatePostForm = () => {
  const [user, setUser] = useState(defaultValue);
  const [value, setValue] = useState(0);
  const { user: userCurr } = useUserAuth();
  const navigate = useNavigate();

  const onValueChange = (e) => {
    if (e.target.name == "Choice") {
      setValue(e.target.value);
      console.log(e.target.value);
    }

    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async () => {
    //   await addUserDetails(user);
    const formData = new FormData();

    user.Tags = tags;
    formData.append("_id", userCurr.email);
    formData.append("Choice", user.Choice);
    formData.append("Title", user.Title);
    formData.append("photo", user.photo);
    formData.append("Details", user.Details);
    formData.append("Tags", user.Tags);
    console.log(formData);
    await addPostDetails(formData);
    // console.log(user);
    navigate('/home');

  };

  const [tags, SetTags] = useState([]);
  const tagRef = useRef();

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    SetTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };
  const handlePhoto = (e) => {
    console.log(e.target.files[0].name);
    setUser({ ...user, photo: e.target.files[0] });
  };

  return (
    <>
      <Container>
        <Typography variant="h2">Create Your Post</Typography>

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Choice</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Choice"
            value={value}
            onChange={(e) => onValueChange(e)}
          >
            <FormControlLabel value="0" control={<Radio />} label="Question" />
            <FormControlLabel value="1" control={<Radio />} label="Thoughts" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <InputLabel>Title</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="Title" />
        </FormControl>
        <FormControl>
          {/* <InputLabel>Image</InputLabel> */}
          {/* <Input
            type="image"
            accept=".png .jpg .jpeg"
            onChange={handlePhoto}
            name="Image"
          /> */}

          {/* <hr> */}
          <Typography>Choose Image</Typography>

          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Details</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="Details" />
        </FormControl>

        <Box sx={{ flexGrow: 1 }}>
          <form onSubmit={handleOnSubmit}>
            <TextField
              inputRef={tagRef}
              fullWidth
              variant="standard"
              size="small"
              sx={{ margin: "1rem 0" }}
              margin="none"
              placeholder={tags.length < 5 ? "Enter tags" : ""}
              InputProps={{
                startAdornment: (
                  <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                    {tags.map((data, index) => {
                      return (
                        <Tags
                          data={data}
                          handleDelete={handleDelete}
                          key={index}
                        />
                      );
                    })}
                  </Box>
                ),
              }}
            />
          </form>
        </Box>

        <FormControl>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Create
          </Button>
        </FormControl>
      </Container>
    </>
  );
};
