---
title: How to Decrypt PGP File
date created: 2023-07-25T17:02:22-06:00
date modified: 2025-09-08T09:33:29-06:00
---
# How to Decrypt PGP File

- [Video Demonstration from Sean](https://www.loom.com/share/42b463ccc0f8400baa38a1af4f9f26ee?sid=5f8292a2-019d-449a-965d-9319436380d5)

Mostly followed this writeup:
- [https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/](https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/)
Keys are stored here:
- [https://start.1password.com/open/i?a=U727N26RPNDNVNOVIWYTNDHO5I&v=chhx662slccdeqmbagc5xvztei&i=hou4nlitzjdobbwmzu44idvwsm&h=segment.1password.com](https://start.1password.com/open/i?a=U727N26RPNDNVNOVIWYTNDHO5I&v=chhx662slccdeqmbagc5xvztei&i=hou4nlitzjdobbwmzu44idvwsm&h=segment.1password.com)
Tips on programmatically decrypting
- [https://e-green.medium.com/programmatic-decryption-with-gpg-composing-commands-dd6e4f3e73da](https://e-green.medium.com/programmatic-decryption-with-gpg-composing-commands-dd6e4f3e73da)

1. per video, i had to add an additional flag not listed here. here's what I use in the video:
2. `gpg --pinentry-mode=loopback --batch --passphrase "xxx" --output testH_decrypted.txt --decrypt testH.txt.gpg`
3. Forgot to add this to the video, and I didn't need to do it myself - but the doc above has a command to import the key - I guess you'll need to run this command before you can run the gpg commands
4. `gpg --import <path/to/privatekey>`
