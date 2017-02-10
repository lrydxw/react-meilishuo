var React = require("react");
var toast = new Toast();
var ReactDOM = require("react-dom");
var header=document.getElementById("header");
var content=document.getElementById("content");
var User=React.createClass({
	render:function(){
		return (
			<div className="userContent">
				<ul>
					<li className="userLoginBtn">
						<img src="img/pic06.jpg"/><span className="userBtnToLogin1">登录</span>
						<button className="userBtnToLogin2">立即登录</button>
						<i className="iconfont">&#xe635;</i>						
					</li>
					<li><img src="img/pic01.jpg"/>订单<i className="iconfont">&#xe635;</i></li>
					<li><img src="img/pic02.jpg"/>快乐购<i className="iconfont">&#xe635;</i></li>
					<li><img src="img/pic03.jpg"/>话题<i className="iconfont">&#xe635;</i></li>
					<li><img src="img/pic04.jpg"/>帮助与反馈<i className="iconfont">&#xe635;</i></li>
					<li className="set"><img src="img/pic05.jpg"/>设置<i className="iconfont">&#xe635;</i></li>
					
				</ul>
			</div>
		)
	},
	componentDidMount:function(){		
		if(localStorage.getItem("isLogin")=="ok"){
			$(".userBtnToLogin2").hide();
			$(".userBtnToLogin1").html(localStorage.getItem("userID"));			
		}else{
			$(".userLoginBtn").click(function(){
				
				var Login=require("./Login");
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Login mountType="user"/>,content);
				
				var LoginHeader=require("./LoginHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<LoginHeader mountType="user"/>,header);
			})
		}
		
		$(".set").click(function(){
			var SetHeader=require("./SetHeader");
			ReactDOM.unmountComponentAtNode(header);
			ReactDOM.render(<SetHeader/>,header);
			var Set=require("./Set");
			ReactDOM.unmountComponentAtNode(content);
			ReactDOM.render(<Set/>,content);	
			
		})
	}
});
module.exports = User;