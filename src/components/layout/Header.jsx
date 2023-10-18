/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import colors from "../../constans/colors";
import { header } from "../../constans/dimensions";
import { useTeacherContext } from '../../context/teacherContext';
import * as actions from "../../actions/teacherActions";

const styles = css`
  position: relative;
  width: ${header.width}%;
  height: ${header.height}px;
  background-color: #242424;
  border-bottom: ${colors.sepLineColor} 1px solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    background: linear-gradient(to right, ${colors.gradColor.first}, ${colors.gradColor.sec});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.8rem;
    display: flex;
    gap: 12px;
    letter-spacing: 1px;

    span {
      font-size: 1.5rem;
      font-weight: 100;
    }

    @media screen and (min-width: 650px) {
      font-size: 4rem;

      span {
      font-size: 2rem;
    }
    }

  }

  .settingsPanel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px;

  }

  .settingsIcon {
    cursor: pointer;
    font-size: 2.5rem;
    color: white;
  }
`

export default function Header({
  title
}) {
  const { teacherListDispatch } = useTeacherContext();

  const handleDeleteAllTeachers = async () => {
    await actions.deleteAllTeachers(teacherListDispatch);
  }

  return (
    <div css={styles}>
      <div className='settingsPanel'>
        <FontAwesomeIcon icon={faGear} className='settingsIcon' onClick={handleDeleteAllTeachers}/>
      </div>
      <h1 className='title'>{title} <span>&reg;</span></h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}