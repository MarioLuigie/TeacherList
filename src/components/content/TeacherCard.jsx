/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { header, footer } from "../../constans/dimensions";

const styles = css`
  width: 100%;
  min-height: calc(100vh - ${header.height + footer.height}px);
`

export default function TeacherCard() {

  return (
    <div css={styles}>
      test
    </div>
  )
}