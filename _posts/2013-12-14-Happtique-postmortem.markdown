---
layout: post
title: Happtique Postmortem and Security Best Practices
catagories: [healhtIT, mHealth, infosec]
---
*This post originally appeared in [mHealthNews][mHealthNews], a [HiMSS Media][HiMSS Media] affiliate for the 2013 [mHealthSummit][mhs] Conference.*      



Last week [GNYHA Ventures][1] backed [Happtique][2] announced the release of their [inaugural class][3] of Happtique Certified mobile health apps, 19 in total that, according to the [press release][4], underwent “both technical testing–the verification of privacy, security, and operability standards by global testing leader [Intertek][5]–and content testing, as completed by relevant, independent clinical experts.” Corry Ackerman, Happtique’s current President and COO, states “Happtique’s Health App Certification Program offers an objective way for users to determine if an app will protect personal information, operate as promised, and ensure that the clinical information included in the app has been documented and verified.”

Within a few hours of the announcement, Harold Smith, CEO of [MonktonHealth][6], [discovered][7] that several of the certified apps had egregious and easy-to-avoid vulnerabilities in place by ignoring basic information security practices such as salting and hashing login credentials and encrypting user generated electronic personal health information (ePHI) stored on the device or on application servers. As he shows in [video][8], more than one app stored usernames, passwords, emails, birth dates, pin numbers, and personal user data in [unencrypted log files][9] on the device that could be accessed in about 3 minutes of investigation. Furthermore, several of the apps [failed to use SSL, HTTPS][19] or any sort of encryption during data transfers and based their encryption keys on four-digit user provided pins opening themselves up to [MITM attacks][10]. Considering 55% of adults use the [same password][11] for everything, consider the security, privacy and identity ramifications if one of those users loses or misplaces their mobile device. Currently, Happtique does not certify at different levels, so the same quality and security criteria used to evaluate [AmazingAbs][12] is also used for [Tactio][13], one of the enterprise focused apps currently in market.

Given Happtique’s [leadership][14] of clinicians and social media advisers, it’s not too surprising that this oversight has happened.  Accidents will happen, companies will make mistakes, but how companies react and process postmortems says a great deal about their company culture and commitment. Happtique has done the right thing and has [suspended][15] its certification program, and is working with the community to develop a more robust infosec strategy. Kudos to the team. 

What is particularly surprising out of all this is the lack of interest in security practices within the health IT and mhealth communities, and the lack of interest in peer review when it comes to public security audits.  It’s interesting to note that Silicon Valley has cultivated a robust white-hat community, encouraging exploit bounties for discovery while enterprise health IT and the mhealth community seem entirely closed off to any criticism.  [Bugcrowd’s][16] current list of available security bounty programs includes companies such as Amazon, Apple, Facebook, Oracle, IBM to smaller startups like Spotify and Gittip.  Where are the healthcare companies? Does health IT really not see the value in objective peer review and audit? Typical bounty programs focus on specific aspects of a program, or on either security mitigation bypass or defense and may range in reward from $300 to $50,000 or more (as is the case for Microsoft’s [program][17]).  For many though it’s not about the money, and more about the challenge, recognition and community.  

When approached with information regarding these current security vulnerabilities, both companies [dismissed][18] the claims, and one outright said the issues have been fixed without even confirming what the vulnerabilities were.  Technology moves far faster than traditional health IT can keep up, it only makes sense to encourage a culture that works collaboratively, and that’s done by listening and acknowledging. Whether the security breach is exposed by a bartender, highschool student or a professional infosec researcher does not change the validity of the exploit, yet the health IT community seems set on validating the wrong credentials, and dismissing input from those who don’t fit the traditional echo chamber model.
 
What can developers do?  For starters, security firm [viaForensics][20] has openly published their benchmark list of mobile security [best practices][21] in addition to their [research][22] and [HOWTOs][23], and Smith recommends starting with Jonathan Zdziarski’s [Hacking and Securing iOS Apps][24] from O'Reilly. Think of mobile app security in terms of the onion model, and layer security measures to help make exploitation cost prohibitive. At the very basic level, don’t [trust the user][25], nearly half feel pin/passwords are too cumbersome and a third aren't concerned with risks.

