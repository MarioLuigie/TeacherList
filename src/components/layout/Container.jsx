/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { container } from "../../constans/dimensions";
import colors from "../../constans/colors";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const styles = css`
  width: ${container.width}%;
  max-width: ${container.maxWidth}px;
  min-width: ${container.minWidth}px;
  min-height: ${container.minHeight}vh;
  background-color: ${colors.panelColor};
  box-shadow: ${colors.panelShadow} 0 0 20px;
`

export default function Container() {

  return (
    <div css={styles}>
      <Header title="Teacher List" />
      <Main />
      <Footer sign="ARWcode 2023" />
    </div>
  )
}