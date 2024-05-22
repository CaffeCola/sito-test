let background = document.querySelector("#container")
let title = document.querySelector("#title")
let descriptionField = document.querySelector("#descriptionField");
//Paradiso
let cloud1 = document.querySelector("#cloud1")
let cloud2 = document.querySelector("#cloud2")
let sun = document.querySelector("#sun")
let cloudTerrain = document.querySelector("#cloudTerrain")
//Purgatorio
let tower1 = document.querySelector("#tower1")
let tower2 = document.querySelector("#tower2")
let tower3 = document.querySelector("#tower3")
let tower4 = document.querySelector("#tower4")
let tower5 = document.querySelector("#tower5")
let purgatoryTerrain = document.querySelector("#purgatoryTerrain")
//Inferno
let hellTerrain = document.querySelector("#redTerrain");
let redMountainLayer1 = document.querySelector("#redMountain1");
let redMountainLayer2 = document.querySelector("#redMountain2")

function paradiseSettings() {
    descriptionField.innerHTML = paradiseDescriptionHTML
    descriptionField.classList.remove("bg-gray-200")
    descriptionField.classList.remove("bg-red-900")
    descriptionField.classList.remove("bg-yellow-200")
    descriptionField.classList.add("bg-blue-200")
    background.classList.remove("bg-black")
    background.classList.remove("bg-[#687f94]")
    background.classList.remove("bg-red-950")
    background.classList.add("bg-blue-300")
    document.querySelectorAll(".border").forEach(element => {
        element.style.borderColor = "white";
    })
    removeHellBackground()
    removePurgatoryBackgroundDown()
    addParadiseBackground()
}

function purgatorySettings() {
    descriptionField.innerHTML = purgatoryDescriptionHTML
    descriptionField.classList.remove("bg-gray-200")
    descriptionField.classList.remove("bg-red-900")
    descriptionField.classList.remove("bg-blue-200")
    descriptionField.classList.add("bg-yellow-200")
    background.classList.remove("bg-black")
    background.classList.remove("bg-red-950")
    background.classList.remove("bg-blue-300")
    background.classList.add("bg-[#687f94]")
    document.querySelectorAll(".border").forEach(element => {
        element.style.borderColor = "green";
    })
    removeHellBackground();
    removeParadiseBackground()
    addPurgatoryBackground()
}

function hellSettings() {
    descriptionField.innerHTML = hellDescriptionHTML
    descriptionField.classList.remove("bg-gray-200")
    descriptionField.classList.remove("bg-yellow-200")
    descriptionField.classList.remove("bg-blue-200")
    descriptionField.classList.add("bg-red-900")
    background.classList.remove("bg-black")
    background.classList.remove("bg-blue-300")
    background.classList.remove("bg-[#687f94]")
    background.classList.add("bg-red-950")
    document.querySelectorAll(".border").forEach(element => {
        element.style.borderColor = "orange";
    })
    removeParadiseBackground()
    removePurgatoryBackgroundUp()
    addHellBackground();
}

function addHellBackground() {
    hellTerrain.classList.remove("top-[9999px]")
    redMountainLayer1.classList.remove("top-[9999px]")
    redMountainLayer2.classList.remove("top-[9999]")
    hellTerrain.classList.add("top-[700px]")
    redMountainLayer1.classList.add("top-[300px]");
    redMountainLayer2.classList.add("top-[290px]")
}

function removeHellBackground() {
    hellTerrain.classList.remove("top-[700px]")
    redMountainLayer1.classList.remove("top-[300px]");
    redMountainLayer2.classList.remove("top-[290px]")
    hellTerrain.classList.add("top-[9999px]")
    redMountainLayer1.classList.add("top-[9999px]")
    redMountainLayer2.classList.add("top-[9999]")
}

function addParadiseBackground() {
    cloud1.classList.remove("left-[-9999px]")
    cloud2.classList.remove("left-[9999px]")
    sun.classList.remove("top-[-9999px]")
    cloudTerrain.classList.remove("top-[9999px]")
    cloud1.classList.add("left-[-20px]")
    cloud2.classList.add("left-[1400px]")
    sun.classList.add("top-[15px]")
    cloudTerrain.classList.add("top-[850px]")
}

function removeParadiseBackground() {
    cloud1.classList.remove("left-[-20px]")
    cloud2.classList.remove("left-[1400px]")
    sun.classList.remove("top-[15px]")
    cloudTerrain.classList.remove("top-[850px]")
    cloud1.classList.add("left-[-9999px]")
    cloud2.classList.add("left-[9999px]")
    sun.classList.add("top-[-9999px]")
    cloudTerrain.classList.add("top-[9999px]")
}

function addPurgatoryBackground() {
    tower1.classList.remove("top-[9999px]")
    tower1.classList.remove("top-[-9999px]")
    tower1.classList.add("top-[500px]")
    tower2.classList.remove("top-[9999px]")
    tower2.classList.remove("top-[-9999px]")
    tower2.classList.add("top-[320px]")
    tower3.classList.remove("top-[9999px]")
    tower3.classList.remove("top-[-9999px]")
    tower3.classList.add("top-[170px]")
    tower4.classList.remove("top-[9999px]")
    tower4.classList.remove("top-[-9999px]")
    tower4.classList.add("top-[70px]")
    tower5.classList.remove("top-[9999px]")
    tower5.classList.remove("top-[-9999px]")
    tower5.classList.add("top-[-2px]")
    purgatoryTerrain.classList.remove("top-[9999px]")
    purgatoryTerrain.classList.remove("top-[-9999px]")
    purgatoryTerrain.classList.add("top-[700px]")
}

//Rimuove gli oggetti del Purgatorio verso il basso
function removePurgatoryBackgroundDown() {
    tower1.classList.remove("top-[500px]")
    tower1.classList.add("top-[9999px]")
    tower2.classList.remove("top-[320px]")
    tower2.classList.add("top-[9999px]")
    tower3.classList.remove("top-[170px]")
    tower3.classList.add("top-[9999px]")
    tower4.classList.remove("top-[70px]")
    tower4.classList.add("top-[9999px]")
    tower5.classList.remove("top-[-2px]")
    tower5.classList.add("top-[9999px]")
    purgatoryTerrain.classList.remove("top-[700px]")
    purgatoryTerrain.classList.add("top-[9999px]")
}

//Rimuove gli oggetti del Purgatorio verso l'alto
function removePurgatoryBackgroundUp() {
    tower1.classList.remove("top-[500px]")
    tower1.classList.add("top-[-9999px]")
    tower2.classList.remove("top-[320px]")
    tower2.classList.add("top-[-9999px]")
    tower3.classList.remove("top-[170px]")
    tower3.classList.add("top-[-9999px]")
    tower4.classList.remove("top-[70px]")
    tower4.classList.add("top-[-9999px]")
    tower5.classList.remove("top-[-2px]")
    tower5.classList.add("top-[-9999px]")
    purgatoryTerrain.classList.remove("top-[700px]")
    purgatoryTerrain.classList.add("top-[-9999px]")
}