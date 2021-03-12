function ALLOFEM() {
  var key = prompt("what is the 4 letter key");
  var msg = prompt("what is your message");
  var stg1 = atbash(msg);
  var stg2 = reverse(stg1);
  var stg3 = vig(stg2, key);
  var stg4 = glac(stg3);
  console.log(stg4);
}
