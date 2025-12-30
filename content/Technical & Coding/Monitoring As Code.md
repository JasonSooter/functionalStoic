---
date created: 2023-11-14T11:07:31-07:00
date modified: 2025-09-08T09:33:28-06:00
linter-yaml-title-alias: Monitoring As Code
title: Monitoring As Code
---
# Monitoring As Code

## Changelog

## Resources

## Action Items

## FAQ

---
🙋
✨
[Source]()

---

## Content

## Companies Presenting

### Checkly

- Synthetics & Metrics Company

![[2023-11-14_11-08-35.png]]

### Coralogix

Built on Streamer
![[Coralogix_Overview.png]]

## Webinar 1 - Foundation of MaC: Principles and Approaches

- #🗓️/2023/11/14
- [Video Recording](https://share.vidyard.com/watch/1dKDjtyKeB8pFXMGsjTKwR?&mkt_tok=MzcxLVdUSC02OTEAAAGP3p4PNJ010CkqdNF8blcR-ATaMgf1nLqAQoNamCYLh6PAUoekVXKAsuVxaE7lQ-cSkxMYI3AE_W5leXjlPesI57B87j1Cr1whsm78zpCMbrw)

### Foundations

#### Helpful Definitions

- Monitoring as Code:
	- Theractice of defining monitoring configurations and operations in code, allowing for automated setups, real-time observability across DevOps lifecycles, and seamless integration with development workflows.
- Full Stack Observability:
	- a practice that empowers teams to comprehend the happenings across an entire technology stack at any given moment.
	- Obseri logs, metrics, and traces. Simultaneouly. At the same time
	- Correlate them into a single investigative journey
- Synthetic Monitoring:
	- also known as active monitoring, a [[Methods|method]] used to check the performance, availability, and functionality of websites and applications by simulating user interactions.

#### Core Principles

- **Lifecycle Management**
	- Automate the observability lifecycle; diagnosis, alerting and remediation
- **Integrated within the Developer Workflow**
	- Bring monitoring setup closer to apps and & development workflows
- **Uses High-level Syntax**
	- Easy to understand syntax for improved management and implementation
- **Adopts Software Principles**
	- Version controlled & can be implemented like other baked in software solutions
- **Integrated within CI/CD**
	- Integrates monitoring into CI/CD pipelines for real-time metric collection and failure detection

### Practical Example

#### Coupled Vs. Decoupled

- Coupled:
	- One Repo
		- App + (Alerting, Dashboards, Logging, Synthetics)
- Decoupled:
	- Two Repos
		- App
		- (Alerting, Dashboards, Logging, Synthetics)

![[Decoupled Monitoring as Code Example.png]]
![[Monitoring_as_Code_Coupled_vs_Decoupled.png]]

## Webinar 2 - MaC in Action: A Workflow in Practice

- #🗓️/2023/11/21
- [Video Recording](https://share.vidyard.com/watch/xz4w9Ek2Ri6qn4RwmZkaVT?&mkt_tok=MzcxLVdUSC02OTEAAAGP3p4PNAUWrcX1VIswniNLAw5wHCMm-Cs8719881HqKbVua3NCW3EpdrDOP1FWAerAFYFvQXORFKqPHQWjMgyuX93ENiVZIIhcUT6JFGar7RA)

### Change Management

![[Diffusion of Innovation Theory.png]]

### Challenges & Solutions

#### Planning

![[2023-11-21_11-17-21.png]]

Challenges:
- Scaling
- Velocity
- Unclear Ownership
- Misalignment of stakeholders
- Technical debt
- Expertise limitations

Solutions
- Automation
- Gathering requirements
	- Ease of Adoption
	- Team buy-in
	- Leadership sponsorship
	- Pricing
- Iterating on potential solution

> [!quote] Ensure that the "Right" way is the "Easy" way
> —SRE Guiding Principle

#### Rollout

![[Monitoring as Code - Rollout.png]]

Areas of Challenge

- Scaling
- Alert fatigue
- Velocity
- Executing requirements
	- Leadership requirements
	- Team requirements
- Technical debt
- Expertise limitations

Solutions
- Implementing requirements
	- Rollout checklist
	- Ease of Adoption
	- Maintaining alignment
		- Leadership sponsorship
		- Team buy-in
- Respecting scope of timeline
- Continual iteration
- Documentation

#### Adoption

![[2023-11-21_11-26-50.png]]
 
Areas of Challenge
- Drift
- Alert fatigue
- Versioning & change MGMT
- Maintenance
- Continual Re-evaluation

Solutions
- Continual re-evaluation
- Continual documentation
- Continual alignment
	- Leadership sponsorship
	- Team buy-in
- Continual iteration

### Practical Approaches to MaC

Scaling, Velocity & Expertise Limitations

1. GitOps used to monitor Kubernetes w/ Coralogix + Flux

## Webinar 3 - Implementing MaC: Choosing the Right Tools

- Date: #🗓️/2023/12/05
- [Video Recording](https://share.vidyard.com/watch/EAKv1qeAxfqcVYstXvKwa1?&mkt_tok=MzcxLVdUSC02OTEAAAGP3p4PNNr9Sk0wxj72xuUdEGsMkbDSb6lImyrDikoxZVtut59bNHn6mQs1Y7yI2fmU4_KoaCq-WHH7wM3NErfuv2I77pj2DLwLU2Z7OdmoFQw)

### Criteria for Selection

![[Monitoring as Code - Criteria for Tool Selection.png]]

- Ease of use
	- **Caution**: The cost of not having Ease of use is poor habits by the team
- Cost effectiveness
- Customizable and extensible
	- APIs, Webhooks
- Integration capabilities
	- Integration with Version Control (GIT)
	- Integration w/ CI/CD
- Scalability & flexibility
- Community and vendor support
	- re: Community: Stackoverflow effect. Will you find your answer within the community of users?
- Alerting and reporting capabilities
	- Cost Managment & Tracking Usage
	- Can reports provide insights & audits into what is going on in the platform?
	- Understand adoption & ROI
- Integration with version control
- Composable & configurable

### Practical Examples

#### Configurability & Composability

##### Project / Global Level Config

![[Checkly Config.png]]

##### Composable Config at the Group Level

![[Composable Checkly Group Config.png]]

##### Composable Config at the Dashboard Level

![[Composable Checkly Dashboard Config.png]]

#### Customizable & Extensible

> How the whole is better than the sum of its parts using the Wheel & Spoke pattern as an illustration

### Q&A

### What's Next?

## Related

role::user

What is Synthetic Testing?

<hr class="__chatgpt_plugin">

role::assistant

Synthetic testing, also known as active monitoring, is a [[Methods|method]] used to check the performance, availability, and functionality of websites and applications by simulating user interactions. It involves creating artificial transactions or scenarios that mimic real user interactions with the system. These synthetic transactions are executed at regular intervals from different locations and measure various metrics such as response time, availability, and functionality. Synthetic testing helps identify performance issues, detect errors, and ensure that the system is functioning as expected. It provides proactive monitoring and helps organizations maintain a high level of service quality for their users.

<hr class="__chatgpt_plugin">

role::user

Provide a plan to learn how to be an expert at Synthetic Testing

<hr class="__chatgpt_plugin">

role::assistant

To become an expert in synthetic testing, you can follow the following plan:

1. Understand the Basics:
	 - Start by gaining a solid understanding of synthetic testing concepts, methodologies, and its importance in software testing.
	 - Learn about different types of synthetic tests, such as performance testing, availability testing, and functionality testing.

2. Familiarize Yourself with Tools:
	 - Research and explore popular synthetic testing tools available in the market, such as Selenium, Apache JMeter, and LoadRunner.
	 - Choose a tool that aligns with your requirements and learn its features, functionalities, and how to create and execute synthetic tests using it.

3. Learn Scripting and Automation:
	 - Synthetic testing often involves scripting and automation. Acquire knowledge of programming languages commonly used in synthetic testing, such as Java, Python, or JavaScript.
	 - Understand how to write scripts to simulate user interactions, validate responses, and perform complex test scenarios.

4. Gain Hands-on Experience:
	 - Practice creating and executing synthetic tests using the chosen tool and scripting language.
	 - Start with simple test scenarios and gradually move towards more complex ones.
	 - Experiment with different configurations, parameters, and test scenarios to understand their impact on test results.

5. Explore Advanced Concepts:
	 - Dive deeper into advanced concepts such as load testing, stress testing, and scalability testing.
	 - Learn about techniques to simulate realistic user behavior, such as creating test scenarios based on user personas and usage patterns.

6. Stay Updated:
	 - Keep yourself updated with the latest trends, tools, and technologies in synthetic testing.
	 - Follow industry blogs, attend webinars, and join relevant communities to stay informed about new developments and best practices.

7. Continuous Learning:
	 - Synthetic testing is an evolving field, so make continuous learning a part of your routine.
	 - Engage in online courses, certifications, and workshops to enhance your knowledge and skills.

8. Collaborate and Share:
	 - Engage with other professionals in the field of synthetic testing through forums, conferences, or online communities.
	 - Share your experiences, learn from others, and participate in discussions to broaden your understanding.

Remember, becoming an expert in synthetic testing requires a combination of theoretical knowledge, practical experience, and continuous learning. It is essential to practice regularly and apply your knowledge to real-world scenarios to develop expertise in this field.

<hr class="__chatgpt_plugin">

role::user
