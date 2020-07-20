module.exports = function(options) {

    /*
    *   SMS 전송
    */
    this.add({channel: 'sms', action: 'send'}, function(msg, respond) {
        respond(null, {ok: "ok"});
    });

    /*
    *   보류중인 SMS를 수신
    */
   this.add({channel: 'sms', action: 'pendding'}, function(msg, respond) {
       respond(null, {ok: "ok"});
   });

}