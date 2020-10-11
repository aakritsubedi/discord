import { configureStore } from '@reduxjs/toolkit';

import appReducer from '../features/app/appSlice';
import userReducer from '../features/users/userSlice';


export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
