---
linter-yaml-title-alias: 23 Factor App Principles
title: 23 Factor App Principles
date created: 2025-01-20T14:07:46-07:00
date modified: 2025-01-20T14:07:50-07:00
---
# 23 Factor App Principles

## Summary

## Changelog

## Resources

## Action Items

## FAQ

> [!question] Title
> Contents
> [Source]()

## Content

Hey Developers.

If you’re a developer that works with web-facing services, you might have heard about 12 Factor Apps. The term was coined in 2011 by Adam Wiggins in his [book by the same name](https://pvc7kqsl.r.us-east-1.awstrack.me/L0/https:%2F%2Fsendy.fullstack.io%2Fl%2Fxss8928Qimmm2HTLUII571CA%2F1892MxzRh3F2oDf8zt83MDRw%2FGyyXMth8ZqVpoP7dRymg9A/1/0100019460e77921-0f5fd6ed-b004-428e-b5d1-027e3873fbee-000000/hkdi7JQBJpM5L-bHhfg-KC73ML4=408).

But what does it actually mean?

![Andy Meme](https://ci3.googleusercontent.com/meips/ADKq_NbgNFWWVz_aOhlDdWWJtFjRlazzzFWTnF23CCdph40iF6vVho43vYlmfu3dykiavPgIxztToIY0FL-kN5mb_6rAzLo_0F_C=s0-d-e1-ft#https://sendy.fullstack.io/uploads/1735946932.JPG)

The 12 Factor App a set of design principles for developing apps that can scale quickly and securely, and behave consistently for all users.

This isn’t the be-all and end-all of development philosophies - like all design philosophies it has its detractors and situational caveats. But it’s useful for most developers to be aware of.

Here is our (short) summary of the 12 principles.

### Codebase

One codebase tracked in revision control, many deploys - all assets related to an application, are stored in a source code repository. This repo is also accessed by automation scripts essential to the CI/CD pipeline. The main benefit here is consistency across environments and the tailwinds it gives you for scaling your app.

### Dependencies

Explicitly declare and isolate dependencies - only code that is unique and relevant to the purpose of the application is stored in source control. External artifacts are referenced in a dependencies manifest loaded into memory at development, testing, and production runtime.

### Config

Store config in the environment - this means that all local configurations should be passed via environment variables or independent configuration files at runtime. In short, you should build your code to be as agnostic as possible to scale up in new environments, and allow for easy modality changes (i.e. test and dev environments clearly delineated and useful).

### Backing Services

Treat backing services as attached resources - that means your databases, your third-party compliance tools, your web servers. What does this actually mean? It means that these external services are only **loosely coupled** with your code, keeping your codebase flexible and able to work with new services quickly if a change is needed e.g., replacing MySQL with PostgreSQL. Evidently, this keeps your app portable and adaptable to infrastructural changes.

### Build, Release, Run

Strictly separate build and run stages - this one is pretty much what it says on the tin. In principle, a 12 Factor App should have three distinct and replicable stages in their deployment which can be instantiated at any time.

- _Build_: Code retrieved and compiled, artifacts stored
- _Release_: Configuration settings applied
- _Run_: Runtime environment is provisioned

The key to **Build, Release, and Run** is that the process is completely ephemeral. Should anything in the pipeline be destroyed, all artifacts and environments can be reconstituted from scratch using assets stored in the source code repository.

### Processes

Execute the app as one or more stateless processes - this means that no single process keeps track of the status of other processes. When a process is stateless, instances can be added or removed at will based on the needs of the app or the user. State data that needs to exist in perpetuity should be handled by a backing service.

### Port Binding

Export services via port binding - services should be identifiable to the network by port number rather than by domain name. Domain names and IP addresses can be manipulated on the fly, and thus are less reliable and secure than port numbers. That’s why so many common protocols use default port (e.g. SSH being port 22).

### Concurrency

Scale out via the process model - that is to say, organise your processes according to purpose and allow them to be scaled up or down as needed. For example - have load balancers operating on your web servers to enable processes to be scaled up or down in an isolated manner to meet demand. This prevents waste (no unnecessary processes scaled up) make you more flexible in meeting the requirements of the business logic.

### Disposability

Maximize robustness with fast startup and graceful shutdown - this means that you shouldn’t skimp on the housekeeping stuff for your spin up/tear down logic. Validate connections work when setting up, terminate connections that are no longer needed when scaling down etc. It should be fairly self-evident that this goes hand-in-hand with concurrency (as you'll be spinning up new processes frequently).

### Dev/Prod Parity

Keep development, staging, and production as similar as possible - i.e. all your deployment paths should be similar but independent. The Build, Release, Run principle already means that both environments go through the same general set of steps to reach a working runtime. Of course, the environments do need to differ in some ways.

### Logs

Treat logs as event streams - Logs are streams of time-ordered events that capture the behavior of an application. Logged info should be sent to standard output (as opposed to as static artifacts or file) and captured by the execution environment, allowing for a separation of concerns when it comes to logging. Also - logs should be clearly tagged, allowing stakeholders to access the data they need (e.g. requests/response data being marked as such).

### Admin Processes

Admin/management tasks (e.g., database migrations, running scripts, or clearing caches) should be executed in the same environment as the application. These tasks should be run as one-off processes, meaning they are executed manually or on-demand, rather than being part of the application's regular runtime processes. Admin processes should use the same codebase, dependencies, and configuration as the application to ensure consistency.

So there you have it - the 12 Factor App principles. Even if you just use these as a base to extend from, or to pick and choose principles as needed, these design principles each have their own advantages and can help you build consistent and secure apps at web-scale.
