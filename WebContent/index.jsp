<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1> <center> Members </center> </h1>
      
      
      <form name="dynamiccombo">
<select name="stage2" size="1">
<option value="#">This is a Place Holder</option>
<option value="#">This is a Place Holder</option>
<option value="#">This is a Place Holder</option>
</select>
<input type="button" name="test" value="Go!"
onClick="gothere()">
</form>

<script>


//Dynamic combo box script- by javascriptkit.com
//Visit JavaScript Kit (http://javascriptkit.com) for script
//Credit must stay intact for use

  
//DEFINE the group of links for display in the combo
//EXTEND each array and its elements as needed
//BE sure to follow the pattern revealed below
var combo1=new Array()
combo1[0]=new Option("JavaScript Kit","http://javascriptkit.com")
combo1[1]=new Option("Dynamic Drive","http://www.dynamicdrive.com")
combo1[2]=new Option("Freewarejava.com","http://www.freewarejava.com")
combo1[3]=new Option("Free Web Templates","http://www.freewebtemplates.com")
combo1[4]=new Option("Web Monkey","http://www.webmonkey.com")

var combo2=new Array()
combo2[0]=new Option("CNN","http://www.cnn.com")
combo2[1]=new Option("MSNBC","http://www.msnbc.com")
combo2[2]=new Option("BBC News","http://news.bbc.co.uk")
combo2[3]=new Option("ABC News","http://www.abcnews.com")

var combo3=new Array()
combo3[0]=new Option("Hollywood.com","http://www.hollywood.com")
combo3[1]=new Option("MTV","http://www.mtv.com")
combo3[2]=new Option("ETOnline","http://etonline.com")


var cacheobj=document.dynamiccombo.stage2

function populate(x){
for (m=cacheobj.options.length-1;m>0;m--)
cacheobj.options[m]=null
selectedarray=eval(x)
for (i=0;i<selectedarray.length;i++)
cacheobj.options[i]=new Option(selectedarray[i].text,selectedarray[i].value)
cacheobj.options[0].selected=true
}

function gothere(){
location=cacheobj.options[cacheobj.selectedIndex].value
}

//SHOW first combo by default
populate(combo1)


</script>

<!--SET up your links, and pass in the name of the group (ie: combo1) you wish to display for the link in question-->
<a href="javascript:populate(combo1)">Webmaster sites</a> | <a href="javascript:populate(combo2)">News sites</a> | <a href="javascript:populate(combo3)">Entertainment</a>


<p align="center">This free script provided by<br />
<a href="http://javascriptkit.com">JavaScript
Kit</a></p>


<form>
<li>
					<label>Food Discount at Restaurent & Bar: <select name="foodDiscount" id="foodDiscount">
						<option value="0">(Select discount option)</option>
						<option value="1">Dining Alone [50%]</option>
						<option value="2">2 People Dining [33%]</option>
						<option value="3">3 People Dining [25%]</option>
						<option value="4">4 People Dining [20%]</option>
						<option value="5">5 to 20 People Dining [20%]</option>
						<option value="6">In Room Dining [20%]</option>
						<option value="7">Food Promotions and Events [15%]</option>
						</select>
					</label>
					<label>Amount: <input type="text" name="foodDiscountAmt" id="foodDiscountAmt" /></label>
					</li>
				
				<li><label>Beverage Discount at Restaurent & Bar (1 to 20 people): <select name="bvgDiscount" id="bvgDiscount">
					<option value="0">(Select discount option)</option>
					<option value="1">Alcoholic & non alcoholic (IMFL & Beer) [20%]</option>
					<option value="2">Alcoholic (Foreign Liquor) [15%]</option>
					<option value="3">Happy hours 5pm to 8:30 pm at GEOFFERY'S (only for IMFL & Beer) [Buy 1 Get 1 Free]</option>
					<option value="4">Happy hours 5pm to 8:30 pm at GEOFFERY'S (for Foreign Liquor) [Buy 2 Get 1 Free]</option>
					</select></label></li>
				
				<li><label>Accomodation: <select name="accomodation" id="accomodation">
					<option value="0">(Select accomodation type)</option>
					<option value="1">On best available/flexible rate [10%]</option>
					</select></label></li>
					
				<li><label>Pastry: <select name="pastry" id="pastry">
					<option value="0">(Select discount option)</option>
					<option value="1">Default [30%]</option>
					</select></label></li>
				
				<li><label>Spa & Beauty saloon: <select name="spaSaloon" id="spaSaloon">
					<option value="0">(Select discount option)</option>
					<option value="1">Default [20%]</option>
					</select></label></li>
				
				<li><label>Benquets & Conferences: <select name="benqConf" id="benqConf">
					<option value="0">(Select discount option)</option>
					<option value="1">Default [20%]</option>
					</select></label></li>
					
				<li><label>Diwali / Christmas / New year hampers: <select name="festival" id="festival">
					<option value="0">(Select discount option)</option>
					<option value="1">Default [20%]</option>
					</select></label></li>
			</ul>
		</form>



</body>
</html>