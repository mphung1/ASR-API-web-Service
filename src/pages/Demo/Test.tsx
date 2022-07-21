import React, { useState, useEffect, useRef, createRef } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Container, Box, Flex, Text, Textarea } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import ColoredButton from "../../components/Fixed/ColoredButton";
import Search from "../../components/Demo/Search";
import OptionNavBar from "../../components/Demo/OptionNavBar";
import Upload from "../../components/Demo/Upload";
import UrlReader from "../../components/Demo/UrlReader";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
  BrowserRouter,
} from "react-router-dom";

// const fs = require("fs");
// const { createFFmpeg, fetchFile } = require("@ffmpeg/ffmpeg");
// const ffmpeg = createFFmpeg({ log: true });

const DemoOptionRoutes = (children) => {
  let location = useLocation();

  let state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        {children}
      </Routes>
    </>
  );
};

// function Modal() {
//   let navigate = useNavigate();

//   let buttonRef = React.useRef<HTMLButtonElement>(null);
// }

function NoMatch() {
  return (
    <div>
      {/* <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the homepage</Link>
      </p> */}
    </div>
  );
}

export default function Test() {
  // const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<any | null>(null);
  const [value, setValue] = useState("");
  const [controls, handleToggleControls] = useState(true);
  const [options, showOptions] = useState(true);
  // const videoRef = createRef();
  // const handleConvert = async () => {
  //   await ffmpeg.load();
  //   //flac/wav/MP3
  // };

  const renderContents = () => {
    showOptions(false);
  };

  const renderOptions = () => {
    showOptions(true);
  };

  const handleSearchCallback = (videoId) => {
    setUrl("https://www.youtube.com/embed/" + videoId);
  };

  const handleUploadCallback = (blob) => {
    setUrl(blob);
  };

  const handleUrlCallback = (watchUrl) => {
    setUrl(watchUrl);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const SEPARATOR = " · ";

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <Box pos="absolute" ml="50%" mr="50%" mt="100px">
          <ClimbingBoxLoader loading={loading} />
        </Box>
      ) : ( */}
      {options ? (
        <>
          <Box ml="40%" mt="2">
            <ColoredButton
              onClick={renderContents}
              btnText="Choose this input"
            />
          </Box>
          <BrowserRouter>
            <Routes>
              <Route path="/Demo" element={<OptionNavBar />}>
                <Route
                  path="/Demo/Search"
                  element={<Search searchCallback={handleSearchCallback} />}
                />
                <Route
                  path="/Demo/Upload"
                  element={<Upload uploadCallback={handleUploadCallback} />}
                />
                <Route
                  path="/Demo/ByUrl"
                  element={<UrlReader urlCallback={handleUrlCallback} />}
                />
                {/* <Route path="/Demo/GoogleDrive" element={<GoogleDrivePicker />} /> */}
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <Box margin="auto" text-align="center">
          <Box
            display="inline-block"
            max-width="480px"
            margin="20px"
            text-align="left"
            vertical-align="top"
          >
            <Text fontSize="2xl">Subtitles Generator Demo</Text>
            <ReactPlayer
              key={url}
              url={url}
              width={500}
              height={250}
              controls={true}
              playing={false}
              config={{
                file: {
                  forceAudio: true,
                },
              }}
            />
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
                  <th>
                    <button>-</button>
                  </th>
                  <td>
                    <ColoredButton
                      onClick={renderOptions}
                      btnText="Different input"
                      mr={2}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                    <ColoredButton btnText="Transcribe" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <button>+</button>
                  </th>
                  <td>
                    <em>
                      <ColoredButton btnText="Share" mr={2} />
                      <ColoredButton btnText="Export" mr={2} />
                    </em>
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
      )}
    </>
  );
}
