var React = require("react");
var ReactDOM = require("react-dom");

var CartLogin=React.createClass({	
	render:function(){
		return (
			<div className="carContent">										
				<div className="carHeader">
					<p>温馨提示:现在登录,您可以同步手机和电脑购物车中的商品</p>
					<button className="login">登录</button>
				</div>				
				<div>
					<div><img src="img/carLogo.jpg"/></div>
					<p>购物车空空如也</p>
					<button>随便逛逛</button>
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		$(".login").click(function(){
			var header=document.getElementById("header");
			var content=document.getElementById("content");
			var Login=require("./Login");
			ReactDOM.unmountComponentAtNode(content);
			ReactDOM.render(<Login mountType="cart"/>,content);
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(header);
			ReactDOM.render(<LoginHeader mountType="cart"/>,header);
		});
	}
});
module.exports = CartLogin;