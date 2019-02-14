var fs = require('fs');
var _ = require('lodash');
var redis = require('redis');
var client = redis.createClient();

module.exports = function (app) {
    app.get('/api/redis/buscarvalorpelachave/:idChave', function (req, res, next) {
       console.log(req.params.idChave)
        if (!req.params.idChave) {
            res.sendStatus(400);
            return;
        }

        let idChave = req.params.idChave;

        if (idChave) {
         console.log('1')   

       return client.get(idChave, function(err, reply) {
         console.log(reply)
            res.format({
                json : () => {
                  res.json(reply)
                }
              })

          });
  
        }

        res.sendStatus(204);
    });
  
   
};