There are a number of tools within the infosec community that can be openly leveraged to help mitigate risks.  Despite being relatively new, the [iMAS][26] library provides iOS developers with a set of easy-to-use tools to accomplish various security tasks in their apps.  For the beginner,  [OWASP's iGoat][27] tool is an intentionally flawed app allowing the developer to explore and implement fixes to common security problems in a safe learning environment. 

In terms of cryptography, avoid storing any data directly on the device if relying on iOS's [AES-256][28] encryption, as it can be retrieved rather easily. Instead, Smith recommends developers leverage database encryption like [SQLCipher][29] and transfer information with HTTPS and [SSL pinnning][30] to prevent MITM attacks. On the server side, utilize tools like [Nessus][31] for vulnerability tracing and the NIST [vulnerability checklist database][32] and [standards][33] when configuring servers and web frameworks. 

Responsibility also lies on the health IT and mhealth community members, particularly those in social and new media.  Don’t expect the real technology news to come from press releases and PR mouthpieces.  Disruptive companies aren't going to fit the traditional model of enterprise healthcare, and won’t be drinking the kool-aid.  Spend as much time validating the actual claims as time spent validating the CV or company behind said claim.   

Furthermore, be an example of good personal security practices, and hold the companies you use to a higher standard. A little critical thinking goes a long way. For example, do you use a pin code or a pattern?  Do you know that a five-digit password has 5,904,900,000 combinations while a pattern combination only has  15,120 combinations?  Do you what how companies use and store your data? Do you know who to contact if there is a breach?



[mHealthNews]: http://wwww.mhealthnews.com
[HiMSS Media]: http://www.himssmedia.com/
[mhs]: http://www.mhealthsummit.org/


[1]: http://www.gnyha.org/2877/Default.aspx
[2]: http://www.happtique.com/
[3]: http://www.happtique.com/app-certification/registry/
[4]: http://www.prnewswire.com/news-releases/happtique-announces-inaugural-class-of-certified-health-apps-234063701.html
[5]: https://www.intertekwireless.com/Happtique/gui/default.asp
[6]: https://monktonhealth.com/
[7]: http://whats.harold.in/2013/12/certification-for-lack-of-certification.html
[8]: https://www.youtube.com/watch?v=Rch8tJbUeTY
[9]: http://www.laurencstill.com/media/log.png
[10]: http://en.wikipedia.org/wiki/Man-in-the-middle_attack
[11]: http://media.ofcom.org.uk/2013/04/23/uk-adults-taking-online-password-security-risks/
[12]: http://power20method.com/apps/
[13]: http://www.tactiosoft.com/
[14]: http://www.happtique.com/2012/01/11/happtique-forms-a-blue-ribbon-panel-to-oversee-development-of-a-mobile-healthcare-app-certification-program/
[15]: http://www.happtique.com/app-certification/registry-statement/
[16]: https://bugcrowd.com/list-of-bug-bounty-programs/
[17]: http://technet.microsoft.com/en-us/security/dn425036
[18]: http://whats.harold.in/2013_12_01_archive.html
[19]: http://www.laurencstill.com/media/MITM.png
[20]: http://www.viaforensics.com
[21]: https://viaforensics.com/resources/reports/best-practices-ios-android-secure-mobile-development/
[22]: https://viaforensics.com/resources/presentations/
[23]: https://santoku-linux.com/howtos
[24]: http://shop.oreilly.com/product/0636920023234.do
[25]: http://confidenttechnologies.com/news_events/survey-shows-smartphone-users-choose-%20convenience-over-security
[26]: https://github.com/project-imas/about
[27]: https://www.owasp.org/index.php/

[28]: http://www.computerworld.com/s/article/9233078/Kenneth_van_Wyk_The_good_and_bad_of_Android_and_iOS
[29]: http://sqlcipher.net/
[30]: https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning
[31]: http://www.tenable.com/products/nessus-perimeter-service
[32]:http://web.nvd.nist.gov/view/ncp/repository[33]: 
[33]: http://www.nist.gov/itl/cyberframework.cfm
