---
title: "A year and a half at Speak4 in review"
description: "Over the past year and a half"
date: "2023-11-10"
banner:
  src: "../../images/aws-lambda.png"
  alt: "AWS Lambda Logo"
  caption: "AWS Lambda -- Amazon's answer for serverless architectures"
categories:
  - "Speak4"
  - "Software"
keywords:
  - "Speak4"
  - "AWS"
  - "Lambda"
  - "Nodejs"
  - "PHP"
  - "Wordpress"
---

This week Speak4 received two more awards from CampaignTech: "Product of the Year" and "Best Advocacy Platform" (two years in a row!).
This is big news for our small team! It's really exciting being a part of Speak4's journey as we've grown from a tiny team where I was the third full-time employee to a major competitor handling millions of advocates a day.

# Projects

Here's a short list of some of the projects I've completed in the past year:
- Zapier -- building out a custom integration between our platform and Zapier connecting our app to over 5000 different platforms.
- Action Centers -- dynamic landingpages with a map of the U.S. directing users to relevant pages where they can take action.
- Reporting Upgrades -- provide 10 new report types within our reporting dashboard along with a new streamlined interface and the ability to save/share reports.
- Campaign Tagging -- the ability to add tags to political campaigns that help categorize client data in and outside of our app.
- Campaign/LP Duplication -- quality of life improvements allowing users to duplicate their efforts easily.
- Serverless Processing -- migrate the core functionality of our app to AWS Lambda increasing our server capacity by magnitudes.
- Custom Domains -- give our users the ability to white label their pages by setting up their own custom domains on our app.
- Petitions -- new functionality allowing clients to use Speak4 as the ideal place to store their advocate data.
- Custom Fields -- unlock the potential of our landing pages by adding custom fields that link into our data reporting.
- AI -- add an Artificial Intelligence helper that helps users set up their political campaigns.
- Serverless Reports -- migrate our reporting service over to AWS Lambda removing our export limits and adding in scheduled reporting.
- Documentation Site -- build and deploy an internal site with feature specs and FAQ.
- Internal Reporting -- add graphs and visualizations analyzing our KPIs and bringing essential data to our admin site.
- Standalone Advocate Recordings

<!-- ---
title: "How to utilize serverless architecture to increase web traffic capacity"
description: "Harnessing the power of serverless architecture to increase traffic capacity exponentially"
date: "2023-08-25"
banner:
  src: "../../images/aws-lambda.png"
  alt: "AWS Lambda Logo"
  caption: "AWS Lambda -- Amazon's answer for serverless architectures"
categories:
  - "Speak4"
  - "Software"
  - "Serverless"
  - "AWS Lambda"
keywords:
  - "Speak4"
  - "AWS"
  - "Lambda"
  - "Nodejs"
---

Serverless Architecture is all the rage these days. By moving capabilities on

### Context
In the beginning of 2023, I started on a project for Speak4 codenamed <u>Core Lightspeed</u>...
Speak4's customer base was rapidly growing and we had taken on some large clients near the end of 2022.
Crucially, we projected a 300% increase in the number of active users of our site (hitting a total of over 1.5 million)!
However, this level of activity concerned our team. 
If a significant amount of advocates took action to contact their lawmaker at the same time, could our server handle the traffic?
After digging through our data and doing some testing, I discovered the following:
- Our highest number of submissions per second (at the time): 6
- The capacity of requests our server could take before crashing: &lt;25
Not good. If any large campaign brought in a significant amount of advocates at once, we could be in trouble.

### Why use Serverless Architecture?
Here's where AWS Lambda comes in. AWS Lambda is Amazon's tool for creating serverless functions.
By switching to -->