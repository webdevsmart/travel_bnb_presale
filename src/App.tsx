import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "views/LandingPage";

const App: React.FC = () => {
  return (
    <Router>
      <MainContainer>
        <Route exact path="/" component={LandingPage} />{" "}
      </MainContainer>
    </Router>
  );
};

export default App;

export const MainContainer = styled.div``;
