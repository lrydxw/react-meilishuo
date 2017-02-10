var React = require("react");
var ReactDOM = require("react-dom");

var MainFoot=React.createClass({
	getInitialState:function(){
		return {
			activeIndex:0
		}
	},
	clickHandle:function(e){
		var currentIndex=(e.target.getAttribute("data-id"))*1
		//console.log(currentIndex);
		this.setState({
			activeIndex:currentIndex
		})
		var content=document.getElementById("content");
		var header=document.getElementById("header");
		switch (currentIndex){
			case 0:
				var Home=require("./Home");
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Home/>,content);
				var HomeHeader=require("./HomeHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<HomeHeader/>,header);
				break;
			case 1:
				var Kind=require("./Kind");
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Kind/>,content);
				var KindHeader=require("./KindHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<KindHeader/>,header);
				break;
			case 2:
				if(localStorage.getItem("isLogin")=="ok"){
					var CartMain=require("./CartMain");
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(<CartMain/>,content);
					var CartHeader=require("./CartHeader");
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(<CartHeader/>,header);
				}else{
					var CartLogin=require("./CartLogin");
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(<CartLogin/>,content);
					var CartHeader=require("./CartHeader");
					ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(<CartHeader/>,header);
				}
				
				break;
			case 3:
				var User=require("./User");
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<User/>,content);
				var UserHeader=require("./UserHeader");
				ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<UserHeader/>,header);
				break;
			default:
				break;
		}
	},
	render:function(){
		return (
			<ul>
				<li className={this.state.activeIndex==0?'active':''} onClick={this.clickHandle} data-id="0">
					<i className="iconfont" data-id="0">&#xe629;</i>
					<p data-id="0">首页</p>
				</li>
				
				<li className={this.state.activeIndex==1?'active':''} onClick={this.clickHandle} data-id="1">
					<i className="iconfont" data-id="1">&#xe633;</i>
					<p data-id="1">分类</p>
				</li>
				
				<li className={this.state.activeIndex==2?'active':''} onClick={this.clickHandle} data-id="2">
					<i className="iconfont" data-id="2">&#xe686;</i>
					<p data-id="2">购物车</p>
				</li>
				
				<li className={this.state.activeIndex==3?'active':''} onClick={this.clickHandle} data-id="3">
					<i className="iconfont" data-id="3">&#xe6cd;</i>
					<p data-id="3">我</p>
				</li>
			</ul>
		)
	}
});
module.exports = MainFoot;