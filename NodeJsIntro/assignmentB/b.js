const fs = require('fs');

const dir = `C:\\Users\\hitma\\Desktop\\TIN\\NodeJsIntro\\assignmentB\\`;

fs.watch(dir,[true,true,'utf-8'], (eventType, filename) => {

    const fileName = filename.match("[^~]+");
    const dirAndFile =`${dir}${fileName[0]}`

    try {
        if (fs.existsSync(dirAndFile)) {
            fs.readFile(dirAndFile, (err, data) => {
                if (err) throw err;
                console.log("Event found :" + eventType + ` in file: ${fileName}\n`);
                console.log("file content: \n")
                console.log(data.toString());
            });
        }
    } catch(err) {
        console.error(err)
    }

});
