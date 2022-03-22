import React, { useReducer } from "react";
import axios from "axios";

//! вызываем метод для создания контекста
export const videosContext = React.createContext();

// ! API
const API = "http://localhost:8000/videos";

//! начальное состояние, чтоб позже могли сохранить данные
const INIT_STATE = {
  videos: [],
  oneVideo: null,
};

//! функция, которая меняет State
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return { ...state, videos: action.payload.data };
    case "GET_ONE_VIDEO":
      return { ...state, oneVideo: action.payload.data };
    default:
      return state;
  }
};

const VideosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllVideos() {
    let res = await axios.get(API);
    let action = {
      type: "GET_VIDEOS",
      payload: res,
    };
    dispatch(action);
  }

  async function deleteVideo(id) {
    await axios.delete(`${API}/${id}`);
    getAllVideos();
  }

  async function addVideo(newProduct) {
    await axios.post(API, newProduct);
    getAllVideos();
  }

  async function getOneVideo(id) {
    let res = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_ONE_VIDEO", payload: res });
  }
  async function updateVideo(id, editedVideo) {
    await axios.patch(`${API}/${id}`, editedVideo);
    getAllVideos();
  }

  return (
    <videosContext.Provider
      value={{
        oneVideo: state.oneVideo,
        videos: state.videos,
        getAllVideos,
        deleteVideo,
        addVideo,
        getOneVideo,
        updateVideo,
      }}
    >
      {children}
    </videosContext.Provider>
  );
};

export default VideosContextProvider;
