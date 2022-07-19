import React, { useState } from "react";
import {
  Router,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import OptionNavBar from "./OptionNavBar";
import Search from "./Search";
import Upload from "./Upload";
import UrlReader from "./UrlReader";
import GoogleDrivePicker from "./GoogleDrivePicker";

const StartDemo = () => {
  let location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state as { backgroundLocation?: Location };

  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/Demo" element={<OptionNavBar />}>
          <Route path="/Demo/Search" element={<Search />} />
          <Route path="/Demo/Upload" element={<Upload />} />
          <Route path="/Demo/ByUrl" element={<UrlReader />} />
          <Route path="/Demo/GoogleDrive" element={<GoogleDrivePicker />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

function Modal() {
  let navigate = useNavigate();

  let buttonRef = React.useRef<HTMLButtonElement>(null);
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the homepage</Link>
      </p>
    </div>
  );
}

export default StartDemo;
