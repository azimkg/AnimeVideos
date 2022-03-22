import React, { useContext, useEffect, useState } from "react";
import { videosContext } from "../../context/videosContext";
import Card from "../Card/Card";

const Videos = () => {
  let [state, setState] = useState("");
  let [state2, setState2] = useState("");
  useEffect(() => {
    getAllVideos();
  }, []);

  let { getAllVideos, videos } = useContext(videosContext);
  console.log(videos);

  return (
    <div>
      {videos.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Videos;
