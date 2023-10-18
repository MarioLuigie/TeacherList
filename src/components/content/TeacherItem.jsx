/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faUser, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';

const styles = css`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 12px;
  box-shadow: #000000c1 0 0 20px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom: #525252 solid 1px;
    background-color: #292929;
    color: #c0c0c0;
    font-size: 0.9rem;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }

  .icon {
    font-size: 1.4rem;
    cursor: pointer;
    color: #a0a0a0;

    &:hover {
      color: #e4bc3b;
    }
  }

  main {
    width: 100%;
    height: 100%;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #818181;

    span {
      font-weight: bold;
      color: #3b3b3b;
    }
  }

  .avatar {
    width: 80px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dadada;
    border-radius: 9px;
    font-size: 3.5rem;
    color: #023c53;
  }

  .id {
    color: #5f5f5f;
  }
`

export default function TeacherItem({
  teacher,
  onDeleteSelected,
  onEditSelected,
}) {

  return (
    <div css={styles}>
      <header>
        <p className='id'>id: {teacher._id}</p>
        <div className='icons'>
          <div className='icon'>
            <Link to={`/user/${teacher._id}`} className='icon'>
              <FontAwesomeIcon icon={faUser}/>
            </Link>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faUserPen} onClick={onEditSelected(teacher)} />
          </div>
          <div className='icon' onClick={onDeleteSelected(teacher._id)}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </header>
      <main>
        <div className='infos'>
          <p>Name <span>{teacher.name}</span></p>
          <p>Surname <span>{teacher.surname}</span></p>
          <p>Age <span>{teacher.age}</span></p>
        </div>
        <div className='avatarWrapper'>
          <div className='avatar'>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
        </div>
      </main>
    </div>
  )
}

TeacherItem.propTypes = {
  teacher: PropTypes.object,
  onDeleteSelected: PropTypes.func,
  onEditSelected: PropTypes.func,
  onDisplayTeacher: PropTypes.func
}