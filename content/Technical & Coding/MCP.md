---
title: MCP
linter-yaml-title-alias: MCP
date created: 2025-04-05T17:09:53-06:00
date modified: 2025-06-02T09:51:50-06:00
aliases:
  - Model Context Protocol
---
# MCP

## Summary

Model Context Protocol (MCP) is a framework designed to enhance the context management and operational effectiveness of language models. It aims to address challenges related to the integration and utilization of language models in complex systems that require contextual understanding and precise processing of information.

### Key Features of the Model Context Protocol:

1. **Context Management**: MCP provides mechanisms to manage and maintain context across interactions with language models. This ensures that the model retains relevant information over time, enabling it to generate more coherent and contextually appropriate responses.
2. **Operational Efficiency**: By structuring the interaction process, MCP helps in optimizing the way language models are queried and how they handle information retrieval. This can lead to improvements in response time and the accuracy of results.
3. **Interoperability**: The protocol aims to standardize communications between language models and other systems, facilitating the integration of these models into existing workflows or software solutions.
4. **Scalability**: MCP supports scalability, allowing it to handle varying loads and to manage interactions across multiple instances of language models efficiently.
5. **Security and Privacy**: It incorporates measures to ensure the secure handling of data and to protect user privacy, which is essential when deploying language models in sensitive or regulated environments.
6. **User Experience**: By maintaining context, MCP enhances the user experience, making interactions with language models more intuitive and satisfying.

Overall, the Model Context Protocol provides a structured approach to deploying and managing language models, aiming to maximize their potential by ensuring they operate in a contextually aware and efficient manner.

## Changelog

## Resources

