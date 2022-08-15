import { configureStore } from '@reduxjs/toolkit';
import reduceVideo from './sliceVideo';

export default configureStore({
  reducer: {
    urlVideos: reduceVideo
  },
})