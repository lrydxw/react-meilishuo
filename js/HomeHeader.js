var React = require("react");
var HomeHeader=React.createClass({
	render:function(){
		return (
			<ul>
				<li>
					<div className="searchBox">
						<i className="iconfont">&#xe600;</i>						
					</div>
				</li>
				<li className="logo">
					美丽说
				</li>				
				<li>
					<i className="iconfont">&#xe638;</i>
				</li>
			</ul>
		)
	}
});
module.exports = HomeHeader;