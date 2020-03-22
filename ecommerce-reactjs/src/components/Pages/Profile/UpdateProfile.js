import React, { useRef } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";

const UpdateProfile = ({ handleUpdateProfile, setUser, user }) => {
  const nameRef = useRef(null);
  const photoRef = useRef(null);

  const handleClick = e => {
    handleUpdateProfile(
      user,
      setUser,
      nameRef.current.value,
      photoRef.current.value
    );
  };

  return (
    <div>
      Update Profile <br />
      <FormControl style={{ width: "100%" }}>
        <InputLabel htmlFor="name">Update Name</InputLabel>
        <Input
          inputRef={nameRef}
          id="name"
          aria-describedby="name-helper-text"
        />
        <FormHelperText id="name-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl style={{ width: "100%" }}>
        <InputLabel htmlFor="password">Update PhotoURI </InputLabel>
        <Input
          inputRef={photoRef}
          type="text"
          id="passwordid"
          aria-describedby="password-helper-text"
        />
        <FormHelperText id="password-helper-text">
          We'll never share your password.
        </FormHelperText>
      </FormControl>
      <Button onClick={handleClick}>Update</Button>
    </div>
  );
};

export default UpdateProfile;
