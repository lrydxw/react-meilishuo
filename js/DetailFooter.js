var React = require("react");
var ReactDOM = require("react-dom");

var DetailFooter = React.createClass({
	render:function(){
		return (
			<ul id="detailFooter">
				<li className="acive">
					<i className="iconfont">&#xe605;</i>
					<p>收藏</p>
				</li>
				<li>
					<i className="iconfont">&#xe639;</i>
					<p>购物车</p>
				</li>
				<li>
					<p>加入购物车</p>
				</li>
				<li>
					<p>立即购买</p>
				</li>
			</ul>
		)
	}
});

module.exports = DetailFooter;















