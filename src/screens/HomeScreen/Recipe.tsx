import { Paper } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled(Paper).attrs({ elevation: 6 })`
  padding: 50px;
  margin: 20px;
`;

export const Recipe = () => {
  return <Wrapper></Wrapper>;
};
