import React from "react";
import { useAuthValue } from "../../context/AuthContext";

import UpdateProfile from "./Profile/UpdateProfile";
import { Button } from "@material-ui/core";
import { sendVerificationEmail, updateProfile } from "../../utils/ProfileUtils";

const Profile = props => {
  const { user, setUser } = useAuthValue();

  const handleVerifyEmail = e => {
    sendVerificationEmail(user, setUser);
  };

  let dom;
  if (!user.displayName && !user.photoURL) {
    dom = (
      <UpdateProfile
        handleUpdateProfile={updateProfile}
        user={user}
        setUser={setUser}
      />
    );
  } else {
    //   Get User Profile
    dom = (
      <div>
        <ul>
          <li>name : {user.displayName}</li>
          <li>email : {user.email}</li>
          <li>uid : {user.uid}</li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      Profile
      {!user.emailVerified && (
        <Button onClick={handleVerifyEmail}>Verify Email</Button>
      )}
      <br />
      {dom}
    </div>
  );
};

export default Profile;
