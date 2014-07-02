---
layout: post
title: Healthcare Misses the Point of GoogleFit
catagories: [healhtIT, google, wearables, mhealth]
---
*This post was originally published in [HL7Standards][HL7S], a [CorepointHealth][CPH] affiliate following the Google I/O announcements regarding GoogleFit and AndroidWear.*

[HL7S]: http://www.hl7standards.com/blog/2014/06/30/googlefit/
[CPH]: http://www.corepointhealth.com/

As expected last Wednesday at the Google I/O developer conference, Google Play Product Manager Ellie Powers announced a new fitness SDK for digital healthcare applications and device developers, [GoogleFit][1].  Unlike competing healthcare data aggregators such as Apple’s [HealthKit][2], Microsoft’s  [Healthvault][3], and Samsung’s [SAMI][4], GoogleFit is more focused as a set of fitness-focused APIs for developers to leverage while building third party applications. 

Apple recently announced HealthKit at their WWDC in early June and has taken an aggressive approach toward centralized personal healthcare data curation. This includes [collaborations with Mayo Clinic][5] and Epic. HealthKit, based largely on Apple’s Passbook app, relies on users to engage with [their platform][6], in-house apps, proprietary biosensors and industry partnerships. 

Conversely, Google’s a la carte approach focuses more on personal daily workflow models and integrating everyday tasks into a common platform to help establish trends which can provide actionable insights. The GoogleFit SDK will allow data from user-chosen health, fitness and wellness devices to play nice with a variety of Android devices and platforms, curating all user data in one place, in one app, of the user’s choice.  With established partnerships such as Samsung, Motorola, Fossil, LG, Intel, RunKeeper, Basis, Polar, Adidas, Nike, and more, AndroidWear and GoogleFit complement the already available social, location, notification and community applications, allowing information sharing across multiple platforms, and thereby keeping users engaged. 

Google has also promised to keep the same data [takeout policy][7] that it has applied to their other applications, leaving the user in control of data ownership and able to share, delete or export their information as they choose.  Strong data ownership rights, and this exportability capability adds significant development potential over other platforms. This policy is in stark contrast to Apple’s historical data ownership policies which are particularly concerning when considering possible integration with Epic health systems.  

Parallel to the GoogleFit announcement was [AndroidWear][8], several [Android smartwatch][9] roll-outs ([LG’s G][10], [Samsung Gear Live][11] and a very nice [Moto360][12] for later this summer), the [Open Automotive Alliance][13] collaboration for Android Auto API development with 40 partners, an unlimited encrypted [Google Drive][14] enterprise storage solution and several new [cloud developer tools][15] and [updates][16].   


Additionally, Google VP Sundar Pichai described the new Android UI as “designed for form factors beyond mobile, truly cross platform” hinting at a future run at the desktop market and beyond. Together, with [Chromecast mirroring][17], [Android TV][18], the already acquired [Nest][19], and several other [virtual reality][20], interactive, [education][21], and [ATAP Group][22] projects, these disparate ventures integrate broad human experiences into one tightly optimized package centered on a wearable format. In Apple’s HealthKit, a user’s personal health data is the pieces of a puzzle, and Apple’s app would be the whole picture.  In Google’s offering from this past week, GoogleFit data is just one piece along with all the other platform offerings to create the whole user picture.

This integrated approach addresses both Google’s lack of a competitive wellness and fitness market offering, and the problem of wearable device [user retention][23] seen by stand-alone health tracking devices.

Essentially, instead of focusing on creating yet another isolated health and wellness platform, Google is breaking down data silos between common everyday actions, including health and wellness data. It’s not far fetched for a user’s car to respond to a driver’s real time data, or an integration with Nest allowing for a safer aging in place experience for elderly users.  Simpler integrations? Menu and dinner take-out data with your Withings scale or social fitness training and education in a remote situation. 

Unfortunately it is still unclear how, if at all, any of the big three aggregate platforms are addressing the data input issues that stem from third party devices.  Not only are many popular wearable devices inaccurate (Samsung is notorious for this), but most do not output user data in a raw format, instead opting for some level of aggregation, leaving developers to [hack APIs][24] or [reverse engineer][25] devices.  While this may be sufficient for current applications, it is not a scalable standard as wearable technology matures to include medical metrics, especially if EHR and clinical integration is on the horizon.



[1]: https://developers.google.com/fit/
[2]: http://www.apple.com/ios/ios8/health/
[3]: https://www.healthvault.com/us/en 
[4]: http://www.businessinsider.com/samsung-healthcare-platform-2014-5
[5]: http://www.forbes.com/sites/danmunro/2014/06/03/apple-gives-epic-and-mayo-bear-hug-with-healthkit/
[6]: http://www.engadget.com/2014/06/02/apple-healthkit/
[7]: https://www.google.com/settings/takeout
[8]: https://play.google.com/store/apps/details?id=com.google.android.wearable.app
[9]: https://www.youtube.com/watch?v=0xQ3y902DEQ
[10]: https://play.google.com/store/devices/details/LG_G_Watch_Black_Titan?id=lg_g_watch_black
[11]: https://play.google.com/store/devices/details?id=samsung_gear_live_black
[12]: https://moto360.motorola.com/
[13]: http://www.openautoalliance.net/#about
[14]: http://googleenterprise.blogspot.com/2014/06/unlimit-your-business-with-google-drive.html
[15]: http://googlecloudplatform.blogspot.com/2014/06/reimagining-developer-productivity-and-data-analytics-in-the-cloud-news-from-google-io.html
[16]: http://www.techradar.com/news/phone-and-communications/mobile-phones/android-5-0-key-lime-pie-release-date-news-and-rumours-1091500
[17]: http://www.techradar.com/news/television/chromecast-gets-mirroring-at-google-io-2014-1254880
[18]: http://developer.android.com/tv/index.html
[19]: https://nest.com/
[20]: http://time.com/2925768/the-weirdest-thing-at-google-io-was-this-cardboard-virtual-reality-box/
[21]: https://www.buildwithchrome.com/
[22]: https://www.google.com/atap/projecttango/#project
[23]: http://www.theguardian.com/technology/2014/apr/01/wearables-consumers-abandoning-devices-galaxy-gear
[24]: https://github.com/btroia/basis-data-export
[25]: http://www.openyou.org/