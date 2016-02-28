---
layout: post
title:  "Cracking down on political corruption with data journalism"
date:   2016-02-26 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
photo: journalism 
photo_author: Dariusz Sankowski
photo_url: https://unsplash.com/photos/3OiYMgDKJ6k
description: "The Guardian Australia uses PyBossa to reveal political misdemeanours"
author: jimmyd
---

Australian politicians, like their counterparts around the world, are not immune to the odd ‘oversight’. Indeed, former premier of New South Wales (NSW) Barry O’Farrell was forced to resign after failing to declare a 3,000 AUD bottle of wine he received as a gift in 2014.

<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//giphy.com/embed/sVDJJaPOl8aOI" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/alan-rickman-gambit-sVDJJaPOl8aOI"></a></p>
  </div>

With the advent of [data journalism](https://en.wikipedia.org/wiki/Data_journalism) – that is journalism linked closely to numerical analysis and statistics – the actions of politicians can be more closely scrutinised than ever before.

[Guardian Australia](http://www.theguardian.com/au) journalists were concerned about the transparency of the pecuniary interests of NSW politicians. They decided to enlist the help of [PyBossa](http://pybossa.com/) and Guardian readers to investigate potential conflicts of interest of politicians in NSW. Using data analysis techniques they discovered some fishy goings on Down Under...

## Lack of transparency

NSW politicians are required to declare interests that may influence their decisions in Parliament in a ‘pecuniary interests register’. These may include business interests, gifts, investments, shares, directorships, pricey bottles of plonk etc.

However, the NSW pecuniary interests register was not easy to scrutinise. Half of the register had never been made available online. While the other half was a jumbled mess of (often handwritten) PDFs. To view politician's interests in their entirety, it was necessary for members of the the public to go to Parliament and view the register in hard copy. None too convenient!

## An open, searchable database

To improve transparency, journalists wanted to create an open, machine-readable database of the interests register for the 2013-14 financial year. Using PyBossa’s [PDF data mining capabilities](http://scifabric.com/blog/2015/09/07/Data-mining.html), they imported scans of the PDFs into a PyBossa platform and set up tasks asking Guardian readers to extract information from the documents. This was the first project of its kind in Australia at a state, rather than federal, level. A [similar project had been set up by the UK Guardian in the wake of the 2009 expenses scandal](http://www.theguardian.com/gnm-press-office/crowdsourcing-mps-expenses).

## Many hands make light work

Guardian readers transcribed the entire pecuniary interest register in less than three weeks. Around 50 contributors completed more that 1,700 tasks and flagged entries that warranted further investigation. The resulting database may be [viewed here](http://www.theguardian.com/global/datablog/ng-interactive/2015/mar/27/search-the-nsw-register-of-pecuniary-interests-to-see-what-politicians-have-declared#results/Casuscelli/Charles).

![alttext](/assets/img/blog/Guardian.png "NSW pecuniary interests scorboard")
<p class="post-caption">Photo by <a href="http://www.theguardian.com/profile/nick-evershed">Nick Evershed</a> A ?</p>

## Analysis

Data analysis techniques were employed to compare the database with other datasets, such as records of contracts, donations and travel expenses. [Nick Evershed](http://www.theguardian.com/profile/nick-evershed), Data and Interactives Editor for Guardian Australia, explains that:

“We cross-referenced [the politician’s] entries with property titles and company register information to reveal politicians who had failed to declare directorships, and investment properties, which contravenes rules around political transparency in NSW”.

## Politicians fail to declare interests

Analysis of the register revealed that two politicians had failed to comply with transparency rules. Fair trade minister Matthew Mason-Cox omitted references to a directorship and shareholding in a superannuation trustee company co-owned with his wife. While NSW Liberal party whip, Chris Paterson, omitted to mention a property that he owned. 

Both promptly updated the register. (Read more [here](http://www.theguardian.com/australia-news/2015/mar/27/exclusive-nsw-liberal-mps-failed-to-declare-financial-interests-on-register).)

## Crowdsourcing: an ideal tool for data journalism

This project illustrates how data journalism and crowdsourcing can combine to extract information from publicly available sources that are difficult to scrutinize, that can then be used to hold organisations and individuals to account.

[Nick Evershed](http://www.theguardian.com/profile/nick-evershed) notes that crowdsourcing is a useful tool in data journalism and that “prior to this project, the transparency of NSW politics was sorely lacking [but]... we made an open, searchable database... to reveal where politicians had failed to comply with transparency rules.”

Both [PyBossa](http://pybossa.com/) software and the [Crowdcrafting](http://crowdcrafting.org/) platform have [easy-to-use PDF data mining templates](http://scifabric.com/blog/2015/09/07/Data-mining.html). So if you’re suspicious about your local MP’s Lamborghini, you know where to begin your detective work!

<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//giphy.com/embed/7r5ERglWWUXC" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/sourcefed-lamborghini-unveiled-7r5ERglWWUXC"></a></p>
  </div>
