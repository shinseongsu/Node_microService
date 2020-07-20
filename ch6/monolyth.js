module.exports = function(options) {
    
    var init = {};

    /*
    *   하나의 SMS를 보낸다.
    */
   init.sendSMS = function(destination, content) {

   }

   /*
   *    계류중인 SMS 리스트를 읽는다.
   */
   init.readPendingSMS = function() {
        return listOfSms;
   }

   /*
   *     이메일 송신
   */
   init.sendEmail = function(subject, content) {

   }

   /*
   *      보류중인 이메일 리스트를 얻는다.
   */
   init.readPendingEmails = function() {
        return listOfEmails;
   }

    /*
    *      이메일을 읽는 것을 표시한다.
    */
    init.markEmailAsRead = function(messageId) {
        return 
    }

    /*
    *      문서와 우편을 배송하는 큐를 저장한다.
    */

    init.queuePost = function(document) {
        return listOfEmails;
    }

    return init;

}