import styled, { css } from "styled-components";
import { Typography } from "@mui/material";

interface MontserratProps {
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

export const Montserrat = styled(Typography)<MontserratProps>`
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-Thin.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-ThinItalic.ttf")
      format("truetype");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-ExtraLight.ttf")
      format("truetype");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf")
      format("truetype");
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-LightItalic.ttf")
      format("truetype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-Regular.ttf")
      format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-RegularItalic.ttf")
      format("truetype");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-MediumItalic.ttf")
      format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-SemiBold.ttf")
      format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf")
      format("truetype");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-BoldItalic.ttf")
      format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-ExtraBold.ttf")
      format("truetype");
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf")
      format("truetype");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("assets/fonts/montserrat/Montserrat-BlackItalic.ttf")
      format("truetype");
    font-weight: 900;
    font-style: italic;
  }

  font-family: "Montserrat";

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight} !important;
    `};
`;
