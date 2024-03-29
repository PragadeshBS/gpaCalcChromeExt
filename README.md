# CGPA Calculator - Chrome Extension

A Chrome extension for calculating CGPA for CEG & MIT, Anna University students.

## Features
- View CGPA 
- View GPA for individual semesters
- Visualize your performance over time with a graph of your CGPA over the semesters

![Visits](https://gpvc.arturio.dev/PragadeshBSgpaCalcChromeExt)

For now, works only for 
* Regulation 2019 - IT, ECE
* Regulation 2018 (RUSA) - CSE


Using Firefox or its forks? Checkout the [Firefox Extension](https://github.com/PragadeshBS/gpaCalcFirefoxExt)

## Screenshots
<img src="screenshots/ss1.png" width="75%">
<img src="screenshots/ss2.png" width="75%">

## Installation
### Microsoft Edge (Chromium)

Grab the extension from [here](https://microsoftedge.microsoft.com/addons/detail/afkeagkkfmcfkoipboopmnlgndjfheim)

### Google Chrome, Brave and most other chromium forks
* Clone this repo or download as zip (then unzip it somewhere) to your pc

1. Visit <i>chrome://extensions</i> (or) the **Extensions** page from settings.
2. Enable **Developer mode**
3. Choose **Load unpacked** and select the repo directory (default is gpaCalcChromeExt)

## Usage
* Visit the **Attendance & Marks** section in your SEMS dashboard.
* Choose the preferred semester for which you want to calculate your GPA. 
* Click on the *CGPA Calculator* extension icon in the browser toolbar
* Voilà you get the individual grade points for each subject, as well as the Grade Point Average for that entire semester.

## Privacy and other technical details
#### TL;DR - No collection or sharing of personal information.
The extension reads the DOM only on the *Attendance & Marks* section in your SEMS dashboard, specifically on the url *acoe.annauniv.edu/sems/student/mark*. This is done to get the semester, the subjects for that specific semester and your grades for those subjects. The extension then performs the necessary calculations locally on your machine. It does not transmit / receive any data over the network. This tool being a FOSS, you have the ability to verify the above for yourself. Only you can see your grades.  :cat:



:star2: Found this useful? Star this repo to show your appreciation 
