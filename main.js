var counter=0;
var x;
var arr=[];
var arr2=[];
var arr3=[];
function change(){
	if(x!=true){
		if(counter%2!==0 ){
			document.getElementById('image1').src="2-01.png"
			arr[0]="o";
			oWin();
		}

		else{
			document.getElementById('image1').src="1-01.png"
			arr[0]="x";
			xWin();
		}
		counter++;
		x=true;
	}

}
var y;
function change2(){
	if(y!==true){
		if(counter%2!==0){
			document.getElementById('image2').src="2-01.png"
			arr[1]="o";
			oWin();
		}
		else{

			document.getElementById('image2').src="1-01.png"
			arr[1]="x";
			xWin();
		}
	}
	y=true;
	counter++;
}
function change3(){
	if(counter%2!==0){
		document.getElementById('image3').src="2-01.png"

		arr[2]="o";
		oWin();
	}
	else{
		document.getElementById('image3').src="1-01.png"
		arr[2]="x";
		xWin();
	}
	counter++;
}
function change4(){
	if(counter%2!==0){
		document.getElementById('image4').src="2-01.png"
		arr2[0]="o";
		oWin();
	}
	else{
		document.getElementById('image4').src="1-01.png"
		arr2[0]="x";
		xWin();
	}
	counter++;
}
function change5(){
	if(counter%2!==0){
		document.getElementById('image5').src="2-01.png"
		arr2[1]="o";
		oWin();
	}
	else{
		document.getElementById('image5').src="1-01.png"
		arr2[1]="x";
		xWin();
	}
	counter++;
}

function change6(){
	if(counter%2!==0){
		document.getElementById('image6').src="2-01.png"
		arr2[2]="o"
		oWin();
	}
	else{
		document.getElementById('image6').src="1-01.png"
		arr2[2]="x"
		xWin();
	}
	counter++;
}
function change7(){
	if(counter%2!==0){
		document.getElementById('image7').src="2-01.png"
		arr3[0]="o"
		oWin();
	}
	else{
		document.getElementById('image7').src="1-01.png"
		arr3[0]="x"
		xWin();
	}
	counter++;
}
function change8(){
	if(counter%2!==0){
		document.getElementById('image8').src="2-01.png"
		arr3[1]="o"
		oWin();
	}

	else{
		document.getElementById('image8').src="1-01.png"
		arr3[1]="x"
		xWin();
	}
	counter++;
}
function change9(){
	if(counter%2!==0){
		document.getElementById('image9').src="2-01.png"
		arr3[2]="o"
		oWin();
	}
	else{
		document.getElementById('image9').src="1-01.png"
		arr3[2]="x"
		xWin();
	}counter++;
}
var c1=0;
function oWin(){	
	if(arr[0]==="o"&&arr[1]==="o"&&arr[2]==="o"||arr2[0]==="o"&&arr2[1]==="o"&&arr2[2]==="o"||arr3[0]==="o"&&arr3[1]==="o"&&arr3[2]==="o"||arr[0]==="o"&&arr2[0]==="o"&&arr3[0]==="o"||arr[1]==="o"&&arr2[1]==="o"&&arr3[1]==="o"||arr[2]==="o"&&arr2[2]==="o"&&arr3[2]==="o"||arr[0]==="o"&&arr2[1]==="o"&&arr3[2]==="o"||arr[2]==="o"&&arr2[1]==="o"&&arr3[0]==="o"){
		c1+=1;
		$("#O").html("Player Two: "+c1);
		alert("O win")
		console.log("o")
	}
}
var c=0;
function xWin(){

	if(arr[0]==="x"&&arr[1]==="x"&&arr[2]==="x"||arr2[0]==="x"&&arr2[1]==="x"&&arr2[2]==="x"||arr3[0]==="x"&&arr3[1]==="x"&&arr3[2]==="x"||arr[0]==="x"&&arr2[0]==="x"&&arr3[0]==="x"||arr[1]==="x"&&arr2[1]==="x"&&arr3[1]==="x"||arr[2]==="x"&&arr2[2]==="x"&&arr3[2]==="x"||arr[0]==="x"&&arr2[1]==="x"&&arr3[2]==="x"||arr[2]==="x"&&arr2[1]==="x"&&arr3[0]==="x"){
		c+=1;
		$("#x").html("Player One: "+c);
		alert("x win")
		console.log("x")
	}
}
function functionRestGame(){
	arr =[];
	x=y=undefined;

	document.getElementById('image1').src="b1.png"
	document.getElementById('image2').src="b1.png"
	document.getElementById('image3').src="b1.png"
	document.getElementById('image4').src="b1.png"
	document.getElementById('image5').src="b1.png"
	document.getElementById('image6').src="b1.png"
	document.getElementById('image7').src="b1.png"
	document.getElementById('image8').src="b1.png"
	document.getElementById('image9').src="b1.png"

}
function functionRestGame1(){
	arr =[];
	x=y=undefined;
	c=c1=0;
	$("#x").html("Player One:"+c);
	$("#O").html("Player Two:"+c1);

	document.getElementById('image1').src="b1.png"
	document.getElementById('image2').src="b1.png"
	document.getElementById('image3').src="b1.png"
	document.getElementById('image4').src="b1.png"
	document.getElementById('image5').src="b1.png"
	document.getElementById('image6').src="b1.png"
	document.getElementById('image7').src="b1.png"
	document.getElementById('image8').src="b1.png"
	document.getElementById('image9').src="b1.png"
}