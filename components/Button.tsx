import { Button, styled } from "tamagui";

export const ButtonApp = styled(Button, {
  bg: "$green10Light",
  color: "white",
  pressStyle: {
    bg: "$green10Dark",
  },
  variants: {
    disabled: {
      true: {
        bg: "$gray10",
        // color: "$green10Dark",
        pointerEvents: "none",
      },
    },
  },
});
