import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../styles/SkillProgress.css'
const SkillProgress = (props) => {
    const percentage = +(props.value); // Set the percentage here
  
    return (
      <div style={{ width: 180, margin: 'auto' }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#fff',
            pathColor: '#000048', 
            trailColor:'transparent',
            textAlign: 'center',
            verticalAlign: 'middle',
          })}
        />
        <p style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          marginTop: '30px',
        }}>
          {props.text}
        </p>
      </div>
    );
  };
  
  export default SkillProgress;