import React from 'react';
import './GridForm.css';
import Slider from './Slider.js';
import Submit from './Submit.js';
import MultipleChoice from './MultipleChoice';

function GridForm({
  getDimensions, updateDimensions, getMode, setMode,
    startSearch, isRunning }) {
  return (
    <form>
      <Slider 
        min="2"
        max="20"
        value={getDimensions}
        onChange={updateDimensions}
      />
      <MultipleChoice
        options={[{
          name: "Obstacle",
        }, {
          name: "Start",
        }, {
          name: "End",
        }]}
        onClick={setMode}
      />
      <Submit
        name="Run"
        run={startSearch}
        disabled={isRunning}
      />
    </form>
  );
}

export default GridForm;