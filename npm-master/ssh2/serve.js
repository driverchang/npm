var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function() {
    console.log('Client :: ready');
    conn.shell(function(err, stream) {
        if (err) throw err;
        stream.on('close', function() {
            console.log('Stream :: close');
            conn.end();
        }).on('data', function(data) {
            console.log('OUTPUT: ' + data);
        });
        stream.write('ls -l \n cd .. \n');
    });
}).connect({
    host: '47.101.51.46',
    port: 22,
    username: 'root',
    password: 'Super2316173893'
});