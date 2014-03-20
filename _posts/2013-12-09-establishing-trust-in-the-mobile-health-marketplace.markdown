---
layout: post
title: Establishing Confidence in the mHeath Markeplace
catagories: [healhtIT, mHealth, infosec]
---
*A revised version of this post was published in [HL7Standards][HL7S], a [CarepointHealth][CarepointHealth] affiliate for the 2013 [mHealthSummit][mhs] Conference. Happtique has since since [suspended][suspended] their app certification program and is re-evaluating their relationship with Intertek, and their credentialling process.*      


Consider this:    

According to a recent [Pew survey][1] on the intersection of mobile and healthcare, 56 percent adults use a smartphone, and close to half report living with one or more chronic conditions.  Seventy percent of of adults living with a single chronic condition engage in some sort of self tracking behavior related to weight, diet, exercise, sleep or health indicators such as blood pressure and glucose monitoring.  This self tracking behavior jumps to 80% when considering a population which reports 2 or more chronic health conditions.

In the mobile space, [Gartner predicts][2] that mobile app projects will outnumber development projects for PCs by a 4-to-1 margin by 2015  and according to [Juniper Research][3], the global cumulative healthcare cost-savings from mHealth monitoring and tracking is estimated to reach $36 Billion between 2013 and 2018.

These numbers come as both an encouragement regarding the potential health applications have on patient populations, as well as an exclamation point that users are expecting to see real impact on their individual health with the use of mobile technology.

Now consider this:    

According to the [Sophos report][4] on mobile security “42 percent of devices, lost or left in an unsecure place, had no active security measures. A fifth (20%) also contained sensitive personal information such as national insurance numbers, addresses and dates of birth, and over 10 percent could have revealed payment information such as credit card numbers and PINs. Over a third (35%) of the lost devices had access to social networking accounts via apps or web browser-stored cookies.

As the mobile health market develops, it’s imperative that app developers and their companies earn the confidence of their user base, and that users (both end-users and intermediaries)  understand how companies store and use provided personal data.  Currently, the majority of health apps in the mobile market fall into the “health and wellness” space, outside [FDA][5] oversight, are largely of a low-to-medium level of sophistication while neglecting to address privacy, security and regulatory concerns. It’s very much the wild west of health innovation as developers are in a race to see what sticks.

Enter the rise of mhealth app certification programs, such as Happtique.  Founded in 2010 as a subsidiary of [GNYHA Ventures][6] (the Greater New York Hospital Association’s for-profit arm), Happtique has developed a mobile health app store, and more recently started an [initiative][7] to becmoe the trusted certifying body for the mhealth to foster market confidence and safety. Last week they announced the release of their [inaugural class][8] of Happtique Certified mobile health apps, 19 in total that, according to the [press release][9], underwent "both technical testing--the verification of privacy, security, and operability standards by global testing leader [Intertek][10]--and content testing, as completed by relevant, independent clinical experts."  Corry Ackerman, Happtique’s current President and COO, states “Happtique’s Health App Certification Program offers an objective way for users to determine if an app will protect personal information, operate as promised, and ensure that the clinical information included in the app has been documented and verified.”

Sounds great in theory, except what was discovered over the next few hours was that several of the Happtique Certified apps failed basic security 101 tests.

Harold Smith, CEO of [MonktonHealth][11], [discovered][31] rather quickly that several of the certified apps ignored basic information security practices such as salting and hashing login credentials and encrypting user generated electronic personal health information (ePHI) stored on the device or on application servers.  As he shows in [video][13], more than one app stored usernames, passwords, emails, birth dates, pin numbers, and personal user data in [unencrypted log files]({{ site.url }}/media/log.png) on the device that could be accessed in about 3 minutes of investigation.  Furthermore, several of the apps failed to use SSL, https or any sort of encryption during data transefers and based their ecryption keys on four-didgit user provided pins opening themselves up to [MITM attacks]({{ site.url }}/media/MITM.png). Considering 55% of adults use the [same password][14] for everything, consider the security, privacy and identity ramifications  if one of those users loses or misplaces their mobile device.  As of now, Happtique does not certify at different levels, so the same quality and security criteria used to evaluate [AmazingAbs][15] is also used for [Tactio][16], one of the enterprise focused apps currently in market.

It’s more than slightly concerning that a trust authority would overlook such basic best practices, considering their heavy roots and current focus on enterprise health IT solutions and especially when such practices have been outlined clearly in their [standards set][17].  At it’s core, Happtique is comprised of clinicians and social media [advisors][18], but lacks leadership in technology or infosec roles, and seems to be relying on buzzwords without truly understanding the lower level meaning. As of publication, there has been no response from either Happtique or Intertek regarding their security evaluation methodology. Smith has privately reached out to developers from each of the venerable apps to explained his findings, methodology and recommendations for improved security.

What’s even more concerning is that since HIMSS [last year][19], Happtique seems unwilling to openly work with the developer and infosec communities to establish security guidelines (such as penetration and intrusion testing, exploit discovery, etc) that would provide meaningful value to developers.  As Smith says, “Certification itself is not bad, but the last thing healthcare IT needs is another entity syphoning off more money and providing no ROI.”
  
Where does that leave mhealth developers in establishing community trust and confidence in the wild west of mobile health development?  First, following basic security practices is a great start. Encrypt user login information, securely transmit data with SSL or TSL and build in device data protection/encryption with the ability to remotely wipe if necessary.  Use logging with caution. Maintain proper caching and session handling techniques, and keep in mind the Principle of Least Privilege making sure only those device permissions that are absolutely necessary for the app’s function are accessed.  Consider and design against man-in-the-middle attacks, and  develop strong server-side controls and back-end API calls. Validate user input data to combat core injection, SQL injection attacks and use multi-factor authentication and password strength verification.

