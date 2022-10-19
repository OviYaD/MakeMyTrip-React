import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { BrowserRouter as Router } from "react-router-dom";
import { parse, stringify } from "query-string";
import { emailInput } from "./components/__test__/emailInput";
import { NavBar } from "./components/navBar";
import { Banner } from "./components/Banner";
import { Hotels } from "./pages/Hotels";
import { QueryParam } from "./components/__test__/queryParam";
import HotelSearch from "./pages/HotelSearch";
import { DateTime } from "./components/dateTime";
import { CitySelector } from "./components/Modals/citySelector";
// import Hotels from "./pages/Hotels";
import LoginModal from "./components/LoginModal";
import { LandingContainer } from "./components/landingContainer";
import "./assets/css/style.css";
import "./assets/css/hotel-style.css";
import { Modal } from "@mui/material/Modal";
function App() {
  return (
    <div>
      <BrowserRouter>
        <QueryParamProvider
          adapter={ReactRouter6Adapter}
          options={{
            searchStringToObject: parse,
            objectToSearchString: stringify
          }}
        >
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="background">
                    <Hotels></Hotels>
                  </div>
                }
              />
              <Route path="/search" element={<HotelSearch></HotelSearch>} />
              <Route path="/datetime" element={<DateTime />} />
              <Route path="/query" element={<QueryParam />} />
              <Route path="/cityselect" element={<CitySelector />} />
            </Routes>
          </div>
        </QueryParamProvider>
      </BrowserRouter>
      {/* <h1>sdksdjk</h1> */}
      {/* <emailInput></emailInput> */}
      {/* <NavBar></NavBar> */}
      {/* <Body></Body> */}
      {/* <Banner></Banner> */}
      {/* <div className="background">
        <Flights></Flights>
      </div> */}
      {/* <Hotels></Hotels> */}
      {/* <LoginModal></LoginModal> */}
      {/* <LandingContainer></LandingContainer> */}
    </div>
  );
}

export default App;
