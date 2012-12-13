###### (draft)

# HTML5 Desktop Notifications

A small library that unifies the HTML5 Notifications APIs along different browsers including IE9 & IE10.

## Content
<ol>
	<li>Introduction</li>
	<li>Browsers Support</li>
	<li>Usage</li>
	<li>API Documentation</li>
    <li>Screenshots</li>
	<li>Limitations</li>
</ol>

## Introduction

<a href="http://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html">HTML5 Notifications API</a> allows you to display notifications to the user for given events. There is a <a href="http://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html">draft spec</a>, but it is not currently in any standard.

Google Chrome introduces notifications in version 5 (http://caniuse.com/#feat=notifications) - supporting the old proposed APIs version. Starting from version 22, Chrome supports the lastest proposed draft version of the Notifications API, but some of the methods are not implemented or breaking the page - see below for details.

Safari 6 implements most of the APIs in proposed Notifications draft. See <a href="https://developer.apple.com/library/mac/#documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/SendingNotifications.html#//apple_ref/doc/uid/TP40001483-CH23-SW1">Safari documentation</a>.

IE9 introduced pinned sites, a convenient way for users to access your website directly by clicking an icon on the taskbar. Pinned sites are easy to implement, too, requiring very little code. For more information about creating pinned sites, see <a href="http://msdn.microsoft.com/en-us/library/ie/gg491731(v=vs.85).aspx">Pinned Sites Developer Documentation</a>. Pinned site can display icon overlays on the taskbar or highlights the taskbar button to notify user of activity. To view an icon overlay, the taskbar buttons must be in their default large icon mode. Small taskbar icons do not support icon overlays. In addition, icon overlays are visible only while the Pinned site window is running. The icon is removed from the taskbar button when the Pinned site window is closed. See <a href="http://msdn.microsoft.com/en-us/library/ie/gg491744(v=vs.85).aspx">Working with custom icon overlays in pinned sites</a>.

## Browsers Support

<table>
	<thead>
		<th></th>
		<th>Windows</th>
		<th>MacOS</th>
		<th>Linux</th>
		<th>ChromeOS</th>
	</thead>
	<tbody>
		<!-- IE -->
		<tr>
			<td>IE<sup>1</sup></td>
			<td>✓</td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
		</tr><!-- IE -->

		<!-- Chrome -->
		<tr>
			<td>Chrome</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr><!-- Chrome -->

		<!-- Safari -->
		<tr>
			<td>Safari<sup>2</sup></td>
			<td>-</td>
			<td>✓</td>
			<td>-</td>
			<td>-</td>
		</tr><!-- Safari -->

		<!-- Firefox -->
		<tr>
			<td>Firefox<sup>3</sup></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr><!-- Firefox-->
	</tbody>
</table>

<sup>1</sup> Support for IE9+ running on Windows7 or later. In addition, notifications are visible only while the Pinned site window is running. The icon is removed from the taskbar button when the Pinned site window is closed. The taskbar buttons must be in their default large icon mode, small taskbar icons do not support icon overlays.

<sup>2</sup> Support for Safari 6

<sup>3</sup> Support for Firefox only when <a href="http://code.google.com/p/ff-html5notifications/">html5-notifications plugin</a> is installed. Recommended version is 1.2.0.1 - see the following issue: http://code.google.com/p/ff-html5notifications/issues/detail?id=58 . For MacOS <a href="http://www.growl.info/">Growl</a> app is required.

## Usage

## API Documentation

## Screenshots
Chrome running on Windows7:
<img src="https://raw.github.com/ttsvetko/HTML5-Desktop-Notifications/master/screenshots/ChromeWindows7.png"/>

Chrome running on MacOS:
<img src="https://raw.github.com/ttsvetko/HTML5-Desktop-Notifications/master/screenshots/ChromeMacOS.png"/>

## Limitations