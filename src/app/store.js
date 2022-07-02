import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    // movie: movieReducer,
  },  
  
  middleware: (getDefaultMiddleware) => // this is additional taken from web (if got error then check it first)
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});