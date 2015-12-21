---
layout: post
title:  "Year in review"
date:   2015-12-22 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
photo: road 
photo_author: Dustin Graffke
photo_url: https://www.flickr.com/photos/onepointfour/21478226510/
description: "2015 has been an incredible year."
author: teleyinex
---

Wow, another year is almost over. Time flies, and as everyone else, I would love to
reflect in what we've achieved and done through this 2015.

## PyBossa

As you know, or you should :-), the king of our products is [PyBossa](http://pybossa.com). 

PyBossa lets you *build your own research platform* in a few steps, and due to its simplicity
we wanted to bring more new cool features to it, so you, yes, you, you'll be able to do more
with less hacking (I feel you developers, but don't worry we've created also amazing tools for
you, that'll be in a moment).


<iframe src="//giphy.com/embed/oKVs1VY0MKfvO" width="480" height="253" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/nervous-indiana-jones-waiting-oKVs1VY0MKfvO"></a></p>


### Third Party Integrations

We know you have your data in different services. For this reason, we wanted to bring new integrations
to PyBossa. These year we've added two:

 *  Flickr, and
 *  Dropbox.

With Flickr you can import any album on the site, or log in with your Flickr account and select the album or set
that you want to import. As simple as that. This feature is pretty handy for galleries, libraries, archives
and museums (GLAM) as they usually have tons of pictures on the [Flickr commons]() section. Those, if you
have your photos already in Flickr, import them with a click or upload photos to it. They give 1TB of space
for free!!

Well, if Flickr is handy, what do you think about our Dropbox integration? Yes, you can import any
picture, audio file, PDF or video file from your own Dropbox account. I don't know too many people
without a Dropbox account, so as we knew that most people already use this service to store their own
data sets, we thought: what about integrating it into PyBossa? And voilà, here you have it! Another
integration that allows you to select easily your own data sets from a file picker viewer.


While these integrations are cool, we realized that lots of projects were updated *by hand* with
new data as it became available. For instance, when you are using our [EpiCollect+]() integration
to capture data with phones, you *had* to manually import from time to time the project again to get
the new entries. It was simple, but you had to remember to do it. Thus, we decided to automate it, 
and the **auto importers** were born.

<iframe src="//giphy.com/embed/YXpp9YxWhyWBy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/angry-king-burger-YXpp9YxWhyWBy"></a></p>

Auto importers let you get your data directly into your PyBossa project without having to do it 
by hand. This feature allows you to basically push data to your projects, reducing your time in 
running your scripts to push the data. Now you can enjoy a cup of coffee while you check in your email what new data
has been added. Enjoy!

Also, we know that your community wants to get connected, get the latest news of your
crowdsourcing platform, what you have achieved, etc. Due to this, we've integrated PyBossa
with [Mailchimp](). The integration allows your users when they register to accept or decline
being subscribed to your newsletter. Simple but effective. Keep your communications with the tools
that you already use.

<iframe src="//giphy.com/embed/XB6pGqvOfJqY8" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/dancing-happy-jimmy-fallon-XB6pGqvOfJqY8"></a></p>

With this approach in mind, communicating with your community, we also wanted to get 
more insights about what's going on in the platform. Hence, we've developed for administrators
a dashboard where you can know when a new PyBossa version is released, the number of
registered users in your site in the last week, new created projects, published and updated
as well as a live feed of what's going on. 

Finally, (I told you, we've not forgotten about you developer), we've included a plugin
system in PyBossa. This feature allows you to actually extend what PyBossa can do for you.
For example, the British Library and their PyBossa powered platform [LibCrowds](https://github.com/LibCrowds/Z3950-pybossa-plugin) have 
created two cool plugins:

 * [Discourse integration](https://github.com/LibCrowds/discourse-pybossa-plugin): now you can have your own forum in PyBossa without problems.
 * [Z39.50 integration](https://github.com/LibCrowds/Z3950-pybossa-plugin): if your institution uses this protocol, you can integrate it without problems.

In summary, PyBossa keeps growing adding new features that we hope you find useful.

## Be your own research platform

This year at least 5 institutions have chosen PyBossa as their solution to become their
own crowdsourcing research platform (and we're so happy and proud about it). Thus, let's
start with the science!

<iframe src="//giphy.com/embed/Fbyam9ZAJ3J1m" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/time-school-chemistry-Fbyam9ZAJ3J1m"></a></p>

### National Library of Israel

The National Library contacted us this year to showcase what they have achieved with
their PyBossa powered platform [nlics.org](http://nlics.org). Their goal is to improve 
their metadata where they ask contributors to tag, transcribe and answer questions 
relating to historical Israeli documents.

They've customized the look and feel and you can see that they have added lots of work to it.


### The Guardian

[The guardian](http://www.theguardian.com/australia-news/datablog/2015/mar/09/why-were-crowdsourcing-the-nsw-pecuniary-interests-register-faq) newspaper wanted to bring more transparency to New South Wales (Australia)  
pecuniary interests, and they used PyBossa to achieve it making the first crowdsourcing 
project using our technology. 

In New South Wales politicians are required to declare details of gifts, investments, 
business interests, and other items that could influence their decisions in parliament. 

They do this in the pecuniary interests register. However, half the New South Wales 
pecuniary interests register has never been viewable online by the public, and the 
other half is hard to find. All of the declarations are only available as scanned 
PDFs, sometimes handwritten, which makes it difficult to properly scrutinise the register.

They used PyBossa to transform human readable documents into machine readable documents, 
publishing a search interface and a data set in GitHub.

### The British Library

The British Library joined the club of PyBossa users with their platform [LibCrowds](http://libcrowds.com/).
As with the National Library of Israel, they have several projects where they use PyBossa 
to ask volunteers to transcribe text from printed card catalogues into electronic records 
in order to make them available to a worldwide audience. 

The project is initially focused on the library’s Asian and African collections, 
particularly the Chinese and Indian catalogues. Data identified, transcribed or 
translated as part of the project will be freely accessible from the 
British Library’s Explore catalogue.

### University of Heidelberg

The [University of Heidelberg](http://www.heidelberg.edu/) and [Disaster Mappers](https://disastermappers.wordpress.com/) used our PyBossa technology to create two amazing projects.

The [first project](http://crowdmap.geog.uni-heidelberg.de/app/missing_maps_follow_up/) has been about supporting the [Missing Maps Project](http://www.missingmaps.org/) by classifying 
Bing aerial imagery. The volunteer were asked to assess whether there are human 
settlements or major roads in the satellite imagery, [building the first data set](http://umap.openstreetmap.fr/es/map/missing-maps-south-kivu-region-human-settlements-a_53739#9/-2.9842/28.9970) for the
analyzed areas.

The [second project](http://crowdmap.geog.uni-heidelberg.de/app/shelter_dynamics/) was about monitor the temporal and spatial dynamics of camps of 
internally displaced persons (IDP) using satellite imagery to provide credible and 
up-to-date information from Nepal Earthquake natural disaster.

## Events

This year we have participated in several conferences, workshops and symposiums. We were at
[EmpoderaLIVE]() and we participated in the presentation of the results of Micropasts: a PyBossa
powered project by the British Museum and University College of London. 

At [Zincshower]() we won the award: Best startup of the event, something that make us go to
[Sonar+D]() a very cool event because we have the chance to listen to the latest trends on
electronic music as well as hang out with some of the most amazing start ups at their Sonar+D
section.


## Crowdcrafting

Crowdcrafting has seen also amazing projects like:-----

If we've to show our vanity checks, we can say that Crowdcrafting has imported more than 200k tasks, and close to 
half million of answers submitted by volunteers from all over the world.

2000 new users joined us this year, while almost 4k anonymous people participated in a project.

More than 600 projects were created, 
