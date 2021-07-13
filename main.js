//declaration for the like and unlike button and name changing to you for post1
var redHeart=document.getElementById("redheart");
var  unLike=document.getElementById("unlike");
var nameupdate=document.getElementById("name");
var addComment= document.getElementById("comment");
//end declaration for the like and unlike button and name changing to you
//declaration for bookmark and unbookmark for post1
var bookMark = document.getElementById("bookmark");
var bookMarked = document.getElementById("bookmarked");
//declaration for bookmark and unbookmark

//making the second states before click not display for all posts
redHeart.style.display="none";
bookMarked.style.display="none";

//making the second states before click not display for all posts


//ONCLICK FUNCTIONS FOR ALLL THE POSTS
 
//FUNCTIONS FOR POST 1
unLike.onclick= function(){
	unLike.style.display="none";
	redHeart.style.display="block";
	nameupdate.innerHTML="You";
}
redHeart.onclick= function(){
	redHeart.style.display="none";
	unLike.style.display="block";
	nameupdate.textContent="remasada";
}

bookMark.onclick= function(){
	bookMark.style.display="none";
	bookMarked.style.display="block";
	alert("This post has been Bookmarked succesfully");
}
bookMarked.onclick= function(){
	bookMark.style.display = "block";
	bookMarked.style.display = "none";
	alert("succesfully unbookmarked");
}

addComment.onclick=function(){
	prompt("add comment");
}

//FUNCTIONS FOR POST 1
