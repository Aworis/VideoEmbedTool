document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', generateEmbedCode);
});

var regexUrlYt = /^.*youtu.*?(\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=|v%3D)([a-zA-Z0-9_-]{11,}).*$/i;
var regexIdYt = /([a-zA-Z0-9_-]{11,})/i;
var regexUrlVimeo = /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/;
var regexIdVimeo = /(\d+)/;
var embedCodePart1 = "<div class='vimeo-space' style='padding: 56.25% 0 0 0; position: relative;'><iframe src='";
var embedCodePart2 = "' style='height: 100%; left: 0; position: absolute; top: 0; width: 100%;' frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''></iframe></div>";

/**
 * Write code in textarea
 */
function generateEmbedCode() {
    var url = document.getElementById('video-input').value;
    var htmlCode = getEmbedCodeForUrl(url);
    var embedDiv = document.getElementById('embed-code').value = htmlCode;

    showVideo(embedDiv);
    copyCode(embedDiv);
}

/**
 * Show video
 */
function showVideo(embedDiv) {
    if (embedDiv) {
        document.getElementById("video-div").innerHTML = "<br />" + embedDiv;
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
 * Generate YouTube/Vimeo embed code
 */
function getEmbedCodeForUrl(url) {
    var ytSource = "https://www.youtube.com/embed/";
    var vimeoSource = "https://player.vimeo.com/video/";
    var videoId = getVideoId(url);
    var matchingUrlYt = url.match(regexUrlYt);
    var matchingIdYt = url.match(regexIdYt);
    var matchingUrlVimeo = url.match(regexUrlVimeo);
    var matchingIdVimeo = url.match(regexIdVimeo);

    // Youtube
    if (matchingUrlYt !== null && matchingUrlYt[2].length == 11 || matchingIdYt !== null && matchingIdYt[1].length == 11) {
        return embedCodePart1 + ytSource + videoId + embedCodePart2;
    }

    // Vimeo
    if (matchingUrlVimeo !== null || matchingIdVimeo !== null) {
        return embedCodePart1 + vimeoSource + videoId + embedCodePart2;
    }

    // Error messages
    if (url == "") {
        alert("URL bzw. ID fehlt");
        return "";
    }

    if (url.search(regexUrlYt) == -1 || url.search(regexIdYt) == -1 || matchingUrlYt[2].length !== 11 || url.search(regexUrlVimeo) == -1 || url.search(regexIdVimeo) == -1) {
        alert("Bitte geben Sie einen gültigen YouTube- bzw. Vimeo-URL oder eine gültige Video-ID ein.");
        return "";
    }
}

/**
 * Generate video-ID
 */
function getVideoId(url) {
    var matchingUrlYt = url.match(regexUrlYt);
    var matchingIdYt = url.match(regexIdYt);
    var matchingUrlVimeo = url.match(regexUrlVimeo);
    var matchingIdVimeo = url.match(regexIdVimeo);

    // YouTube
    if (Array.isArray(matchingUrlYt)) {
        return matchingUrlYt[2];
    }

    if (Array.isArray(matchingIdYt)) {
        return matchingIdYt[1];
    }

    // Vimeo
    if (Array.isArray(matchingUrlVimeo)) {
        return matchingUrlVimeo[4];
    }

    if (Array.isArray(matchingIdVimeo)) {
        return matchingIdVimeo[1];
    }
}
