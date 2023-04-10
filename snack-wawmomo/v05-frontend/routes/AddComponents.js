
let AddComponents = $("#AddComponents");

title = "C-Link ";

var routes = [
    // changement de page
    {path: "#/notfound", name: "notfound", component: "errorPage.html"},
    {path: "/", name: "home", component: "home.html"},
    {path: "#/", name: "home", component: "home.html"},
    {path: "#/home", name: "home", component: "home.html"},
    {path: "#/pagetest", name: "pagetest", component: "pageTest.html"},

    // mode target
    {path: "#menu", name: "#menu", component: "home.html"}, 
];

var HashChange = async function(){
var hash;
var hashRoutes;
var hashComponent;

    if( window.location.hash ){
        hash = window.location.hash;
    }else{
        hash = "";
    }

    console.log("URL => "+hash);

    if (hash.startsWith("#/") && hash.length>2){

        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"]
            }
        }
        if (hashRoutes) {
            AddComponents.load( "views/layout/" +hashComponent );
        }else{
            window.location = "#/notfound";
        }
    }else if(hash.startsWith("#") && hash.length>2){

        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = await route["name"];
                hashComponent = await route["component"]
            }
        }
        if (hashRoutes) {
            AddComponents.load( "views/layout/" +hashComponent );
            window.location = hashRoutes;
        }else{
            window.location = "#/notfound";
        }
    }
    else{
        // window.location = "#/home";
        // hashRoutes = "";
        // hashComponent = "home.html";
        // await AddComponents.load( "views/layout/" +hashComponent );

        // console.log("window.location")
        // console.log(window.location)

        // console.log(hash)
        // console.log(hashRoutes)
        // console.log(hashComponent)
    }
}

window.onhashchange = HashChange
HashChange();