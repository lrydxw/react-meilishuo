var React = require("react");
var ReactDOM = require("react-dom");


var Detail = React.createClass({
	getInitialState:function(){
		return{
			imgsDetail:"",
			detail:""
		}
	},
	componentWillMount:function(goodsID){
		var that = this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			dataType:"JSONP",
			data:{
				goodsID:that.props.goodsID
			},
			success:function(data){
				var result = data;
				var data = eval(result);
				var arr = [];
				var arr1 = []
				var 
					goodsBenUrlstr = data[0].goodsBenUrl,
					GoodsBenUrl = JSON.parse(goodsBenUrlstr),
					GoodsBenUrlLen = GoodsBenUrl.length;
				//console.log("detail",data);
				for(var i = 0; i　< GoodsBenUrlLen; i++){
					arr.push(<div className="swiper-slide" key={'imgs'+i}><img src={GoodsBenUrl[i]}/></div>)
				}
				arr1.push(<div id="present" key={'imgs'+i}>
					<div className="goodsname">
						<p>{data[0].goodsName}</p>
						<p>{data[0].price}<del>{data[0].price}</del></p>
					</div>
					<div className="goodsensure">
						<p><i className="iconfont">&#xe6c3;</i>正品保证<i className="iconfont">&#xe6c3;</i>15天无理由退换货<i className="iconfont">&#xe6c3;</i>10天保值<i className="iconfont">&#xe6c3;</i>包邮<i className="iconfont">&#xe6e5;</i></p>
					</div>
					<div className="icon"><p>可得568魅力币</p></div>
					<div className="address">
						<ul>
							<li><span>送至</span><i>河南</i></li>
							<li><span>选择</span><i>颜色、尺码</i></li>
							<li><span>服务</span><i>有美丽说销售并提供售后服务</i></li>
						</ul>
					</div>
					<div className="rated">
						<ul>
							<li><span>评价</span><i></i></li>
							<li><em>13***31</em><p>东西不错，实物比图片好看，但是快递我真是不想说!垃圾申通</p></li>
							<li><em>小路*室</em><p>透气还可以，总的来说还不错</p></li>
						</ul>
					</div>
					<div className="entered">
						<i>耐克专卖店</i><p><span>进入店铺</span></p>
					</div>
				</div>)
				that.setState({
					imgsDetail:arr,
					detail:arr1
				})
			}
		});
	},
	render:function(){
		return (
			<div id="DetailId">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{this.state.imgsDetail}
					</div>
					<div className="swiper-pagination"></div>
				</div>
				{this.state.detail}
			</div>
		)
	},
	componentDidUpdate:function(){
		var swiper = new Swiper(".swiper-container",{
			"pagination":".swiper-pagination",
			loop:true,
			autoplayDisableOnInteraction:false
		});
	}
});

module.exports = Detail;















