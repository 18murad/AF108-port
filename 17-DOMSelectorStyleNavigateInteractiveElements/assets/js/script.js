// TASK-1
// 1111111111111111
// let heart = document.querySelector(".heart");

// let card = heart.closest(".card");
// let image = card.querySelector("img").src;
// let title = card.querySelector(".cardTitle").textContent;
// let text = card.querySelector(".cardText").textContent;
// let price = card.querySelector(".cardPrice").textContent;
// let btn = card.querySelector(".shopBtn").textContent;

// let product = {
//     image,
//     title,
//     text,
//     price,
//     btn
// };

// console.log(product);
// 333333333333333
// let cards = document.querySelectorAll(".card");

// cards[0].querySelector(".cardTitle").textContent = "Xiomi";
// cards[0].querySelector(".cardText").textContent= "Note 9 pro sky-blue";
// cards[0].querySelector(".cardPrice").textContent = "500 AZN";
// cards[0].querySelector("img").src = "https://picsum.photos/200/300";

// cards[0].querySelector(".cardTitle").textContent = "Samsung";
// cards[0].querySelector(".cardText").textContent = "S22 ultra white";
// cards[0].querySelector(".cardPrice").textContent = "1500 AZN";
// cards[0].querySelector("img").src = "https://picsum.photos/200/300";

// cards[0].querySelector(".cardTitle").textContent = "Iphone";
// cards[0].querySelector(".cardText").textContent = "Iphone 16 pro max gold";
// cards[0].querySelector(".cardPrice").textContent = "3000 AZN";
// cards[0].querySelector("img").src = "https://picsum.photos/200/300";




// TASK-2
// 111111111111111

let app = document.getElementById("app");

    let card = document.createElement("div");
    card.style.width = "320px";
    card.style.border = "1px solid black";
    card.style.borderRadius = "10px";
    card.style.margin = "50px auto";
    card.style.backgroundColor = "#white";

    let imgContainer = document.createElement("div");
    imgContainer.style.position = "relative";

    let image = document.createElement("img");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4AY6Wo6mEi2244v6b7e9aSIpY5-vYdAlRw&s";
    image.style.width = "100%";
    image.style.height = "200px";
  

    let heart = document.createElement("div");
    heart.innerHTML = "&#10084;";
    heart.style.position = "absolute";
    heart.style.top = "10px";
    heart.style.right = "10px";
    heart.style.backgroundColor = "";
    heart.style.borderRadius = "50%";
    heart.style.width = "30px";
    heart.style.height = "30px";
    heart.style.display = "flex";
    heart.style.alignItems = "center";
    heart.style.justifyContent = "center";
  

    imgContainer.appendChild(image);
    imgContainer.appendChild(heart);





    let info = document.createElement("div");
    info.style.padding = "15px";

    let age = document.createElement("div");
    age.textContent = "DETACHED HOUSE  5Y OLD";
    age.style.fontSize = "12px";
    age.style.fontWeight = "bold";
    age.style.color = "#666";
    age.style.marginBottom = "8px";

    let price = document.createElement("div");
    price.textContent = "$750,000";
    price.style.fontSize = "24px";
    price.style.fontWeight = "bold";
    price.style.marginBottom = "5px";

    let address = document.createElement("div");
    address.textContent = "742 Evergreen Terrace";
    address.style.color = "#gray";
    address.style.fontSize = "14px";
    address.style.marginBottom = "10px";

    let separator = document.createElement("hr");
    separator.style.border = "none";
    separator.style.borderTop = "1px solid #eee";


    let rooms = document.createElement("div");
    rooms.style.display = "flex";
    rooms.style.justifyContent = "space-around";
    rooms.style.padding = "10px 0";

    let bedrooms = document.createElement("div");
    bedrooms.innerHTML = "<b>3</b> Bedrooms";
    bedrooms.style.fontSize = "14px";
    bedrooms.style.color = "#444";

    let bathrooms = document.createElement("div");
    bathrooms.innerHTML = "<b>2</b> Bathrooms";
    bathrooms.style.fontSize = "14px";
    bathrooms.style.color = "#444";

    rooms.appendChild(bedrooms);
    rooms.appendChild(bathrooms);

    let realtorSection = document.createElement("div");
    realtorSection.style.display = "flex";
    realtorSection.style.alignItems = "center";
    realtorSection.style.gap = "10px";
    realtorSection.style.padding = "15px";
    realtorSection.style.backgroundColor = "#f4f8fc";

    let avatar = document.createElement("img");
    avatar.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LmG47_W3RM0QBVGI23-vodL_oOOJxLIBrg&s";
    avatar.style.width = "40px";
    avatar.style.height = "40px";
    avatar.style.borderRadius = "50%";

    let realtorInfo = document.createElement("div");

    let realtorFoot = document.createElement("div");
    realtorFoot.textContent = "REALTOR";
    realtorFoot.style.fontSize = "10px";
    realtorFoot.style.fontWeight = "bold";

    let realtorName = document.createElement("div");
    realtorName.textContent = "Murad Abbasov";
    realtorName.style.fontSize = "14px";
    realtorName.style.fontWeight = "bold";

    let realtorPhone = document.createElement("div");
    realtorPhone.textContent = "+994 55 847 18 17";
    realtorPhone.style.fontSize = "12px";
    realtorPhone.style.color = "#666";

    realtorInfo.appendChild(realtorFoot);
    realtorInfo.appendChild(realtorName);
    realtorInfo.appendChild(realtorPhone);

    realtorSection.appendChild(avatar);
    realtorSection.appendChild(realtorInfo);

    info.appendChild(age);
    info.appendChild(price);
    info.appendChild(address);
    info.appendChild(separator);
    info.appendChild(rooms);
    card.appendChild(imgContainer);
    card.appendChild(info);
    card.appendChild(realtorSection);
    app.appendChild(card);