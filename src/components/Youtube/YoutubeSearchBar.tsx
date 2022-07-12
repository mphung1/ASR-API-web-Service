import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

class YoutubeSearchBar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaYoutube color="gray.300" />
                </InputLeftElement>

                <Input
                  onChange={this.handleChange}
                  name="video-search"
                  type="text"
                  placeholder="Enter the keyword to find videos."
                />
              </InputGroup>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default YoutubeSearchBar;
