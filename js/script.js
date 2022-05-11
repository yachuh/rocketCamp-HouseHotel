const apiUrl = "https://challenge.thef2e.com/api/thef2e2019/stage6";

async function getAllRoomData(){
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer zTycuFEM5JKdoE8WXAapLqSksc7KFlTkzWPqNK6BmNrxytYsrMUWZ2LATbqS");
    myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjhmdTZBWlRDRzBUV1cyXC82cTBcL05qdz09IiwidmFsdWUiOiJLdjhaalpwUElNVUhGemlPbjZROENYREVMTUVkcldydmtxa1E1UkpLQlByVFBxd2NhaU01OVlhYnBxa05JT1lqIiwibWFjIjoiMTZjZDgwMzIwNTFiM2IyMzkxMGM0MzdjNjQ1Mjg2NjhiNjlmYjE1NWJmMjEwOTdmOGYyYjUyMWI0YmNjMDU2OCJ9; the_f2e_session=eyJpdiI6ImtHd2NyS2VLZHBLTlpLSXg1TGZGXC93PT0iLCJ2YWx1ZSI6IktScG40RHBPdmZOeWdzT3VBb3BoaXZoSFhBNEJLQitXYjMyUmhHN1VXTXZ6S2E3VDUwam5PVVI1VWtGWWs1R3YiLCJtYWMiOiJhMDNlODk5ZTM3MTZhZTA5YTgyZWY0OTZjNTk1MTg0YjkyYTkyYTU1Mjk2MWQ1OGVhMTY3OWNkMTQwMzE4NDg1In0%3D");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    const response = await fetch(`${apiUrl}/rooms`,requestOptions)
    const json = await response.json();
    const roomsArray = json.items; // array

    const rooms = document.querySelector('.rooms');
    let roomsStr = "";
    roomsArray.forEach( room => {
        // const [key, value] = room;
        const roomInfo = `<a id=${room.id} href="/room.html?id=${room.id}" style="background-image: url(${room.imageUrl});">${room.name}</a>`
        roomsStr += roomInfo;
    })
    rooms.innerHTML = roomsStr;
    console.log(roomsStr);
};

getAllRoomData();


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