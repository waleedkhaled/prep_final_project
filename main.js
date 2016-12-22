var counter=0;
var x1=false;
var arr=[];
var arr2=[];
var arr3=[];
function change(){
	if(x1!=true){
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
		x1=true;
	}

}
var x2=false;
function change2(){
	if(x2!==true){
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
	x2=true;
	counter++;
}
var x3=false;
function change3(){
	if(x3!==true){
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
}
	x3=true;
	counter++;
}
var x4=false;
function change4(){
	if (x4!==true) {
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
}
	x4=true;
	counter++;
}
var x5=false;
function change5(){
	if(x5!==true){
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
}
	x5=true;
	counter++;
}
var x6=false;
function change6(){
	if(x6!==true){
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
}
	x6=true;
	counter++;
}
var x7=false;
function change7(){
	if (x7!==true) {
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
}
	x7=true;
	counter++;
}
var x8=false;
function change8(){
	if (x8!==true) {
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
}
	x8=true;
	counter++;
}
var x9=false;
function change9(){
	if (x9!==true) {
	if(counter%2!==0){
		document.getElementById('image9').src="2-01.png"
		arr3[2]="o"
		oWin();
	}
	else{
		document.getElementById('image9').src="1-01.png"
		arr3[2]="x"
		xWin();
	}
}
	x9=true;
	counter++;
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
	arr2=[];
	arr3=[];
	x1=false;
	x2=false;
	x3=false;
	x4=false;
	x5=false;
	x6=false;
	x7=false;
	x8=false;
	x9=false;
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
	arr2=[];
	arr3=[];
	x1=false;
	x2=false;
	x3=false;
	x4=false;
	x5=false;
	x6=false;
	x7=false;
	x8=false;
	x9=false;
	c=c1=0;
	$("#x").html("Player One: "+c);
	$("#O").html("Player Two: "+c1);

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