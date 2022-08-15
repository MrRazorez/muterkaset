import { createSlice } from '@reduxjs/toolkit'

export const sliceVideo = createSlice({
  name: 'urlVideos',
  initialState: {
    value: '',
  },
  reducers: {
    download: (state, pointer) => {
      state.value = 'http://192.168.236.91:3000/videos/'+pointer.payload+'.mp4'
    },
  },
})

export const { download } = sliceVideo.actions

export default sliceVideo.reducer