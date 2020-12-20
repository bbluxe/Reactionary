import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBarRoom = (props) => {
  const { id } = useParams();

  function handleClick() {
    props.leaveLobby(id);
  }

  return (
    <div className="navbar">
      <Link to="/connectRoom" onClick={handleClick} className="nav-link">
        Quitter le salon
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
