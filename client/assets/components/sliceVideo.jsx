import { createSlice } from '@reduxjs/toolkit'

export const sliceVideo = createSlice({
  name: 'urlVideos',
  initialState: {
    value: '',
  },
  reducers: {
    download: (state, pointer) => {
      state.value = 'urlHost/videos/'+pointer.payload+'.mp4'
    },
  },
})

export const { download } = sliceVideo.actions

export default sliceVideo.reducer