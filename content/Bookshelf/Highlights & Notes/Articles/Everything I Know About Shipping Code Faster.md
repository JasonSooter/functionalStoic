---
title: Everything I Know About Shipping Code Faster
linter-yaml-title-alias: Everything I Know About Shipping Code Faster
date created: 2025-08-31T08:57:31-06:00
date modified: 2025-09-08T09:27:54-06:00
aliases: Everything I Know About Shipping Code Faster
---
# Everything I Know About Shipping Code Faster

<div style="text-align: center;">
		<img src="https://substack-post-media.s3.amazonaws.com/public/images/2e5628fc-b0aa-4759-9eb2-d2d46c623832_828x465.jpeg" width="500px">
</div>

## Metadata

- Author: #people/authors/ryan-peterman
- Full Title: Everything I Know About Shipping Code Faster
- Category: #articles
- Document Note: TODO Write a note about how I personally do each of these
- Summary: To ship code faster, become proficient in code search, collaborate effectively, and learn basic data querying. Write smaller, focused code changes and use tactics like batching tests and using feature flags to streamline the process. Maintain focus by minimizing distractions and optimize your workflow to handle waiting times efficiently.
- URL: https://www.developing.dev/p/everything-i-know-about-shipping

```dataview
task
where !completed and file.name = this.file.name
```

## Highlights

- Before you start writing code, you need to figure out what changes to make and where to make them. If you want to do this fast, you need to: ([View Highlight](https://read.readwise.io/read/01jj2k7j16eya6pj79exksjkcn))
- **Become fluent at code search.** Most codebases are too large to keep in your head. When trying to find where to make changes, you could spend hours reading unfamiliar code which can be a huge time sink. If you’re good at code search, you should be able to find where to make a change in minutes. Learning code search and the relevant keyboard shortcuts is well worth the time investment. ([View Highlight](https://read.readwise.io/read/01jj2k7mjg1zc13dggh34bgamt))
- **Know who knows what.** Again, since codebases are too large for any one engineer to know entirely, you’ll need to rely on others to get up to speed in unfamiliar places. You need to learn who knows what (ask around or check the git blame) and you have to use your soft skills to get the information you need. ([View Highlight](https://read.readwise.io/read/01jj2k7q0j1117rk5cytgz37c4))
- 1. **Learn how to query data.** I cringe when I see engineers asking data scientists to run simple queries for them. Delegation can be good but it can also add more waiting and overhead. If you can get answers for yourself you’ll be a lot faster in figuring out what direction to go in. ([View Highlight](https://read.readwise.io/read/01jj2k7shc5wz3dx4s28a4rwnz))
- Writing Code Faster ([View Highlight](https://read.readwise.io/read/01jj2k817k6apchczza1xw0k7a))
- One of the most important parts of churning out code fast is to [write smaller, focused diffs](https://www.developing.dev/p/why-write-small-diffs). As your code changes get larger, the time to write, test, review, and merge them in goes up exponentially. Not to mention that the chance of catching bugs is much lower: ([View Highlight](https://read.readwise.io/read/01jj2k8aq12e2bhhdssfx59dwb))
- Once you get into a habit of writing small, encapsulated diffs you’ll find that proving your code works can actually take longer than writing it. There are three tactics that helped me test my code faster: ([View Highlight](https://read.readwise.io/read/01jj2k96rd6rdvdrr4c2hh80e0))
- **Batching test plans** - To make testing faster, I created large stacks of commits that were all loosely related on the same code path. I then ran tests covering the entire stack all at once. For a stack of 10 commits, I only paid the cost of testing once while making sure nothing broke. ([View Highlight](https://read.readwise.io/read/01jj2k98zj3sg4k6cab7e31dpq))
- **Gating all changes** - I used [feature flags](https://www.optimizely.com/optimization-glossary/feature-flags/#:~:text=Feature%20flags%20(also%20known%20as,the%20full%20lifecycle%20of%20features.) on every code change I made so that users couldn’t access code paths while I worked on them. That way I could land code as fast as I wanted without worrying about breaking anything. Then when I was ready to release the code, I would verify everything all at once by turning on the flag for a small population while monitoring it. ([View Highlight](https://read.readwise.io/read/01jj2k9bfj91cecwn7rd6k35tg))
- **Copying existing test plans** - Writing code in unfamiliar places was often simple. But I didn’t know how to test it since I wasn’t familiar with the code path. What helped me move much faster was to look at the [git blame](https://git-scm.com/docs/git-blame) for existing test plans. If people document how they tested their code, you can just reuse their methodology to prove your code works. ([View Highlight](https://read.readwise.io/read/01jj2k9dhktzrq24njx6sw10qw))
- Faster Code Reviews ([View Highlight](https://read.readwise.io/read/01jj2kakea1n627n7sgv9z90yt))
- Once I was fast at writing code, I was landing an average of five code changes per day to prod. After 1000+ commits, I learned that the bottleneck in landing code faster was no longer in writing and testing it. My bottleneck became waiting on code reviews. There are two ways to get code reviewed faster: ([View Highlight](https://read.readwise.io/read/01jj2kb2e3xw69ege6b8mn5ktz))
- **Reduce friction for the reviewer**. You want to make your code as easy as possible to review. I try to spoon-feed the reviewer by pointing out what to scrutinize and providing relevant context via comments. Also, another trick I’ve used is hinting with diff titles how fast my small changes would be to review (e.g. adding "[easy]" worked for me). ([View Highlight](https://read.readwise.io/read/01jj2kb5qnz8d0x0qh76brh99a))
- **Get your code approved the first time it’s reviewed.** We spend a lot of time waiting for others to start reviewing the code. That waiting time doubles if you need even one iteration. Before you submit your code for review, preempt any potential feedback and thoroughly test your code. Also, discuss any ambiguous parts of your implementation with people in advance so there isn’t a bunch of thrash after you write it. ([View Highlight](https://read.readwise.io/read/01jj2kb8zxrm9b3hdkzafbdemy))
- Writing software is social. You need to know how to smoothly cooperate with people and request review from them ([View Highlight](https://read.readwise.io/read/01jj2kcyq8ty0w4rs1swbzchcd))
- If you’re a good collaborator, you’ll build trust so that people review your code faster. ([View Highlight](https://read.readwise.io/read/01jj2kd9f2tq5mjptjq1s5zeb7))
- it’s also often helpful to educate people on what you’re working on. The most effective way I found to do that was by writing clear descriptions for each of my code changes. That way anyone who saw it could understand what I was doing and why I was doing it enough to review it. ([View Highlight](https://read.readwise.io/read/01jj2kdykqe9sv8aa149684g9f))
- Maintain Flow State ([View Highlight](https://read.readwise.io/read/01jj2ke511xs7t0xvcpgtzh119))
- Writing code requires deep focus since you need to juggle a lot of context. ([View Highlight](https://read.readwise.io/read/01jj2ked7b2g9fm61vmrrrz6pw))
- Getting all that loaded into your brain's working memory takes time. Every interruption makes you pay that cost again. ([View Highlight](https://read.readwise.io/read/01jj2kew93enzr0w6s72yv5xwj))
