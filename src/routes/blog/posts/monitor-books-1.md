---
title: monitor pt 1
date: 2021-02-1T12:51:00.000Z
slug: monitor-1
excerpt: monitor is a publication platform for poetry, innovative writing and criticism based in manchester, uk. in this post i detail how i made the first two versions of their site
---

## monitor part one
<p style="opacity: var(--almost-full-opacity); font-style: italic;">
This is part 1 in a 2 parter on how I built a website for Monitor - a publication platform for poetry, innovative writing and criticism based in Manchester. This post details how I made the original version the website up to the point where we started selling our first product. To read the second part about how I added more products and basket functionality <a href="./blog/monitor-books-2">click here</a>.
</p>
---

Coding tutorials often teach you how learn a new technology by showing you how to make a to-do list app or to build a website for a fake company. Although this is useful for getting to grips with some new tech I found it difficult to stay motivated when taking these projects further when the tutorial has finished.  I found what really drove me to take the project further than the tutorial *and* helped me take on board the lessons from the tutorial motivated me was solving my own real-world problems with the teachings from the tutorial. 

I  discovered this method of learning worked well for me when I was first learning web development. Around this time a friend was looking for a site for their new project: **[Monitor](http://www.monitor.co.uk)** - a publication platform for poetry, innovative writing and criticism based in Manchester. It seemed like a good fit for what I was looking for as the project initially was small, the publications that Monitor had planned looked really exciting and the designs were beautiful. Another crucial factor in my decision to take on this project was that Monitor is run by a good friend of mine and we had a mutual interest in each other doing well, I wanted the project successful just as much as they wanted me to be successful as a developer.

### Humble beginnings

I started the first version of the Monitor site in 2019 before I'd even started bootcamp or written any client side Javascript.I was keen to dig deeper on fundamental languages of the web - HTML and CSS - as well as learning what was involved in getting a site live in it's totality - hosting and DNS.

I had taken some of the HTML and CSS courses on [FreeCodeCamp](http://freecodecamp.org) and thought it would be easy enough to throw a website up that just had a page for the book and an 'about' page. Developing this was a dream! As there was no frontend framework or bundling I was able run the HTML files straight in the browser with no load times. Having a simple set up like this made it easy to focus on making the pages and not fiddling with config files.

Another facet of deploying this site that was made easy by going vanilla was the hosting. I am lucky to be able to have a local hosting provider down the road from me - [Zen](http://zen.co.uk) who offer a great service on hosting and domains. It was as simple as buying a domain, renting some server space, FTP-ing my files on to it and the site was live! It took seconds to deploy so I was able to make changes and the client was able to see them very quickly, giving me short feedback cycles and making sure we stayed on the same page.

Of course we needed the ability to sell products which could have been complicated for a newbie so I used PayPal Buttons which allowed users to buy through Paypal. This was so easy to do, the hardest part was adding custom styles to the button.

I wish I had screenshots of this site, it probably didn't look great and it was never put live but I learned a lot whilst making it - things I use almost every day - like the importance of good, simple markup. Also I hadn't really understood how the internet worked before, I had read a lot about it but something never really clicked. The process of uploading files from my computer, to someone else's and hitting a domain I had configured made everything click.

Another thing I learned from this project was how far out estimations can be, due to lack of knowledge about everything involved something that I thought would take me 5 minutes turned out to be much more complicated than I had thought and, more rarely, something that I thought would be complicated was trivial.

I had the site ready to go but the printing of the books took much longer than we expected so there wasn't any need for the site at this point so it never got deployed to the wider world. Around this time I started bootcamp and put the website on hold as I didn't want to overwhelm myself whilst studying.

### Monitor 1.0

After having my mind expanded at [Northcoders](www.northcoders.com) I was looking for a job and keen to put into practice what I'd learned at bootcamp. It looked like the publication date for Monitor's first book was nearing but with enough time for me to completely rebuild the site with React.

The bedrock of the current site layout was built in version 1.0, the pages for books haven't changed *too* much since this version - just some tweaks and fixes to visual defects. However where the data/state management has changed numerous times which I will details in the next post.

At this point though there was no data store, there was still only 1 book to sell so I could hard-code the copy and images for now.

Without too much pain I had managed to rebuild the site in React and improve on what we already had. I added an intro page that showed the Monitor logo for a few seconds before loading the page for the book and added some logic to show the user what page of the site they were on in the nav bar.

Now I understand using React to build a site as small of this is perhaps overkill but I wanted to learn how to use React better and so a small scale project like this was ideal. I managed to get my first developer job about a month after graduating from Northcoders so the time that I had to build the website dramatically decreased but what we had was good enough - it was selling books and it looked o-k 😅.

### Monitor 1.1

![a screenshot of the monitor site in early 2020](./article_photos/monitor-v1.jpg "monitor 1.1")

A few months later the client told me that he'd made a video for Monitor and was hoping to put them live on the site - this was a simple update. I just needed to add another page for the video and ensure people could navigate to it. My most treasured learning from this part of the project was iframes and how interesting/frustrating styling them could be. The video was hosted on Vimeo and the embed link for that was an iframe that, for a while, I bumbled about with like a child failing to make a dog out of a balloon before reaching a point that both the client and I were satisfied with the dimensions of the video.

Although when I started I didn't realise that this process of getting a small slice of functionality ready for feedback from the client as soon as possible is a key tenet of the agile methodology I  definitely saw how short feedback cycles helped the project.

The next challenge for me was adding another book to the shop and all the state management involved in a shopping basket which will be discussed in the next part of this blog.