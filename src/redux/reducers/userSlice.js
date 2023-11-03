import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  profilePicture: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
  },
});

export const { setUsername, setProfilePicture } = userSlice.actions;

export default userSlice.reducer;
