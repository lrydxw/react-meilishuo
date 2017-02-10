var React = require("react");
var toast = new Toast();
var Set=React.createClass({
	render:function(){
		return (
			<div className="setContent">
				<ul>
					<li><img src="img/pic01.jpg"/>接收通知<i className="iconfont">&#xe635;</i></li>
					<li><img src="img/pic02.jpg"/>声音提醒<i className="iconfont">&#xe635;</i></li>
					<li><img src="img/pic03.jpg"/>清理缓存<i className="iconfont">&#xe635;</i></li>
					<li><img src="img/pic04.jpg"/>检查版本<i className="iconfont">&#xe635;</i></li>
					<li className="cancle"><img src="img/pic05.jpg"/>退出<i className="iconfont">&#xe635;</i></li>
				</ul>
			</div>
		)
	},
	componentDidMount:function(){
		$(".cancle").click(function(){
			if(localStorage.getItem("isLogin")=="ok"){
				toast.show("退出成功",1000);
			}
			localStorage.setItem("isLogin","error");
		});
	}
});
module.exports = Set;