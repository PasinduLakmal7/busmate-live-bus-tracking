import React from "react";
import ToggleColorMode from "./components/ToggleColorMode.jsx";
import Views from "./components/Views.jsx";
import LiveDriverLocation from "./components/LiveDriverLocation";
import LiveBusMap from "./components/LiveBusMap";


const App = () => {
  return (
    <>
      <Views/>
      <ToggleColorMode/>
      <LiveDriverLocation driverId="driver_001" />
      <LiveBusMap driverId="driver_001" />
    </>
  );
};

export default App;
