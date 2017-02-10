var React = require("react");
var ReactDOM = require("react-dom");
var LoginHeader=React.createClass({
	getInitialState:function(){
		//console.log("test999",this.props.mountType)
		return (
			{
			"mountType":this.props.mountType
		}
		)
	},
	render:function(){
		return (
			<ul>
				<li className="loginBack">
				
				</li>
				<li className="logo">
					登录
				</li>				
				<li className="loginBtnToRegister">
					注册
				</li>
			</ul>
		)
	},
	componentDidMount:function(){
		var that=this;
		var type=this.state.mountType;
		//console.log("test5555",type)
		$(".loginBtnToRegister").click(function(){
			var header=document.getElementById("header");
			var content=document.getElementById("content");
			var Register=require("./Register");
			ReactDOM.unmountComponentAtNode(content);
			ReactDOM.render(<Register kindType={type}/>,content);
			
			var RegisterHeader=require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(header);
			ReactDOM.render(<RegisterHeader kindType={type}/>,header);
		})
	}
	
	
});
module.exports = LoginHeader;