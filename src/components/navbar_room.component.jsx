import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslate } from 'react-polyglot';
import PropTypes from 'prop-types';

const NavBarRoom = (props) => {
  const { id } = useParams();
  const t = useTranslate();

  function handleClick() {
    props.leaveLobby(id);
  }

  return (
    <div className="navbar">
      <Link to="/connectRoom" onClick={handleClick} className="nav-link">
        {t('leave')}
      </Link>
    </div>
  );
};

NavBarRoom.propTypes = {
  leaveLobby: PropTypes.func,
};

NavBarRoom.defaultProps = {
  leaveLobby: () => {},
};

export default NavBarRoom;
