var React = require("react");
var ReactDOM = require("react-dom");
var MainFoot = require("./MainFoot");
var content = document.getElementById("content");
var header = document.getElementById("header");
var footer = document.getElementById("footer");
var DetailHeader = React.createClass({
	getInitialState:function(){
		return {
			
		}
	},
	backHandler:function(){
		var KindHeader = require("./KindHeader");
		var Kind = require("./Kind");
		ReactDOM.unmountComponentAtNode(footer);
		ReactDOM.render(<MainFoot/>,footer);
		
		
		ReactDOM.unmountComponentAtNode(content);
		ReactDOM.render(<Kind/>,content);
		
		ReactDOM.unmountComponentAtNode(header);
		ReactDOM.render(<KindHeader/>,header);
	},
//	backHandler:function(){
//		console.log(this.props.type);
//		var content = document.getElementById("content");
//		var header = document.getElementById("header");
//		var footer = document.getElementById("footer");
//		if(this.props.type == "home"){
//			var Home = require("./Home");
//			var HomeHeader = require("./HomeHeader");
//			ReactDOM.unmountComponentAtNode(header);
//			ReactDOM.render(<HomeHeader/>,header);
//			ReactDOM.unmountComponentAtNode(content);
//			ReactDOM.render(<Home/>,content);
//			
//		}else if(this.props.type == "kind"){
//			var Kind = require("./Kind");
//			var KindHeader = require("./KindHeader");
//			ReactDOM.unmountComponentAtNode(header);
//			ReactDOM.render(<KindHeader/>,header);
//			ReactDOM.unmountComponentAtNode(content);
//			ReactDOM.render(<Kind/>,content);
//		}
//		ReactDOM.unmountComponentAtNode(footer);
//		ReactDOM.render(<MainFoot/>,footer);
//	},
	render:function(){
		return (
			<ul id="detailHeader">
				<li className="logo" id="back" onClick={this.backHandler}>
					<i className="iconfont">&#xe604;</i>
				</li>
				<li>
					产品详情
				</li>
				<li>
					
				</li>
			</ul>
		)
	}
//	componentWillMount:function(){
//		$("#back").click(function(){
//			alert(111)
//		})
//	}
});

module.exports = DetailHeader;















