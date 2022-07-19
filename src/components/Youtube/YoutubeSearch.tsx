import React from "react";
import SearchBar from "./YoutubeSearchBar";
import youtube from "../../pages/api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { Flex } from "@chakra-ui/react";

class YoutubeSearch extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is response", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <Flex mt={2} ml="40%">
          <SearchBar handleFormSubmit={this.handleSubmit} />
        </Flex>
        <Flex mt={2} ml="30%">
          <VideoDetail video={this.state.selectedVideo} />
        </Flex>
        <Flex mt={20}>
          <VideoList
            handleVideoSelect={this.handleVideoSelect}
            videos={this.state.videos}
          />
        </Flex>
      </>
    );
  }
}

export default YoutubeSearch;
