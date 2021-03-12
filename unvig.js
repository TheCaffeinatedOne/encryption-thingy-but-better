function unvig() {
  let alph = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let keyraw = prompt("what is the 4 letter keyword");
  let keylow = keyraw.toLowerCase();
  let keyarray = keylow.split("");
  let keyprocessed = [ ];
  let passes = 0;
  while (passes <= 3) {
    switch (keyarray[passes]) {
      case 'a':
      keyprocessed[passes] = 1;
        break;
      case 'b':
      keyprocessed[passes] = 2;
        break;
      case 'c':
      keyprocessed[passes] = 3;
        break;
      case 'd':
      keyprocessed[passes] = 4;
        break;
      case 'e':
      keyprocessed[passes] = 5;
        break;
      case 'f':
      keyprocessed[passes] = 6;
        break;
      case 'g':
      keyprocessed[passes] = 7;
        break;
      case 'h':
      keyprocessed[passes] = 8;
        break;
      case 'i':
      keyprocessed[passes] = 9;
        break;
      case 'j':
      keyprocessed[passes] = 10;
        break;
      case 'k':
      keyprocessed[passes] = 11;
        break;
      case 'l':
      keyprocessed[passes] = 12;
        break;
      case 'm':
      keyprocessed[passes] = 13;
        break;
      case 'n':
      keyprocessed[passes] = 14;
        break;
      case 'o':
      keyprocessed[passes] = 15;
        break;
      case 'p':
      keyprocessed[passes] = 16;
        break;
      case 'q':
      keyprocessed[passes] = 17;
        break;
      case 'r':
      keyprocessed[passes] = 18;
        break;
      case 's':
      keyprocessed[passes] = 19;
        break;
      case 't':
      keyprocessed[passes] = 20;
        break;
      case 'u':
      keyprocessed[passes] = 21;
        break;
      case 'v':
      keyprocessed[passes] = 22;
        break;
      case 'w':
      keyprocessed[passes] = 23;
        break;
      case 'x':
      keyprocessed[passes] = 24;
        break;
      case 'y':
      keyprocessed[passes] = 25;
        break;
      case 'z':
      keyprocessed[passes] = 26;
        break;
    }
    passes++;
  }
  console.log(keyprocessed);
  var msgunprocessed = prompt("whats the message?");
  var msg = msgunprocessed.toLowerCase();
  var final = [ ];
  var keypos = 0;
  var charpos = 0;
  var end = msg.length -1
 while (charpos <= end) {
   keypos = 0;
   //1
   var charnum = msg.charCodeAt(charpos) - keyprocessed[keypos];
   final[charpos] = String.fromCharCode(charnum);
   console.log(final[charpos]);
   charpos++
   keypos++
   //2
   var charnum = msg.charCodeAt(charpos) - keyprocessed[keypos];
   final[charpos] = String.fromCharCode(charnum);
   console.log(final[charpos]);
   charpos++
   keypos++
   //3
   var charnum = msg.charCodeAt(charpos) - keyprocessed[keypos];
   final[charpos] = String.fromCharCode(charnum);
   console.log(final[charpos]);
   charpos++
   keypos++
   //4
   var charnum = msg.charCodeAt(charpos) - keyprocessed[keypos];
   final[charpos] = String.fromCharCode(charnum);
   console.log(final[charpos]);
   charpos++
   keypos++
 }
 alert("//" + final.join('')+"//");
 console.log("//" + final.join('')+"//");
 console.log('VIG DONE');
}
