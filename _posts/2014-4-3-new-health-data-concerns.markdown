---
layout: post
title: PHI Security in the Data Analytics Era
catagories: [healhtIT, mHealth, infosec]
---
*A revised version of this post was originally published in [HL7Standards][HL7S], a [CorepointHealth][CorepointHealth] affiliate for the April 4, 2014 [#HITsm][hitsm] chat focusing on new challenges for health information data security.*

[HL7S]: http://www.hl7standards.com/blog/2014/04/03/phi-security/
[CorepointHealth]: http://www.corepointhealth.com/
[hitsm]: http://www.hl7standards.com/hitsm-chat/


The 2013 year significantly changed the context of the healthcare security and privacy conversation.  From the Snowden NSA revelations, to HIPAA Omnibus rule, changes in breach characteristics, to connected devices, mhealth, IoT and increasing use of cloud and corporate BYOD policies, one thing is clear:  security by obscurity equals no security at all.  The burden of protecting PHI is now spread across all data holders, patients, providers and payers alike. Outlined below are some of the unique security issues that will need addressing as healthcare technology moves into a data analytics mindset. 

**Breach Characteristics:** More than [7 million patient records were exposed in 2013][1] alone, marking a perceived 138% increase from reported 2012 healthcare data breaches. Expect to see a change in [how breaches occur][2], and keep in mind, an uptick in breach notifications doesn’t necessarily imply an uptake in actual data breaches.  Everyday PHI breaches of years past went largely unnoticed whereas now technology helps track and log access. 2014 will see a new focus on [targeted identity theft][3] and less focus on lost laptops and stolen hard drives.  [Human error still accounts for ¾][4] of all healthcare data breaches, but medical-related identity theft accounted for 43 [percent of all identity thefts][5] reported in the United States in 2013.

Federal regulators are planning for a permanent HIPAA audit program to support the 2013 HIPAA Omnibus rule, and the healthcare industry can expect increased scrutiny for violations pertaining to inappropriate disclosure of data and denial of patient access.  What has not yet been directly addressed is if the [NSA has accessed][6], reconstructed or inferred any personally-identifiable information covered by HIPAA, such as that through [Google, Microsoft, Apple][7], and through [mobile games][8], and how a BAA will hold up in such a data collection scenario.  Currently, cases are being heard regarding the [warrantless access][9] of state controlled health databases by other federal agencies.

**Patient Best Practices Awareness:** In other sectors, user data purging, and security tools are entering the mainstream. Apps to help consumers navigate [terms of services][10] and platform [data deletion shortcuts][11] to [password managers][12], and tools to avoid  [search][13] and [web][14] tracking are helping users gain control of their personal information.  But when it comes to healthcare, how common is it to leave a credit card on file or how often do patients really check their charts for errors?

The internet of things, and connected reality as it plays into mobile and personal health apps adds another layer to patient security awareness. [Malware attacks through network connected appliances][15] such as refrigerators, HVAC and media centers have been of concern recently, and they present an unsuspecting entry into a home network. What used to be as simple as using a WPA key on a home router and not handing out a SSN is now a different conversation.  Enterprise security has long favored an onion type approach, or defense-in-depth,  but that’s far from the case with personal information security.  And the question remains, is defense-in-depth even effective in the personal security space, [given it’s shortcomings in enterprise IT][16]?  

**PHI in the Cloud:** Healthcare IT is finally trusting cloud storage and computing.  As of 2013, [30% of healthcare organizations are leveraging cloud technology][17], and nearly [twice that are confident][18] in the future of cloud security.  Other industries have proven that cloud computing can be be a safe, economical, collaborative and scalable approach to enterprise data management problems. While cloud security will garner much of the spotlight for the next several years, the privacy aspect of distributed data liquidity must be addressed.

Currently, there are [no HIPAA restrictions on the use or disclosure][19] of de-identified health data, even though [87% of all Americans][20] can be uniquely identified using only zipcode, birthdate, and sex. PHI is currently, and will be increasingly sold to third party data warehousers, insurers, pharma, marketers, researchers, and more. Current [standards][21] for anonymized data [do][22] [not][23] [prevent][24] [positive][25] backwards identification. This is the conversation the healthcare industry, and patients, should be having in 2014 regarding cloud computing. 

**Corporate BYOD:** Sorry, but that cat left the bag 5 years ago. [Employees are using their personal devices at work][26], regardless of policy.  The best bet to mitigate BYOD security risks is to address it head on, and support secure solutions that enable user’s workflows. Secure SMS and [texting has been solved][27]. HIPAA compliant [platform-as-a-service][28] is a thing.  There are  mobile apps to address [medical imagining][29], [rounding][30], [clinical diagnosis][31], [EHR integration][32], and countless vendors are developing platform-down solutions for providers.  

Beyond mobile security, and BYOD policy, the issue  will be how  breaches on these devices will be reported, and analyzed. Currently, the [HIPAA Wall of Shame][33] classifies all mobile device breaches under the catch-all “Other Portable Electronic Device” which as mhealth really enters the mainstream, will be a near useless designation.  

**Mobile Health Security:** In this context, mHealth refers to medical apps used by patients, not wellness/fitness apps nor clinical practice or reference apps. Current efforts in the private sector to certify mobile health applications [have failed][34], largely due to a lack of understanding around mobile health security.  Mobile apps and devices come with complex challenges not seen elsewhere in healthcare, particularly around workflow data integration, security and user experience.  Two camps have emerged: platform-down apps such as those from [Athena and Greenway][35], and independent shops like [AliveCor][36] and [Glooko][37] who have yet to meaningfully integrate into major vendors. The third obvious play would come from valley tech giants, but despite rumors, nothing of substance has been shipped. 

While certain security best practices should never be skipped (encryption, SSL, passkeys, etc), user experience should come first and foremost.  Security is nearly insignificant if no one uses an app, and patients [will not tolerate poor design][38].  Many questions remain regarding shortcomings of [FDA mhealth software regulation][39]. Are medical providers the best individuals to evaluate a mhealth app for security and patient usability, and how may the design, developer and infosec communities better help educate the medical community?  It will be important to address provider shortcomings in prescribing and recommending patient-facing mhealth tools, especially around efficacy, privacy and security. 


[1]: http://www.redspin.com/resources/whitepapers-datasheets/Request-2013-Breach-Report-Protected-Health-Information-PHI-Redspin.php
[2]: http://www.ihealthbeat.org/articles/2014/3/13/criminal-attacks-on-health-care-organizations-increased-by-100
[3]: http://www.fiercehealthit.com/story/hospital-breach-exposes-more-405000-records/2014-02-06
[4]: http://www2.idexpertscorp.com/ponemon-report-on-patient-privacy-data-security-incidents/
[5]: http://www.idtheftcenter.org/images/breach/2013/ITRC_Breach_Stats_Report_2013.pdf
[6]: https://www.aclu.org/technology-and-liberty/faq-government-access-medical-records
[7]:http://www.computerworld.com/s/article/9239890/Reports_NSA_FBI_collecting_content_from_Google_Facebook_other_services
[8]: http://www.theguardian.com/world/2014/jan/27/nsa-gchq-smartphone-app-angry-birds-personal-data
[9]: http://www.oregonlive.com/portland/index.ssf/2014/02/dea_needs_warrant_to_access_or.html
[10]: http://www.tosdr.org
[11]: http://justdelete.me/
[12]: https://lastpass.com/
[13]: https://duckduckgo.com/
[14]: https://www.torproject.org/
[15]: http://blog.fortinet.com/Security%20Research/Malware-or-Spam-Campaign-on-Internet-of-Things/
[16]: https://www.nsslabs.com/reports/correlation-detection-failures
[17]: http://www.imprivata.com/resources/analyst-reports/2013-desktop-virtualization-trends-healthcare-report
[18]: http://offers.covisint.com/Brief.html
[19]: http://www.hhs.gov/ocr/privacy/hipaa/understanding/summary/index.html
[20]: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=1450006
[21]: http://www.hhs.gov/ocr/privacy/hipaa/understanding/coveredentities/De-identification/guidance.html 
[22]: https://blogs.law.harvard.edu/billofhealth/2013/10/01/press-and-reporting-considerations-for-recent-re-identification-demonstration-attacks-part-2-re-identification-symposium/
[23]: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=1450006
[24]: http://whimsley.typepad.com/whimsley/2011/09/data-anonymization-and-re-identification-some-basics-of-data-privacy.html
[25]: https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy
[26]: http://industryreport.jacksoncoker.com//physician-career-resources/newsletters/monthlymain/des/Apps.aspx
[27]: http://www.healthitoutcomes.com/doc/tigertext-airwatch-sprint-work-together-improve-mobile-security-0001
[28]: https://www.truevault.com/
[29]: http://www.dicomgrid.com
[30]: http://www.drroundscloud.com
[31]: http://www.agilemd.com/
[32]: http://www.moxehealth.com/
[33]: http://www.hhs.gov/ocr/privacy/hipaa/administrative/breachnotificationrule/breachtool.html
[34]: http://whats.harold.in/2013/12/certification-for-lack-of-certification.html
[35]: http://histalkmobile.com/battle-of-the-app-stores-athena-vs-greenway/
[36]: http://www.alivecor.com/home
[37]: https://www.glooko.com/
[38]: http://www.keepitusable.com/blog/
[39]: http://mobihealthnews.com/30501/how-the-fda-can-improve-regulation-of-mobile-health-according-to-fdasia-workgroup/

<!-- #HITsm sample questions for 4/4/14 

Should mobile apps require a user to implement a higher security level on the device they are installed on?﻿

Thoughts: The hidden risk in cloud computing is not security, it is the resale of ‘anonymised’ PHI to 3rd party warehousers. 

Do we need regulations or certifications to ensure the digital integrity of mobile health applications?  At what cost to the patient? 

Do static standards and regulations regarding fluid security best practices give a false sense of security?

Does the thought of identity theft of your electronic health record cause you more concern than that of your other private information? 

Does healthcare security carry a different set of requirements if the context is government access vs criminal, vs employment, or social? 

How can the healthIT infosec community better help consumers/patients/journalists evaluate potential mhealth apps, and enterprise healthIT solutions?

mHealth apps come with more risks than just medical.  Are doctors qualified to RX and recommend technology? Who is? How can mhealth also be transparent regarding PHI risks? 

Should patients be allowed to opt out of having their anonymized PHI data shared for profit? If so, how? Private pledges, legislation, other? 

What are the ramifications if the NSA violated HIPAA?  How does it change cloud vendor practices? (ie, I don’t trust Google, but think Amazon is ok).  Does a BAA carry any weight in this context?

There’s a lot of talk about how the healthcare security and privacy environment has changed, and is changing. How are health informatic professional’s perception of outreach changing?  To what extent outreach is valued in the healthcare infosec community?

The national security clause in HIPAA explicitly allows for broad interpretation, and access to private health data without consent or a warrant.  Now that 80% of hospital systems are using electronic health recording, and access is a matter of clicks not stamps, how might consumers better protect themselves? How can data vendors exhibit trust?  What cues from Google, Twitter, VZN should healthcare take to back patients reasonable rights to privacy?

Why is warrantless access being pushed so hard?  What justifications does the government have to skip judicial protocol?  How can consumers protect themselves?

Health data monitoring, particularly around pharma is being tied in the courts.  It’s only purpose is to track, and then build a side case.  Education?  How does this impact 

As we see DEA cases work through state courts regarding the warrantless access to prescription databases and PHI, how does that uncertainty affect patient treatment plans?  From the doc’s POV, patients?  Caretakers? 

Does IoT connected technology change how we value security?  How does personal security enter the purchase decision making process?

-->


<!-- Uncited sources, bookmarked -->
[x]: http://www.cio.com/article/748810/Will_Healthcare_Ever_Take_IT_Security_Seriously_
[x]: http://www.cio.com/article/739977/Healthcare_IT_Security_Is_Difficult_But_Not_Impossible
[x]: http://www.oregonlive.com/portland/index.ssf/2014/02/dea_needs_warrant_to_access_or.html
[x]: http://business.ftc.gov/documents/bus75-medical-identity-theft-faq-health-care-health-plan
[x]: http://www.kevinmd.com/blog/2013/06/edward-snowden-prism-affects-health-care-social-media.html
[x]: http://norse-corp.com/HealthcareReport2014.html


