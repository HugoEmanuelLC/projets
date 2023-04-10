const urlLocalMenus = "http://localhost:3000/api/";
const urlOnlineMenus = "https://hugoclavinas.online/testdb/datas/api/";


console.log('...........................................................Début');
const xhr = new XMLHttpRequest();
const methodeHttp = "GET";
const uriL = urlLocalMenus;
const uriO = urlOnlineMenus;
 
xhr.open(methodeHttp, uriL, true);

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log('---- IF ----');
        console.log(xhr.responseText)
            
    }else{
        console.log('---- ELSE ----');
    }
}
    
xhr.send(null);

console.log('...............................................................Fin');
