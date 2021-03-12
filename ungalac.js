function ungalac() {
  let ding = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let alph = [' ','ᔑ','ʖ','ᓵ','↸','ᒷ','⎓','⊣','⍑','╎','⋮','ꖌ','ꖎ','ᒲ','リ','>','!','¡','ᑑ','∷','ᓭ','ℸ','⚍','⍊','∴','?','⨅'];
  let inp2 = prompt("what is your message?");
  let msg1 = inp2.toLowerCase();
  let msg = msg1.split("");
  let msglen = msg.length;
  var final = [ ];
  let charpos = 0;
  while (charpos <= msglen) {
  switch (msg[charpos]) {
    case ' ':
      final[charpos] = ding[0 ];
      if (final[charpos] == undefined) {
        final[charpos] = ding[0]
      }
      console.log(final[charpos]);
      break;
    case 'ᔑ':
      final[charpos] = ding[1 ];
      console.log(final[charpos]);
      break;
    case 'ʖ':
      final[charpos] = ding[2 ];
      console.log(final[charpos]);
      break;
    case 'ᓵ':
      final[charpos] = ding[3 ];
      console.log(final[charpos]);
      break;
    case '↸':
      final[charpos] = ding[4 ];
      console.log(final[charpos]);
      break;
    case 'ᒷ':
      final[charpos] = ding[5 ];
      console.log(final[charpos]);
      break;
    case '⎓':
      final[charpos] = ding[6 ];
      console.log(final[charpos]);
      break;
    case '⊣':
      final[charpos] = ding[7 ];
      console.log(final[charpos]);
      break;
    case '⍑':
      final[charpos] = ding[8 ];
      console.log(final[charpos]);
      break;
    case '╎':
      final[charpos] = ding[9 ];
      console.log(final[charpos]);
      break;
    case '⋮':
      final[charpos] = ding[10 ];
      break;
      console.log(final[charpos]);
      break;
    case 'ꖌ':
      final[charpos] = ding[11 ];
      console.log(final[charpos]);
      break;
    case 'ꖎ':
      final[charpos] = ding[12 ];
      console.log(final[charpos]);
      break;
    case 'ᒲ':
      final[charpos] = ding[13 ];
      console.log(final[charpos]);
      break;
    case 'リ':
      final[charpos] = ding[14 ];
      console.log(final[charpos]);
      break;
    case '>':
      final[charpos] = ding[15 ];
      console.log(final[charpos]);
      break;
    case '!':
      final[charpos] = ding[16 ];
      console.log(final[charpos]);
      break;
    case '¡':
      final[charpos] = ding[17 ];
      console.log(final[charpos]);
      break;
    case 'ᑑ':
      final[charpos] = ding[18 ];
      console.log(final[charpos]);
      break;
    case '∷':
      final[charpos] = ding[19 ];
      console.log(final[charpos]);
      break;
    case 'ᓭ':
      final[charpos] = ding[20 ];
      console.log(final[charpos]);
      break;
    case 'ℸ':
      final[charpos] = ding[21 ];
      console.log(final[charpos]);
      break;
    case '⚍':
      final[charpos] = ding[22 ];
      console.log(final[charpos]);
      break;
    case '⍊':
      final[charpos] = ding[23 ];
      console.log(final[charpos]);
      break;
    case '∴':
      final[charpos] = ding[24 ];
      break;
    case '?':
      final[charpos] = ding[25 ];
      console.log(final[charpos]);
      break;
    case '⨅':
      final[charpos] = ding[26 ];
      console.log(final[charpos]);
      break;
    default:
    final[charpos] = msg[charpos];
  };
  charpos++;
  }
  alert("//" +final.join("") + "//");
  return final.join("")
}
