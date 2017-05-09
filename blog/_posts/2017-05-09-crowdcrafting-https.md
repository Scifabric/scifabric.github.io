---
layout: post
title:  "Crowdcrafting and HTTPS"
date:   2017-05-09 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
photo: lock
photo_author: Matthew Henry
photo_url: https://unsplash.com/search/security?photo=fPxOowbR6ls
description: "Crowdcrafting will enable by default https at the end of May 2017"
author: teleyinex
---

With the latest release of PYBOSSA (v2.3.7) we have included support for web push
notifications. While you can use this feature with non full HTTPS sites, we recommend
you to enable it for your server. For this reason, we will enable by default HTTPS in
Crowdcrafting.org at the end of May 2017. Also, because we care about safety.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="//giphy.com/embed/3oz8xUJsD8AsihJrtC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/mylabbox-safety-safe-3oz8xUJsD8AsihJrtC">via GIPHY</a></p>

# Crowdcrafting and HTTPS 

We have had https enabled in Crowdcrafting for almost 2 years now, however we never 
forced users to use it by default as some projects are using data coming from http servers
(or JS libraries) breaking their projects.

## Debugging your project

Just type https://crowdcrafting.org instead of http. As simple as that. Then, double check that your project works.

Double check that you are hosting your data in an HTTPS server. Crowdcrafting is integrated with Flickr, Dropbox and Amazon S3 allowing you to use HTTPS without any problems. Also, be sure that you host your Javascript libraries in a CDN or server that has https as well, otherwise your project wont work.

If you have any problems, [contact us](https://scifabric.com/contact/).

## Until when you have time to debug it

Until the 31 of May of 2017. If you need help, [contact us](https://scifabric.com/contact/). We'll be happy to help you and
see how we can solve your problems.


## Why? Why are you doing this to me?

Well, we are doing this because it will make you and Crowdcrafting safer. Also, because we want to give you the possibility to engage with your community using the new web push notifications feature of PYBOSSA.

Also because [browsers will be warning users about unsecure input fields](https://blog.chromium.org/2017/04/next-steps-toward-more-connection.html) by the end of the year, so we want to provide the best possible experience for you and your volunteers.

Thus, go test, and enjoy that your project and volunteers will be safe from
spies!

<div style="width:100%;height:0;padding-bottom:76%;position:relative;"><iframe src="//giphy.com/embed/YN6qUXj4HdXoY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/nsa-spying-pigeon-YN6qUXj4HdXoY">via GIPHY</a></p>
