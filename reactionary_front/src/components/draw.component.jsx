import React, { useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Draw = (props) => {
  const [width] = useState(800);
  const [height] = useState(600);
  const [drawing, setDrawing] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (props.drawing !== '') {
      setDrawing(props.drawing);
    }
  });

  function handleChange(canvasData) {
    props.handleChange({ room: id, draw: canvasData.getSaveData() });
  }

  return (
    <>
      <CanvasDraw
        hideGrid
        onChange={(canvasData) => handleChange(canvasData)}
        canvasWidth={width}
        canvasHeight={height}
        immediateLoading
      />
      <br />
      <CanvasDraw
        hideGrid
        disabled
        saveData={drawing}
        canvasWidth={width}
        canvasHeight={height}
        immediateLoading
      />
    </>
  );
};

Draw.propTypes = {
  handleChange: PropTypes.func,
  drawing: PropTypes.arrayOf(PropTypes.object),
};

Draw.defaultProps = {
  handleChange: () => {},
  drawing: [],
};

export default Draw;
