document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', generateEmbedCode);
});

var regexUrlFacebook = /(^.*facebook\.com\/)([a-zA-Z0-9]*)(\/embed\?video_id=|.php\?story_fbid=[a-zA-Z0-9]*&id=|watch\/\?v=|\/videos\/|\/posts\/|video.php\?v=)(\d+)/;
var regexIdFacebook = /(\d+)/;
var embedFacebookVideoCodePart = "<div class='fb-video' data-href='";
var embedFacebookPostCodePart = "<div class='fb-post' data-href='";
var embedFacebookCodeLastPart = "' data-show-text='false'></div>";

/**
 * Write code in textarea
 */
function generateEmbedCode() {
    var url = document.getElementById('video-input').value;
    var htmlCode = getEmbedCodeForUrl(url);
    var embedDiv = document.getElementById('embed-code').value = htmlCode;

    showVideo(embedDiv);
    copyCode(embedDiv);

    // Reload the Facebook elements by resizing the viewport
    if ( url.includes("/posts/") !== true) {
        return "";
    } else if (url.includes("/posts/") == true) {
        var reload;
        window.addEventListener('resize', function () {
            clearTimeout(reload);
            reload = setTimeout(reloadFacebook, 100);
        });

        function reloadFacebook() {
            // Facebook SDK - This function parses and renders XFBML markup in a document on the fly.
            FB.XFBML.parse();
        }
    }
}

/**
 * Show video
 */
function showVideo(embedDiv) {
    if (embedDiv) {
        document.getElementById("video-div").innerHTML = "<br />" + embedDiv;

        // Facebook SDK - This function parses and renders XFBML markup in a document on the fly.
        FB.XFBML.parse();
    }

}

/**
 * Copy html code in clipboard
 */
function copyCode(embedDiv) {
    if (embedDiv) {
        document.getElementById('embed-code').select();
        document.execCommand("copy");
    }
}

/**
 * Generate Facebook video embed code
 */
function getEmbedCodeForUrl(url) {
    var matchingUrlFacebook = url.match(regexUrlFacebook);
    var matchingIdFacebook = url.match(regexIdFacebook);

    // Facebook embed code for posts
    if (url.includes("/posts/") == true && url.includes("http") == true && matchingUrlFacebook !== null) {
        return embedFacebookPostCodePart + url + embedFacebookCodeLastPart;
    } else if (url.includes("/posts/") == true && url.includes("http") !== true &&  matchingUrlFacebook !== null) {
        return embedFacebookPostCodePart + 'https://' + url + embedFacebookCodeLastPart;
    }
    // Facebook embed code for videos
    else if (url.includes("http") == true && matchingUrlFacebook !== null) {
        return embedFacebookVideoCodePart + url + embedFacebookCodeLastPart;
    } else if ( url.includes("http") !== true &&  matchingUrlFacebook !== null) {
        return embedFacebookVideoCodePart + 'https://' + url + embedFacebookCodeLastPart;
    } else if (matchingIdFacebook !== null) {
        return embedFacebookVideoCodePart + 'https://www.facebook.com/watch/?v=' + url + embedFacebookCodeLastPart;
    }

    // Error messages
    if (url == "") {
        alert("URL bzw. ID fehlt");
        return "";
    }
    if (url.search(regexUrlFacebook) == -1 || url.search(regexIdFacebook) == -1) {
        alert("Bitte geben Sie einen gültigen Facebook-URL oder eine gültige Video-ID ein.");
        return "";
    }
}
