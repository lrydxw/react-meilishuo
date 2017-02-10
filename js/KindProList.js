var React = require("react");
var toast = new Toast();
var Detail = require("./Detail");
var DetailHeader = require("./DetailHeader");
var DetailFooter = require("./DetailFooter");
var ReactDOM = require("react-dom");
var KindProList=React.createClass({
	getInitialState:function(){
		return {
			proList:""
		}
	},

	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			dataType:"jsonp",
			beforeSend:function(){
				$("#load").show();
				$("#proList").hide();
			},
			success:function(data){
				//console.log(data)
				$("#load").hide();
				$("#proList").show();
				var len=data.length;
				var arr=[];
				for(var i=0;i<len;i++){
					arr.push(<li key={i} className="proItem" data-goodsID={data[i].goodsID}>
						<div className="proImg">
							<img src={data[i].goodsListImg}/>
						</div>
						<div className="proInfo">
							<p>{data[i].goodsName}</p>
							<p><b>￥{data[i].price}</b></p>
							<p>{data[i].discount}折</p>
							<span className="cartBtn" data-goodsID={data[i].goodsID}><i className="iconfont">&#xe639;</i></span>
						</div>
					</li>)
				}
				that.setState({
					proList:arr
				})				
			}
		});
	},
	render:function(){		
		return (
			<ul id="proList">
				{this.state.proList}
			</ul>
		)		
	},
	componentDidUpdate:function(){
		var that=this;
		$(".proItem").on("click",function(){
			var goodsID = $(this).attr("data-goodsID");
			var content = document.getElementById("content");
			var header = document.getElementById("header");
			var footer = document.getElementById("footer");
			ReactDOM.unmountComponentAtNode(header);
			ReactDOM.unmountComponentAtNode(content);
			ReactDOM.unmountComponentAtNode(footer);
			ReactDOM.render(<Detail goodsID={goodsID}/>,content);
			ReactDOM.render(<DetailFooter/>,footer);
			ReactDOM.render(<DetailHeader/>,header);
		});
		$(".cartBtn").on("click",function(e){
			e.stopPropagation();
			var goodsID=$(this).attr("data-goodsID");
			var userID=localStorage.getItem("userID")
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{
					"userID":userID,
					"goodsID":goodsID,
					"number":1
				},
				success:function(data){
					console.log(data);
					if(data=="1"){
						toast.show("加入购物车成功",1000);
					}else{
						toast.show("加入购物车失败",1000);
					}
				}
			});		
		})
	}	
});
module.exports = KindProList;