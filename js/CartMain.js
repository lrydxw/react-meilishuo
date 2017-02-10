var React = require("react");
var ReactDOM = require("react-dom");

var CartMain=React.createClass({
	getInitialState:function(){
		return {
			cartList:""
		}
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/getCar.php?callback=",
				dataType:"jsonp",
				data:{
					userID:localStorage.getItem("userID")
				},
				success:function(data){
					console.log(data);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li className="cartItem" key={i}>												
							<div className="itemImg">
								<img src={data[i].goodsListImg}/>
							</div>
							<div className="itemInfo">
								<p>{data[i].goodsName}</p>
								<p>{data[i].className}</p>
								<p>单价：￥{data[i].price}</p>
								<p>数量：1</p>
							</div>						
					</li>)
					}
					that.setState({
						cartList:arr
					})	
				}
			});
	},
	render:function(){
		return (
			<div className="carMainContent">										
				<ul className="cartList" id="cartList">
					{this.state.cartList}
				</ul>
			</div>
		)
	},
	componentDidMount:function(){
		
	}
});
module.exports = CartMain;