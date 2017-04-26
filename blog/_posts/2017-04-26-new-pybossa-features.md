---
layout: post
title:  "PYBOSSA new features: or what you have missing so far"
date:   2017-04-26 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
photo: Community1
photo_author: Arnal Hasonovic
photo_url: https://unsplash.com/collections/364350/community?photo=OKbIo7PEeSs
description: "Scifabric shares the secret to successful citizen science projects"
author: teleyinex
---

Our last blog post is from last year. And you might be wondering: what have been they doing?
Guess no more! We've been adding new cool features to PYBOSSA: full text search api, web push 
notifications, Disqus integration, Favorites API for tasks, headless server...

## Full text search api

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/l2SpZkQ0XT1XtKus0?hideSocial=true" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/colbertlateshow-stephen-colbert-confused-late-show-l2SpZkQ0XT1XtKus0">via GIPHY</a></p>
</div>


PYBOSSA supports real time analysis thanks to its webhooks feature. This allows your projects to get
notified when a task has been completed, so you can analyze your data with our Enki library (or your own).

At the end of the day what this means is that you can rely on the system doing the hardwork for you and
get notified (if you want) to discover the results.

An example of this feature is our project [Sr. Alérgeno](https://sralergeno.pybossa.com). My son is celiac as well as Jorge from my team and his son.
As you can imagine, our conversations go around how do we do shopping and where we can find products that are gluten
free. The problem? There's no free and open data iniatives in Spain (where we both live) so we wanted to give it a try
and we partner with [SoySuper](https://soysuper.com) to build a project where anyone can participate and help us to classify gluten free products.

As you can imagine, we use PYBOSSA, and we built this project with the phones in mind. Our aim is that you don't have to
install a phone app, just launch your web browser and **search for the product you need**.  Search? Yes, you read it right!
Search within the results provided by PYBOSSA.

Up to now PYBOSSA was able to collect the data from volunteers, but now thanks to this feature you can index any of the data
within PYBOSSA via its API. Moreover, as PYBOSSA uses PostgreSQL it understands out of the box different languages making the
full text search really powerful.

As PYBOSSA has an api, using the webhooks feature we get notifications in our webhooks microservice when a product has been
reviewed by 5, 10, 15, 30, 50, 75 and 100 people. PYBOSSA does all the job for you! At each stage, PYBOSSA notifies the microservice
so the stats can be generated and saved in PYBOSSA for making them available in the server.

In this way, we can now do searches within PYBOSSA allowing volunteers to not only contribute but use also the data they have produce. Cool, right?

## Web push notifications

<div class="embed-responsive embed-responsive-4by3">
<iframe src="//giphy.com/embed/ZcHqcyXNije2A?hideSocial=true" width="480" height="272" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ZcHqcyXNije2A">via GIPHY</a></p>
</div>

We think the previous feature is amazing. Specially because you can get all those nice results via the PYBOSSA api, so
you can embed it anywhere you want. However, we were missing a key piece: notifications, or more specifically web notifications.

As you know PYBOSSA allows anonymous contributions, so we wanted to allow everyone to get notified (if they want to) when a new
product has been classified gluten free. For building this we have decided to use OneSignal.com service and we're super happy.

We're so happy that we have built a new library for they PYBOSSA ecosystem, so anyone can take advantage of this feature!

With this new feature you can send notifications to desktops (Firefox and Chrome) and phones with Chrome (Android) -unfortunately iOS 
[does not support this feature yet](https://onesignal.com/blog/when-will-web-push-be-supported-in-ios/).

We have integrated this feature in Sr. Alérgeno as well, so go and give it a try. WARNING: as all the products are from Spain, all the
notifications will be in Spanish.


## Single Sign on with Disqus.com 

<div class="embed-responsive embed-responsive-4by3">
<iframe src="//giphy.com/embed/o0vwzuFwCGAFO?hideSocial=true" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-hacker-webs-o0vwzuFwCGAFO">via GIPHY</a></p>
</div>

PYBOSSA does not have by default a forum. But you have several options out there if you need one. One of them is 
the plugin created by British Library by Alexander Mendes for [Discourse](https://github.com/alexandermendes/pybossa-discourse).

Another option is to use Disqus.com. However, until now you had to ask your users to re-register in their service
as by default single sign on was not enabled. But this is not the case anymore, so from now on you can have full
integration with Disqus.com in your PYBOSSA server or project.

We've deployed this feature for in Crowdcrafting.org, so you can test it right away.

## Favorites API

<div class="embed-responsive embed-responsive-4by3">
<iframe src="//giphy.com/embed/26BRv0ThflsHCqDrG?hideSocial=true" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/heart-teamo-team-o-26BRv0ThflsHCqDrG">via GIPHY</a></p>
</div>

This feature is really awesome as well. Well, sometimes you are participating in a project andthose tasks are amazing because: the pictures are incredible, because the data in the task is important, because ...write here your own reason...

Well, from now on if you want you can allow your users to mark tasks as favs, so they can get back to them easily on their profiles or sort tasks by number of favs.

Let me show a good examle of this feature. In Sr. Alérgeno we allow people to mark a product as a favorite so they can access those gluten-free products they like more once they have been classified by the crowd. 

## Headless server

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/TR6U5sVtI7oac?hideSocial=true" width="480" height="264.96" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sleepy-hollow-TR6U5sVtI7oac">via GIPHY</a></p>
</div>

Last but not least, we have transformed PYBOSSA into a headless server if you need to. What does it mean? Well, it means that you can write your full frontend in your preferred JS framework. We love Vuejs, but you can use React or Angular. It's your choice!

And that's all, well, not really as we have fixed lots of issues, added new improvements etc. Check out our Github page and follow our work!
