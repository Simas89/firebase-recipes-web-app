import React, { useEffect } from "react";
import { Container } from "@mui/material";
import styled from "styled-components";
import { Form } from ".";
import { useQuery } from "react-query";
import { fetchDocs } from "firebaseApp/utils";
import { addCollectionListener } from "firebaseApp/firestore";

const StyledContainer = styled(Container)``;

const LandingScreen: React.FC = () => {
  const { data } = useQuery("test", () => fetchDocs({ collection: "test" }));

  console.log(data);

  useEffect(() => {
    const unsubscribe = addCollectionListener("test", (snap) =>
      console.log(snap)
    );

    return () => unsubscribe();
  }, []);

  return (
    <StyledContainer>
      <Form />
    </StyledContainer>
  );
};

export default LandingScreen;
