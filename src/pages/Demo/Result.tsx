import { useState, useEffect, Component } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {
  Container,
  Heading,
  Box,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import YouTube, { YouTubeProps } from "react-youtube";
import YoutubeOutput from "../../components/Youtube/YoutubeOutput";

function YoutubeExample() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
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
  const videoId = "qvXQdmIwwa0";

  // const componentUnmount: YoutubeProps[["onStateChange", "onPlay"]] = (
  //   event
  // ) => {
  //   const player = event.target;
  //   const { playerObj } = this.state;
  //   console.log(player.getCurrentTime());
  // };
  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
      onPlay={videoOnPlay}
      onStateChange={videoStateChange}
    />
  );
}

function Result() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Box pos="absolute" ml="50%" mr="50%" mt="100px">
          <ClimbingBoxLoader loading={loading} />
        </Box>
      ) : (
        <Container maxW="container.xl" mt={4}>
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <YoutubeExample videoId="qvXQdmIwwa0" />
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Result;
