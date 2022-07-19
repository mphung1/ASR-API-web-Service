import React from "react";
import VideoItem from "./VideoItem";
import { Flex, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
    // console.log(video.id);
  });

  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {renderedVideos}
      </SimpleGrid>
    </div>
  );
};
export default VideoList;
