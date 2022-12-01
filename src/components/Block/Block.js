import React from "react";
import { json } from "react-router";
import "./Block.css";

const Block = ({ component, ...props }) => {
  const arr = component;
  /*Рабочий массив

  [
    {
        "blocks": 1,
        "video_id": 1
    },
    {
        "blocks": 1,
        "video_id": 2
    }
]
  const arr = [
    {
      link: "https://www.youtube.com/embed/nhZyPQzx7JI",
      video_description: "YouTube video player",
    },
    {
      link: "https://www.youtube.com/embed/GaW13eDQO6s",
      video_description: "YouTube video player",
    },
    {
      link: "https://www.youtube.com/embed/nhZyPQzx7JI",
      video_description: "YouTube video player",
    },
  ];*/
  return (
    <div className="blocks">
      <div className="content_block"> Block1</div>
      {arr.map((item) => (
        <div>
          <div className="content_block">
            <iframe
              src={item.link}
              title={item.video_description}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block;
