var React = require("react");
var toast = new Toast();
var ReactDOM = require("react-dom");
var content=document.getElementById("content");
var header=document.getElementById("header");
var Register=React.createClass({
	getInitialState:function(){
		//console.log("test2222",this.props.kindType)
		return {
			
		}
	},	
	toRegister:function(userID,passWord){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				"status":"register",
				"userID":userID,
				"password":passWord
			},
			beforeSend:function(){
				
			},
			success:function(data){
				console.log(data);
				if(data=="0"){
					toast.show("用户名已被占用",1000);	
				}else if(data=="1"){
					toast.show("注册成功请去登录",1000);
				}
			}
		});						
	},
	render:function(){
		return (
			<div className="registerContent">
				<p>第三方无需注册,直接点击登录</p>
				<p><img src="img/pic07.jpg"/></p>
				<p>手机注册</p>
				<p><input type="text" name="" id="userID" placeholder="用户名"/></p>
				<p><input type="password" name="" id="passWord" placeholder="密码"/></p>
				<p><input type="password" name="" id="passWord1" placeholder="确认密码"/></p>
				<p><button className="registerBtn">注册</button></p>
			</div>
		)
	},
	componentDidMount:function(){
		var that=this;
		$(".registerBtn").click(function(){
			var userID=$("#userID").val();
			var passWord=$("#passWord").val();
			var passWord1=$("#passWord1").val();
			
			if(userID==""){
				toast.show("用户名不能为空",1000);				
			}else{
				if(passWord==""){
					toast.show("密码不能为空",1000);
				}else{
					if(passWord!=passWord1){
						toast.show("两次密码输入不一致",1000);
					}else{
						
						that.toRegister(userID,passWord);
					}
				}
			}
		})
	}
});
module.exports = Register;