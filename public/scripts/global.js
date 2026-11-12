// UPDATE THE BELOW VAR FOR EACH UPDATE!!
var latestStory = 15;
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
// var theme = 0;

const enableLightMode = () => {
    document.body.classList.add("light");
    localStorage.setItem("light", "active")
    // theme = 1;
}

const enableLightDysMode = () => {
    document.body.classList.remove("light");
    localStorage.setItem("light", null)
    document.body.classList.add("light-dys");
    localStorage.setItem("light-dys", "active")
    // theme = 2;
}

const enableDarkDysMode = () => {
    document.body.classList.remove("light-dys");
    localStorage.setItem("light-dys", null)
    document.body.classList.add("dark-dys");
    localStorage.setItem("dark-dys", "active")
    // theme = 3;
}

const enableDarkMode = () => {
    document.body.classList.remove("dark-dys");
    localStorage.setItem("dark-dys", null);
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
}

function themeListener() {
    const intervalID = setInterval(changeThemeIframe, 1);
}

function changeThemeIframe() {
    light = localStorage.getItem("light");
    lightDys = localStorage.getItem("light-dys");
    darkDys = localStorage.getItem("dark-dys");

    var theme = 0;
    if (light === "active") theme = 1;
    if (lightDys === "active") theme = 2;
    if (darkDys === "active") theme = 3;

    switch (theme) {
        case 1:
            document.body.classList.add("light");
            break;
        case 2:
            document.body.classList.remove("light");
            document.body.classList.add("light-dys");
            break;
        case 3:
            document.body.classList.remove("light-dys");
            document.body.classList.add("dark-dys");
            break;
        default:
            document.body.classList.remove("dark-dys");
            break;
    }
}

// SPOILER
let showWarnings = false;
let showStory = false;
let showSummary = false;

function clickShowWarnings() {
    const warningButton = document.getElementById("warning-button");
    const warning = document.getElementById("warning");
    if (!showWarnings) {
        warning.style.display = "block";
        warningButton.innerText = "Hide Warnings"
        showWarnings = true;
        console.log("show warning");
    } else {
        warning.style.display = "none";
        warningButton.innerText = "Show Warnings"
        showWarnings = false;
        console.log("hide warning");
    }
}

function clickShowStory() {
    const storyButton = document.getElementById("story-button");
    const story = document.getElementById("story");
    if (!showStory) {
        story.style.display = "block";
        storyButton.innerText = "Hide Story"
        showStory = true;
        console.log("show story");
    } else {
        story.style.display = "none";
        storyButton.innerText = "Show Story"
        showStory = false;
        console.log("hide story");
    }
}

function clickShowSummary() {
    const summaryButton = document.getElementById("summary-button");
    const summary = document.getElementById("summary");
    if (!showSummary) {
        summary.style.display = "block";
        summaryButton.innerText = "Hide summary"
        showSummary = true;
        console.log("show summary");
    } else {
        summary.style.display = "none";
        summaryButton.innerText = "Show summary"
        showSummary = false;
        console.log("hide summary");
    }
}