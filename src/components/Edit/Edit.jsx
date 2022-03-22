import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { videosContext } from "../../context/videosContext";

const Edit = () => {
  const navigate = useNavigate();
  const { getOneVideo, oneVideo, updateVideo } = useContext(videosContext);
  const [edit, setEdit] = useState(null);
  const params = useParams();
  useEffect(() => {
    getOneVideo(params.id);
  }, []);
  useEffect(() => {
    setEdit(oneVideo);
  }, []);

  function handleValues(e) {
    let product = { ...edit, [e.target.name]: e.target.value };
    setEdit(product);
  }

  function save() {
    updateVideo(params.id, edit);
    navigate("/videos");
  }

  return edit ? (
    <div>
      <input
        type="text"
        onChange={handleValues}
        name="title"
        value={edit.title}
      />
      <input
        type="text"
        onChange={handleValues}
        name="titleImage"
        value={edit.imageTitle}
      />
      <input
        type="text"
        onChange={handleValues}
        name="genre"
        value={edit.genre}
      />
      <input
        type="text"
        onChange={handleValues}
        name="description"
        value={edit.description}
      />
      <button onClick={save}>Edit</button>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Edit;
