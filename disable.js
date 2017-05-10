function disableLikes(){
    chrome.storage.sync.get("disable_likes", function(data){
      var LikeButtons = document.getElementsByClassName("UFILikeLink");
      if (data["disable_likes"]){
            for(var i = 0; i < LikeButtons.length; i++)
            {
                LikeButtons.item(i).classList.add("DisabledLikeButton");
            }
        } else {
            for(var i = 0; i < LikeButtons.length; i++)
            {
                LikeButtons.item(i).classList.remove("DisabledLikeButton");
            }
        }
    });
}
chrome.storage.onChanged.addListener(disableLikes);
document.addEventListener("scroll", disableLikes);
disableLikes(); // run once on page load
