import React, { useEffect } from "react";
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
import {useUserDetails} from "../../context/UserDetailsContext";
import { useNavigate } from "react-router-dom";
import { storage } from "../../config/firebase";
import {ref, uploadBytes,getDownloadURL} from "firebase/storage"
import {v4} from "uuid";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  Email: "",
  UserName:"",
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

let IMG_URL;

export const CreatePostForm = () => {
  const [user, setUser] = useState(defaultValue);
  const [value, setValue] = useState(0);
  const { user: userCurr } = useUserAuth();
  const {account}=useUserDetails();
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const onValueChange = (e) => {
    if (e.target.name == "Choice") {
      setValue(e.target.value);
      console.log(e.target.value);
    }
    
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const uploadImage = async () => {
    if (imageUpload == null) return;
    const metadata = {
      contentType: "image/jpeg",
    };
    console.log("HEREEEEE");
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload, metadata).then(() => {
      // alert("Image Uploaded");
      console.log('HERE 2');
    }).then(async ()=>{
      await getDownloadURL(imageRef)
        .then((downloadURL) => {
          // console.log("File available at  ", downloadURL);
          // setUser({ ...user, photo:downloadURL });
          IMG_URL = downloadURL;
          // setUser({ ...user, photo: downloadURL });
        });
    });

    // await getPhoto(imageRef);
  }

  // const getPhoto=(imageRef)=>{
  // getDownloadURL(imageRef)
  //   .then((url) => {
  //     // Insert url into an <img> tag to "download"
  //     console.log('url->>>',url);
  //     setUser({...user,photo:url});
  //   })
  //   .catch((error) => {
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     console.log(error.code);
  //     switch (error.code) {
  //       case "storage/object-not-found":
  //         // File doesn't exist
  //         // console.log();
  //         break;
  //       case "storage/unauthorized":
  //         // User doesn't have permission to access the object
  //         // console.log("");
  //         break;
  //       case "storage/canceled":
  //         // User canceled the upload
  //         // console.log("");
  //         break;

  //       // ...

  //       case "storage/unknown":
  //         // Unknown error occurred, inspect the server response
  //         // console.log("");
  //         break;
  //     }
  //   })
  // };

  const handleSubmit = async () => {
  
    await uploadImage();
  
    user.Email=userCurr.email;
    user.UserName=account.UserName;
 
    user.Tags = tags;

    user.photo = IMG_URL;

    await addPostDetails(user);
 
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
    setImageUpload(e.target.files[0]);
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