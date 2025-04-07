// // 11111111111111111

// function xosGelmisen() {
//     const indi = new Date();
//     const saat = indi.getHours();
//     let mesaj = "";
//     if (saat >= 6 && saat < 12) {
//         mesaj = "Seher"
//     } else if (saat >= 12 && saat < 17) {
//         mesaj = "Gunorta"
//     } else if (saat >= 17 && saat < 21) {
//         mesaj = "Axsam"
//     } else {
//         mesaj = "Gece"
//     }
//         alert(mesaj);
// }
// xosGelmisen();


// // 222222222222222222

// const employee = {
//     name: "Farid Ali",
//     department: "Engineering",
//     contact: {
//       email: "farid.ali@example.com",
//       phone: "555-1234",
//       emergencyContact: {
//         name: "Far For",
//         relation: "Spouse"
//       }
//     }
//   };

//   const  {
//     name,
//     department,
//     contact: {
//       email,
//       phone,
//       emergencyContact: {
//         name: emergencyContactName,
//         relation: emergencyRelation
//       }
//     }
//   } = employee;
//   console.log("name:", name);
//   console.log("department:", department);
//   console.log("email:", email);
//   console.log("phone:", phone);
//   console.log("emergencyContactName:", emergencyContactName);
//   console.log("emergencyRelation:", emergencyRelation);


// // 333333333333333

// const apiResponse = [
//     {
//       id: 1,
//       title: "JavaScript əsasları",
//       author: "Səid Məmmədov",
//       stats: [2500, 150, 30] 
//     },
//     {
//       id: 2,
//       title: "Array Destructuring",
//       author: "Leyla Əliyeva",
//       stats: [1800, 220, 45]
//     },
//     {
//       id: 3,
//       title: "Müasir JavaScript",
//       author: "Tural Həsənli",
//       stats: [3200, 380, 70]
//     }
//   ]; 

//   const [{ title, author, stats}] = apiResponse;
//   const [oxunma, beyenme, serh] = stats;
//   console.log(`Meqale: ${title}, Muellif: ${author}, ${oxunma} oxunma, ${beyenme} beyenme, ${serh} serh`);
  
//   const { title, 
//     author,
//     stats: [oxunma, beyenme, serh]
//   } = apiResponse [1];
//   console.log(`Meqale: ${title}, Muellif: ${author}, ${oxunma} oxunma, ${beyenme} beyenme, ${serh} serh`);


// // 444444444444

// function renderUserProfile(userData) {
//    return {
//     username: userData?.user?.username ?? "Qonaq",
//     avatar: userData?.user?.profile?.avatar ?? "/default-avatar.png",
//     bio: userData?.user?.profile?.bio ?? "Melumat yoxudur",
//     email: userData?.user?.contact?.email ?? "teyin edilmeyib",
//     premium: userData?.user?.account?.premium ?? false
//    };
// }

// console.log(renderUserProfile({
//     user: {
//       username: "tahir2023",
//       profile: {
//         avatar: "/users/tahir.jpg",
//         bio: "JavaScript developer",
//       },
//       contact: {
//         email: "tahir@example.com"
//       },
//       account: {
//         premium: true
//       }
//     }
//   }));
  
//   console.log(renderUserProfile({
//     user: {
//       username: "aynur",
//       profile: {
//         bio: ""
//       },
//       contact: {}
//     }
//   }));
  
//   console.log(renderUserProfile({
//     user: {
//       username: null
//     }
//   }));
  
//   console.log(renderUserProfile({}));