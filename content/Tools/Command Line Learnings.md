---
date created: 2023-02-22T14:55:39Z
date modified: 2024-11-28T17:12:20-07:00
tags:
  - tools/zsh
title: Command Line Learnings
aliases:
  - ZSH
  - ZSH Shell
linter-yaml-title-alias: Command Line Learnings
---
# Command Line Learnings

## Changelog

## Resources

- [15 Special Characters You Need to Know for Bash](https://www.howtogeek.com/439199/15-special-characters-you-need-to-know-for-bash/)

## Action Items

## FAQ

---
🙋
✨
[Source]()

---

## Secure Zip a File via Command LIne

```bash
zip -er <name of zip file to be created.zip> <file(s) to be zipped>

# Example
jasonsooter ~/downloads  zip -er certificate-protected.zip certificate.pem
Enter password:
Verify password:
  adding: certificate.pem (deflated 30%)
```

## ZSH Shell

### Changelog

- #🗓️/2020/11/16 Transitioned Personal + Work computers from Fish → ZSH

### My Setup

- [Helpful Transition Article](https://scriptingosx.com/2019/06/moving-to-zsh/)
- Zinit Framework
	- [GH Repo](https://github.com/zdharma/zinit#installation)
	- [Wiki](http://zdharma.org/zinit/wiki/)
- Plugins
	- Git
	- [Awesome ZSH](https://github.com/unixorn/awesome-zsh-plugins#zinit)
	- [zdharma/fast-syntax-highlighting]([https://github.com/zdharma/fast-syntax-highlighting)
	- zdharma/history-search-multi-word
	- [zsh-autosuggestions: Fish-like autosuggestions for zsh](https://github.com/zsh-users/zsh-autosuggestions)
- Special Configurations
	- Case Insensitive Completion
		- `zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-Za-z}'`
		- <https://superuser.com/a/1092328>
- [How to change your shell](https://askubuntu.com/questions/131823/how-to-make-zsh-the-default-shell)
	- `chsh -s $(which zsh)`

### Aliases

- [Five Types of ZSH Aliases](https://thorsten-hans.com/5-types-of-zsh-aliases#simple-aliases)
	- I currently have these aliases
		- `alias dotfiles='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'`
		- `alias vim=nvim`

### Notes From Twilio Internal `Brief Intro to Zsh by Joe Block`

- Key Takeaways
	- ZSH is the new default shell on MacOS
	- Tab Completions
		- supercharged tab completions
		- on directories
		- AutoCD
		- Tab completion for process ids
		- works with git branches git checkout mtab
		- gh/zsh-users/zsh-completions
			- 130+ extra completions currently
	- Shared History
		- `setopt share history
		- Make all shells share history
		- Autocorrection
			- sl to ls
			- defaults to not fixing, but can be
	- `setopt autocd
	- Syntax highlighting
	- Globbing / Recursive file globbing
		- ls \*_/_ (all subdirectory files)
		- ls \*\*/(.) (just files)
		- ls \*_/_.md
	- Aliases
	- Mass File renames
		- zmv
	- Frameworks
		- Oh-My-ZSH
			- first / 1.0 issues
			- Can be slow to start new terminals
			- more painful to use 3rd party plugins
			- Defined the plugin ecosystm
		- Zgen
			- Much faster session starts
			- can load omz and prezto plugins
			- can clone 3rd part plugins from GH
	- ZSH quickstart kit
		- fzf history search
		- Opinionated but overridable settings
		- p10k prompt
		- macOS helper scripts
		- To get icons on pro mpt, prompt must be Powerline
		- Iterm is best
		- brew helpers
		- auto updates itself
