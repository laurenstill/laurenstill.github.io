---
layout: post
title: Happtique Postmortem and Security Best Practices
catagories: [healhtIT, mHealth, infosec]
---
*This post originally appeared in [mHealthNews][mHealthNews], a [HiMSS Media][HiMSS Media] affiliate for the 2013 [mHealthSummit][mHealthSummit] Conference.*      



Last week [GNYHA Ventures][1] backed Happtique [suspended][2] their app certification platform after Harold Smith, CEO of [MonktonHealth][3], [discovered][4] that several of the certified apps had egregious and easy-to-avoid security vulnerabilities. It’s becoming increasingly difficult to decipher what constitutes acceptable security practices and to what level mobile health developers should be held. It’s important to keep in mind that the threat is constantly outpacing technology, and an agile, iterative approach to data security is essential. Given that mobile app development presents a new set of challenges different from traditional web app development, what can mhealth developers do?  

1) At the very basic level, don’t trust the user.  Nearly half feel [pin/passwords are too cumbersome][5], a third aren’t concerned with risks and 55% of adults use the [same password][6] for everything. A five-digit pin has 5,904,900,000 combinations while a pattern combination only has  15,120 combinations, yet pattern locks are still a very common practice among consumers.

2) Do your research and stay current.  Security firm [viaForensics][7] openly publishes their benchmark list of mobile security [best practices][8] in addition to their [research][9] and [HOWTOs][10], and Smith recommends starting with Jonathan Zdziarski’s [Hacking and Securing iOS Apps][11] from O'Reilly.  Think of mobile app security in terms of the onion model, and layer security measures to help make exploitation cost prohibitive.  This included keeping your OS and environment up to date.

3) Leverage Jailbreak detection. Jailbreaking is a means to provide root access to the mobile OS, allowing the user the ability to download additional applications, extensions, and themes that are not available through the official Apple App Store. This also allows a range of exploits both on the device itself, and through applications that are downloaded through third party stores.  According to a [recent study][12] from Axran, more than 50% of the 100 top apps in the Apple App Store have been cracked and republished for jailbroken phones on other app markets.  In addition to revenue loss, IP theft, fraud and brand erosion for the original company, these apps put the user at risk of malware infection, data interception, and identity theft. It’s important that mobile apps be able to defend themselves against static and dynamic analysis at runtime and be made resistant to tampering and reverse-engineering attacks.

4) Know what resources are available. There are a number of tools within the infosec community that can be openly leveraged to help mitigate risks.  Despite being relatively new, the [iMAS][13] library provides iOS developers with a set of easy-to-use tools to accomplish various security tasks in their apps. On the webdev side, [Fiddler][14] is a popular tool for debugging and security tracking.  For the beginner, [OWASP's iGoat tool][15] is an intentionally flawed app allowing the developer to explore and implement fixes to common security problems in a safe learning environment. 

5) Allow for strong user passwords and authentication. Never store passwords in plain text format, as it undercuts any other security measures.  Instead salt and hash passwords and force users to reset instead of going through a retrieval process.  Additionally, avoid limiting the password length or variety, and if an arbitrary length must be used, use something well beyond the norm.  When it comes to loading login pages, load the forms over HTTPS and post to HTTPS as well.  Loading over HTTP and then posting with HTTPS still leaves the login form vulnerable and open to MITM attacks.  Better yet?  HTTPS everywhere.  

