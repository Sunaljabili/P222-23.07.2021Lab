// 1.Array-de (minimum 5 element olsun) elementlerin  cemini tapmaq algorithmini qurun.

// 2.Array-de (minimum 5 element olsun) en kicik elementi ve hemin elementin indeksini tapmaq alqoritmini qurun.

// 3.Telebe semestrde 0-50 bal araliqinda bal toplaya biler, imtahanda da 0-50 bal arasi bal toplya biler.
// Bu wertleri qeyd alaraq telebenin aldigi bala gore imtahandan kecib kecmediyini yoxlayin. 
  
// 4.Musbet Eded verilir. Ededin hem 7ye hemde 3e bolunmesini yoxlayin.

// 5.Imtahan qiymetlerine gore telebenin A,B,C,D ve ya E almasini ve ya kesildiyini teyin etmeli:

// Telebenin qiymeti 0 ve 100 arasi olmalidi;

// Eger qiymet 100 - 91 arasi olarsa, cixisha "A";

// Eger qiymet 90 - 81 arasi olarsa, cixisha "B";

// Eger qiymet 80 - 71 arasi olarsa, cixisha "C";

// Eger qiymet 70 - 61 arasi olarsa, cixisha "D";

// Eger qiymet 60 - 51 arasi olarsa, cixisha "E";

// 51-den kichik olarsa, chixisha "kesildiniz" yazilsin.


// Task-1

// let arr= [20,30,21,40,45]
// let sum =0;
// for (let i = 0; i < arr.length; i++) {
//    sum += arr[i]
// }
// console.log(sum)

// Task2
// let arr= [5,8,21,40,54];
// let min = arr[0];
// let index =0;

// for (let i = 0; i < arr.length; i++) {
//    if(min>arr[i]){
//        min = arr[i]
//        index=i
//    }
// }
// console.log(`index:${index} min:${min}`)

//Task3 
// let semestrBali = 0;
// let imtahanBali =60;
// let sum = 0;

// if (semestrBali >= 0 && semestrBali <= 50 && imtahanBali >= 0 && imtahanBali <= 50) {
//     sum = imtahanBali + semestrBali
//     if (sum > 50) {
//         console.log("imtahandan ugurla kecdiniz")
//     }else{
//         console.log("kesildiniz")
//     }
// } else {
//     console.log("verilmish araliqa uygun eded daxil edin.")
// }

//Task 4

// let number =42;

// if(number%3 ==0 && number%7==0){
//     console.log("Eded 3-e  ve ya 7-e tam bolunur")
// }else{
//     console.log("eded 3-e ve ya 7ye bolunmur")
// }

// Task 5

// let imtahanBali =11;

// if(imtahanBali>=91 && imtahanBali<=100){
//    console.log("imtahandan A aldiniz")
// }else if( imtahanBali>=81 && imtahanBali<=90){
//     console.log("imtahandan B aldiniz")
// }else if (imtahanBali>=71 && imtahanBali<=80){
//     console.log("imtahandan C aldiniz")
// }else if(imtahanBali>=61 && imtahanBali<=70){
//     console.log("imtahandan D aldiniz")
// }else if(imtahanBali>=51 && imtahanBali<=60){
//     console.log("imtahandan E aldiniz")
// }else if(imtahanBali>=0 && imtahanBali<=50){
//     console.log("imtahandan kesildiniz")
// }