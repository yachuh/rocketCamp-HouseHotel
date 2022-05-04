const apiUrl = "https://challenge.thef2e.com/api/thef2e2019/stage6";
const id = "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu";

const amenityInfoArray = [
    {
        nameBackend:"Wi-fi",
        nameFrontend:"Wifi",
        imageUrl:"./img/icon/wifi.svg",
    },
    {
        nameBackend:"Breakfast",
        nameFrontend:"早餐",
        imageUrl:"./img/icon/breakfast.svg"
    },
    {
        nameBackend:"Mini-Bar",
        nameFrontend:"Mini Bar",
        imageUrl:"./img/icon/Mini-Bar.svg"
    },
    {
        nameBackend:"Room-Service",
        nameFrontend:"Room Service",
        imageUrl:"./img/icon/Room-Service.svg"
    },
    {
        nameBackend:"Television",
        nameFrontend:"電話",
        imageUrl:"./img/icon/Television.svg"
    },
    {
        nameBackend:"Air-Conditioner",
        nameFrontend:"冷氣",
        imageUrl:"./img/icon/Air-Conditioner.svg"
    },
    {
        nameBackend:"Refrigerator",
        nameFrontend:"冰箱",
        imageUrl:"./img/icon/Refrigerator.svg"
    },
    {
        nameBackend:"Sofa",
        nameFrontend:"沙發",
        imageUrl:"./img/icon/Sofa.svg"
    },
    {
        nameBackend:"Great-View",
        nameFrontend:"漂亮的視野",
        imageUrl:"./img/icon/Great-View.svg"
    },
    {
        nameBackend:"Smoke-Free",
        nameFrontend:"禁菸",
        imageUrl:"./img/icon/Smoke-Free.svg"
    },
    {
        nameBackend:"Child-Friendly",
        nameFrontend:"適合兒童",
        imageUrl:"./img/icon/Child-Friendly.svg"
    },
    {
        nameBackend:"Pet-Friendly",
        nameFrontend:"攜帶寵物",
        imageUrl:"./img/icon/Pet-Friendly.svg"
    }
];

async function getRoomData(){
    
    var myHeaders = new Headers();
    // myHeaders.append("", "");
    myHeaders.append("Authorization", "Bearer zTycuFEM5JKdoE8WXAapLqSksc7KFlTkzWPqNK6BmNrxytYsrMUWZ2LATbqS");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    };

    const response = await fetch(`${apiUrl}/room/${id}`, requestOptions);
    const result = await response.json();
    const room = result.room[0];

    function applyRoomInfo () {
        const { id,name,imageUrl,normalDayPrice,holidayPrice,descriptionShort,description,checkInAndOut,amenities,} = room;

        const roomTitle = document.querySelector('.room-head h1');
        const roomDescriptionShort = document.querySelector('.room-descriptionShort');
        const roomRule = document.querySelector('.room-rule');
        const roomDescription = document.querySelector('.room-description');

        roomTitle.innerHTML = name;
        roomDescriptionShort.innerHTML = "1人・ 單人床・ 附早餐・衛浴1間・18平方公尺～";
        roomRule.innerHTML = `
            <p>平日（一～四）價格：${normalDayPrice} / 假日（五〜日）價格：${holidayPrice}</p>
            <p>入住時間：${checkInAndOut.checkInEarly}（最早）/ ${checkInAndOut.checkInLate}（最晚）</p>
            <p>退房時間：${checkInAndOut.checkOut}</p>
        `;
        const descriptionStrArray = description.split('.').map(element => element.trim())
        descriptionStrArray.forEach( str => {
            if(str !== ""){
                roomDescription.innerHTML += `<li>${str}</li>`
            }
        });

        // 設備
        let list ="";
        const roomAmenities = document.querySelector(".room-amenities");
        Object.entries(amenities).forEach(item => {
            const [key,value] = item;
            let amenityName = "";
            let amenityImg = "";
            // 用後端給的 key 比對出 amenity 前台顯示的 name 跟 imgUrl
            amenityInfoArray.forEach( amenity => {
                if(key === amenity.nameBackend){
                    amenityName = amenity.nameFrontend
                    amenityImg = amenity.imageUrl
                    // 判斷 amenity 是否為 true
                    if (value === true){
                        list+=`<li class="amenity flex">
                                    <div class="amenityImgArea flex">
                                        <img src=${amenityImg} alt=${key}>
                                        <img class="icon" src="./img/icon/icons8-ok.svg" alt="cancel">
                                    </div>
                                    <p>${amenityName}</p>
                                </li>`
                    } else {
                        list+=`<li class="amenity flex inactive">
                                    <div class="amenityImgArea flex">
                                        <img src=${amenityImg} alt=${key}>
                                        <img class="icon" src="./img/icon/icons8-cancel.svg" alt="cancel">
                                    </div>
                                    <p>${amenityName}</p>
                                </li>`
                    }
                }
            })
        })
        roomAmenities.innerHTML = list;
    }
    applyRoomInfo();
}

getRoomData();


// Booking Modal
const btnBook = document.querySelector('.btn-book');
btnBook.addEventListener("click", openModal);

const modal = document.querySelector('.modal');
function openModal () {
    modal.removeAttribute("style")
}

window.onclick = function(event) {
    if (event.target === modal) {
        // modal.classList.toggle("d-n");
      modal.style.display = "none";
    }
  }

const btnCancel = document.querySelector('.btn-cancel');
btnCancel.addEventListener("click",()=> {
    modal.style.display = "none";;
})