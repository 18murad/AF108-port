// 1111111
// function saitHerflerinTapilmasi(string) {
//     const saitler = "aeəiouöüıAEƏİOUÖÜI"; 
//     let netice = [];
  
//     for (let i = 0; i < string.length; i++) {
//       if (saitler.includes(string[i])) {
//         netice.push(string[i]);
//       }
//     }
  
//     return netice;
//   }
  
//   const cumle = "I am frontend DEVELOPER I LEARN Javascript";
//   const tapilanSaitler = saitHerflerinTapilmasi(cumle);
  
//   console.log("tapilan saitler:", tapilanSaitler.join(","));
  

// 2222222
// function sozlerinBoslugaGoreSayi(string) {
//     let sozler = string.split(/\s+/);
//     return sozler.length;
// }
// let cumle = "I am frontend DEVELOPER I LEARN Javascript";
// let sozSayi = sozlerinBoslugaGoreSayi(cumle);

// console.log("szolerin sayi:", sozSayi);


// 3333333
// function enUzunSozYaz(string) {
//     let sozler = string.split(/\s+/);
//     let enUzunSoz = "";

//     for (let i = 0; i < sozler.length; i++) {
//         if (sozler[i].length > enUzunSoz.length) {
//             enUzunSoz = sozler[i];
//         }
//     }
//         return enUzunSoz;
// }
// let cumle = "I am frontend DEVELOPER I LEARN Javascript";
// let uzunSoz = enUzunSozYaz(cumle);
// console.log("en uzun soz:", uzunSoz);


// 4444444
// function butunHerfleriBoyukOlanSoz(string) {
//     let sozler = string.split(/\s+/);
//     for (let i = 0; i < sozler.length; i++) {
//         let soz = sozler[i]
//     }
//     if (soz.toUpperCase()) {
//         console.log(`Soz: ${soz}`);
//     }
// }
// let cumle = "I am frontend DEVELOPER I LEARN Javascript";
// butunHerfleriBoyukOlanSoz(cumle);


5555555
// function boyukHerfliSoz(string) {
//     let sozler = string.split(" ");
//     for (let i = 0; i < sozler.length; i++) {
//       let soz = sozler[i];
//       let say = 0;
//       for (let j = 0; j < soz.length; j++) {
//         let herf = soz[j];
//         if (herf >= 'A' && herf <= 'Z') {
//           say++;
//         }
//       }
//       if (say > 2) {
//         console.log(soz);
//       }
//     }
//   }
//   let cumle = "I am frontend DEVELOPER I LEARN Javascript";
//   boyukHerfliSoz(cumle);


// 6666666
// function basHerfleriBirlesdir(string) {
//     let sozler = string.split(" ");
//     let netice = "";
//     for (let i = 0; i < sozler.length; i++) {
//         let soz = sozler[i];
//         if (soz.length > 0) {
//             netice += soz[0]
//         }
//     }
//     return netice;
// }

// let cumle = "I am frontend DEVELOPER I LEARN Javascript";
// let netice = basHerfleriBirlesdir(cumle);
// console.log(netice);


7777777


// Array Methods:

1111111



// 2222222
// function polindrom(soz) {
//     let duz = soz.toLowerCase();
//     let ters = duz.split("").reverse().join();
//     return duz =ters;
// }
// console.log(polindrom("Ey Babek bir sis kebab ye"));


// 3333333
// function neceElementdenKicik(arr, eded) {
//     let say = 0;
//     arr.forEach(element => {
//         if (element < eded) {
//             say++;
//         }
//     });
//     console.log(`${eded} burdaki ${say} elementden kicikdir.`);
    
// }
// let array = [1,2,3,3,4,5,6,7,8,9,,6,3,2,9];
// let girenEded = 6;
// neceElementdenKicik(array, girenEded);


4444444
function hobbileriYaz(customers) {
    return customers.reduce((acc, customer) => {
        return acc.concat(customer.personal.hobbies);
    }, [])
    };


    const customers = [
        {
          name: "Tyrone",
          personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"],
          },
        },
        {
          name: "Elizabeth",
          personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"],
          },
        },
        {
          name: "Penny",
          personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"],
          },
        },
      ];
      
      const hobbiler = hobbileriYaz(customers);
      console.log("butun hobbiler:", hobbiler);

5555555