import React, { MutableRefObject, useEffect, useState } from "react";

type VideoProps = {
  videoRef: MutableRefObject<null | HTMLVideoElement>
}
const useVideo = ({ videoRef }: VideoProps) => {
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const togglePlayVideo = (status: boolean = !isPlaying) => {
    if (status) {
      setPlaying(true);
      if (videoRef?.current?.play) videoRef?.current.play();
    } else {
      setPlaying(false);
      if (videoRef?.current?.pause) videoRef?.current.pause();
    }
  };
  useEffect(() => {
    if (videoRef?.current) {
      videoRef?.current.addEventListener("ended", () => {
        setPlaying(false);
        if (videoRef?.current?.pause) videoRef?.current.pause();
      });
    }
  }, [videoRef]);

  return { isPlaying, togglePlayVideo };
};

export default useVideo;
