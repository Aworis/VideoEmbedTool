<!DOCTYPE html>
<html lang="de">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://lensingmedia.blob.core.windows.net/assets/lsc/latest/main.css" rel="stylesheet">
        <link href="../css/header.css" rel="stylesheet">
        <link href="css/embed-tool.css" rel="stylesheet">
        <script src="js/yt-vimeo-embed-tool.js"></script>
        <title>Video Embed Code Generator</title>
    </head>
    <body>

        <?php include '../header.php';?>

        <main>
            <h2>Responsive YouTube und Vimeo Videos einbetten</h2>

            <p class="embed-logo">
                <img src="/img/youtubelogo.jpg" alt="YouTube Embed Tool">
                <img src="/img/vimeologo.jpg" alt="Vimeo Embed Tool">
            </p>
            <p>Kopieren Sie den gewünschten URL des Videos oder die Video-ID in das Textfeld und klicken Sie auf Code generieren. Der passende HTML-Code wird anschließend unten angezeigt und in die Zwischenablage kopiert.</p>

            <form id="tool-form">
                <div id="input-group">
                    <input type="text" name="video-input" id="video-input" placeholder="Video-ID oder URL">
                    <input id="button" type="button" value="Code generieren">
                </div>
            </form>

            <textarea id="embed-code" placeholder="Hier erscheint der Code." rows="6"></textarea>

            <h2>Vorschau:</h2>
            <div id="video-div"></div>
        </main>
    </body>
</html>
