---
date created: 2024-01-15T15:15:18-07:00
date modified: 2025-10-24T19:57:03-06:00
linter-yaml-title-alias: Journey to Software Engineer
title: Journey to Software Engineer
---
# Journey to Software Engineer

## Changelog

## Resources

- [What makes you a senior software engineer anyway? | Swizec Teller](https://swizec.com/blog/what-makes-you-a-senior-software-engineer-anyway)

## Action Items

- [ ] Use these 2 articles as inspiration for writing a post about "What I Do when I Don't Know the Answer"
	- It should use the case of Solutions Architect as very often needing to say "I Don't Know" and being perfectly comfortable with that in the moment. And then dig into the process of what I do next.
	- [How to ask for help | Swizec Teller](https://swizec.com/blog/how-to-ask-for-help)

## FAQ

---
🙋
✨
[Source]()

---

## Content

## Ownership

> [!quote] The best skill you can learn is ownership. Take the task and crush that thing. All the way!

- Ownership is the most important skill that you can have as a Senior Engineer
- That means that when YOU grab the project:
	- It _will_ get done. No matter what
	- Unless it's no longer a priority it like it's hot. This is harder than it looks.
- At its core, ownership is about overcoming obstacles. That includes:
	- [On your worst day](https://swizec.com/blog/flow-good-for-programming-not-engineering/)
	- When the code hates you
	- When Production is on fire
	- When the User story makes no sense
	- When [half your day is spent helping others](https://swizec.com/blog/why-senior-engineers-get-nothing-done)
- These cases are when Ownership shines. Ownership resolves these by:
	- Working around the bad code
	- Make time to fix the bad code
	- [Add FIXME" stories to the backlog](https://swizec.com/blog/reader-question:-when-do-you-fix-tech-debt)
	- When that fails, "YOU" know how to "Ask for Help" and [find people with more context and ask questions](https://swizec.com/blog/how-to-ask-for-help)
	- Clarify the story with the Product Manager

## Team Effort

Using a Surgical team functions as a good [[Analogy]].

You're the [lead engineer for this project](https://swizec.com/blog/how-to-succeed-as-a-lead-engineer-tactics-and-mindsets-from-practice) and the rest of your team is there to help.

_YOU_ own the outcome.
- If the patient dies, your fault
- If the patient lives, your fault
- If there's complications, your fault
- If you publish a report, your name first

But it's a team effort.
- Nurses prep the patient
- Anesthesiologist administers drugs
- A team preps the tools
- An assistant hands you the right thing at the right time
- A trainee opens the patient up and closes them back

You planned it all. From start to finish.
1. Described the tools you'll need
2. The team
3. The procedure
4. Talked with the patient
5. Managed risk
6. Delegated tasks
7. Helped when there's questions.

And then _you_ do the hard part. The critical part. The part that needs an expert. The bit only you can do.

Be the expert. Own the outcome.

## Problem Solver

> [!quote] The more problems you solve for others, the more success you'll enjoy for yourself —Jay P. Decima

- [[Problem Solving]]

As an engineer, [your job is to solve problems](https://swizec.com/blog/what-makes-you-a-senior-software-engineer-anyway), _NOT_ to mindlessly fulfill requirements like a drone.

Own the process. The whole process.

Be the project manager you want to see in the world.
- You get the project
- You read the spec
- You ask questions (Many questions if needed)
Don't begin until _you_ are sure you understand both the spec **and the spirit of the spec**.

## Outcome-Focused

## Mental Models

- [[Abstraction]]
- [[Feedback Loop]]
	- Consider writing about the various tools & techniques I use for feedback loops
		- tests (Wallaby & Quokka)

## Move Slow to Go Fast

- [source](https://www.linkedin.com/posts/ryanlpeterman_many-software-engineers-dont-have-time-to-activity-7224790996566388737-FIm4?utm_source=share&utm_medium=member_desktop)
Many software engineers don't have time to do it right.

Yet, somehow they do have time to do it twice.

Move slow to go fast. There's a lot of work that we do that seems slow but in reality helps us move faster like:

- Preventative follow-up tasks from outages
- Writing good tests and alerts
- Removing tech debt
- Building tools for common flows
- Fixing noisy tests and alerts

Slow is smooth. Smooth is fast.

## 8 Coding Interview Mistakes

- [source](https://www.linkedin.com/posts/ryanlpeterman_it-took-me-dozens-of-failed-interviews-until-activity-7248708626838630401-nqlf)

1. Don’t immediately give a solution. Clarify the question and potential edge cases first.
	- Why: It’s a death sentence if you start solving the wrong problem. Time is already limited during a coding interview. Also, this will get you points for good communication.
2. Don’t try to optimize too early. Give the simple solution ASAP, then optimize it.
	- Why: If you spend too much time trying to get an optimal solution, you’ll delay getting on the scoreboard. Getting an optimal solution is only part of what interviewers are looking for.
3. Don’t start coding until the interviewer is 100% clear on what you will do.
	- Why: What matters is not that you get the correct solution but that the interviewer knows it is correct. Also, interviewers often give subtle signals on whether you’re going in the right direction if you communicate well with them.
4. Don’t code quietly.
	- Why: Similar to point #3
5. Don’t write code that is easy to write but difficult to read.
	- Why: Similar to point #3
6. Don’t worry about exact syntax.
	- Why: The audience that matters most is the interviewer, not the computer. Unless the interviewer says the code must compile, you don’t need to waste time on this.
7. Don’t rely on the interviewer to see if your solution is correct. Proactively test your code and prove that it is.
	- Why: This will help you catch small bugs in your implementation. Also, testing is often something interviewers are explicitly looking for.
8. Don’t just test the happy path. Make sure you cover all potential edge cases.
	- Why: You’ll get extra points for thorough testing.

## How Software Releases Should Be

- [source](https://www.linkedin.com/posts/jorshalick_softwareengineering-softwaredevelopment-coding-activity-7185608166942900224-3blQ/?utm_source=share&utm_medium=member_desktop)

If every software release is:
- don't even think about it during office hours
- timing all the commands you have to run
- white knuckling the whole way
- all-hands-on-deck

You're doing it wrong.

Releases should be:
- predictable
- automated
- revertable
- boring

Some releases may require more baby-sitting. Some may have to be done on off hours. But these should be the exception to the rule.

The only excitement related to a deployment should be the new features the users get.

So remember…

Keep your life exciting, but make your release process boring.
