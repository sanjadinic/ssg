    const inputTitle = document.getElementById("inputTitle");
    const inputImage = document.getElementById("inputImage");
    const inputDescription = document.getElementById("inputDescription");
    const inputBkgrcolor = document.getElementById("bkgrcolor");
    const inputFontcolor = document.getElementById("fontcolor");
    const inputFontfamily = document.getElementById("fontfamily");
    const result = document.getElementById("result");

    function download() {
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result.value));
        let title = inputTitle.value;
        if (!title) {
            title = "demo";
        }
        downloadLink.setAttribute('download', title + ".html");
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    function generate() {
        const title = inputTitle.value;
        const imageSrc = inputImage.value;
        const description = inputDescription.value;
        const bkgrcolor = inputBkgrcolor.value;
        const fontcolor = inputFontcolor.value;
        const fontfamily = inputFontfamily.value;
        let template = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>$TITLE$</title>
            <style>
            body{
           background-color: $BKGRCOLOR$;
           color: $FONTCOLOR$;
           font-family: $FONTFAMILY$;
            }

       </style>
          </head>
        <body>
          <div>
            <h1>$HEADING$</h1>
            <img src="$IMAGE$">
            <p>$DESCRIPTION$</p>
          <div>
        </body>
        </html>`
        template = template.replace("$TITLE$", title);
        template = template.replace("$HEADING$", title);
        template = template.replace("$IMAGE$", imageSrc);
        template = template.replace("$DESCRIPTION$", description);
        template = template.replace("$BKGRCOLOR$", bkgrcolor);
        template = template.replace("$FONTCOLOR$", fontcolor);
        template = template.replace("$FONTFAMILY$", fontfamily);
        result.innerHTML = template;
    }