import { useState, useEffect, Component } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Container, Box, Flex, Text, Textarea } from "@chakra-ui/react";
import YouTube, { YouTubeProps } from "react-youtube";
import ReactPlayer from "react-player";
import ColoredButton from "../../components/Fixed/ColoredButton";

function YoutubeExample({ videoId }: { videoId: string }) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
    console.log(event.target);
    // this.setState({
    //   playerObj: event.target,
    // });
  };

  const videoOnPlay: YouTubeProps["onPlay"] = (event) => {
    // console.log(event.target.getCurrentTime());
  };
  const videoStateChange: YouTubeProps["onStateChange"] = (event) => {
    console.log(event.target.getCurrentTime());
  };
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // const componentUnmount: YoutubeProps[["onStateChange", "onPlay"]] = (
  //   event
  // ) => {
  //   const player = event.target;
  //   const { playerObj } = this.state;
  //   console.log(player.getCurrentTime());
  // };
  return (
    <>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onPlay={videoOnPlay}
        onStateChange={videoStateChange}
      />
    </>
  );
}

function Result() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [controls, handleToggleControls] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    console.log(inputValue);
  };
  const url =
    "hhttps://www.youtube.com/watch?v=qvXQdmIwwa0&ab_channel=T%C3%BASalmon";
  const SEPARATOR = " · ";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Box pos="absolute" ml="50%" mr="50%" mt="100px">
          <ClimbingBoxLoader loading={loading} />
        </Box>
      ) : (
        <>
          <Box margin="auto" text-align="center">
            <Box
              display="inline-block"
              max-width="480px"
              margin="20px"
              text-align="left"
              vertical-align="top"
            >
              <Text fontSize="2xl">Subtitles Generator Demo</Text>
              <ReactPlayer url={url} width={500} height={250} />
              <table>
                <tbody>
                  <tr>
                    <th>
                      <label htmlFor="controls">Controls</label>
                    </th>
                    <td>
                      <input
                        id="controls"
                        type="checkbox"
                        checked={controls}
                        onChange={handleToggleControls}
                      />
                      <em>&nbsp; Requires player reload</em>
                    </td>
                  </tr>
                  <tr>
                    <th>Actions</th>
                    <td>
                      <ColoredButton btnText="Share" mr={2} />
                      <ColoredButton btnText="Export" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Box display="inline-block">
              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="Content will be rendered here."
                focusBorderColor="black"
                height={450}
                width={700}
              />
            </Box>
            <footer margin="20px">
              Version <strong>0.1.0</strong>
              {SEPARATOR}
              <a href="https://github.com/mphung1/ASR-API-web-Service">
                <u>GitHub</u>
              </a>
            </footer>
          </Box>
        </>
      )}
    </>
  );
}

export default Result;
