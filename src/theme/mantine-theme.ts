import { MantineColorsTuple, createTheme } from "@mantine/core";

const brand: MantineColorsTuple = [
  "#EFF1F4",
  "#D9DCE2",
  "#C4C8D0",
  "#ACB1BB",
  "#959AA6",
  "#7D8390",
  "#656B79",
  "#4A4F58",
  "#222630",
  "#090B10"
];

export const mantineTheme = createTheme({
  primaryColor: "brand",
  colors: {
    brand
  },
  defaultRadius: "md",
  fontFamily: "Manrope, Segoe UI, sans-serif",
  headings: {
    fontFamily: "Space Grotesk, Manrope, sans-serif",
    fontWeight: "700"
  },
  radius: {
    md: "12px",
    xl: "20px"
  },
  shadows: {
    md: "0 12px 28px rgba(9, 11, 16, 0.14)"
  }
});