6) Implement robust data encryption and transfer protocols.  In terms of cryptography, avoid storing any data directly on the device if relying on [iOS's AES-256][16] encryption, as it can be retrieved rather easily. Instead, Smith recommends developers leverage database encryption like [SQLCipher][17] and transfer information with HTTPS and [SSL pinnning][18] to prevent MITM attacks. On the server side, utilize tools like [Nessus][19] for vulnerability tracing and the NIST [vulnerability checklist database][20]  and [standards][21] when configuring servers and web frameworks. 

7) Establish a bug bounty program, and open disclosure policies. What is particularly surprising from the last two weeks was the initial lack of interest in security practices within the health IT and mhealth communities, and the lack of interest in peer review when it comes to public security audits. Security strategy doesn’t end with deployment, keep lines of communication with users and developers open and honest.   It’s interesting to note that Silicon Valley has cultivated a robust white-hat community, encouraging exploit bounties for discovery while enterprise health IT and the mhealth community lag behind.  [Bugcrowd’s][22] current list of available security bounty programs includes companies such as Amazon, Apple, Facebook, Oracle, IBM to smaller startups like Spotify and Gittip, but no healthcare related platforms.  Typical bounty programs focus on specific aspects of a program, or on either security mitigation bypass or defense and may range in reward from $300 to $50,000 or more (as is the case for Microsoft’s [program][23]).  For many though it’s not about the money, and more about the challenge, recognition and community.  

8) Know your regulations. Understand what regulatory standards your app may be held to, and thoroughly vet potential partner companies for adherence.  This is particularly important in the changing healthcare landscape, where subtle differences in branding, and marketing may dictate different levels of government compliance, and run the potential for significant fines in the event of a data breach. Also note that security is only one tool for ensuring privacy, and in addition to a comprehensive security strategy, mhealth developers must address the concerns of privacy regulations such as COPPA and HIPAA. 

9) Assign responsibility.  Make one person in your team responsible for security, privacy and compliance at every stage of development.  There’s a tendency to assume someone else is automatically handling security (be an OS, a device manufacturer, or another team member, etc), but holding a single person accountable helps bring the priority forward. This person will be instrumental in understanding the limitations of platform security measures, libraries, APIs and any 3rd party code your app may employ. 


10)  Be an example.  As for users, particularly health IT and mhealth community members, be an example of good personal security practices, and hold the companies you use to a higher standard.  Critically evaluate the necessity of permissions you grant a program, and don’t install apps outside of official OS app stores. Update passwords often, and use a password manager like [LastPass][24] and two-factor authentication when available.  Enable [remote wipe][25] on your device and back up your information regularly.  Also consider developing an alternative fake personal dataset since, thanks to Facebook, everyone knows  your favorite pet, first car and mother’s maiden name.  



[mHealthNews]: http://www.mhealthnews.com
[HiMSS Media]: http://www.himssmedia.com
[mHealthSummit]: http://www.mhealthsummit.org


[1]: http://www.gnyha.org/2877/Default.aspx
[2]: http://www.happtique.com/app-certification/registry-statement/
[3]: https://monktonhealth.com/
[4]: http://whats.harold.in/2013/12/certification-for-lack-of-certification.html
[5]: http://confidenttechnologies.com/news_events/survey-shows-smartphone-users-choose-%20convenience-over-security
[6]: http://media.ofcom.org.uk/2013/04/23/uk-adults-taking-online-password-security-risks/
[7]: http://www.viaforensics.com
[8]:  https://viaforensics.com/resources/reports/best-practices-ios-android-secure-mobile-development/
[9]: https://viaforensics.com/resources/presentations/
[10]: https://santoku-linux.com/howtos
[11]: http://shop.oreilly.com/product/0636920023234.do
[12]: http://www.arxan.com/resources/state-of-security-in-the-app-economy/
[13]: https://github.com/project-imas/about
[14]: http://fiddler2.com/
[15]: https://www.owasp.org/index.php/OWASP_iGoat_Project
[16]: http://www.computerworld.com/s/article/9233078/Kenneth_van_Wyk_The_good_and_bad_of_Android_and_iOS
[17]: http://sqlcipher.net/
[18]: https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning
[19]: http://www.tenable.com/products/nessus-perimeter-service
[20]: http://web.nvd.nist.gov/view/ncp/repository
[21]: http://www.nist.gov/itl/cyberframework.cfm
[22]: https://bugcrowd.com/list-of-bug-bounty-programs/
[23]: http://technet.microsoft.com/en-us/security/dn425036
[24]: https://lastpass.com/
[25]: https://support.google.com/a/answer/173390?hl=en


