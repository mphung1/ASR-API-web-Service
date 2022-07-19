import React, { useState, useEffect } from "react";
import FileUploadButton from "../Fixed/FileUploadButton";
import { Container, Flex, Box, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const { createFFmpeg, fetchFile } = require("@ffmpeg/ffmpeg");
const ffmpeg = createFFmpeg({ log: true });
const validFileTypes = "video/*, audio/*";

const Upload = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [video, setVideo] = useState();
  const [message, showMessage] = useState<boolean>(true);

  const fileMaxSize: number = 1000000000;

  const load = async () => {
    await ffmpeg.isLoaded();
    setLoaded(true);
  };

  useEffect(() => {
    load();
  }, []);

  return loaded ? (
    <>
      <Flex mt="5" ml="40%">
        <input
          type="file"
          accept={validFileTypes}
          onChange={(event) => {
            if (event.target.files?.item(0).size < fileMaxSize) {
              setVideo(event.target.files?.item(0));
              showMessage(false);
            } else {
              window.alert(
                "Your file cannot be larger than " +
                  Number(fileMaxSize / 1000000000) +
                  "GB."
              );
            }
          }}
        />
      </Flex>
      {video && (
        <Flex mt="2" ml="30%">
          <video
            controls
            width="500"
            height="250"
            src={URL.createObjectURL(video)}
          />
        </Flex>
      )}
    </>
  ) : (
    <p>Loading ...</p>
  );
};

export default Upload;