- [Why MCP really is a big deal | Model Context Protocol with Tim Berglund - YouTube](https://www.youtube.com/watch?v=FLpS7OfD5-s)

## Action Items

## FAQ

> [!question] Title
> Contents
> [Source]()

## Content

<div style="text-align: center;">
		<img src="https://d1lamhf6l6yk6d.cloudfront.net/uploads/2025/03/250319-MCP-Market-Map-Yoast-1200x630-1.png" width="500px">
</div>

## Metadata

## A Deep Dive Into MCP and the Future of AI Tooling

- Author: #people/authors/yoko-li
- Full Title: A Deep Dive Into MCP and the Future of AI Tooling
- Category: #articles
- Document Tags: #technology
- Summary: Model Context Protocol (MCP) is an open protocol that enhances how AI interacts with tools, allowing for more autonomous workflows. It enables developers to create versatile applications by connecting various AI services, making tools more accessible. As MCP adoption grows, it could change the way software is built and used, leading to new pricing models and improved AI capabilities.

### What is MCP?

- **MCP is an open protocol that allows systems to provide context to AI models in a manner that’s generalizable across integrations.** The protocol defines how the AI model can call external tools, fetch data, and interact with services. ([View Highlight](https://read.readwise.io/read/01jr43fbqwkdxs3krpzyah6cmc))
- MCP is designed to support autonomous AI workflows. Based on the context, **AI agents can decide which tools to use, in what order, and how to chain them together to accomplish a task.** MCP also introduced a human-in-the-loop capabilities for humans to provide additional data and approve execution. ([View Highlight](https://read.readwise.io/read/01jr43n37k9kk5vg9f6tyc39ey))
- ![](https://d1lamhf6l6yk6d.cloudfront.net/uploads/2025/03/250319-MCP-x2000.png) ([View Highlight](https://read.readwise.io/read/01jr43nhb587ve2tqmw94bfrym))

### Popular Use Cases Today

- With the right set of MCP servers, users can turn every MCP client into an “everything app.” ([View Highlight](https://read.readwise.io/read/01jr43vqvt80b29yey4k66ppb9))
- Take Cursor as an example: Although Cursor is a code editor, it’s also a well-implemented MCP client. End users can turn it into a Slack client using the [Slack MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/slack), an email sender using [Resend MCP server](https://github.com/resend/mcp-send-email/tree/main), and an image generator using the [Replicate MCP server](https://github.com/deepfates/mcp-replicate). A more powerful way to leverage MCPs is installing multiple servers on one client to unlock new flows: Users can install a server to generate the [front-end UI](https://github.com/21st-dev/magic-mcp) from Cursor, but also ask the agent to use an image-generation MCP server to generate a hero image for the site. ([View Highlight](https://read.readwise.io/read/01jr43w6a1stpt74bn8mhqx2sp))
- Beyond Cursor, most use cases today can be summarized into either ([View Highlight](https://read.readwise.io/read/01jr43wdqs2vssynxrp706mc6g))
- dev-centric, local-first workflows ([View Highlight](https://read.readwise.io/read/01jr43wyt6nejn3x35m96nejhg))
- net-new experiences using LLM clients ([View Highlight](https://read.readwise.io/read/01jr43x36973jvhwvzp9jtadwm))

#### Dev-centric Workflows

- For developers who live and breathe in code every day, a common sentiment is, “I don’t want to leave my IDE to do *x*”. MCP servers are great ways to make this dream a reality. ([View Highlight](https://read.readwise.io/read/01jr444wnzfsg912tafq7mwz6g))
- Instead of switching to Supabase to check on the database status, developers can now use the [Postgres MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) to execute read-only SQL commands and the [Upstash MCP server](https://github.com/upstash/mcp-server) to create and manage cache indices right from their IDE ([View Highlight](https://read.readwise.io/read/01jr44595d3y0dwzr1zyhca1fc))
- When iterating on code, developers can also leverage the [Browsertools MCP](https://github.com/AgentDeskAI/browser-tools-mcp) to give coding agents access to a live environment for feedback and debugging. ([View Highlight](https://read.readwise.io/read/01jr445dq8n0n19dne73hkhftt))
- Outside of workflows that interact with a developer tool, a new use that MCP servers unlock is being able to add highly accurate context to coding agents by either [crawling a web page](https://github.com/mendableai/firecrawl-mcp-server) or [auto-generating an MCP server](https://mintlify.com/blog/generate-mcp-servers-for-your-docs) based on the documentation. ([View Highlight](https://read.readwise.io/read/01jr44bja2pwkxw01v7dsvxrcz))
- Instead of manually wiring up integrations, developers can spin up MCP servers straight from existing documentation or APIs, making tools instantly accessible to AI agents. ([View Highlight](https://read.readwise.io/read/01jr44bvkvaq5den09gcdf1z3a))
- This means less time spent on boilerplate and more time actually using the tools — whether it’s pulling in real-time context, executing commands, or extending an AI assistant’s capabilities on the fly. ([View Highlight](https://read.readwise.io/read/01jr44c88n5kxcbtyrns7v7kkd))

#### Net-new Experiences

- IDEs like Cursor are not the only MCP clients available, even though they have received the most attention due to MCP’s strong appeal to technical users. ([View Highlight](https://read.readwise.io/read/01jr44dg43c1xvd5jd737vkp0t))
- For non-technical users, Claude Desktop serves as an excellent entry point, making MCP-powered tools more accessible and user-friendly to a general audience. ([View Highlight](https://read.readwise.io/read/01jr44dzb2syqywfk9kbh04502))
- Soon, we will likely see specialized MCP clients emerge for business-centric tasks such as customer support, marketing copywriting, design, and image editing, as these fields closely align with AI’s strengths in pattern recognition and creative tasks. ([View Highlight](https://read.readwise.io/read/01jr44ebqx61ep63zpykxy9t0j))
- The design of an MCP client and the specific interactions it supports plays a crucial role in shaping its capabilities ([View Highlight](https://read.readwise.io/read/01jr44eq2t9y70mv9xmna5rfjh))
- Ultimately, the **MCP client experience defines the overall MCP user experience** — and we have so much more to unlock when it comes to MCP client experience. ([View Highlight](https://read.readwise.io/read/01jr44fegqqdb6zec40shpm74e))
- One example of this is how Highlight implemented the [@ command](https://x.com/PimDeWitte/status/1899829221813334449) to invoke any MCP servers on its client. The result is a new UX pattern in which the MCP client can pipe generated content into any downstream app of choice. ([View Highlight](https://read.readwise.io/read/01jr44g6rf98vwajtq608f10q3))
- Although we mostly think about servers and clients, the MCP ecosystem is gradually shaping up as the protocol evolves. ([View Highlight](https://read.readwise.io/read/01jr45x4eh2ngdc3b9w71xsj2h))
- ![](https://d1lamhf6l6yk6d.cloudfront.net/uploads/2025/03/250319-MCP-Market-Map-v2-x2000.png) ([View Highlight](https://read.readwise.io/read/01jr45w5ayw6vbh4zj93z05pa4))
- ![](https://d1lamhf6l6yk6d.cloudfront.net/uploads/2025/03/250319-MCP-Market-Map-v2-x2000.png) ([View Highlight](https://read.readwise.io/read/01jr45w5ccg0ejjm6w4zp8beqj))
- There is also a new wave of MCP marketplace and server-hosting solutions emerging to make MCP server-discovery possible. ([View Highlight](https://read.readwise.io/read/01jr45zf358wsafbg2csrz4a36))
- Marketplaces like [Mintlify](https://mintlify.com/)’s [mcpt](https://www.mcpt.com/), [Smithery](https://smithery.ai/), and [OpenTools](https://opentools.com/) are making it easier for developers to discover, share, and contribute new MCP servers ([View Highlight](https://read.readwise.io/read/01jr45z2r8v9p0wcxkkxg3f374))
- much like how npm transformed package management for JavaScript ([View Highlight](https://read.readwise.io/read/01jr45zmd6e4gxs49b9rqjtphk))
- This layer will be crucial for standardizing access to high-quality MCP servers, allowing AI agents to dynamically select and integrate tools on demand. ([View Highlight](https://read.readwise.io/read/01jr460j9c6gr1qgby1sqp67jr))
- As MCP adoption grows, **infrastructure and tooling will play a critical role in making the ecosystem more scalable, reliable, and accessible**. ([View Highlight](https://read.readwise.io/read/01jr460dqb181fyds16zgn13p9))
- Server generation tools like Mintlify, [Stainless](https://www.stainless.com/), and [Speakeasy](https://www.speakeasy.com/) are reducing the friction of creating MCP-compatible services, while hosting solutions like Cloudflare and Smithery are addressing deployment and scaling challenges. ([View Highlight](https://read.readwise.io/read/01jr4615ea5bb77a9vzpgrvv2d))

#### Future Possibilities

- Some things to unlock in the next iteration of the protocol include: ([View Highlight](https://read.readwise.io/read/01jr462dn490xq96j31arfb652))

##### Hosting and Multi-tenancy

- MCP supports a one-to-many relationship between an AI agent and its tools, but multi-tenant architectures (e.g., SaaS products) need to support many users accessing a shared MCP server at once. Having remote servers by default could be a near-term solution to make MCP servers more accessible, but many enterprises will also want to host their own MCP server and separate data and control planes. ([View Highlight](https://read.readwise.io/read/01jr463fzjd1ehhsw9ah99bexp))
- A streamlined toolchain to support at-scale MCP server deployment and maintenance is the next piece that can unlock broader adoption. ([View Highlight](https://read.readwise.io/read/01jr463wbh0qx13ayw7rapcvcb))

##### Authentication

- MCP does not currently define a standard authentication mechanism for how clients authenticate with servers, nor does it provide a framework for how MCP servers should securely manage and delegate authentication when interacting with third-party APIs. Authentication is currently left up to individual implementations and deployment scenarios. In practice, MCP’s adoption so far seems to be on local integrations where explicit authentication isn’t always needed. ([View Highlight](https://read.readwise.io/read/01jr46564fk2b244vv0z08y5cw))
- A better authentication paradigm could be one of the big unlocks when it comes to remote MCP adoption. From a developer’s perspective, a unified approach should cover: ([View Highlight](https://read.readwise.io/read/01jr465fayx65bwxhbnb08wsq4))
- **Client authentication:** standards methods like OAuth or API tokens for client-server interactions ([View Highlight](https://read.readwise.io/read/01jr465k2n7785smvfp3bm05x6))
- • **Tool authentication:** helper functions or wrappers for authenticating with third-party APIs
	- **Multi-user authentication:** tenant-aware authentication for enterprise deployments ([View Highlight](https://read.readwise.io/read/01jr465p6v1s0njn6mr7q3ez9v))

##### Authorization

- Even if a tool is authenticated, who should be allowed to use it and how granular should their permissions be? MCP lacks a built-in permissions model, so access control is at the session level — meaning a tool is either accessible or completely restricted. ([View Highlight](https://read.readwise.io/read/01jr467f75a06ywjx0dkkhehzz))
- While future authorization mechanisms could shape finer-grained controls, the current approach relies on [OAuth 2.1-based authorization flows](https://github.com/modelcontextprotocol/specification/blob/5c35d6dda5bf04b5c8c76352c9f7ee18d22b7a08/docs/specification/draft/basic/authorization.md) that grant session-wide access once authenticated. This creates additional complexity as more agents and tools are introduced — each agent typically requires its own session with unique authorization credentials, leading to a growing web of session-based access management. ([View Highlight](https://read.readwise.io/read/01jr4685g0bve96r28qzgrbshr))

##### Gateway

- As MCP adoption scales, a gateway could act as a centralized layer for authentication, authorization, traffic management, and tool selection. Similar to API gateways, it would enforce access controls, route requests to the right MCP servers, handle load balancing, and cache responses to improve efficiency. ([View Highlight](https://read.readwise.io/read/01jr469rgmfkgamw20d7sstw42))
- This is especially important for multi-tenant environments, where different users and agents require distinct permissions. A standardized gateway would simplify client-server interactions, improve security, and provide better observability, making MCP deployments more scalable and manageable. ([View Highlight](https://read.readwise.io/read/01jr469x42ttsqrv4mkm1n3g5c))

##### MCP Server Discoverability and Usability

- Currently, finding and setting up MCP servers is a manual process, requiring developers to locate endpoints or scripts, configure authentication, and ensure compatibility between the server and the client. Integrating new servers is time-consuming, and AI agents can’t dynamically discover or adapt to available servers. ([View Highlight](https://read.readwise.io/read/01jr46b0dvb9gyt261x5kyp4q0))
- Based on [Anthropic’s talk](https://youtu.be/kQmXtrmQ5Zg?t=4927) at the AI engineer conference last month, though, **it sounds like a MCP server registry and discovery protocol is coming**. This could unlock the next phase of adoption for MCP servers. ([View Highlight](https://read.readwise.io/read/01jr46b8ngweq8b8qst7acnfz9))
