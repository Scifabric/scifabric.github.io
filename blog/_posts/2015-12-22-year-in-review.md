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

 *  Flickr, 
 *  Dropbox, and 
 *  Twitter.

**With Flickr you can import any album on the site**, or log in with your Flickr account and select the album or set
that you want to import. As simple as that. This feature is pretty handy for galleries, libraries, archives
and museums (GLAM) as they usually have tons of pictures on the [Flickr commons](https://www.flickr.com/commons/) section. Thus, if you
have your photos already in Flickr, import them with a click or upload new photos to it. They give 1TB of space
for free!!

Well, if Flickr is handy, what do you think about our Dropbox integration? Yes, **you can import any
picture, audio file, PDF or video file from your own Dropbox account**. I don't know many people
without a Dropbox account, so as we knew that most people already use this service to store their own
data sets, we thought: what about integrating it into PyBossa? And voilà, here you have it! Another
integration that allows you to select easily your own data sets from a file picker viewer.

We've added in December the Twitter importer. You were looking for sentiment analysis using Twitter hashtags? You can now!
You only have to type the query that you want to import, and PyBossa will do the hard work for you. We've created [two templates](https://github.com/PyBossa/project-twitter-templates)
so you can do sentiment analysis in less than 10 minutes!

While these integrations are cool, we realized that lots of projects were updated *by hand* when
new data became available. For instance, when you are using our [EpiCollect+](http://plus.epicollect.net/) integration
to capture data with phones, you *had* to manually import from time to time the project again to get
the new entries. It was simple, but you had to remember to do it. Thus, we decided to automate it, 
and the **auto importers** were born.

<iframe src="//giphy.com/embed/YXpp9YxWhyWBy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/angry-king-burger-YXpp9YxWhyWBy"></a></p>

Auto importers let you get your data directly into your PyBossa project without having to do it 
by hand. This feature allows you to basically push data to your projects, while you can do other
stuff. Now you can enjoy a cup of coffee while you check your email, as PyBossa will notify you what when the new data
has been added. Enjoy!

Up to now all the integrations are for you, but what about your community? Well, don't worry
we've you also covered. We know that your community wants to get connected, get the latest news of your
crowdsourcing platform, what you have achieved, etc. Due to this, we've integrated PyBossa
with [Mailchimp](http://mailchimp.com/). The integration prompts your new users, when register, if they want to
be subscribed to your newsletter. Simple but effective. Now you don't have an excuse to communicate, more, right?

<iframe src="//giphy.com/embed/XB6pGqvOfJqY8" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/dancing-happy-jimmy-fallon-XB6pGqvOfJqY8"></a></p>

With this approach in mind, communicating with your community, we also wanted to get 
more insights about what's going on in the platform. Hence, **we've developed for administrators
a dashboard** where you can know when a new PyBossa version is released, the number of
registered users in your site in the last week, new created projects, published and updated
as well as a live feed of what's going on. 

Finally, (I told you, we've not forgotten about you developer), **we've included a plugin
system in PyBossa**. This feature allows you to actually extend what PyBossa can do for you.

For example, the British Library and their PyBossa powered platform [LibCrowds](https://github.com/LibCrowds/Z3950-pybossa-plugin) have 
created two cool plugins:

 * [Discourse integration](https://github.com/LibCrowds/discourse-pybossa-plugin): now you can have your own forum in PyBossa without problems.
 * [Z39.50 integration](https://github.com/LibCrowds/Z3950-pybossa-plugin): if your institution uses this protocol, you can integrate it without problems.

Not bad for a year, right? Then, go and grab the latest version!

## Be your own research platform

This year four institutions have chosen PyBossa as their solution to become their
own crowdsourcing research platform (and we're so happy and proud about it). Thus, let's
start with the science!

<iframe src="//giphy.com/embed/Fbyam9ZAJ3J1m" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/time-school-chemistry-Fbyam9ZAJ3J1m"></a></p>

### National Library of Israel

The National Library contacted us this year to showcase what they have achieved with
their PyBossa powered platform [nlics.org](http://nlics.org). Their goal is to improve 
their metadata where they ask contributors to tag, transcribe and answer questions 
relating to historical Israeli documents.

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

Their solution? Use PyBossa to transform human readable documents into machine readable documents, 
publishing a [search interface](http://www.theguardian.com/global/datablog/ng-interactive/2015/mar/27/search-the-nsw-register-of-pecuniary-interests-to-see-what-politicians-have-declared) and a [data set in GitHub](https://github.com/nickjevershed/pecuniaryinterests/blob/master/data.json), as well as a nice [article about this
investigation](http://www.theguardian.com/australia-news/2015/mar/27/exclusive-nsw-liberal-mps-failed-to-declare-financial-interests-on-register).

### The British Library

The British Library joined the club of PyBossa users with their platform [LibCrowds](http://libcrowds.com/).
As with the National Library of Israel, they have several projects where they use PyBossa 
to ask volunteers to transcribe text from printed card catalogues into electronic records 
in order to make them available to a worldwide audience. 

The project is initially focused on the library's Asian and African collections, 
particularly the Chinese and Indian catalogues. Data identified, transcribed or 
translated as part of the project will be freely accessible from the 
British Library's Explore catalogue.

You can find the [first results of the project in their blog](http://www.libcrowds.com/blog/6).

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
[EmpoderaLIVE](http://live.empodera.org/) and we participated in the presentation of the results of Micropasts: a PyBossa
powered project by the British Museum and University College of London. 

![Spear head 3D printed thanks to PyBossa](/assets/img/blog/spear.jpg)
<p class="post-caption">Spear head 3D printed built thanks to PyBossa powered photomasking projects at Micropasts.</p>


At [Zincshower](http://zincshower.com/) we won the award: **Best startup of the event**, something that make us go to
[Sonar+D](http://sonarplusd.com/) a very cool event because we have the chance to listen to the latest trends on
electronic music as well as hang out with some of the most amazing start ups at their Sonar+D
section.

<iframe src="//giphy.com/embed/26tPghhb310muUkEw" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/90s-retro-commercials-26tPghhb310muUkEw">via GIPHY</a></p>

## Crowdcrafting

Crowdcrafting has seen also amazing projects like: [Landfill Hunter](http://crowdcrafting.org/project/landfill/) where the researcher
wants to increase landfill awareness as well as contribute data to help better understand landfills and bring that information into the public discourse.

[European Illegal Parking](http://crowdcrafting.org/project/Illegal_Parking/) want to to build an European Illegal Parking Ranking. Hopefully, this ranking will raise awareness to the problem in Europe and thus pressure the national and local institutions to pursue more effective measures to tackle the problem. Awesome, right?

Finally, [Localizing Pune's Budget](http://crowdcrafting.org/project/localpunebudget/). This project is trying to analyze and evaluate the ward-level infrastructure and public spending for Pune. Out of 9,614 budget items listed in the annual budget book for 2015-16 (see the simplified and combined list in bottom link), about 1,997 do not have any ward number or whole-city marking alloted. It would be great if you could assign the proper ward numbers to these works: so they then can have a more accurate picture about the investment made in various areas of Pune.

If we've to show our **vanity checks**, we can say that **people have uploaded more than 200K tasks to Crowdcrafting**, and close to 
**half a million of answers have been submitted by volunteers from all over the world**.

**2000 new users joined us this year**, while almost **4000 anonymous people participated in a project**.

More than **600 projects were created** and new ones will come for sure in 2016.

While this year has been amazing, we think that 2016 will be even cooler with new additions to PyBossa (like a new
importer for Youtube videos) as well as some secret stuff that we cannot share yet (yes, I'm trying to build momentum
so you'll check the blog next year ;-)).

Merry Christmas and Happy 2016!
