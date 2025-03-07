// UPDATE THE BELOW VAR FOR EACH UPDATE!!
var latestStory = 5;
var storyURL = "https://sparrowflightproject.web.app/stories/story-";

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