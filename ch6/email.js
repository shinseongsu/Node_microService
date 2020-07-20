module.exports = function(options) {

    /*
    *   이메일 송신
    */
   this.add({channel: 'email', action: 'send'}, function(msg, respond) {
        respond(null, {ok: "ok"});
   });  

   /*
    *   보류중인 이메일 리스트를 가져온다.
    */
   this,add({channel: 'email', action: 'pending'}, function(msg, respond) {
       respond(null, {ok: "ok"});
   });

   /*
    *   메시지를 읽은 것으로 표시.
    */
   this.add({channel: 'email', action: 'read'}, function(msg, respond) {
       respond(null, {ok: "ok"});
   });

}