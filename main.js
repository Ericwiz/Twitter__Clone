import { tweetsData } from "./data.js";

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetsData)
})

function getFeedHtml() {
    let feedHtml = ''
    tweetsData.forEach(data => {
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${data.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${data.handle}</p>
                    <p class="tweet-text">${data.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">${data.replies.length}</span>
                        <span class="tweet-detail">${data.likes}</span>
                        <span class="tweet-detail">${data.retweets}</span>
                    </div>   
                </div>            
            </div>
       </div>
        `
        console.log(feedHtml)
        return feedHtml
    })
     
}
getFeedHtml()