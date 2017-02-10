var React = require("react");
var toast = new Toast();
var ReactDOM = require("react-dom");
var content=document.getElementById("content");
var header=document.getElementById("header");
var Login=React.createClass({
	getInitialState:function(){
		//console.log("test",this.props.mountType)
		//console.log("test1212",this.props.loginType)
		return {
			"mountType":this.props.mountType,
			"mountType1":this.props.loginType
		}
	},	
	componentWillMount:function(){
		
	},
	toLogin:function(userID,passWord){		
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				"status":"login",
				"userID":userID,
				"password":passWord
			},
			beforeSend:function(){
				
			},
			success:function(data){
				console.log(data);
				if(data=="0"){
					toast.show("用户名不存在",1000);
				}else if(data=="2"){
					toast.show("密码不正确",1000);
				}else{
					localStorage.setItem("isLogin","ok");
					localStorage.setItem("userID",userID);
					$(".userBtnToLogin1").html(localStorage.getItem("userID"));	
					$(".userBtnToLogin2").hide();
				
				}
			}
		});						
	},
	render:function(){
		return (
			<div className="loginContent">
				<p>第三方无需注册,直接点击登录</p>
				<p><img src="img/pic07.jpg"/></p>
				<p>其他登录</p>
				<div>
					用户名
					<input type="text" name="" id="userID" placeholder="用户名"/>
				</div>
				
				<div>
					密　码
					<input type="passWord" name="" id="passWord" placeholder="密码"/>				
				</div>
				<p><button className="loginBtn">登录</button></p>
			</div>
		)
	},
	componentDidMount:function(){
		var that=this;
		var type1=that.state.mountType1;
		var type=that.state.mountType;
		if(type){
			$(".loginBtn").click(function(){
			var userID=$("#userID").val();
			var passWord=$("#passWord").val();
			console.log("userID",userID)
			console.log("passWord",passWord)			
			if(userID==""){
				toast.show("用户名不能为空",1000);	
			}else{
				if(passWord==""){
					toast.show("密码不能为空",1000);
				}else{
					that.toLogin(userID,passWord);					
					if(type=="user"){
						var User=require("./User");
						ReactDOM.unmountComponentAtNode(content);
						ReactDOM.render(<User/>,content);
						
						var UserHeader=require("./UserHeader");
						ReactDOM.unmountComponentAtNode(header);
						ReactDOM.render(<UserHeader/>,header);
					}else if(type=="cart"){
						var CartMain=require("./CartMain");
						ReactDOM.unmountComponentAtNode(content);
						ReactDOM.render(<CartMain/>,content);
						
						var CartHeader=require("./CartHeader");
						ReactDOM.unmountComponentAtNode(header);
						ReactDOM.render(<CartHeader/>,header);
					}					
				}
			}						
		})
		}else if(type1){
			$(".loginBtn").click(function(){
			var userID=$("#userID").val();
			var passWord=$("#passWord").val();
			console.log("userID",userID)
			console.log("passWord",passWord)			
			if(userID==""){
				toast.show("用户名不能为空",1000);	
			}else{
				if(passWord==""){
					toast.show("密码不能为空",1000);
				}else{
					that.toLogin(userID,passWord);					
					if(type1=="user"){
						var User=require("./User");
						ReactDOM.unmountComponentAtNode(content);
						ReactDOM.render(<User/>,content);
						
						var UserHeader=require("./UserHeader");
						ReactDOM.unmountComponentAtNode(header);
						ReactDOM.render(<UserHeader/>,header);
					}else if(type1=="cart"){
						var CartMain=require("./CartMain");
						ReactDOM.unmountComponentAtNode(content);
						ReactDOM.render(<CartMain/>,content);
						
						var CartHeader=require("./CartHeader");
						ReactDOM.unmountComponentAtNode(header);
						ReactDOM.render(<CartHeader/>,header);
					}					
				}
			}						
		})
		}
		
	}
});
module.exports = Login;