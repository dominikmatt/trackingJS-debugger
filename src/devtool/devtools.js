chrome.devtools.panels.create("TrackingJS Debugger",
    "/src/devtool/icon.png",
    "/src/devtool/Panel.html",
    function(panel) {
        // Create a connection to the background page
        var backgroundPageConnection = chrome.runtime.connect({
            name: "panel"
        });

        backgroundPageConnection.postMessage({
            name: 'init',
            tabId: chrome.devtools.inspectedWindow.tabId
        });
    }
);