This is not comprehensive list, but it’s a good start.  The key take away is, as a mobile health developer, always be testing.  Stay current on security technology, and exploit development.  Stay transparent.

Taking mobile health security a step further, there are a few trusted ways to have an application undergo third-party validation and certification.  On the federal side, the Federal Information Processing Standards ([FIPS][20]) from National Institute of Standards and Technology ([NIST][21]) is the mandatory standard applicable to all Federal agencies that use cryptographic-based security systems, and has been widely adopted in technology and financial sectors.  The certification program that vetts systems against FIPS [standards][22] is the Cryptographic Module Validation Program ([CMVP][23]), and the certification process puts heavy emphasis on cryptographic modules, documentation, physical tamper resistance, and  identity-based authentication.  There are several different levels and focuses, depending on the application’s specific security needs.  CMVP breaks recertification and revalidation scenarios into 5 distinct categories, and [recertification][24] only needs to be completed where there is a greater than 30 percent change in relevant security items such as the core crypto layer.  In comparison, Happtique required recertification for any update, even minor design UI changes.

In the private sector, [viaForensics][25] is an industry leader in mobile security, computer forensics and electronic discovery.  In addition to standard training, audit and analysis services, they offer public certification specifically tailored to mobile app development covering the standard best practices for mobile security.  Andrew Hoog, CEO and Co-founder of viaForesnsics recommends developers and users alike look past boilerplate standards lists and instead give more weight to community involvement and references.  Many of the well respected players in the infosec field contribute significantly to the community through opensource and free information.  vaiForensics openly publishes a [best practices guide][26], [HOWTOs][27] on running self assessments and security audits with [Santoku][28], all of their conference [presentations][29] and many more resources for the community.

At last count, with more than 40,000 health, wellness and fitness apps floating around the marketplace, isolating the signal from the noise is a huge hurdle for developers. With an [anticipated][30] compound annual growth of 61 percent by 2017, and the increasing popularity of physician prescribed apps, establishing community trust,  is going to be a huge player when the dust starts to settle.

Developers, focus on clinical quality, real information security, and carefully evaluate the legitimacy and value any certification pursued.  For those in the healthcare IT and mhealth communities, particularly in media and press, always be in the habit of fact checking and peer review before blindly passing along press releases and link-bait.  Patients and consumers rely on your information, and your stamp of approval, and it’s important for the success of the health innovation movement that members of our community turn a critical eye to claims from any organization. A little due diligence goes a long way.




[HL7S]: http://www.hl7standards.com/blog/2013/12/16/establishing-trust-in-the-mhealth-marketplace/
[CarepointHealth]: http://www.corepointhealth.com/
[mhs]: http://www.mhealthsummit.org/
[suspended]: http://www.happtique.com/app-certification/registry-statement/


[1]: http://www.pewinternet.org/Reports/2013/The-Diagnosis-Difference
[2]: http://www.gartner.com/newsroom/id/1862714
[3]: http://www.juniperresearch.com/shop/viewwhitepaper.php?whitepaper=219
[4]: http://www.sophos.com/en-us/press-office/press-releases/2012/10/absence-of-mobile-security-puts-thousands-at-risk.aspx 
[5]: http://www.fda.gov/medicaldevices/productsandmedicalprocedures/connectedhealth/mobilemedicalapplications/default.htm
[6]: http://www.gnyha.org/2877/Default.aspx
[7]: http://info.happtique.com/mobile-health-certification-standards
[8]: http://www.happtique.com/app-certification/registry/ 
[9]: http://www.prnewswire.com/news-releases/happtique-announces-inaugural-class-of-certified-health-apps-234063701.html
[10]: https://www.intertekwireless.com/Happtique/gui/default.asp
[11]: https://monktonhealth.com/
[31]: http://whats.harold.in/2013/12/certification-for-lack-of-certification.html
[13]: https://www.youtube.com/watch?v=Rch8tJbUeTY
[14]: http://media.ofcom.org.uk/2013/04/23/uk-adults-taking-online-password-security-risks/
[15]: http://power20method.com/apps/
[16]: http://www.tactiosoft.com/
[17]: http://www.happtique.com/docs/HACP_Certification_Standards.pdf
[18]: http://www.happtique.com/2012/01/11/happtique-forms-a-blue-ribbon-panel-to-oversee-development-of-a-mobile-healthcare-app-certification-program/
[19]: http://whats.harold.in/2013/03/what-is-happtiques-value-proposition.html
[20]: http://csrc.nist.gov/groups/STM/cmvp/index.html
[21]: http://csrc.nist.gov/
[22]: http://en.wikipedia.org/wiki/FIPS_140-2
[23]: http://csrc.nist.gov/groups/STM/cmvp/
[24]: http://www.infotransec.com/sites/infotransec.com/files/Cryptographic%20Module%20Validation%20Program%20(CMVP).pdf
[25]: https://viaforensics.com/home/
[26]: https://viaforensics.com/resources/reports/best-practices-ios-android-secure-mobile-development/
[27]: https://santoku-linux.com/howtos
[28]: https://santoku-linux.com/
[29]: https://viaforensics.com/resources/presentations/
[30]: http://www.research2guidance.com/us-1.3-billion-the-market-for-mhealth-applications-in-2012/

[31]: http://www.laurencstill.com/media/happtique.png










 


