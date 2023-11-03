import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setProfilePicture } from '../../redux/reducers/userSlice'

function RegistrationPage() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const [newUsername, setNewUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleRegistration = () => {
    dispatch((dispatch, getState) => {
      const { user } = getState();
      dispatch(setUsername(newUsername));
      dispatch(setProfilePicture(profilePicture));
    });
  };

  return (
    <div className="registration-page">
      <h1>Inscription</h1>
      <input
        type="text"
        placeholder="Pseudo"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePicture(e.target.files[0])}
      />
      <button onClick={handleRegistration}>S'inscrire</button>

      {username && (
        <div className="user-profile">
          <h2>Votre profil :</h2>
          <p>Pseudo : {username}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;



