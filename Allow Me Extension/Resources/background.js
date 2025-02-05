//browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    console.log("Received request: ", request);
//
//    if (request.greeting === "hello")
//        return Promise.resolve({ farewell: "goodbye" });
//});
//
//chrome.runtime.onInstalled.addListener(() => {
//    console.log("Anti-RightClick Extension Installed");
//});
//
//chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//    if (changeInfo.status === "complete") {
//        chrome.scripting.executeScript({
//            target: { tabId: tabId },
//            files: ["content.js"]
//        });
//    }
//});
