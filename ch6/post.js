module.exports = function(options) {

    /*
    *   프린팅과 송신을 위한 게시물 메시지를 큐에 넣는다.
    */
    this.add({channel: 'post', action: 'queue'}, function(msg, respond) {
        respond(null, {ok: "ok"});
    })

}