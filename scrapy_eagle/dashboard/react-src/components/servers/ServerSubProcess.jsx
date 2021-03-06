var React = require('react');
var moment = require('moment');

var ServerSubProcess = React.createClass({

  getInitialState: function() {
    return {link_open_buffer: ""};
  },
  onClickKill: function(){

    $.get(window.location.protocol+"//"+this.props.public_ip+":"+location.port+"/processes/kill_subprocess/"+this.props.pid, function(data) {

    });

  },
  componentDidMount: function(){
    this.setState({'link_open_buffer': window.location.protocol+"//"+this.props.public_ip+":"+location.port+"/processes/read_buffer/"+this.props.pid});
  },
  render: function(){

    var created_at = moment.utc(this.props.created_at);
    var fromNow = created_at.fromNow();

    return (
      <li key={this.props.pid}>
        <ul>
          <li>Command: {this.props.command}</li>
          <li>PID: {this.props.pid}</li>
          <li>CPU: {this.props.cpu_percent}%</li>
          <li>Memory Used: {this.props.memory_used_mb}mb</li>
          <li>Spider: {this.props.spider}</li>
          <li>Base Dir: {this.props.base_dir}</li>
          <li>Created At: {fromNow}</li>
          <li>
            <button onClick={this.onClickKill}>Kill</button>
            <a href={this.state.link_open_buffer} target="_blank"><button>Open Buffer</button></a>
          </li>
        </ul>
      </li>
    );
  }

});

/*var Link = React.createClass({

  render: function(){
    return (
      <a href='http://'+{this.props.public_ip}+':5000/read_buffer/{this.props.pid}' target="_blank">
        <button>Open Buffer</button>
      </a>
    );
  }

});*/

module.exports = ServerSubProcess;
