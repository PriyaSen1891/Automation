const puppeteer=require("puppeteer");
let page;
console.log("Before");
const browserOpenpromise=puppeteer.launch({
    headless:false,
    slowMo:true,
    defaultViewport:null,
    args:["--start-maximized"]
});
browserOpenpromise.then(function(browser){
    // open 
    const pageArrpromise=browser.pages();
    return pageArrpromise;

}).then(function(browserPages){
        page=browserPages[0];
        let gotoPromise=page.goto("https://www.google.com/");
        return gotoPromise;
}).then(function(){
    let elemWaitPromise=page.waitForSelector("input[type='text']",{visible:true});
    return elemWaitPromise;
})

.then(function(){
    // console.log("Reached google home hoge")
    let keyWillSendPromise=page.type("input[type='text']","wikipedia");
    return keyWillSendPromise;
}).then(function(){
    let enterWillBePressed=page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("h3.LC20lb.MBeuO.DKV0Md");
    return keyWillSendPromise;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("a#js-link-box-en strong",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("a#js-link-box-en strong");
    return keyWillSendPromise;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("li.portal-hright.portal-vbot a",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("li.portal-hright.portal-vbot a");
    return keyWillSendPromise;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("div.hlist.noprint ul li:last-child ",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("div.hlist.noprint ul li:last-child ");
    return keyWillSendPromise;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("table#toc tbody tr td b a[title='Special:AllPages/P']",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("table#toc tbody tr td b a[title='Special:AllPages/P']");
    return keyWillSendPromise;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("ul.mw-allpages-chunk li a[title='P']",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("ul.mw-allpages-chunk li a[title='P']");
    return keyWillSendPromise;
}).then(function(){
    let waitforasec=page.waitForTimeout(3000);
    return waitforasec;
})
.then(function(){
    let elementWaitpromise=page.waitForSelector("li.toclevel-1.tocsection-1 .toctext",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("li.toclevel-1.tocsection-1 .toctext");
    return keyWillSendPromise;
}).then(function(){
    let waitforasec=page.waitForTimeout(3000);
    return waitforasec;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("li.toclevel-1.tocsection-2 .toctext",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("li.toclevel-1.tocsection-2 .toctext");
    return keyWillSendPromise;
}).then(function(){
    let waitforasec=page.waitForTimeout(3000);
    return waitforasec;
}).then(function(){
    let elementWaitpromise=page.waitForSelector("li.toclevel-1.tocsection-4 .toctext",{visible:true});
    return elementWaitpromise;
}).then(function(){
    let keyWillSendPromise=page.click("li.toclevel-1.tocsection-4 .toctext");
    return keyWillSendPromise;
})
.catch(function(err){
    console.log(err);
})
console.log("After");
