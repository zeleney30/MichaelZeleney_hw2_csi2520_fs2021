function CheckResults()
{
    let q1 = document.getElementById('Question1').value;
    let q2 = document.getElementById('Question2').value;
    let q3 = document.getElementById('Question3').value;
    let q4 = document.getElementById('Question4').value;
    let q5 = document.getElementById('Question5').value;

    let numCorrect = 0;

    if (q1 == 'a')
        numCorrect++;

    if (q2 == 'c')
        numCorrect++;

    if (q3 == 'c')
        numCorrect++;

    if (q4 == 'd')
        numCorrect++;

    if (q5 == 'b')
        numCorrect++;

    document.getElementById("triviaResults").style.visibility = "visible";
    document.getElementById("numCorrect").innerHTML = numCorrect + "/5";
}


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

    IDnumber++;

    newComment.id = "comment" + IDnumber;
    newComment.style.marginLeft = "17%";
    newComment.style.marginRight = "17%";
    newComment.style.marginTop = "35px";

    commentCount++;

    let commenter = "Comment" + commentCount + ":   ";

    newComment.innerText = commenter + document.getElementById('comment_text').value;

    document.getElementById("comments").append(newComment);

    commentText.style.visibility = "hidden";
    buttonPost.style.visibility = "hidden";
    commentText.style.height = "0px";
    buttonPost.style.height = "0px"
    commentVisibility = "hidden";

    commentText.value = "";
}