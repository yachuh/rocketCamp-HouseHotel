const apiUrl = "https://challenge.thef2e.com/api/thef2e2019/stage6";
const id = "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu";
/* ---- RoomPage ----- */

async function getRoomInfo(){
    
    var myHeaders = new Headers();
    myHeaders.append("", "");
    myHeaders.append("Authorization", "Bearer zTycuFEM5JKdoE8WXAapLqSksc7KFlTkzWPqNK6BmNrxytYsrMUWZ2LATbqS");
    myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjhmdTZBWlRDRzBUV1cyXC82cTBcL05qdz09IiwidmFsdWUiOiJLdjhaalpwUElNVUhGemlPbjZROENYREVMTUVkcldydmtxa1E1UkpLQlByVFBxd2NhaU01OVlhYnBxa05JT1lqIiwibWFjIjoiMTZjZDgwMzIwNTFiM2IyMzkxMGM0MzdjNjQ1Mjg2NjhiNjlmYjE1NWJmMjEwOTdmOGYyYjUyMWI0YmNjMDU2OCJ9; the_f2e_session=eyJpdiI6ImtHd2NyS2VLZHBLTlpLSXg1TGZGXC93PT0iLCJ2YWx1ZSI6IktScG40RHBPdmZOeWdzT3VBb3BoaXZoSFhBNEJLQitXYjMyUmhHN1VXTXZ6S2E3VDUwam5PVVI1VWtGWWs1R3YiLCJtYWMiOiJhMDNlODk5ZTM3MTZhZTA5YTgyZWY0OTZjNTk1MTg0YjkyYTkyYTU1Mjk2MWQ1OGVhMTY3OWNkMTQwMzE4NDg1In0%3D");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    const response = await fetch(`${apiUrl}/rooms/${id}`,requestOptions)
}

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

function getAmenities() {
    let list = "";
    const roomAmenities = document.querySelector(".room-amenities");
    const room = [
        {
            "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
            "name": "Deluxe Single Room",
            "imageUrl": [
                "https://images.unsplash.com/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
                "https://images.unsplash.com/photo-1528908929486-dfaa209c6986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1558211583-03ed8a0b3d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
            ],
            "normalDayPrice": 1899,
            "holidayPrice": 2000,
            "descriptionShort": {
                "GuestMin": 1,
                "GuestMax": 1,
                "Bed": [
                    "Small Double"
                ],
                "Private-Bath": 1,
                "Footage": 22
            },
            "description": "Deluxe Single Room is only reserved for one guest. There is a bedroom with a small double size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.",
            "checkInAndOut": {
                "checkInEarly": "15:00",
                "checkInLate": "19:00",
                "checkOut": "11:00"
            },
            "amenities": {
                "Wi-Fi": true,
                "Breakfast": true,
                "Mini-Bar": true,
                "Room-Service": true,
                "Television": true,
                "Air-Conditioner": true,
                "Refrigerator": true,
                "Sofa": false,
                "Great-View": false,
                "Smoke-Free": true,
                "Child-Friendly": false,
                "Pet-Friendly": true
            }
        }
    ]
    const amenities = room[0].amenities //type:obj

    Object.entries(amenities).forEach(item => {
        const [key,value] = item;
        if (value === true){
            list+=`<li class="amenity flex">
                        <div class="amenityImgArea flex">
                            <img src="./img/icon/breakfast.svg" alt=${key}>
                            <img class="icon" src="./img/icon/icons8-ok.svg" alt="cancel">
                        </div>
                        <p>${key}</p>
                    </li>`
        } else {
            list+=`<li class="amenity flex inactive">
                        <div class="amenityImgArea flex">
                            <img src="./img/icon/breakfast.svg" alt=${key}>
                            <img class="icon" src="./img/icon/icons8-cancel.svg" alt="cancel">
                        </div>
                        <p>${key}</p>
                    </li>`
        }
    })
    roomAmenities.innerHTML = list;
}
getAmenities();

/* 嘗試把 fetch 寫成 function */
// async function fetchApi(method,urlPath) {
//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer zTycuFEM5JKdoE8WXAapLqSksc7KFlTkzWPqNK6BmNrxytYsrMUWZ2LATbqS");
//
//     const requestOptions = {
//         method: method,
//         headers: myHeaders,
//         redirect: 'follow'
//     };
//
//     const response = await fetch(`${apiUrl}${urlPath}`,requestOptions);
// }

// fetchApi("GET","/rooms");

/* API: 取得所有房型 */
async function getRoomData(){
    const myHeaders = new Headers();
    myHeaders.append("Accept", "applicaton/json");
    myHeaders.append("Authorization", "Bearer zTycuFEM5JKdoE8WXAapLqSksc7KFlTkzWPqNK6BmNrxytYsrMUWZ2LATbqS");
    myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjhmdTZBWlRDRzBUV1cyXC82cTBcL05qdz09IiwidmFsdWUiOiJLdjhaalpwUElNVUhGemlPbjZROENYREVMTUVkcldydmtxa1E1UkpLQlByVFBxd2NhaU01OVlhYnBxa05JT1lqIiwibWFjIjoiMTZjZDgwMzIwNTFiM2IyMzkxMGM0MzdjNjQ1Mjg2NjhiNjlmYjE1NWJmMjEwOTdmOGYyYjUyMWI0YmNjMDU2OCJ9; the_f2e_session=eyJpdiI6ImtHd2NyS2VLZHBLTlpLSXg1TGZGXC93PT0iLCJ2YWx1ZSI6IktScG40RHBPdmZOeWdzT3VBb3BoaXZoSFhBNEJLQitXYjMyUmhHN1VXTXZ6S2E3VDUwam5PVVI1VWtGWWs1R3YiLCJtYWMiOiJhMDNlODk5ZTM3MTZhZTA5YTgyZWY0OTZjNTk1MTg0YjkyYTkyYTU1Mjk2MWQ1OGVhMTY3OWNkMTQwMzE4NDg1In0%3D")
    
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const response = await fetch(`${apiUrl}/rooms`,requestOptions);
    const data = response.json();
}

// getRoomData()