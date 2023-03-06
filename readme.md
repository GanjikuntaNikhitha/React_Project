# React is javascript library.

# Library can exits in framework but in library framework can't exits.

# React does not make app powerful it self, it requires a lot of things, lot of dev dependencies

# Transitive dependencys ? we have one package manager which handles and take care of transitive dependencys of out code. example : Parcel has its own dependencies and these dependencies which can have their own dependencies, 

# for example :
1) framework is nothing but set of instructions
2) In a college will be having different departments based on that students have to sit. same as here in framework if we write code in wrong way it throws an error(Nothing but compilers exits in a framework).
3) Compiler makes the difference between library and framework.
4) Compiler does not exits in library. library is nothing but reusable of code. we can use methods,functions etc...any where. 
example : Jquery is library,

Why choose react:
## 1 Easy to learn
# React is easy to learn not just because there are a great number of easy-to-understand tutorials available on the internet but mainly because it’s a very simple library.
## 2 Faster development
# You can increase your productivity by using the reusable components and development tools
## 3 Trusted by great companies
# React is used by great companies and startups such as Facebook, Dropbox, Khan Academy, CodeAcademy, Netflix, Airbnb, PayPal, Walmart, Tesla Motors, IMDb, and so on. There are many, many popular apps that use React.
# 4 Why are so many great companies and startups using this technology? The answer is that it’s undoubtedly a very high-quality tool for frontend development.

## What is diference between React and ReactDOM 
# React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.1

## What is the difference between development mode and production mode React?
# Development mode includes useful warnings and gives you access to tools that make development and debugging easier. Production mode minifies your code and better represents the performance your app will have on end users' devices.

CORS:
# 1 “CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
# 2 CORS and SOP are both browser policies that have developed in response to issues of browser security and vulnerabilities.

<!-- javascript code which gives react to us and this is written by facebook developers and give to us -->
<!-- core version of library we get all the super powers of react -->
# <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<!-- react dom is nothing but library which gives you access for web -->
# <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

# let us just build the hello world program

Emmet:
# Emmet is a built-in feature of VS Code, so it doesn’t require any additional installation. By using shorthand and abbreviations, Emmet greatly improves and speeds up your HTML and CSS workflow, saving you the stress of having to manually type out the code in

Chapter-2

# props can be anything in create element.

# create react uses webpack, babel as bundler. But we will be using parcel in our implementation. why means easy to setup, easy to learn. 

# what is parcel- it is bundler, and it is known as package

# what is package - module of javascript files. Package manager - npm, yarn etc..

# what is npm - npm stands for Node Package Manager. It's a library and registry for JavaScript software packages and manages lot if packages, manages port numbers for example if we have 2 projects it will automatically create its port number.

# how to use npm - npm init and gave us package json.

# package json- configuration for npm needs to run it

# Bundler like parcel will minify, optimise code, clean your code for production apps,image optimization, dev and build production, caching while dev(caching things), compression files, takes care of older version of browser(browserlist), Consistent hashing algorithm.

# parcel wont remove consoles we need to use package babel plugin transform remove console.

# parcel is the supper fast build algorithm.

# npm install -D parcel what is -d means need parcel in dev environment not in production and it is same as npm install --save-dev parcel.

# "parcel": "^2.8.3" here we are seeing one symbol caret, for example we are having version as 2.8.4 which will automatically updates, means it will updates the minor versions.

# if we have "parcel": "~2.8.3" it will automatically updates the major version.

# after install parcel when we change any thing and save the details automatically updated without refresh what is this functionality known as hot module reload.

# This means parcel uses file watcher algorithm will track what are the changes does user makes in css, html etc.

# If we wont specify anything like "parcel": "2.8.3" it means i just want this version and i dont want any updates to these packages.

# what is this parcel-cache -

# what is dist ? execute the project (npx parcel index.html) it will give us dev build and it hosted on server, keep the minified files.

# (npx parcel build index.html) it will give us production build, it will minified the files.

## what is package lock json file ?
# Is very important file, It locks the exact version and it will keep it safe, will tell you what exact version we need to use on production it dont have any carret or tilde symbols for automatic updates. you should not never put the package lock json file to git ignore and you should not never update the lock file.

# node modules ? when ever you installed something it is in node modules, it is the database of npm. it is important that the reason we need to git ignore. why we dont put in git because our package lock json file have sufficent information to recreate node modules.

# gitignore ? Any thing which is auto generated put in gitignore, anything which can generate on server.

# the below react injecting cdn links adding is not good way and good way is packages. Why means if the version changes example like 19 again we have to change the link and update to new version.
<!-- <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script> -->

# install react to application - npm install react
# install react dom to application - npm install 

# npx means execute using npm. - npx parcel index.html (entry point file) it created server for us.

# never touch/edit node modules/package-lock.json

# what are the things make load page more time like images, cdns etc..

# npx commands are used to executing package without downloading, npm when you want your things to install inside your project. assume npx = npm run.

# something updating in dom is render.

# react.createelement => object => html code(put it on dom).


