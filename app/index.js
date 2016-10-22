import React from 'react'
import ReactDOM  from 'react-dom'

var Greater = React.createClass({
  render: function (){
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is a component!</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greater/>,
  document.getElementById('app')
);
