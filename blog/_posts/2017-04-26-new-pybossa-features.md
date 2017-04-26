---
layout: post
title:  "PYBOSSA new features: or what you have missing so far"
date:   2017-04-26 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
photo: list
photo_author: Glen Carstens-Peters
photo_url: https://unsplash.com/search/list?photo=RLw-UC03Gwc
description: "PYBOSSA now supports full text search, web push notifications, disqus single sign on, favs API, headless server..."
author: teleyinex
---

Our last blog post is from last year. And you might be wondering: what have you miss?

A lot! We've been adding new features like: full text search API, web push 
notifications, Disqus integration, Favorites API for tasks, headless server...

## Full text search API (a.k.a. find your data easily)

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/l2SpZkQ0XT1XtKus0?hideSocial=true" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/colbertlateshow-stephen-colbert-confused-late-show-l2SpZkQ0XT1XtKus0">via GIPHY</a></p>
</div>


PYBOSSA supports real time analysis thanks to its [webhooks feature](https://github.com/Scifabric/webhooks). This allows your projects to get
notified when a task has been completed, so you can analyze your data with our [Enki library](https://github.com/Scifabric/enki) (or your own).

At the end of the day what this means is that you can rely on the system doing the hard work for you and
get notified (if you want) to discover the results.

An example of this feature is our project [Sr. Alérgeno](https://sralergeno.pybossa.com). My son is celiac as well as Jorge from my team and his son.
As you can imagine our conversations go around how do we do shopping and where we can find products that are gluten
free. 

The problem? There are no free and/or open data initiatives in Spain around this issue so we wanted to give it a try.
We partner with [SoySuper](https://soysuper.com) to build Sr. Alérgeno where anyone can participate and help us to classify gluten free products,
leaving the data open and free to anyone.

As you can imagine, we use PYBOSSA, and we built this project with the phones in mind. Our aim is that you don't have to
install a phone app, just launch your web browser and **search for the product you need**.  Search? Yes, you read it right!
Search within the results provided by PYBOSSA.

Up to now PYBOSSA was able to collect the data from volunteers, but now thanks to this feature you can index any of the data
within PYBOSSA via its API. Moreover, as PYBOSSA uses PostgreSQL it understands out of the box different languages making the
full text search really powerful.

## Web push notifications (a.k.a. notify your users on their phones)

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/1TxPkOmF3y2Lm?hideSocial=true" width="480" height="354.6122448979592" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/1TxPkOmF3y2Lm">via GIPHY</a></p>
</div>

We think the previous feature is amazing. Specially because you can get all those nice results via the PYBOSSA api and
embed it anywhere you want (yes, it supports CORS as well!). However, we were missing a key piece: notifications, 
or more specifically web notifications.

As you know PYBOSSA allows anonymous contributions, and we wanted to allow everyone to get notified (if they want to) when a new
product has been classified gluten free. One key benefit of push notifications is that users do not need to register or provide
any email. In other words, volunteer can follow the project progress without sharing any private information, 
does it sound familiar? Well, PYBOSSA embraces this as well, as anyone can participate without having to register.

For building this feature we have decided to use [OneSignal.com](https://onesignal.com) service and we're super happy.

We're so happy that we have built a [new library](https://github.com/Scifabric/pybossa-onesignal) for the PYBOSSA ecosystem. With this new feature you can send notifications to desktops (Firefox and Chrome) and phones with Chrome (Android) -unfortunately iOS [does not support this feature yet](https://onesignal.com/blog/when-will-web-push-be-supported-in-ios/).

Web push notifications are available as of today in Sr. Alérgeno, go and give it a try. WARNING: as all the products are from Spain, all the
notifications will be in Spanish.


## Single Sign on with Disqus.com (a.k.a. writing comments without trouble) 

<div class="embed-responsive embed-responsive-4by3">
<iframe src="//giphy.com/embed/o0vwzuFwCGAFO?hideSocial=true" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-hacker-webs-o0vwzuFwCGAFO">via GIPHY</a></p>
</div>

PYBOSSA does not have by default a forum. But you have several options out there if you need one. One of them is 
the plugin created for the British Library by Alexander Mendes for [Discourse](https://github.com/alexandermendes/pybossa-discourse) software.

Another option is to use [Disqus.com](https://disqus.com). While you can use Disqus in any PYBOSSA server, there was a problem: if a user
wanted to post a comment they have to re-register in their service. Bad user experience definition ;-).

With Single Sign On this is not the case anymore. From now on you can have full
integration with Disqus.com in your PYBOSSA server or project.

We've deployed this feature for in Crowdcrafting.org, so you can test it right away.

## Favorites API (a.k.a. allow your users to fav tasks)

<div class="embed-responsive embed-responsive-4by3">
<iframe src="//giphy.com/embed/26BRv0ThflsHCqDrG?hideSocial=true" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/heart-teamo-team-o-26BRv0ThflsHCqDrG">via GIPHY</a></p>
</div>

This feature is really awesome as well. Well, sometimes you are participating in a project and you think that those tasks are amazing because: the pictures are incredible, because the data in the task is important, because ...write here your own reason here...

Well, from now on -if you want- you can allow your users to mark tasks as favs, so they can get back to them easily on their profiles. For you the benefit will be that you can know which are the most popular tasks as you can sort them by number of favs.

A good example is again our Sr. Alérgeno project. In this PYBOSSA server we allow people to save a product as a favorite from the search menu. In this way, registered users can create a list of their favorite gluten free projects directly from the web. Simple and useful at the same time.

## Headless server (a.k.a. finally you can write only JS)

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/TR6U5sVtI7oac?hideSocial=true" width="480" height="264.96" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sleepy-hollow-TR6U5sVtI7oac">via GIPHY</a></p>
</div>

Last but not least, we have transformed PYBOSSA into a headless server if you need to. What does it mean? Well, it means that you can write your full frontend in your preferred JS framework. We love [Vuejs](https://vuejs.org), but you can use React or Angular. It's your choice!

And that's all, well, not really as we have fixed lots of issues, we have more than 1500 tests, added new improvements etc. Check out our [Github page](http://github.com/scifabric) and follow our work! Bye!!!

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/15BuyagtKucHm?hideSocial=true" width="480" height="271.68" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/15BuyagtKucHm">via GIPHY</a></p>
</div>
