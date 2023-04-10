
let AddComponents = $("#AddComponents");

title = "C-Link ";

var routes = [
    // changement de page
    {path: "#/notfound", name: "notfound", component: "errorPage.html"},
    {path: "/", name: "home", component: "homePage.html"},
    {path: "#/", name: "home", component: "homePage.html"},
    {path: "#/home", name: "home", component: "homePage.html"},
    
    {path: "#/login", name: "login", component: "loginPage.html"},
    // {path: "#/pagetest", name: "pagetest", component: "pageTest.html"},

    // mode target
    // {path: "#menu", name: "#menu", component: "home.html"}, 
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

    // console.log("URL => "+hash);

    if (hash.startsWith("#/") && hash.length>2){

        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"]
            }
        }
        if (hashRoutes) {
            await AddComponents.load( "views/layout/" +hashComponent );
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
            await AddComponents.load( "views/layout/" +hashComponent );
            window.location = hashRoutes;
        }else{
            window.location = "#/notfound";
        }
    }
    else{
        hashRoutes = "";
        hashComponent = "homePage.html";
        await AddComponents.load( "views/layout/" +hashComponent );
    }
}

window.onhashchange = HashChange
HashChange();