function commentBoxCall1(){
    document.getElementById("submit-comment-area1").style.display = "block";
    document.getElementById("comment-button1").style.display = "none";
}

function submitComment1(){
    document.getElementById("submit-comment-area1").style.display = 'none';
    document.getElementById("comment-button1").style.display = "none";

    let user_comment1 = document.querySelector('#comment-box-text1').value;
    document.getElementById("Comment-display").style.display = "block";
    document.getElementById("user-comment1").innerHTML = user_comment1;
}

function commentBoxCall2(){
    document.getElementById("submit-comment-area2").style.display = "block";
    document.getElementById("comment-button2").style.display = "none";
}

function submitComment2(){
    document.getElementById("submit-comment-area2").style.display = 'none';
    document.getElementById("comment-button2").style.display = "none";

    let user_comment2 = document.querySelector('#comment-box-text2').value;
    document.getElementById("hidden-comment-box2").style.display = "block";
    document.getElementById("user-comment2").innerHTML = user_comment2;
}

function commentBoxCall3(){
    document.getElementById("submit-comment-area3").style.display = "block";
    document.getElementById("comment-button3").style.display = "none";
}

function submitComment3(){
    document.getElementById("submit-comment-area3").style.display = 'none';
    document.getElementById("comment-button3").style.display = "none";

    let user_comment3 = document.querySelector('#comment-box-text3').value;
    document.getElementById("hidden-comment-box3").style.display = "block";
    document.getElementById("user-comment3").innerHTML = user_comment3;
}

function commentBoxCall4(){
    document.getElementById("submit-comment-area4").style.display = "block";
    document.getElementById("comment-button4").style.display = "none";
}

function submitComment4(){
    document.getElementById("submit-comment-area4").style.display = 'none';
    document.getElementById("comment-button4").style.display = "none";

    let user_comment4 = document.querySelector('#comment-box-text4').value;
    document.getElementById("hidden-comment-box4").style.display = "block";
    document.getElementById("user-comment4").innerHTML = user_comment4;
} 

function commentBoxCall5(){
    document.getElementById("submit-comment-area5").style.display = "block";
    document.getElementById("comment-button5").style.display = "none";
}

function submitComment5(){
    document.getElementById("submit-comment-area5").style.display = 'none';
    document.getElementById("comment-button5").style.display = "none";

    let user_comment5 = document.querySelector('#comment-box-text5').value;
    document.getElementById("hidden-comment-box5").style.display = "block";
    document.getElementById("user-comment5").innerHTML = user_comment5;
}
