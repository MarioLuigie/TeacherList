/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Container from "./components/layout/Container";

const styles = css`
  display: flex;
  justify-content: center;
`

export default function App() {

  return (
    <div css={styles}>
      <Container />
    </div>
  )
}


