
let AddComponents = $("#AddComponents");

title = "C-Link ";

var routes = [
    // changement de page
    {path: "#/notfound", name: "notfound", component: "errorPage.html"},
    // {path: "/", name: "accueil", component: "accueil.html"},
    // {path: "#/", name: "accueil", component: "accueil.html"},
    // {path: "#/accueil", name: "accueil", component: "accueil.html"},

    {path: "/", name: "accueilmcu", component: "accueilMcuPage.html"},
    {path: "#/", name: "accueilmcu", component: "accueilMcuPage.html"},
    // {path: "#/accueilmcu", name: "accueilmcu", component: "accueilMcuPage.html"},

    {path: "#/films", name: "films", component: "filmsOrSeriesPage.html"},
    {path: "#/series", name: "series", component: "filmsOrSeriesPage.html"},
    {path: "#/phase1", name: "phase1", component: "phasePage.html"},
    {path: "#/phase2", name: "phase2", component: "phasePage.html"},
    {path: "#/phase3", name: "phase3", component: "phasePage.html"},
    {path: "#/phase4", name: "phase4", component: "phasePage.html"},
    {path: "#/phase5", name: "phase5", component: "phasePage.html"},
    {path: "#/pagetest", name: "page", component: "pageTest.html"},

    // mode target
    // {path: "#top", name: "#top", component: "home.html"}, 
    // {path: "#apropos", name: "#apropos", component: "home.html"}, 
    // {path: "#projets", name: "#projets", component: "home.html"}, 
    // {path: "#technologie", name: "#technologie", component: "home.html"},
    // {path: "#demos", name: "#demos", component: "home.html"},
    // {path: "#contact", name: "#contact", component: "home.html"},
];

var HashChange = function(){
var hash = window.location.hash;
var hashRoutes;
var hashComponent;
console.log(hash)
    if (hash.startsWith("#/") && hash.length>2){
        // hash = hash.replace("#/", "");

        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"];
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
                hashRoutes = route["name"];
                hashComponent = route["component"]
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
        // window.location = "#/accueil";
        hashRoutes = "";
        hashComponent = "accueilMcuPage.html";
        AddComponents.load( "views/layout/" +hashComponent );
    }
}

window.onhashchange = HashChange
HashChange();