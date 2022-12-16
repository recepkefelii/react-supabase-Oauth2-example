import { createSlice } from '@reduxjs/toolkit'

let initialState = {
status: false,
user : {
  id: '',
  aud: '',
  role: '',
  email: '',
  email_confirmed_at: '',
  updated_at: '',
  phone: '',
  last_sign_in_at: '',
  user_metadata: {
    full_name: '',
    avatar_url: '',
    iss: '',
    user_name: '',
    picture: '',
  },
}
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    GithubLogin: (state, action) => {
      state.user = action.payload.user
      if (state.user.id.length > 0) {
        state.status = true
      }
    }
  },
})


export const { GithubLogin } = authSlice.actions

export default authSlice.reducer