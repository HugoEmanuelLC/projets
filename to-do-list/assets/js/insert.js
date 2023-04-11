



    function addNewToDoList(url){
        fetch(url+"new/1", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            body: JSON.stringify(dataJson),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    export function validateForm(){
        console.log("validateForm active")
    }



