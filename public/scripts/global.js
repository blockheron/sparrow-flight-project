// UPDATE THE BELOW VAR FOR EACH UPDATE!!
var latestStory = 8;
var storyURL = "story-";

function storyButtons(index) {
    const pageIndices = document.getElementsByName("pageIndex");
    for (var i = 0; i < 2; i++) {
        pageIndices[i].innerHTML = index;
    }
    
    if (index < latestStory) {
        const nextButtons = document.getElementsByName("nextButton");
        const lastButtons = document.getElementsByName("lastButton");
        for (var i = 0; i < 2; i++) {
            nextButtons[i].setAttribute("href", storyURL + (index+1) + ".html");
            lastButtons[i].setAttribute("href", storyURL + latestStory + ".html");
        }
    }

    if (index != 0) {
        const firstButtons = document.getElementsByName("firstButton");
        const prevButtons = document.getElementsByName("prevButton");
        for (var i = 0; i < 2; i++) {
            firstButtons[i].setAttribute("href", storyURL + 0 + ".html");
            prevButtons[i].setAttribute("href", storyURL + (index-1) + ".html");
        }
    }
}

function setLatestStory() {
    const latestStoryLink = document.getElementsByName("latestStoryButton");
    latestStoryLink[0].setAttribute("href", "stories/story-" + latestStory + ".html");
}

// dark, light, dyslexia themes
let light = localStorage.getItem("light");
let lightDys = localStorage.getItem("light-dys");
let darkDys = localStorage.getItem("dark-dys");

const enableLightMode = () => {
    document.body.classList.add("light");
    localStorage.setItem("light", "active")
}

const enableLightDysMode = () => {
    document.body.classList.remove("light");
    localStorage.setItem("light", null)
    document.body.classList.add("light-dys");
    localStorage.setItem("light-dys", "active")
}

const enableDarkDysMode = () => {
    document.body.classList.remove("light-dys");
    localStorage.setItem("light-dys", null)
    document.body.classList.add("dark-dys");
    localStorage.setItem("dark-dys", "active")
}

const enableDarkMode = () => {
    document.body.classList.remove("dark-dys");
    localStorage.setItem("dark-dys", null)
}

if (light === "active") enableLightMode();
if (lightDys === "active") enableLightDysMode();
if (darkDys === "active") enableDarkDysMode();

function changeTheme() {
    light = localStorage.getItem("light");
    lightDys = localStorage.getItem("light-dys");
    darkDys = localStorage.getItem("dark-dys");

    if (light === "active") {
        console.log("lightDys");
        enableLightDysMode();
    } else if (lightDys === "active") {
        console.log("darkDys");
        enableDarkDysMode();
    } else if (darkDys === "active") {
        console.log("dark");
        enableDarkMode();
    } else {
        enableLightMode();
        console.log("light");
    }

    changeThemeIframe();
}

function changeThemeIframe() {
    if (light === "active") {
        console.log("lightDys");
        enableLightDysMode();
    } else if (lightDys === "active") {
        console.log("darkDys");
        enableDarkDysMode();
    } else if (darkDys === "active") {
        console.log("dark");
        enableDarkMode();
    } else {
        enableLightMode();
        console.log("light");
    }
}