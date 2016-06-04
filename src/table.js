var React = require('react');
var ReactDOM = require('react-dom');

var headerCells=["Volume", "Price"];
var rows=[
{id:1, vol:100, price:10.25},
{id:2, vol:200, price:24.5}
];
var Table = React.createClass({
  render: function() {
    return (
      <table>
	<Header labels={headerCells}/>
	<Body rows={rows}/>
      </table>
    );
  }
});

var Header = React.createClass({
  render: function() {
    var tds = this.props.labels.map(function(label) {
      return (
        <th key={label}>{label}</th>
      );
    });
    return (
      <thead>
      <tr>{tds}</tr>
      </thead>
    );
  }
});

var Body = React.createClass({
  render: function() {
    var rowsx = this.props.rows.map(function(row) {
      return (
        <tr key={row.id}><td>{row.vol}</td><td>{row.price}</td></tr>
      );
    });
    return (
      <tbody>{rowsx}</tbody>
    );
  }
});
/*
var Row = React.createClass({
  getInitialState: function() {
    return {cells: []};
  }
});
*/
ReactDOM.render(
  <Table/>, 
  document.getElementById('example')
);
