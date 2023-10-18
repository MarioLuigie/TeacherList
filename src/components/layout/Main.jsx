/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { main } from "../../constans/dimensions";
import { header, footer } from "../../constans/dimensions";
import TeacherInputs from "../content/TeacherInputs";

const styles = css`
  width: ${main.width}%;
  min-height: calc(100vh - ${header.height + footer.height}px);
`
export default function Main() {

  return (
    <div css={styles}>
      <TeacherInputs />
    </div>
  )
}