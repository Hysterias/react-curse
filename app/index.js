import React from 'react'
import ReactDOM  from 'react-dom'

var Greater = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is default message'
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    alert(name);
  },
  render: function (){
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Alberto';

ReactDOM.render(
  <Greater name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);
