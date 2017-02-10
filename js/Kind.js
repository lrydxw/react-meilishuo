var React = require("react");
var KindProList=require("./KindProList");
var Kind=React.createClass({
	getInitialState:function(){
		return {
			
		}
	},
	render:function(){
		return (
			<div className="homeContent">
				<img id="load" src="img/load.gif"/>
				<KindProList/>
			</div>
		)
	}
});
module.exports = Kind;