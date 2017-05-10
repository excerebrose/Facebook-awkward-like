document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('disable-toggle');

    // set the initial state of the checkbox
    chrome.storage.sync.get("disable_likes", function(data){
        if (data["disable_likes"]){
            input.checked = true;
        } else {
            input.checked = false;
        }
      });

    input.addEventListener("change", function(){
        chrome.storage.sync.set({disable_likes: input.checked});
    });
});
