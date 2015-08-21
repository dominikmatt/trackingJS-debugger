/* Create a context-menu */
chrome.contextMenus.create({
    id: "myContextMenu",   // <-- mandatory with event-pages
    title: "Click me",
    contexts: ["all"]
});

/* Register a listener for the `onClicked` event */
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab);
    if (tab) {
        /* Create the code to be injected */
        var code = [
            'var d = document.createElement("script");',
            'd.setAttribute("src", "http://localhost:3000/scripts/debug.js");',
            'document.body.appendChild(d);'
        ].join("\n");

        /* Inject the code into the current tab */
        chrome.tabs.executeScript(tab.id, { code: code });
    }
});