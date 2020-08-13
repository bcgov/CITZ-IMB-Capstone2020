<!--
 * @Author: your name
 * @Date: 2020-07-28 22:06:43
 * @LastEditTime: 2020-07-30 11:43:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \undefinedc:\Users\Mark\Desktop\md\docs\README.md
--> 
# Capstone2020, a Progressive Web App “starter-kit”

# Introduction

This solution is a react.js based client that consumes a DataBC API.

<em>Capstone2020 is an application that provides a starter-kit for BC Gov program areas to launch a user-installable mobile app with the ability to deliver information to users or to collect information from users as part of a digital solution. This guide is designed as a series of tutorials.</em>

## Prerequisites
It is assumed that your team is familiar with modern web-based programming languages and techniques. If you are new to react start by reading [this article](https://reactjs.org/docs/thinking-in-react.html) 

This solution was developed using:

* [react.js](https://reactjs.org/docs/getting-started.html) framework and,

* makes use of [redux.js](https://redux.js.org/)

* an understanding of [Progressive Web Applications](https://web.dev/progressive-web-apps/) will help     


## How we developed the 'PWA starter kit'

During the summer of 2020 working with a developer team from Camosun College we designed and developed this starter kit as part of the Capstone2020 project sponsored by CITZ OCIO-ES Information Management Branch (IMB). The project included two key deliverables:

* ## Modern Application Playbook

    We developed our solution by following the CITZ IMB Modern application [playbook](https://bcgov.github.io/CITZ-IMB-playbook/) which describes a collection of references, tools, and best practices starting from product ideation, project approval, team formation, design, development stages through continuous improvement to the product sustainment lifecycle which our Agile team relied upon.

* ## PWA Starter-kit

    This 'starter kit' was developed as a playbook "exemplar". We developed on the BC DevExchange OpenShift container platform and follow community best practices including adherence to the 12-factor approach.

    It is recommended that you take the time to investigate and understand serviceworkers. We used the code described by Gert Gluckman in this [article](https://medium.com/better-programming/let-users-know-when-you-have-updated-your-service-worker-in-create-react-app-b0c2701995b3?_branch_match_id=675824666082506600). 
    You can find his code at this [link](https://github.com/gglukmann/cra-sw).


## Best Practices
1.	**12 Factor:** This solution conforms to the principles of cloud-ready solution development and follows the twelve factors approach. We describe how we conform in [this article](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/docs/TwelveFactor.md).

2.	**STRA:** contact the [Ministry Information Security Officer](https://intranet.gov.bc.ca/thehub/ocio/ocio-enterprise-services/information-security-branch/miso-contacts) (MISO) for security advice and guidance for your project.  

3. **PIA:** contact the [Ministry Privacy Officer](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy/resources/privacy-officers) (MPO) for privacy advice and guidance for your project

4.	**Standards:** Follow Government’s [Application & Web Development & Deployment Standard](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/security_standard_application_web_development_deployment.pdf) and the [Database Security Standard for Information Protection](https://www2.gov.bc.ca/assets/gov/british-columbians-our-governments/services-policies-for-government/policies-procedures/it-policies/database_security_standards_for_information_protection_-_2018-04_version_1.pdf). 

5.	**Best Practices:** 
    * Design for Data: Use [Flux](https://facebook.github.io/flux/) as an architectural pattern.
    * Follow the [AirBnB](https://github.com/airbnb/javascript/tree/master/react) react.js style guide. 
    * Regular google searches in order to keep up to date with community best practices such as these:
        * https://www.codeinwp.com/blog/react-best-practices/
        * https://medium.com/@konstankino/2019-reactjs-best-practices-design-patterns-516e1c3ca06a
6.	**Use the IMB Checklist:** An end-of-project review was conducted using the playbook checklist as the scoring reference. It is available [here](./Playbook-Capstone2020-Checklist.pdf).


# Features

1. **Installable mobile solution:**  <em>the Capstone2020 starter kit web site was designed to be a user-installable mobile solution. When the user visits the landing page they are asked if they wish to install the solution locally. The mechanics of how this works is handled by the Progressive Web App (PWA) framework.</em>

    <em>Notice below: the user is prompted with an **install notice**. Optionally some devices will show an install button (shown with a yellow box )</em>

    <p align="center">
        <img src="./images/feature1.png">
    </p>

    <em>Notice below: when a new version of the solution has been deployed to the BCDevExchange server the user will receive an **update notice …**</em>

    <p align="center">
        <img src="./images/feature2.png">
    </p>

2.  **User Session:** <em>the first time the user comes to the site they are asked to accept a consent cookie. Since our starter-kit has no user authentication module we use a cookie to track a user. The user is given the option to end a session that clears out all cookies.</em>

    <p align="center">
        <img src="./images/feature3.png">
    </p>

    <em>TIP: Developers should be familiar with the Chrome DevTools that provides debugging insight into browser and application settings. Also, consider installing tools such as “WebViewTest” on the target device. The screen below shows the 
    1) session cookie that the browser initially assigns 
    2) the user consent cookie 
    3) a bookmarked favorite story cookie</em>

    <p align="center">
        <img src="./images/feature4.png">
    </p>

3.	**DataBC API:** <em>the starter-kit demonstrates a fetch of the BC News API and displays news headings and stories which can be filtered based on story options. These options are controlled by the user via a drop-down menu selection.</em>

    API details: https://catalogue.data.gov.bc.ca/dataset/bc-gov-news-api-service

4.	**Favorites/Save Story/Delete Story:** <em>a user can ‘tag’ story’s (using the pin icon) which **saves** the story (based on the story identifier) that can be retrieved and displayed when the user selects **'Favorites'** from the drop-down menu. The user can **delete** a saved story from their selection list by selecting the trash can icon.</em>

    <p align="center">
        <img src="./images/feature5.png">
    </p>

5.	**Light/Dark Mode:** <em>a user can toggle between a day (light) and night (dark) mode by selecting the **Dark/Light** Mode option from the drop down-menu.</em>

    <p align="center">
        <img src="./images/feature6.png">
    </p>


6.	**About:** <em>a user can view details about the solution by selecting the **About** option from the drop-down features menu.</em>

# Solution Architecture

The 'PWA starter kit' is based upon the create-react-app solution from Facebook developed using react.js. This ‘start-kit’ provides product owners with a foundation to develop mobile applications. 

By using the start-kit you are inheriting architectural decisions. You should review and adapt the architecture to meet your unique needs [This article](https://blog.usejournal.com/architecting-your-react-application-5af9cd65a891) can help on your journey.

The key elements which are provided include:

1.	**BCGov Branding (Header/footer):**  located in the .src/views/[header.js](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/src/views/Header.js) and [footer.js](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/src/views/Footer.js) files.

2.	**Menu System:**  [uses the react-bootstrap/Dropdown library](https://react-bootstrap.github.io/components/dropdowns/
)
3.	**App Shell:** The Starter-kit uses an App Shell model, [this document](https://developers.google.com/web/fundamentals/architecture/app-shell) identifies the advantage of following this approach as being: <em>"minimal HTML, CSS and JavaScript required to power the user interface and when cached offline can ensure instant, reliably good performance to users on repeat visits"</em>

<br/>

<p align="center">
    <img src="./images/architecture.png">
</p>

## App Start: 

* The following sequence diagrams are intended to assist you as navigate through our code.

* In the 'App Start' sequence Capstone2020 is the solution landing page  the user navigates to either from a URL or by starting their installed mobile PWA.

* The App Shell is installed in memory as a single page application, the only calls are either to the NewsBC API or in the event of code updates the serviceworker will notify the user of a new solution version.

* App.js is the container that handles all user interaction. Components are functions that implement the code logic such as the menu system with our features. The 'App Start' sequence diagram below shows the initial app startup.

* It shows how we build the landing page consisting of a header and "sticky" footer. Retrieve news stories from the NewsBC API and request the user to accept a Consent Cookie.

<br/>

<p align="center">
    <img src="./images/app-start.png">
</p>

## Selecting features:

* As shown in the [Features](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/docs/Solution%20Readme.md#features) description there are several features we have implemented in the starter-kit that demonstrate filtering the results that are returned from the NewsBC API as well as the other user-selected options such as "Dark/Light Mode",  "Show/Hide Text", bookmarked story "Favorites". When a user selects "End Session" all of the cookies associated with the user will be destroyed.

<p align="center">
    <img src="./images/selecting-features.png">
</p>

###	Key files:

To view the file folder structure and hierarchy review the [build.md](./build.md) file

The main files you will familiarize yourself with are: 


[./.env](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/.env) : where the news API located.

[./public/](https://github.com/bcgov/CITZ-IMB-Capstone2020/tree/master/public)

* [index.html](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/public/index.html) : solution entry point

* [manifest.json](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/public/manifest.json) : for details of why you need this read [this article](https://web.dev/add-manifest/).

[./src/](https://github.com/bcgov/CITZ-IMB-Capstone2020/tree/master/src)

* [./views](https://github.com/bcgov/CITZ-IMB-Capstone2020/tree/master/src/views) : solution code files.

* [./css](https://github.com/bcgov/CITZ-IMB-Capstone2020/tree/master/src/css) : solution style files.

* [./index.js](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/src/index.js) : where the service worker is registered.

## Data Architecture

* The data returned from [NewsAPI](https://catalogue.data.gov.bc.ca/dataset/bc-gov-news-api-service/resource/3692fd5e-87e2-47ab-8eee-9131ea249436) consists of key-value pairs in JSON format.

* The data **after* converting JSON format in [FetchLatestNews.js](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/src/views/FetchLatestNews.js) (line:30 ) is a string array

* Cookie [FetchLatestNews.js](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/src/views/FetchLatestNews.js) (line:23 ) stores data in a  string array



# Technologies used

1.	[React](https://reactjs.org/), a JavaScript library for building user interfaces. This is the main tool used to build the client application.

2.	[Redux](https://redux.js.org/), a state management library for JavaScript applications. Is used by the ServiceWorker module to manage the state of the application. As described in [this article](https://medium.com/better-programming/let-users-know-when-you-have-updated-your-service-worker-in-create-react-app-b0c2701995b3).

3.	[NPM](https://www.npmjs.com/), a package manager for JavaScript. Used to manage the packages that create the Capstone2020 starter-kit app. NPM provides command line tools to run scripts that perform or automate certain functions such as starting the server and running tests.

4.	[Webpack](https://webpack.js.org/), a module bundler for mobile applications. Used as a build tool to bundle  JS and CSS files into a single file. Also used to set up a dev server for local development.

5.	[OpenShift](https://www.openshift.com/) , a hosting environment which includes the runtime container and REST API, coordination, and web interfaces to deploy and manage individual containers

6.	[Jenkins](https://www.jenkins.io/), a deployment pipeline described how to test, build, and deploy app from GitHub to OpenShift

7.	[GitHub](https://github.com/) a the source code repository 

# Additional technologies you may want to use

1.	[Node.js](https://nodejs.org/), a JavaScript runtime for building server-side JavaScript applications.

2.	[Express](https://expressjs.com/), a web framework for Node.js. 

3.	[Babel](https://babeljs.io/), a toolchain used to convert ES5+ code into backwards-compatible JavaScript code for current or older browsers.

4.	[Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme), testing utilities for JavaScript and React applications.

5.	[ESLint](https://eslint.org/), a linter tool for pattern identification and reporting in JavaScript, use alongside the [Airbnb style guide](https://github.com/airbnb/javascript).

6.	[MongoDB](https://www.mongodb.com/), a document database with the scalability and flexibility that you want with the querying and indexing that you need.

7. [Postgress](https://www.postgresql.org/about/), a powerful, open source object-relational database system.

8.	[Redis](https://redis.io/topics/introduction), an open source, in-memory data structure store, used as a database, cache and message broker. 

**A full list of the tools and technologies used in this project is available in the <em>[package.json](https://github.com/bcgov/CITZ-IMB-Capstone2020/blob/master/package.json)</em> file.**

# Possible solution enhancements

1.	**User Stories**,  maintaining a user story catalog  ensures that developed features align to value statements and identify enhancement opportunities.

2.	**Push notification**, incorporate a communication channel to the user notifying them of specific features, service availability windows, feedback channels. PWA architecture supports this ability.

3.	**Testing**, due to time considerations we did not develop a robust suite of tests using jest or Enzyme. You should!

4.	**Logging**, on the roadmap but not implemented. Incorporate analytics by logging events that will provide information about the user experience. Consider using the Winston library and logging your event streams to the IMB Logstash collector. 

5.	**Menu system**, consider implementing a sliding menu as is common in most mobile apps

6.	**Database**, the starter kit would benefit by having a backing database service and the use of Redux (or Equiv) robust data handling.

7.	**Oauth**, there are use cases where user authentication is a requirement

8.	**Dark mode**, consider changing how the menu system reacts the dark mode. In the ‘Starter-kit’ Alpha version this has been identified as a defect. 


# Contributing

This is an open-source project licensed under the Apache licensing agreement and as such contributions are highly welcome. However, there are some recommended guidelines to follow to ensure proper collaboration by everybody. Before we get to those, however, here is how you will get the project set up on your local development system (first ensure you have Node and npm installed):

## Getting set up

Follow the [local installation](./build.md) tutorial.

We hope that everything you need to know about the Capstone2020 PWA starter-kit can be found in the tutorial. If you have a suggestion or an improvement please open a GitHub issue on the [main starter-kit repository](https://github.com/bcgov/CITZ-IMB-Capstone2020).

## Deploying to OpenShift
Follow the Deploy to OpenShift tutorial.

* [Modern web apps to OpenShift Part 1 - Web apps in two commands](https://developers.redhat.com/blog/2018/10/04/modern-web-apps-openshift-part-1/)

* [Modern web apps to OpenShift Part 2 - chained builds](https://developers.redhat.com/blog/2018/10/23/modern-web-applications-on-openshift-part-2-using-chained-builds/)

* [Modern web apps to OpenShift Part 3 - development environment](https://developers.redhat.com/blog/2019/01/17/modern-web-applications-on-openshift-part-3-openshift-as-a-development-environment/)

* [Modern web apps to OpenShift Part 4 - Pipelines](https://developers.redhat.com/blog/2020/04/27/modern-web-applications-on-openshift-part-4-openshift-pipelines/)

Everything you need to know about this can be found in the tutorial.

## Maintaining your solution

Follow the [Maintain Capstone2020 Solution App](./maintain.md) tutorial

Everything you need to know about this can be found in the tutorial. It includes formats for commit messages, branch naming, and PR description.


### Useful links

* CITZ IMB Modern Application Playbook<br/>

    https://bcgov.github.io/CITZ-IMB-playbook/

* PWA<br/>

    https://www.youtube.com/watch?v=IaJqMcOMuDM

    https://medium.com/progressive-web-apps/pwa-create-a-new-update-available-notification-using-service-workers-18be9168d717

* Service Workers<br/>

    https://create-react-app.dev/docs/making-a-progressive-web-app/

    https://developers.google.com/web/fundamentals/primers/service-workers

* BC News API 

    https://catalogue.data.gov.bc.ca/dataset/bc-gov-news-api-service/resource/3692fd5e-87e2-47ab-8eee-9131ea249436

* BC DevExchange

    https://bcdevexchange.org/

* React Architecture

     https://www.simform.com/react-architecture-best-practices/
