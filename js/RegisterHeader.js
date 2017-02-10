var React = require("react");
var ReactDOM = require("react-dom");
var RegisterHeader=React.createClass({
	getInitialState:function(){
		return {
			regisType:this.props.kindType
		}		
	},
	render:function(){
		return (
			<ul>
				<li className="registerBack">
					<i className="iconfont">&#xe604;</i>
				</li>
				<li className="logo">
					注册
				</li>				
				<li className="loginBtnToRegister">
					
				</li>
			</ul>
		)
	},
	componentDidMount:function(){
		
		var registerType=this.state.regisType;
		$(".registerBack").click(function(){
			var header=document.getElementById("header");
			var content=document.getElementById("content");
			var Login=require("./Login");
			ReactDOM.unmountComponentAtNode(content);
			ReactDOM.render(<Login loginType={registerType}/>,content);
			
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(header);
			ReactDOM.render(<LoginHeader loginType={registerType}/>,header);
		})
	}
	
});
module.exports = RegisterHeader;