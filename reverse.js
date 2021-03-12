function reverse(inp2) {
  let alph = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let ding = [' ','z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];
  let msg1 = inp2.toLowerCase();
  let msg = msg1.split("");
  let msglen = msg.length;
  var final = [ ];
  let charpos = 0;
  while (charpos <= msglen) {
  switch (msg[charpos]) {
    case ' ':
      final[charpos] = ding[0 ];
      console.log(final[charpos]);
      break;
    case 'a':
      final[charpos] = ding[1 ];
      console.log(final[charpos]);
      break;
    case 'b':
      final[charpos] = ding[2 ];
      console.log(final[charpos]);
      break;
    case 'c':
      final[charpos] = ding[3 ];
      console.log(final[charpos]);
      break;
    case 'd':
      final[charpos] = ding[4 ];
      console.log(final[charpos]);
      break;
    case 'e':
      final[charpos] = ding[5 ];
      console.log(final[charpos]);
      break;
    case 'f':
      final[charpos] = ding[6 ];
      console.log(final[charpos]);
      break;
    case 'g':
      final[charpos] = ding[7 ];
      console.log(final[charpos]);
      break;
    case 'h':
      final[charpos] = ding[8 ];
      console.log(final[charpos]);
      break;
    case 'i':
      final[charpos] = ding[9 ];
      console.log(final[charpos]);
      break;
    case 'j':
      final[charpos] = ding[10 ];
      break;
      console.log(final[charpos]);
      break;
    case 'k':
      final[charpos] = ding[11 ];
      console.log(final[charpos]);
      break;
    case 'l':
      final[charpos] = ding[12 ];
      console.log(final[charpos]);
      break;
    case 'm':
      final[charpos] = ding[13 ];
      console.log(final[charpos]);
      break;
    case 'n':
      final[charpos] = ding[14 ];
      console.log(final[charpos]);
      break;
    case 'o':
      final[charpos] = ding[15 ];
      console.log(final[charpos]);
      break;
    case 'p':
      final[charpos] = ding[16 ];
      console.log(final[charpos]);
      break;
    case 'q':
      final[charpos] = ding[17 ];
      console.log(final[charpos]);
      break;
    case 'r':
      final[charpos] = ding[18 ];
      console.log(final[charpos]);
      break;
    case 's':
      final[charpos] = ding[19 ];
      console.log(final[charpos]);
      break;
    case 't':
      final[charpos] = ding[20 ];
      console.log(final[charpos]);
      break;
    case 'u':
      final[charpos] = ding[21 ];
      console.log(final[charpos]);
      break;
    case 'v':
      final[charpos] = ding[22 ];
      console.log(final[charpos]);
      break;
    case 'w':
      final[charpos] = ding[23 ];
      console.log(final[charpos]);
      break;
    case 'x':
      final[charpos] = ding[24 ];
      break;
    case 'y':
      final[charpos] = ding[25 ];
      console.log(final[charpos]);
      break;
    case 'z':
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
