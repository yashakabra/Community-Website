import { Button, FormControl, FormGroup, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { useUserDetails } from "../../context/UserDetailsContext";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

export const ProfileRight = () => {
  const { logOut } = useUserAuth();
  const { handleLogOut } = useUserDetails();
  const navigate = useNavigate();

  const goToProfileDetails = () => {
    navigate('/profile');
  }
  const goToEditProfileDetails = () => {
    navigate("/profile/edit");
  };

  const handleLogout = async () => {
    try {
      await logOut();
      await handleLogOut();
      navigate('/login');
    }
    catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div>
      <Container>
        <FormControl>
          <Button variant="contained" onClick={goToEditProfileDetails}>
            Edit Your Profile
          </Button>
        </FormControl>
      </Container>

      <Container>
        <FormControl>
          <Button variant="contained" onClick={goToProfileDetails}>
            Your Profile Details
          </Button>
        </FormControl>
      </Container>

      <Container>
        <FormControl>
          <Button variant="contained" onClick={handleLogout}>
            LogOut
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};
