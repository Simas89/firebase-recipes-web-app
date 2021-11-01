import { Button, Container, Typography } from "@mui/material";

import React from "react";

import styled from "styled-components";

const StyledTypography = styled(Typography)`
  margin: 0;
  padding: 0;
  font-family: "Montserrat";
`;

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <StyledTypography>Hello</StyledTypography>
      <Button variant="contained">Hi there</Button>
    </Container>
  );
};

export default HomeScreen;
