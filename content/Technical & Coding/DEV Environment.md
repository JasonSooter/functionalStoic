---
tags:
date created: 2023-02-22T14:55:39-07:00
date modified: 2024-04-07T16:50:16-06:00
title: DEV Environment
---
# DEV Environment

## Changelog

- Created my [/Uses page](https://www.functionalstoic.dev/uses) based on [Kent C. Dodds example](https://kentcdodds.com/uses/)

## Resources

- Preferred Font
	- [Fira Code](https://github.com/tonsky/FiraCode)
	- <https://coding-fonts.css-tricks.com/fonts/fira-code/>

## Action Items

## FAQ

---

🙋
✨
[Source]()

---

## [[GIT]]

![[GIT]]

## Google Messages

- Using [nativefier](https://github.com/nativefier/nativefier) to run in its own window
	- uses `--darwin-dark-mode-support` flag to support Dark mode

```bash
npx nativefier@51.0.0 https://messages.google.com/web/ \
	--darwin-dark-mode-support \
	--name 'Google Messages'
```

To disable the old build warning, [use this hack](https://github.com/kelyvin/Google-Messages-For-Desktop/issues/74#issuecomment-1880245224):

```
On your local installation, modify:  
resources\app\appnativefier.json

Change:  
"disableOldBuildWarning":"false"

To:  
"disableOldBuildWarning":"true"
```

Also, [based on this GitHub issue](https://github.com/nativefier/nativefier/issues/1568#issuecomment-1702154915), using version 51 of Nativefier is the most recent version that doesn't result in a white screen
