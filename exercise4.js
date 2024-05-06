//1
function ladder(x) {
    let result = ""
    for(let i = 1; i <= x; i++) {
        result += i + " "
        console.log(result)
    }
}

ladder(10)

//1
//pake counter
function advanceLadder(h) {
    let counter = 1
    for(let i = 1; i <= h; i++) {
        let result2 = ""
        for(let j = 1; j <= i; j++) {
            if(counter > 9) {
                result2 += counter+" "
            } else {
                result2 += "0" + counter + " "
            }
            counter++
        }
        console.log(result2)
    }
}

advanceLadder(5)

//2

// string method

function fizzBuzz2(n) {
    let hasil = '';
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            hasil += "fizzbuzz";
        } else if (i % 3 === 0) {
            hasil += "fizz";
        } else if (i % 5 === 0) {
            hasil += "buzz";
        } else {
            hasil += i;
        }
        if (i !== n ) // karena i = 15 dan 15 itu terakhir. maka karena i terakhir sama dengan 15, maka tidak pake koma 
            {
                hasil += ", "
            }
        
    }
    return hasil;
}

console.log(fizzBuzz2(15));

//3
//buat BMI

const rumusbmi = (berat, tinggi) => {
    const bmi = berat / ((tinggi / 100) ** 2);
    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
};

// Contoh penggunaan fungsi untuk menghitung BMI dan menentukan kategori
let berat = 75; //kg
let tinggi = 180; //cm

console.log(rumusbmi(75, 180));

//atau 
//let berat = 70; // kg
//let tinggi = 170; // cm
//let bmi = hitungBMI(berat, tinggi);
//console.log(bmi);

//4
let number2 = [1,2,3,4,5,6,7,8,9,10]
genap = []
function erase(number2) {
    for(let i = 0; i < number2.length; i++){
        if(number2[i] % 2 === 0) 
        {
            genap.push(number2[i]);
        }
        
    }
    return console.log(genap)
}
erase(number2)

//5
let kata2 = "Hello World"
let hasil2 = kata2.split(" ")

console.log(hasil2)

