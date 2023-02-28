
//&-------------------------global
var arrayE1 = [];
var arrSortup = [];     //*   <------------Bai 7
var arrchangeIndex = [];
function addNum1() {
    var num = Number(document.querySelector(".numberInputb1").value);
    arrayE1.push(num);
    arrSortup.push(num);
    arrchangeIndex.push(num);
    var output = document.querySelectorAll(".aLert");
    for (var i = 0; i < output.length; i++) {
        output[i].innerHTML = "Đã nhập: " + arrayE1;
    }
    getMyEle(".outPut").innerHTML = "-> "+arrayE1;
} var btnAddNum = document.querySelector("#addNumb1").onclick = addNum1;
function getMyEle(ele){
    return document.querySelector(ele)
}
//*BAI 1\
var sum = 0;
function sunSolve1() {
    for (var i = 0; i < arrayE1.length; i++) {
        if (arrayE1[i] >= 0) {
            sum += arrayE1[i];
        } 
    }
    document.querySelector(".e1 .alert").innerHTML = "Kết quả: " + sum;
} document.querySelector("#sovleNumb1").onclick = sunSolve1;

//*BAI 2
function countNumber() {
    var count = 0;
    for (var i = 0; i < arrayE1.length; i++) {
        if (arrayE1[i] > 0) {
            count += 1;
        }
    }
    document.querySelector(".e2 .alert").innerHTML = "Kết quả: " + count;
} document.querySelector("#countNumb").onclick = countNumber;
//*BAI 3
var min = 0;
function findMinGlobal(array) {
    var arrLe = array.length;
    var check = 0;
    for (var i = 0; i < array.length; i++) {
        for (var t = 0; t < array.length; t++) {
            if (array[i] <= array[t]) {
                check += 1;
            }
        } if (check == arrLe) {
            min = array[i]
        } check = 0;
    }
}
function findMin() {
    findMinGlobal(arrayE1, ",e3 .alert")
    document.querySelector(".e3 .alert").innerHTML = "Min: " + min;
} document.querySelector("#findMin").onclick = findMin;
//* BAI 4
var arrayEleNew = [];
function pushNum() {
    for (var i = 0; i < arrayE1.length; i++) {
        if (arrayE1[i] >= 0) {
            arrayEleNew.push(arrayE1[i]);
        }
    }
}
function findMin2() {
    pushNum();
    findMinGlobal(arrayEleNew)
    document.querySelector(".e4 .alert").innerHTML = "Min: " + min;
} document.querySelector("#findMin2").onclick = findMin2
//*BAI 5
function findEvenNumber() {
    var reverArray = []
    var count = 0;
    for (var i = arrayE1.length; i >= 0; i--) {
        if (arrayE1[i] % 2 == 0) {
            reverArray.push(arrayE1[i])
            count += 1;
        }
    } if (count <= 0) { reverArray = [-1] }
    document.querySelector(".e5 .alert").innerHTML = "Kết quả: " + reverArray[0];
} document.querySelector("#evenNumberbtn").onclick = findEvenNumber;
//* BAI 6
function changeIndex() {
    var x1 = document.querySelector("#inputB6_1").value;
    var x2 = document.querySelector("#inputB6_2").value;
    var y1 = arrchangeIndex[x1];
    var y2 = arrchangeIndex[x2];
    arrchangeIndex[x2] = y1;
    arrchangeIndex[x1] = y2;
    document.querySelector(".e6 .alert").innerHTML = "Kết quả: " + arrchangeIndex;
} document.querySelector("#changeIndexbtn").onclick = changeIndex; 
//* BAI 7
function sortNumUp(){
   var count = 1;
    while ( count !=0){
        count =0;
        for (var i = 0; i< arrSortup.length; i++){
         var x1 = arrSortup[i];
         var x2 = arrSortup[i+1]
         if(arrSortup[i] > arrSortup[i+1]){
            arrSortup[i+1]= x1;
            arrSortup[i]=x2;
             count+= 1;
         }
        }
    } 
   getMyEle(".e7 .alert").innerHTML = "Sắp xếp mảng tăng dần: "+ arrSortup;
} getMyEle("#sortUpbtn").onclick = sortNumUp;
//* BAI 8
function primeNumber(){
    var max = arrayE1[0];
    var count = 0;
    for (var i =0; i < arrayE1.length; i++){
        if(max < arrayE1[i]){
            max = arrayE1[i];
        }
    }
    for (var i =0; i < arrayE1.length; i++){
        for (var t =max; t>0; t--){
            if(arrayE1[i] % t ==0){
                count +=1;
            }
        }
        if(count ==2){
            getMyEle(".e8 .alert").innerHTML = "Số nguyên tố đầu tiên: "+ arrayE1[i];
            break;
        }else{
            getMyEle(".e8 .alert").innerHTML = "-1";
        }
        count = 0;
    }
}getMyEle("#prmNumbtn").onclick = primeNumber;
//*BAI 9
var actNum = [];
function addNumAct(){
   var actNumAdd =  Number(getMyEle("#inputActualNum").value);
    actNum.push(actNumAdd);
    getMyEle(".e9 .alert").innerHTML = "Đã nhập: "+actNum;
}getMyEle("#addNumbActual").onclick = addNumAct;

// function findInteger(){
//     var count = 0;
//     for(var i = 0; i < actNum.length; i++){
//         if(Number.isInteger(actNum[i])){
//             count +=1;
//         }
//     }
//     getMyEle(".e9 .alert").innerHTML = "Số nguyên: "+ count;
// }getMyEle("#actNumbtn").onclick = findInteger;
function findInteger2(){
    var count = 0;
    var count2 = 0;
    var max = parseInt(actNum[0])
    for (var i =1 ; i < actNum.length; i++){
        if(max < actNum[i]){
            max = parseInt(actNum[i])
        }
    }
    for (var i =actNum.length-1; i >= 0; i-- ){
        count =0;
        for (var t =0; t <= max; t++ ){
            if( actNum[i] % t ==0){
                count +=1;
            }
        }
        if(count > 0){
            count2 +=1;
        }
    }
    getMyEle(".e9 .alert").innerHTML = "Số nguyên: "+ count2;
}getMyEle("#actNumbtn").onclick = findInteger2;
//*BAI 10
function compareFuct(){
    var minusCount = 0;
    var plusCount = 0;
    var result = "";
    for (var i = 0; i < arrayE1.length; i++){
        if(arrayE1[i] > 0){
            plusCount +=1;
        }else if (arrayE1[i]< 0){
            minusCount +=1;
        }
    }
    if(plusCount < minusCount  ){
        result = "<"
    }else if(plusCount > minusCount){
        result = ">"
    }else{
        result = "="
    }
    getMyEle(".e10 .alert").innerHTML = "số dương"+"("+plusCount+") "+result+" số âm"+"("+minusCount+")";
}getMyEle("#compareBtn").onclick = compareFuct;