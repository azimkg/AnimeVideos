import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { videosContext } from "../../context/videosContext";

const Add = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    imageTitle: "",
    genre: "",
    description: "",
  });
  const navigate = useNavigate();

  const { addVideo } = useContext(videosContext);

  function handleValues(e) {
    let product = { ...newProduct, [e.target.name]: e.target.value };
    setNewProduct(product);
  }
  function save() {
    if (
      !newProduct.title ||
      !newProduct.imageTitle ||
      !newProduct.genre ||
      !newProduct.description
    ) {
      alert("Заполните поля!");
      return;
    }
    addVideo(newProduct);
    navigate("/videos");
  }
  return (
    <div>
      <input
        name="title"
        type="text"
        onChange={handleValues}
        placeholder="Title"
        value={newProduct.title}
      />
      <input
        name="imageTitle"
        onChange={handleValues}
        type="text"
        placeholder="Image Title"
        value={newProduct.imageTitle}
      />
      <input
        name="genre"
        type="text"
        onChange={handleValues}
        placeholder="Genre"
        value={newProduct.genre}
      />
      <input
        name="description"
        type="text"
        onChange={handleValues}
        placeholder="Description"
        value={newProduct.description}
      />
      <button onClick={save}>Save</button>
    </div>
  );
};

export default Add;
