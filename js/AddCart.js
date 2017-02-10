var React = require("react");
var AddCart=React.createClass({
	getInitialState:function(){
		return {
			
		}
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/updatecar.php",
			data:{
				"userID":userID,
				"goodsID":goodsID,
				"number":number
			},
			success:function(data){
				if(data=="1"){
					toast.show("加入购物车成功",1000);
				}else{
					toast.show("加入购物车失败",1000);
				}
			}
		})
	},
	render:function(){
		return (
			<div>品牌</div>
		)
	}
});
module.exports = AddCart;