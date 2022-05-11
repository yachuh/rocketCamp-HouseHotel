const apiUrl = "https://challenge.thef2e.com/api/thef2e2019/stage6";
const apiToken = "Bearer zTycuFEM5JKdoE8WXAapLqSksc7KFlTkzWPqNK6BmNrxytYsrMUWZ2LATbqS";
let id = new URLSearchParams(document.location.search).get("id");

const amenityInfoArray = [
    {
        nameBackend:"Wi-Fi",
        nameFrontend:"Wifi",
        imageUrl:"./img/icon/Wi-Fi.svg",
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
    myHeaders.append("Authorization", apiToken);

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
        document.querySelector('head title').innerHTML = name;
        const roomTitle = document.querySelector('.room-head h1');
        const roomDescriptionShort = document.querySelector('.room-descriptionShort');
        const roomRule = document.querySelector('.room-rule');
        const roomDescription = document.querySelector('.room-description');

        //標題
        roomTitle.innerHTML = name;
        //簡介
        roomDescriptionShort.innerHTML = `${descriptionShort.GuestMax} 人・床：${descriptionShort.Bed[0]}・附早餐・衛浴 ${descriptionShort["Private-Bath"]} 間・${descriptionShort.Footage} 平方公尺`;
        //價格＆時間
        roomRule.innerHTML = `
            <p>平日（一～四）價格：${normalDayPrice} / 假日（五〜日）價格：${holidayPrice}</p>
            <p>入住時間：${checkInAndOut.checkInEarly}（最早）/ ${checkInAndOut.checkInLate}（最晚）</p>
            <p>退房時間：${checkInAndOut.checkOut}</p>
        `;
        //介紹
        const descriptionStrArray = description.split('.').map(element => element.trim())
        descriptionStrArray.forEach( str => {
            if(str !== ""){
                roomDescription.innerHTML += `<li>${str}</li>`
            }
        });
        // 設備
        let list = "";
        let modalList = "";
        const roomAmenities = document.querySelector(".room-amenities");
        const modalRoomAmenities = document.querySelector(".modal-roomInfo .roomDesc .room-amenities");
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
                        modalList+=`<li class="amenity">
                                        <div class="amenityImgArea">
                                            <img src=${amenityImg} alt=${key}>
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
        modalRoomAmenities.innerHTML = modalList;

        //modal
        document.querySelector(".modal-roomInfo .roomTitle h2").innerHTML = name;
        document.querySelector(".modal-roomInfo .roomDesc p").innerHTML = `${descriptionShort.GuestMax} 人・床：${descriptionShort.Bed[0]}・附早餐・衛浴 ${descriptionShort["Private-Bath"]} 間・${descriptionShort.Footage} 平方公尺<br><span>平日（一～四）價格：${normalDayPrice} / 假日（五〜日）價格：${holidayPrice}</span>`
        document.querySelector(".roomRule ul li").innerHTML = `入住時間：最早 ${checkInAndOut.checkInEarly}，最晚 ${checkInAndOut.checkInLate}；退房時間：${checkInAndOut.checkOut}，請自行確認行程安排。`
    }
    applyRoomInfo();

    let roomData = room;
    return roomData;
}

getRoomData();
let roomData = getRoomData();

// Booking Modal
const btnBook = document.querySelector('.btn-book');
btnBook.addEventListener("click", openModal);

const modalBook = document.querySelector('#modalBook');
function openModal () {
    modalBook.removeAttribute("style");
}

window.onclick = function(event) {
    if (event.target === modalBook) {
        // modal.classList.toggle("d-n");
        modalBook.style.display = "none";
    } else if (event.target === modalSubmit) {
        modalSubmit.style.display = "none";
    }
  }

const btnSubmit = document.querySelector('.btn-submit');
const modalSubmit = document.querySelector('#modalSubmit');
btnSubmit.addEventListener("click", book)

const btnCancel = document.querySelector('.btn-cancel');
btnCancel.addEventListener("click",()=> {
    modalBook.style.display = "none";
    modalSubmit.style.display = "none";
})

// date picker

function days_between(date1, date2) {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);

}
function formatDate (date) {
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = date.getFullYear();
    return year + "-" + month + "-" + day;
}
function getDates (startDate, endDate) {
    const dates = []
    let currentDate = startDate
    const addDays = function (days) {
      const date = new Date(this.valueOf())
      date.setDate(date.getDate() + days)
      return date
    }
    while (currentDate < endDate) {
      dates.push(currentDate)
      currentDate = addDays.call(currentDate, 1)
    }
    return dates
};

const inputCheckin = document.querySelector('.bookingForm .checkinDate');
const inputCheckout = document.querySelector('.bookingForm .checkoutDate');
const totalDays = document.querySelector('.totalDays');
const txtTotalPrice = document.querySelector('.txtTotal span');

inputCheckin.addEventListener('input',getTotalDays);
inputCheckout.addEventListener('input',getTotalDays);

function getTotalDays(){
    const checkinDate = new Date(document.querySelector('.bookingForm .checkinDate').value);
    const checkoutDate = new Date(document.querySelector('.bookingForm .checkoutDate').value);
    const dateRange = days_between(checkinDate,checkoutDate);
    const datesArray = getDates(checkinDate,checkoutDate);
    let weekdayCount = 0;
    let weekendCount = 0;
    datesArray.forEach(day => {
        let dayOfWeek = day.getDay(); // 6 = Saturday, 0 = Sunday
        if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek  === 0) {
            weekendCount += 1
        } else {
            weekdayCount +=1;
        }
    })

    totalDays.innerHTML = `${dateRange} 天，${weekdayCount} 晚平日，${weekendCount} 晚假日`
    txtTotalPrice.innerHTML = ``
}

// 預約房型
async function book () {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", apiToken);
    myHeaders.append("Content-Type", "application/json");

    const name = document.querySelector('.bookingForm .name').value;
    const tel = document.querySelector('.bookingForm .tel').value;
    const checkinDate = new Date(document.querySelector('.bookingForm .checkinDate').value);
    const checkoutDate = new Date(document.querySelector('.bookingForm .checkoutDate').value);
    const dateRange = days_between(checkinDate,checkoutDate);
    const datesArray = getDates(checkinDate,checkoutDate);
    const formattedDatesArray = function (){
        let dates = [];
        datesArray.forEach( date => {
        dates.push(formatDate(date));
        })
        return dates;
    };

    console.log(name, tel, checkinDate, checkoutDate);

    var raw = JSON.stringify({
        "name": name,
        "tel": tel,
        "date": formattedDatesArray()
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    const response = await fetch(`${apiUrl}/room/${id}`,requestOptions);
    const result = await response.json();
    if (result.success === true){
        console.log('預約成功');
        modalBook.style.display = "none";
        modalSubmit.removeAttribute("style");
    } else {
        alert(`預約失敗：${result.message}`);
    }

}