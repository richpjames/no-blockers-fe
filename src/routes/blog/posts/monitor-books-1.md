---
title: monitor pt 1
date: 2021-02-1T12:51:00.000Z
slug: monitor-1
excerpt: monitor is a publication platform for poetry, innovative writing and criticism based in manchester, uk. in this post i detail how i made the first two versions of their site
---
## monitor

*This is part 1 in a 2 parter on how I built a website for monitor - a publication platform for poetry, innovative writing and criticism based in manchester, uk. This post details how I made the original version the website up to the point where we started selling our first product. To read the second part about how I added more products and basket functionality [click here](./blog/monitor-books-2).*

When learning to code to begin with I found it difficult to stay motivated making sites or apps just for the sake of learning a new skill. I found what really motivated me was trying to solve real world problems and have a site live with real users really using it.

Fortunately around this time my friend Rory was looking for a site for his new project - Monitor a publication platform for poetry, innovative writing and criticism based in Manchester. It seemed like a good fit for what I was looking for as the project initially was small - we had one book to sell, which meant I could get something up quickly and iterate towards a better website by putting into practice what I was learning. A further crucial element in this project feeling right was that Rory is an old friend of mine, we had a mutual interest in each other doing well.

### humble beginnings

I started the first version of the Monitor site before I'd even started bootcamp or written any client side Javascript.
I was keen to dig deeper on fundamental features of getting a website live - HTML, CSS and DNS/hosting.

I had taken some of the HTML and CSS courses on [FreeCodeCamp](http://freecodecamp.org) and thought it would be easy enough
to throw a website up that just had a page for the
book and an 'about' page. Developing this was a dream! I was just running loading the html files straight into the browser,
This meant there was nothing between my code and what I was seeing on the screen - having a simple set up like this made it easy
to focus on making the pages and not fiddling with config files.

Another facet of deploying this very basic site was the hosting, I am lucky to be able to have a local hosting provider down the
road from me - [Zen](http://zen.co.uk) who offer a great service on hosting and domains. It was as simple as buying a domain, renting some server space and FTP-ing my files on to it and the site was live! It took seconds to deploy. This was useful as I was able to make changes for Rory to be able to see very quickly, giving me short feedback cycles and making sure we stayed on the same page.

Of course we needed the ability to sell books so I used PayPal Buttons which allowed users to checkout through Paypal. This was so easy to do, the hardest part was adding custom styles to the button.

I wish I had screenshots of this site, it probably didn't look great and it was never put live but I learned a lot whilst making it - things I use almost every day now. I hadn't really understood how the internet worked before, I had read a lot about it but something never really clicked. The process of uploading files from my computer, to someone elses and hitting a domain I had setup made everything click.

Another thing I learned from this project was how far out estimations can be, due to lack of knowledge about everything involved something that I thought would take me 5 minutes turned out to be much more complicated than I had thought and, more rarely, something that I thought would be complicated was trivial. This is something that carries through to my work today.

I had the site ready to go but the printing of the books took much longer than we expected so there wasn't any need for the site at this point so it never got deployed to the wider world. I started bootcamp and put the website on hold as I didn't want to overwhelm myself whilst studying.

### monitor 1.0

After having my mind blown at [Northcoders](www.northcoders.com) I was looking for a job and keen to put into practice what I'd learned at bootcamp. It looked like the publication date was nearing but with enough time for me to completely rebuild the site with React.

The bedrock of the current site layout was built in version 1.0, the pages for books haven't changed too much since this version - just some tweaks and fixes to visual defects. However where the data is stored has numerous times, something I'll talk about later.
At this point though there was no data store, there was still only 1 book to sell so I could hard-code the copy and images for now.

Without too much pain I had managed to rebuild the site and improve on what we already had. I added an intro page that showed the Monitor logo for a few seconds before loading the page for the book and added some logic to show the user what page of the site they were on in the nav bar.

Now I understand using React to build a site as small of this is perhaps overkill but I wanted to learn how to use React better and so a small scale project like this was ideal. I managed to get my first developer job about a month after graduating from Northcoders so the time that I had to build the website dramatically decreased but what we had was good enough - it was selling books!

### monitor 1.1

A few months later Rory told me that he'd made a video for Monitor and was hoping to put them live on the site - this was a simple update. I just needed to add another page for the video and ensure people could navigate to it. My most treasured learning from this part of the project was iframes and how interesting/frustrating styling them could be. The video was hosted on Vimeo and the embed link for that was an iframe that, for a while, I bumbled about with like a child failing to make a dog out of a balloon before reaching a point that both Rory and I were satisfied with the dimensions of the video.

Although when I started I didn't realise that this process of getting a small slice of functionality ready for feedback from the client as soon as possible is a key tenet of the agile way of doing things. I can definitely see how short feedback cycles helped the project.

The next challenge for me was adding another book to the shop and all the state management involved in a shopping basket.
