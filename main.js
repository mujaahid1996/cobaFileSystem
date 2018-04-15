/* 
credit
https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
https://nodejs.org/api/fs.html
*/

var fs = require("fs")

console.log("Going to read directory ./myData");
fs.readdir("./myData/", function (err, files) {

    // jika error read dir
    if (err) { return console.error(err) }

    // jika berhasil read dir
    files.forEach(function (file) {
        //console.log(file)

        // cek nama file pada dir
        if (file == 'input.txt') {

            // 1. buka file
            // async open file
            console.log('OPENING | opening file...')
            fs.open('input.txt', 'r+', function (err, res) {
                // jika error open file
                if (err) { return console.log(err) }
                // jika berhasil open file
                console.log("OPENING | File opened successfully!")

                // 2. baca file
                // async read
                fs.readFile('input.txt', function (err, data) {
                    // jika gagal read file
                    if (err) { return console.log(err) }
                    // jika berhasil read file
                    console.log("READ FILE | Asynchronous read: " + data.toString())
                })

                // sync read
                // var datas = fs.readFileSync('input.txt');
                // console.log("READ FILE | Synchronous read: " + datas.toString())
                // console.log("READ FILE | Program Ended")

                // 3. close file
                fs.close(res, function (err) {
                    if (err) { console.log(err) }
                    console.log("File closed successfully.")
                })


            // END open file
            })
        
        // END cek nama file pada dir
        }


    // END looping read files directory 
    })

// END read directory
})