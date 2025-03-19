import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "karim",
      content: "Trés interessant, je reviendrai bientôt !",
      avatar: "/images/12345.jpg",
    },
    {
      id: 2,
      name: "katia",
      content: "Une expérience fantastique, merci beaucoup.",
      avatar: "/images/23415.jpg",
    },
    {
      id: 3,
      name: "Kenza",
      content: "Votre portfolio est vraiment impressionnant !",
      avatar: "/images/42526541.jpg",
    },
  ],
};

const temoignagesSlice = createSlice({
  name: "temoignages",
  initialState,
  reducers: {
    ADD_TEMOIGNAGE: (state, action) => {
      state.list.push(action.payload);
    },
    UPDATE_TEMOIGNAGE: (state, action) => {
      const { id, content } = action.payload;
      const index = state.list.findIndex((t) => t.id === id);
      if (index !== -1) {
        state.list[index].content = content;
      }
    },
    DELETE_TEMOIGNAGE: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
});

export const { ADD_TEMOIGNAGE, UPDATE_TEMOIGNAGE, DELETE_TEMOIGNAGE } =
  temoignagesSlice.actions;
export default temoignagesSlice.reducer;
