---
publish: true
title: JWT Learnings
description: Notes while learning about JWT
created: 2019-09-14
modified: 2019-09-14
published: 2019-09-14
tags:
  - blog
  - software-development
socialImage: Attachments/JWT Learnings Hero.jpg
linter-yaml-title-alias: JWT Learnings
date created: 2026-10-16T21:17:04+02:00
date modified: 2026-10-16T21:17:04+02:00
date: 2019-09-14
image: Attachments/JWT Learnings Hero.jpg
---

# JWT Learnings

![[Attachments/JWT Learnings Hero.jpg]]

JWTs (JSON Web Token) is pronounced \`jot\`

Popular way to handle auth.

Discover:

- Pros/Cons
- Best practices for implementing JWT client-side
- Security aspects

[Intro to JWTS](https://jwt.io/introduction/)

In the client-side auth scenario, JWS is a token issued by the server. The token
has a JSON payload that contains information specific to the user. The token can
then be used to validate future calls to an API (by sending along as an HTTP
header) APIs can use the JWT to identify the user and take user specific action.

**But can't a client just create a random JSON payload an impersonate a user?**

They key point that makes JWT auth secure is that it includes a signature
created by the server that issued the token. Any other server that receives this
token can independently verify this signature to ensure the JSON payload was not
tampered with, and has information that was issued by a legitimate source.

**But if I have a valid and signed JWT and someone steals it from the client,
can't they use my JWT forever?**

Yes, if a JWT is stolen, then the thief can keep using the JWT. An API that
accepts JWTs does an independent verification without depending on the JWT
source so there is no way to know if the token is stolen.

This is why JWTs have an expiry value. Expiry values are kept short. Commonly
just 15 minutes so that any leaked JWTs will cease to be valid quickly.

So most effort to maintain JWT security revolve around these 2 issues:

- JWTs should not get stolen
- Short expiry times in case they get stolen

That's why it is crucial to not store JWT on the client (no cookie or
localstorage). Doing so creates security vulnerabilities through
[CSRF](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_\(CSRF\)) &
[XSS](https://www.owasp.org/index.php/Cross-site_Scripting_\(XSS\)) attacks by
malicious forms or scripts.
