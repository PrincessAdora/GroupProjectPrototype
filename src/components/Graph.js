import React from 'react';
import data from 
import {VictoryChart, VictoryHistogram} from "victory";

function Graph() {
      
  return (
   <div>

    <VictoryChart>
      <VictoryHistogram
       style={{ data: { fill: '#F1737F' }}}
       cornerRadius={3}
       data={props.data}
      />
    </VictoryChart>
    </div>
  );
}

export default Graph;
