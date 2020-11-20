const fs = require('fs');

fs.watch('C:\\Users\\hitma\\Desktop\\TIN\\NodeJsIntro\\assignmentB',[true,true,'utf-8'], (eventType, filename) => {
     // console.log(eventType);
// could be either 'rename' or 'change'. new file event and delete
// also generally emit 'rename'
//     console.log(filename);
    const file = filename.match("[^~]+");
    // console.log(file[0]);
    fs.readFile(`C:\\Users\\hitma\\Desktop\\TIN\\NodeJsIntro\\assignmentB\\${file[0]}`, (err, data) => {
        if (err) throw err;
        console.log("Event that caused printing :" + eventType + "\n");
        console.log("file content: \n")
        console.log(data.toString());
    });

});
