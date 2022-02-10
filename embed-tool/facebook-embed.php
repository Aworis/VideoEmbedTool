<!DOCTYPE html>
<html lang="de">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://lensingmedia.blob.core.windows.net/assets/lsc/latest/main.css" rel="stylesheet">
        <link href="../css/header.css" rel="stylesheet">
        <link href="css/embed-tool.css" rel="stylesheet">
        <script src="js/fb-embed-tool.js"></script>
        <title>Video Embed Code Generator</title>
    </head>
    <body>
        <!--Facebook SDK-->
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v10.0" nonce="XXXXXXXX"></script>

        <?php include '../header.php';?>

        <main>
            <h2>Responsive Facebook-Videos und -Posts einbetten</h2>

            <p class="embed-logo"><img src="/img/facebooklogo.jpg" alt="Facebook Embed Tool"></p>
            <p>Kopieren Sie den gewünschten URL des Facebook-Posts, des Facebook-Videos oder die Video-ID in das Textfeld und klicken Sie auf Code generieren. Der passende HTML-Code wird anschließend unten angezeigt und in die Zwischenablage kopiert.</p>
            <p><strong>Achtung: Die eingebetteten Facebook-Elemente werden nur dargestellt, wenn das Facebook-SDK auf der jeweiligen Website implementiert ist. Sollten Videos oder Posts bei Ihnen nach der Einbettung nicht angezeigt werden, kontaktieren Sie das Tech-Team.</strong></p>

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
