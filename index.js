var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
    host: process.env.IP,
    port: process.env.PORT
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('noop');
    }
})

server.start(function () {
    console.log('Serving on ', server.info.uri);
});
