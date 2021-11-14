let commentText = document.getElementById("comment_text");
let buttonPost = document.getElementById("button_post");

let commentVisibility = "hidden";

function addComment()
{
    if (commentVisibility == "hidden")
    {
        commentVisibility = "visible"
        commentText.style.height = "150px";
        buttonPost.style.height = "25px";
    }
    else
    {
        commentVisibility = "hidden";
        commentText.style.height = "0px";
        buttonPost.style.height = "0px"
    }

    commentText.style.visibility = commentVisibility;
    buttonPost.style.visibility = commentVisibility;
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
    document.getElementById("comments").append(replyButton);
    document.getElementById("comments").append(replyDiv);
}

let replyBoxID = 0;

let replyText = document.createElement("textarea");
let postReplyButton = document.createElement("button");

function getReply(x)
{
    let divReply = document.getElementById("divReply" + x);
    let replyButton = document.getElementById("buttonReply" + x);

    replyText.value = "";

    replyBoxID++;

    replyText.id = "replyText" + replyBoxID;
    replyText.style.visibility = "visible";
    replyText.style.marginLeft = "20%";
    replyText.style.width = "35%";
    replyText.style.height = "50px";
    replyText.style.resize = "none";

    postReplyButton.id = "postReply" + replyBoxID;
    postReplyButton.style.visibility = "visible";
    postReplyButton.style.marginLeft = "1%";
    postReplyButton.innerText = "Post Reply";
    postReplyButton.style.height = "25px";

    postReplyButton.setAttribute("onclick", "postReply(" + replyBoxID + ", " + x + ")");

    divReply.append(replyText);
    divReply.append(postReplyButton);
}

let replyCount = 0;

function postReply(z, x)
{
    let replyText = document.getElementById("replyText" + z);
    let postReplyButton = document.getElementById("postReply" + z);

    let newReply = document.createElement("p");
    newReply.style.marginLeft = "20%";
    newReply.style.marginTop = "0px";
    newReply.style.marginBottom = "5px";

    replyCount++;

    let reply = "Reply" + replyCount + ":   ";
    
    newReply.innerText = reply + document.getElementById("replyText" + z).value;

    document.getElementById("divReply" + x).append(newReply);

    replyText.parentNode.removeChild(replyText);
    postReplyButton.parentNode.removeChild(postReplyButton);
}