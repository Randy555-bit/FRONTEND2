
//let $qare = false;
let squares = [];
let points1 = [];
let dots = [];
do{
	let str = prompt("введите координаты точек множества", " ");
	if (!str) break;//не допустить попадания в массив пустого значения
	let points2 = str.split(";");//ввод всех значений в строку и разделение ее на массив
} while (str);

for (i = 0; i < points2.length; i++;) {//преобразование элементов к числам
	points2[i] = Number(points2[i]),
}
for(i = 0; i < points2.length; i+=2;){
	'Dot${i}'= new Make_object (points2[i],points2[i+1]);
	dots.push('Dot${i}');//создание обЪекта каждой точки и запись обЪектов в новый массив
}
for(i = 0; i < dots.length; i++){
	for(j = dots.length - 1; j >= 0; j--;){
		if j != i
			lengthof(dots[k].x,dots[i].x,dots[k].y,dots[i].y);
	
	}
	

}

	







max = squares[0];
for (i = 0; i < squares.length; ++i) {
	if squares[i].length1 > max.length1
		max = squares[i];

}
console.log(max);

//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

let lengthof = (a,b,c,d) =>{
	p = Math.sqrt(Math.pow((b-a), 2) + Math.pow((d-c), 2));
	return p;
}
let square = (x1,y1,x2,y2,x3,y3,x4,y4) => {
    if ((lengthof(x1,x2,y1,y2) == lengthof(x2,x3,y2,y3) == lengthof(x3,x4,y3,y4) == lengthof(x4,x1,y4,y1)) && (lengthof(x1,x3,y1,y3) == lengthof(x2,x4,y2,y4)))
    	squares.push();
    	//$quare = true;	
}
function Make_object (k,q) {
	this.x = k;
	this.y = q;
}
function Geometry () {

}





