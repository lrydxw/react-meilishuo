var React = require("react");
var ReactDOM = require("react-dom");
var header=document.getElementById("header");
var content=document.getElementById("content");
var SetHeader=React.createClass({
	render:function(){
		return (
			<ul>
				<li>
					<div className="searchBox">
						<i className="iconfont setBack">&#xe604;</i>						
					</div>
				</li>
				<li className="logo">
					设置
				</li>				
				<li>
					
				</li>
			</ul>
		)
	},
	componentDidMount:function(){
		$(".setBack").click(function(){
			var User=require("./User");
			ReactDOM.unmountComponentAtNode(content);
			ReactDOM.render(<User/>,content);
			var UserHeader=require("./UserHeader");
			ReactDOM.unmountComponentAtNode(header);
			ReactDOM.render(<UserHeader/>,header);
		})
	}
});
module.exports = SetHeader;