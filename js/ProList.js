var React = require("react");
var ReactDOM = require("react-dom");
var ProList= React.createClass({
	getInitialState:function(){
		return {
		mountType:this.props.mountType,
			proList:"",
			proList1:"",
			proList2:"",
			proList3:""
		}
	},

	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:"json/goods1.json",
			success:function(data){
				var len=data.list.length;
				//console.log("list1",len)
				var arr=[];
				for(var j=0;j<len;j++){
					arr.push(<li key={"prolist1"+j} className="pro-item" data-type={that.state.mountType} data-goodsid= {data.list[j].goods_id}>
					<img src={data.list[j].show_pic}/>
					<p>{data.list[j].goods_title}</p>
					<p>￥{data.list[j].goods_price}</p>
					<p><i className="iconfont icon-xingxing"></i>{data.list[j].stock}</p>
				</li>)
				}
			
				that.setState({
					proList:arr
				})
			}
		});
		$.ajax({
			type:"get",
			url:"json/goods2.json",
			success:function(data){
				var len=data.list.length;
				var arr=[];
				for(var j=0;j<len;j++){
					arr.push(<li key={"prolist2"+j}  className="pro-item" data-type={that.state.mountType} data-goodsid= {data.list[j].goods_id}>
					<img src={data.list[j].show_pic}/>
					<p>{data.list[j].goods_title}</p>
					<p>￥{data.list[j].goods_price}</p>
					<p><i className="iconfont icon-xingxing"></i>{data.list[j].stock}</p>
				</li>)
				}
			
				that.setState({
					proList1:arr
				})
			}
		});
		$.ajax({
			type:"get",
			url:"json/006.json",
			beforeSend:function(){
					
				},
			success:function(data){
					
				var len=data.data.list.length;
				//console.log("list2",len)
				var arr=[];
				for(var j=0;j<len;j++){
					arr.push(
					<li className="pro_list" key={"prolist3"+j}>
					
					<img src={data.data.list[j].show.img}/>
					<p>{data.data.list[j].title}</p>
					<p>{data.data.list[j].orgPrice}</p>
					<p><i className="iconfont icon-xingxing"></i>{data.data.list[j].sale}</p>
				</li>)
				}
			
				that.setState({
					proList2:arr
				})
			}
		});
		$.ajax({
			type:"get",
			url:"json/007.json",
			success:function(data){
				var len=data.data.list.length;
				//console.log("list2",len)
				var arr=[];
				for(var j=0;j<len;j++){
					arr.push(<li key={"prolist4"+j}>
					<img src={data.data.list[j].show.img}/>
					<p>{data.data.list[j].title}</p>
					<p>{data.data.list[j].orgPrice}</p>
					<p><i className="iconfont icon-xingxing"></i>{data.data.list[j].cfav}</p>
				</li>)
				}
			
				that.setState({
					proList3:arr
				})
			}
		});
		
		
		
		
	},
	render:function(){
		return (
			<div className="goods-list1">
				<div className="goods-nav">
					<span className="kongbai"></span>
						<ul className="ulList">
							<li className="active">
								默认
							</li >
							<li >
								最新
							</li>
							<li>
								精选
							</li>
						</ul>
						
				</div>
				<div className="goods">
					<div className="normal">
						<ul className="n-left">
							{this.state.proList}
						</ul>
						<ul className="n-right">
							{this.state.proList1}
						</ul>
					</div>
				</div>
				<div className="goods">
				<div className="goodslist">
					<ul>
						{this.state.proList2}
					</ul>
				</div>
				
				</div>
				<div className="goods">
				<div className="goodslist">
					<ul>
						{this.state.proList3}
					</ul>
				</div>
				</div>
			</div>
		)
	},
componentDidMount:function(){
	
		$(".ulList").on("click","li",function(){
			var goodsID = $(this).attr("data-goodsid");
		
		});
	/*	$(".pro-item").on("touchend",function(){
		console.log("详情")
			console.log($(this).attr(data-goodsID))
		
		})
	*/
	},
	componentDidUpdate:function(){
		//console.log("详情")
//		var that =this;
//		$(".pro-item").on("touchend",function(){
//			
//			var goodsID = $(this).attr("data-goodsid")*1;
//			var mountType = $(this).attr("data-type");
//			
//			var Detail = require("./Detail");
//			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//			ReactDOM.render(<Detail goodsID = {goodsID}/>,document.getElementById("content"));
//		
//		})
	}
	
});
	$(document).on("touchmove",function() {
			//console.log("滚轮")
			var top=$(".home-top").height()+$(".swiper-container").height()+$(".img-logo").height()+20;
			//console.log(top)
			
			var sc = $(".goods-list1").offset().top;
			//console.log(sc)
			if (sc<80) {	
			//console.log("滚轮1")
				$(".goods-nav").addClass("tofixed")	;

			} else{
			//console.log("滚轮2")
				$(".goods-nav").removeClass("tofixed")				

			};
			
		
		});	
module.exports=ProList;