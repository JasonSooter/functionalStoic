---
tags:
  - tools/alfred
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-08-29T20:34:35-06:00
title: Alfred
linter-yaml-title-alias: Alfred
---
# Alfred

## Changelog

## Resources

- [[#Alfred Presentation]]
- [How You Use Alfred: Hundreds of Tips](https://www.alfredapp.com/blog/showcases/how-you-use-alfred-podcasts-blogs/)
- [Universal Actions](https://www.alfredapp.com/blog/tips-and-tricks/universal-actions-fine-control-over-workflow-integration/)
	- Take a look at the built-in `Getting Started > Universal Actions` workflow from the + button in Alfred's Workflow preferences to see the above example in action.

## Action Items

## Workflows

- [alfred-uuid | Generate UUIDs in v1 and v4](https://github.com/MariusRumpf/alfred-uuid)

## Snippets

- [Dynamic Placeholders](https://www.alfredapp.com/help/workflows/advanced/placeholders/)
	- [Date](https://www.alfredapp.com/help/workflows/advanced/placeholders/#date-time) ([source](https://www.alfredforum.com/topic/10018-week-number-snippet/?do=findComment&comment=50290))
		- [Underlying Date Format Syntax](https://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns)

## Alfred Presentation

- #🗓️/2021/10/05

> Teach me Something Presentation for the Solutions Architect Interview

#tools/alfred

### Action Items

```dataviewjs
dv.taskList(dv.current().file.tasks);
```

### Introduction

#### Slide 1 - Topic & Personal Intro

- [x] Slide 1 Complete
---
- introduce yourself and name the topic. Who are you? Why are you here? What are you going to speak about? Tell them NOW that you will have a minute to ask their questions in the end (this remark will save your common time).
---
- Jason Sooter
	- Supportability Engineer for the Twilio Flex Product
	- Bridge between Support & Product / Engineering
- Teach you about one of my favorite tools - Alfred (aka Productivity Butler)

#### Slide 2a - Value Proposition

2 minutes
- [x] Slide 2a Complete
---
- Show and emphasize the relevance of the topic. Why is it interesting? Why do they need to listen to you?
---
- Knowledge workers have an increasing workload.
- Tech companies have significant opportunity to seize
- Efficient use of time with repetitive tasks adds convenience, accuracy, and improved results.

### Body

#### Slide 2b - Body

1 minute
- [x] Slide 2b Complete
---
- Tell your story, facts and prove them. You can use this time to tell a fact/story and prove it next, then tell next and prove it, etc. Or to tell a story and then go to the proved facts. What happens? Why is it so? Who told this?
---
- Workflows
	- Create or import immensely powerful workflows to boost your productivity.
- Snippets
	- Save frequently used text clips as snippets, and auto-expand them anywhere.
- Clipboard History
	- Search and paste past copied text clips, images, & links.
- Advanced Scripting
	- Escape hatch to run commands directly in macOS. Passing arguments in and receiving results.

#### Slide 3 - Workflows Overview

- [x] Slide 3 Complete
- Workflows allow for lots of customization using building blocks.
- Attach GIF of scrolling [Alfred-Collection](https://github.com/msoedov/Alfred-collection/blob/master/Readme.md)

#### Slide 4 - Search & Open Common Tools

- [x] Slide 4 Complete
- Search commonly used tools
	- Documentation (show Segment Doc Search)
		- Quickly get to Source/Destination page
		- Common feature
	- JIRA, Zendesk, Twilio Console sections
	- Confluence
	- Search Code/GitHub, Search Logs & Query tools,
- Google Docs (Sheets, Drive, Docs, etc.)
	- Search Drive & open
	- Create new doc, sheet, slide quickly

#### Slide 5 - Browser

- [x] Slide 5 Complete
- Open a Chrome Window
- Browser History
	- Search by page, title, url
		- What page did I go to last week that was useful?
		- What page do I commonly go to that isn't bookmarked?
- Search Bookmarks

#### Slide 6 - Workflows - Text Formatting

- [x] Slide 6 Complete
- Formatting of text & code
	- JSON beautifier
		- Opened into VSCode or copied to clipboard
	- Code Formatter (JavaScript through Prettier)
		- Opened right into VSCode or copied to clipboard
- Improve Text Formatting:
	- Change case, trim white space, and other transformations

#### Slide 7 - Snippets

- [x] Slide 7 Complete
- Snippets
	- Paste Zoom link (quickly jump into a meeting if needed)
	- Email Signature
	- Common greetings + response templates for a variety of situations
	- Contact details (phone, email): [[2021-10-05_12-28-27.png]]
	- Markdown Snippets for Note making/taking: [[2021-10-05_12-30-27.png]]
	- Common Misspellings: [[2021-10-05_12-23-31.png]]

#### Slide 8 - Clipboard History

- [x] Slide 8 Complete
- Copy multiple Items for simultaneous Pasting
	- Text from a few sources, and paste in a destination
		- customer email
		- page in the browser
		- my own notes
		- Paste all in an email reply
	- An example:
		- details from a request (customer, coworker)
		- previous notes I've written
		- documentation link
		- code snippet I wrote
		- some related detail I know I copied last week/month
		- Paste all of these into one destination to write out a response
- Reference something copied in the past
	- Link
	- Response
	- Section of documentation
	- Code snippet

#### Slide 9 - Convenience

- [x] Slide 9 Complete
- Dictionary / Thesaurus
- Search Google
- View GCal Upcoming Events

#### Slide 10 - Advanced Scripting

- [x] Slide 10 Complete
- Advanced (for anyone technical and curious)
	- Write Scripts to accomplish customized workflows
		- Python, Node, Bash, AppleScript
- Escape Hatch for lots of customization

### Summary

#### Slide 11 - Key Takeaways

- [x] Slide 11 Complete
- 1 Minute
- Summarize the main points of your presentation. What was the most important to know?
- Since October 2019, Alfred has helped out 18,394 times. (Average 25.8 times per day)
- Use Workflows to improve the efficiency of repetitive tasks
- Use Snippets to improve speed and consistency of common typed text.
- If you had an assistant, what would they do? Can Alfred assist?

#### Slide 12 - Prompt for Discussion

- [x] Slide 12 Complete
- 1 Minute
- Talk to your audience, ask and answer. What do you think? What do you want to ask?
- More Information:
	- <https://www.alfredapp.com/>
	- Slide Link
---
- [x] Integrate a Screenshot of Solution Architect calling me a Robot in Slack and how the Use of Alfred was the reason
	- [[2021-10-05_12-40-17.png]]
- Any questions?
	- What tasks do you do repetitively that could be improved?
	- Constructive Criticisms?
	- Tips you'd like to share?
- Contact
	- Jason Sooter, jsooter@twilio.com

### Images Used in Slides

- [[2021-10-05_12-40-17.png]]
- [[2021-10-05_11-01-22.png]]
- [[2021-10-05_11-34-51.png]]
- [[2021-10-05_11-36-12.png]]
- [[2021-10-05_11-37-40.png]]
- [[2021-10-05_12-23-31.png]]
- [[2021-10-05_12-28-27.png]]
- [[2021-10-05_12-30-27.png]]
- [[2021-10-05_11-28-27.png]]
