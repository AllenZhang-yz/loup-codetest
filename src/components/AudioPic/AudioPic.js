import React from "react";
import "./AudioPic.scss";
import { ReactComponent as PlayIcon } from "../../assets/svg/play-icon.svg";
import { ReactComponent as Audio } from "../../assets/svg/audio-desktop.svg";

const audioPic = () => (
  <div className="audio-container">
    <img
      src={require("../../assets/image/audio.png")}
      srcSet={`${require("../../assets/image/audio@2x.png")} 2x,${require("../../assets/image/audio@3x.png")} 3x`}
      alt="audio"
      className="audio-container__audio"
    />
    <PlayIcon className="audio-container__playicon" />
    <Audio className="audio-container__audio-desktop" />
  </div>
);

export default audioPic;
