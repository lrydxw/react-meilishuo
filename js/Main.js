var React = require("react");
var ReactDOM = require("react-dom");
var Home=require("./Home");
var HomeHeader=require("./HomeHeader")
//加载底部导航
var MainFoot=require("./MainFoot");
var Main=React.createClass({
	render:function(){
		return (
			<div className="box">
				<header id="header">header</header>
				<section id="content"></section>
				<footer id="footer"></footer>
			</div>
		)
	}
});
ReactDOM.render(<Main/>,document.getElementById("app"));
ReactDOM.render(<MainFoot/>,document.getElementById("footer"));
ReactDOM.render(<Home/>,document.getElementById("content"));
ReactDOM.render(<HomeHeader/>,document.getElementById("header"));