---
layout: post
title: Heartbleed and Healthcare IT
catagories: [healhtIT, mHealth, infosec]
---
*An edited version of this post originally appeared in [mHealthNews][mHealthNews], a [HiMSS Media][HiMSS Media] affiliate afer the [CVE-2014-0160][heartbleed] bug was publically disclosed.*   

[heartbleed]: http://heartbleed.com/
[mHealthNews]: http://www.mhealthnews.com/news/10-tips-building-secure-mhealth-apps
[HiMSS Media]: http://www.himssmedia.com


Monday, as the greater health IT collective was preparing for the Windows XP end of life date, and accompanying zero-day attacks, another major security exploit hit the market without warning. CVE-2014-0160, or [Heartbleed][1] (due to it exploiting a feature called [heartbeat][2]) nicknamed [by the security firm][3] who first publicly disclosed it, is a serious vulnerability -- a simple missing bounds check --  in OpenSSL cryptographic software library. SSL/TLS provides communication security and privacy via [X.509 certificates][4] over the internet for web applications and some virtual private networks. 

The vulnerability can be [exploited to intercept private keys][5], usernames, passwords and other sensitive information such as financial and health information. Heartbleed allows an attacker to read up to 64KB of memory, and according to the infosec researchers:

“Without using any privileged information or credentials we were able steal from ourselves the secret keys used for our X.509 certificates, usernames and passwords, instant messages, emails and business critical documents and communication.”

Furthermore, [already available scripts][6] can hijack session ids [en masse][7] allowing unapproved users to fake credentials, access the user account and data, and change settings. Depending on how the information is accessed, organizations may or may not be able to detect the breach. It is likely that this exploit is over [2 years old][8] and Google reportedly first discovered it sometime last week. The bug itself was effectively a minor coding typo with widespread ramifications.  

OpenSSL is the most common website security technology and is relied on by over 66% of the internet for secure data transfer. Along with Apache and Linux, it is one of several opensource cornerstone tools that ‘make’ the internet as we know it possible.  [Mustafa Al-Bassam][9], a security expert from past [LulzSec][10] notoriety, has compiled a rough list of [vulnerable websites][11] from the Alexa top 10k list, including companies such as Yahoo, StackOverflow, Eventbright, UCLA, FBI and more. While this is a good start, it’s far from comprehensive, as Facebook [subdomain checks prove][12]. Additionally, [there are][13] [several][14] [tools][15] [available][16] for those interested in checking the SSL vulnerability of a specific site, but without scripting knowledge. 

Particularly interesting is that this is the first bug disclosure that came pre-packaged its own [marketing campaign][17], complete with dedicated web presence, graphic design and it’s own favicon.  By doing so, the communication barrier was completely removed from any business plan prioritization discussions. Instead of the burden of proof being on the engineer to convince management that bug CVE-2014-0160 (which they heard about on some listserve or buried deep in a forum) is indeed a significant risk, Heartbleed was now a real thing that warranted real attention.  

A [cursory review][23] in the health IT sectored showed a number of web-based EHR platforms vulnerable, as are some state health insurance exchange platforms and other possible health information exchange platforms.  Those organizations have been notified privately so they may responsibly address the exploit. This particular bug is not an issue with SSL, but rather a bug in the OpenSSL implementation of TLS/DTLS, and was accidentally introduced in OpenSSL version 1.0.1 in  March 2012.

SSL problems are not new.  Between [Apple’s "goto fail"][18]  issue last month, the ongoing  [GnuTLS problems][19], and now Monday’s discovery, it’s safe to say the nearly all modern internet connected users have had their data compromised recently.  Consumers should limit communications and avoid logging into any web platform until SSL integrity can be confirmed by the organization. At minimum, change all passwords, but ensure this happens after a patch or fix. Enable two-factor authorization where available and back up important web data files. Additionally, deleting any extra or expired online credit card data is advised, and just good practice. 

Vendors should immediately assess their SSL security implementations for Heartbleed vulnerabilities, and update OpenSSL as applicable.  Remediation should also include an [evaluation][20] of SSL configuration for web and mail services.Since there's no way to tell whether a server has been exploited, vendors will need to assume that it is. The safe move is to revoke existing certificates and get a new one. 

 Additionally, consider implementing [perfect forward secrecy][21] to prevent future private key compromises from affecting a whole application.  Organizations also have a duty to proactively notify their user base ([Heroku][22] does this exceptionally well), inform them of the potential risk, remediation actions and what end users can to do personally protect their information.  

And of course, the obligatory [xkcd][xkcd].

[xkcd]: http://imgs.xkcd.com/comics/heartbleed.png

[1]: http://www.google.com/url?q=http%3A%2F%2Fheartbleed.com%2F&sa=D&sntz=1&usg=AFQjCNFtwctzsTrjivftlnHfhWRquUVjUQ
[2]: https://tools.ietf.org/html/rfc6520
[3]: http://www.codenomicon.com/
[4]: http://lorddoig.svbtle.com/heartbleed-should-bleed-x509-to-death
[5]: http://blog.cryptographyengineering.com/2014/04/attack-of-week-openssl-heartbleed.html
[6]: https://www.mattslifebytes.com/?p=533
[7]: https://www.michael-p-davis.com/using-heartbleed-for-hijacking-user-sessions/
[8]: http://blog.existentialize.com/the-story-of-the-gnutls-bug.html
[9]: https://twitter.com/musalbas
[10]: http://en.wikipedia.org/wiki/LulzSec
[11]: https://github.com/musalbas/heartbleed-masstest/blob/240b718e0c8d6871aa04af4f9d6fb75c53e35575/top10000.txt
[12]: http://pastebin.com/dmYYpx2y
[13]: https://www.ssllabs.com/ssltest/
[14]: http://filippo.io/Heartbleed/
[15]: https://github.com/titanous/heartbleeder
[16]: http://possible.lv/tools/hb/
[17]: http://www.kalzumeus.com/2014/04/09/what-heartbleed-can-teach-the-oss-community-about-marketing/
[18]: http://www.washingtonpost.com/business/technology/apples-security-bug-what-to-know-about-it-and-what-to-do-about-it/2014/02/24/b59404e4-9d59-11e3-9ba6-800d1192d08b_story.html
[19]: http://arstechnica.com/security/2014/03/critical-crypto-bug-leaves-linux-hundreds-of-apps-open-to-eavesdropping/
[20]: https://www.checktls.com/
[21]: http://en.wikipedia.org/wiki/Forward_secrecy
[22]: https://blog.heroku.com/archives/2014/4/8/openssl_heartbleed_security_update
[23]: http://www.laurencstill.com/media/clean-heartbleed.png

<!-- I’ll add supporting files here once orgs have a chance to sort things out, but the state exchanges I saw were Hawaii, Kentucky, Idaho, Washington, with a few more unconfirmed -->





