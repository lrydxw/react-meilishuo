var React = require("react");
var ProList=require("./ProList");
var Home= React.createClass({
	getInitialState:function(){
		return {
			val:"毛呢外套",
			imgsList:"",
			popular:"",
			data1:"",
			data2:"",
			data3:"",
			data4:"",
			data5:"",
			data6:""
		}
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
				type:"get",
				url:"json/sylb.json",
				dataType:"json",
				success:function(data){
					var len=data.list.length;
					var  arr=[];
					for(var i=0;i<len;i++){
						arr.push(<div className="swiper-slide" key={'banner'+i}><img src={data.list[i].image}
							/></div>)
					}
					that.setState({
						imgsList:arr
					})
				}
			});
		
		$.ajax({
				type:"get",
				url:"json/data1.json",
				success:function(data){
					var len=data.list.length;
					var len1=data.list[0].twitters.length;
					//console.log("len",len);
					//console.log("len1",len1);
					var dataArr=[];
					var dataArr1=[];
					for(var i=0;i<len;i++){
						dataArr.push(<div className="dataDiv" key={'data'+i} data-goodsID={"00"+(i+1)}><img src={data.list[i].image.pic_url}/>
							<div className="mask"></div>
							<p>{data.list[i].title}</p>
							<p><span>{data.list[i].total}</span>款商品</p>
							
							</div>)
						for(var j=0;j<len1;j++){
							dataArr1.push(<div className="swiper-slide" key={"data1"+j}>
						        	<div className="proItem">
						        		<img src={data.list[i].twitters[j].show_pic}/>
						        		<p className="p1">{data.list[i].twitters[j].goods_title}</p>
						        		<p>￥{data.list[i].twitters[j].goods_price}</p>
						        	</div>
						       </div>)
						}
					
					}
					
						
					that.setState({
						data1:dataArr[0],
						data2:dataArr[1],
						data3:dataArr[2],
						data4:dataArr1.slice(0,20),
						data5:dataArr1.slice(20,40),
						data6:dataArr1.slice(40)
					})
				}
		});
		$.ajax({
				type:"get",
				url:"json/005.json",
				dataType:"json",
				success:function(data){
					//console.log("a")
					var len=data.data.list.length;
					//console.log(len)
					var  arr=[];
					for(var i=0;i<len;i++){
						arr.push(<div className="popular-image swiper-slide" key={'banner'+i}>
						<img src={data.data.list[i].show.img}/>
						
						
							</div>)
					}
					that.setState({
						popular:arr
					})
				}
			});
	},
	render:function(){
		return (
			<div className="homeContent">
				
				
				<div className="swiper-container" id="home-swiper">
					<div className="swiper-wrapper">
						{this.state.imgsList}
					</div>
					<div className="swiper-pagination" id="home-pagination"></div>
				</div>
				
				<div className="home-goods">
					<span className="kongbai"></span>
					<div className="goods-img">
						{this.state.data1}
					</div>
					<div className="swiper-container" id="home-swiper3" >
				    	<div className="swiper-wrapper home-wrapper3" id="home-wrapper3" >
					    	{this.state.data4}
					    </div>
					</div>
				</div>
				<div className="popularItem">
					<p>正在流行</p>
					<div className="swiper-container" id="home-swiper6">
					  
						<div className="swiper-wrapper" id="home-wrapper6">
							{this.state.popular}
						</div>
					</div>
				</div>
				<div className="home-goods">
					<span className="kongbai"></span>
					<div className="goods-img">
						{this.state.data2}
					</div>
					<div className="swiper-container" id="home-swiper4">
				    	<div className="swiper-wrapper home-wrapper3" id="home-wrapper4" >  
					   		{this.state.data5}
					   </div>
					</div>
				</div>
				
				<div className="home-goods">
					<span className="kongbai"></span>
					<div className="goods-img">
						{this.state.data3}
					</div>
					<div className="swiper-container" id="home-swiper5">
				    	<div className="swiper-wrapper home-wrapper3" id="home-wrapper5" >  
					        {this.state.data6}
					    </div>
					</div>
				</div>
				<ProList mountType="home"/>
				
			</div>
		)
	},
	componentDidMount:function(){
		var homeswiper2= new Swiper('#home-swiper2', {
							slidesPerView : 4,
							spaceBetween : 20,
				})
	},
	componentDidUpdate:function(){
		var homeswiper= new Swiper('#home-swiper', {
					loop: true,
					autoplay: 1500,
					autoplayDisableOnInteraction: false,
					"pagination": ".swiper-pagination",
			});
		var homeswiper3= new Swiper('#home-swiper3', {
				slidesPerView : 3,
				freeModeMomentumBounce : false
							
		});
		var homeswiper4= new Swiper('#home-swiper4 ', {
				slidesPerView : 3,
				freeModeMomentumBounce : false
		});
		var homeswiper5= new Swiper('#home-swiper5', {
				slidesPerView : 3,
			freeModeMomentumBounce : false
		});
		var homeswiper6= new Swiper('#home-swiper6', {
				
				//freeModeMomentumRatio : 5,
				//centeredSlides : true,
				slidesPerView : 5,
				slidesPerGroup : 5,
				slidesPerColumn : 1.5,
				spaceBetween : 5,
				
				
		});
	}
})
module.exports=Home;