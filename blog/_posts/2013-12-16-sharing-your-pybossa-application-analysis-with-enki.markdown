---
layout: post
title: "Sharing your PyBossa application analysis with Enki"
date: 2013-12-16
photo: enki
photo_author: Georgelazenby
photo_url: http://en.wikipedia.org/wiki/File:Chaos_Monster_and_Sun_God.png
description: "Now you can not only share your analysis, you can also get feedback and patches on it as a iPython notebook, tweet about it, and improve it over time because you can save the notebook as a Github Gist."
author: teleyinex
keywords: analysis, statistics, pybossa, ipython, open science
---

Up to now if you have created your own application in your [PyBossa server](http://daniellombrana.es/pybossa.html) or
in [Crowdcrafting](/crowdcrafting) you have to create your own library or script to download the results
from the server and process them.

PyBossa provides links for every application to download the tasks and task runs in a CSV file or in JSON (if you want
to hack around it more easily), however doing the analysis usually involved some work that could be tedious.

In order to solve this problem, I decided to creat a very simple to use Python package that downloads all the completed tasks
and its associated answers and gives you the right tools for doing the analysis without having to write none of the usual tests.

The result: [Enki](http://github.com/PyBossa/enki)


## Enki

Enki is a very simple package that uses the [PyBossa-Client](http://github.com/PyBossa/pybossa-client) and [Pandas](http://pandas.pydata.org/)
package to achieve the following two items:

* Get all the tasks and task_runs,
* Analyze them using the amazing Pandas framework.

Enki is so simple to use, that all you have to do to analyze your app is the following:

```
    >>> import enki
    >>> e = enki.Enki(api_key='private', endpoint='http://server', app_short_name='your-app-slug')
    >>> e.get_all()
```

Once all the tasks and task_runs have been downloaded, Enki will create automatically for you a list of data frames for the tasks,
and a dictionary where the keys are the tasks IDs and the values are data frames of the associated task runs.

Then, if your application was for example asking if you see a human face in a picture, and the available answers are: Yes, No and I do not know,
getting the most voted answer is as simple as this:

```
    >>> task = e.tasks[0]
    >>> e.task_runs_df[task.id]['info'].describe()
```

As Enki uses Pandas software, the describe function will detect if it is dealing with strings, or with numbers. In the latter case you
will get the mean, avg, std, etc. as a result of the output. Handy, right?

## Ipython + Enki = sharing the analysis 

Therefore, Enki is the right tool for doing the analysis of any of your PyBossa applications. However, I wanted to provide a more
interesting tool. I wanted to easily share the analysis in order to embrace **open science**, so other researchers and citizens could
replicate my analysis and let me know if I made a mistake.

For these reasons, as Pandas is integrated with Ipython you can create a notebook and share it with the rest of the world using
the [Ipython Notebook viewer](http://nbviewer.ipython.org).

This integration is **amazing**. Now you can not only share your study, you can also get feedback and patches on your notebook,
tweet about it, and improve it over time because you can save the notebook as a [Github Gist](https://gist.github.com/).

In order to show how awesome is this feature, I have created a simple notebook to analyze the [Crowdcrafting Video Pattern Recognition application](/crowdcrafting).

The Gist is available [here](https://gist.github.com/teleyinex/7991086), and you can directly view it [here](http://nbviewer.ipython.org/gist/teleyinex/7991086).

<iframe class="hidden-phone" src="http://nbviewer.ipython.org/gist/teleyinex/7991086" style="width:100%; height:500px;">
</iframe>

Thus, if you have a Crowdcrafting application and you need to analyze it, start using [Enki](http://github.com/PyBossa/enki).

**NOTE**: [Enki is the name of a Sumerian god of the intelligence](http://en.wikipedia.org/wiki/Enki).
