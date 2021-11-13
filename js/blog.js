let commentText = document.getElementById("comment_text");
let buttonPost = document.getElementById("button_post");

let visibility = "hidden";

function addComment()
{
    if (visibility == "hidden")
    {
        visibility = "visible"
        commentText.style.height = "350px";
        buttonPost.style.height = "25px";
    }
    else
    {
        visibility = "hidden";
        commentText.style.height = "0px";
        buttonPost.style.height = "0px"
    }

    commentText.style.visibility = visibility;
    buttonPost.style.visibility = visibility;
}

let commentCount = 0;
let IDnumber = 0;

function postComment()
{
    let newComment = document.createElement("p");
    let replyButton = document.createElement("button");
    let replyDiv = document.createElement("div");

    IDnumber++;

    replyDiv.id = "divReply" + IDnumber;

    newComment.id = "comment" + IDnumber;
    newComment.style.marginLeft = "17%";
    newComment.style.marginRight = "17%";
    newComment.style.marginTop = "35px";

    replyButton.id = "buttonReply" + IDnumber;
    replyButton.style.visibility = "visible";
    replyButton.style.marginLeft = "17%";
    replyButton.style.marginRight = "17%";
    replyButton.innerText = "Reply";
    replyButton.style.marginBottom = "17px";
    replyButton.style.height = "25px";

    replyButton.setAttribute("onclick", "getReply(" + IDnumber + ")");

    commentCount++;

    let commenter = "Comment" + commentCount + ":   ";

    newComment.innerText = commenter + document.getElementById('comment_text').value;

    document.getElementById("comments").append(newComment);
    document.getElementById("comments").append(replyDiv);
    document.getElementById("comments").append(replyButton);
}

let replyBoxID = 0;

function getReply(x)
{
    replyBoxID++;

    let replyButton = document.getElementById("buttonReply" + x);
    replyButton.style.visibility = "hidden";
    replyButton.style.height = 0;
    replyButton.style.marginBottom = "0px";

    let replyText = document.createElement("textarea");
    replyText.id = "replyText" + replyBoxID;
    replyText.style.marginLeft = "17%";
    replyText.style.width = "35%";
    replyText.style.height = "70px";
    replyText.style.resize = "none";

    let postReplyButton = document.createElement("button");
    postReplyButton.id = "postReply" + replyBoxID;
    postReplyButton.style.marginLeft = "1%";
    postReplyButton.innerText = "Post Reply";
    postReplyButton.style.height = "25px";
    postReplyButton.setAttribute("onclick", "postReply(" + replyBoxID + ", " + x + ")");

    document.getElementById("divReply" + x).append(replyText);
    document.getElementById("divReply" + x).append(postReplyButton);
}

let replyCount = 0;

function postReply(z, x)
{
    let replyButton = document.getElementById("buttonReply" + x);
    replyButton.style.visibility = "visible";
    replyButton.style.height = "25px";

    let replyText = document.getElementById("replyText" + z);
    replyText.style.visibility = "hidden";
    replyText.style.height = "0px";

    let postReplyButton = document.getElementById("postReply" + z);
    postReplyButton.style.visibility = "hidden";
    postReplyButton.style.height = "0px";

    let newReply = document.createElement("p");
    newReply.style.marginLeft = "20%";
    newReply.style.marginTop = "0px";
    newReply.style.marginBottom = "5px";

    replyCount++;

    let reply = "Reply" + replyCount + ":   ";
    
    newReply.innerText = reply + document.getElementById("replyText" + z).value;

    document.getElementById("divReply" + x).append(newReply);
}