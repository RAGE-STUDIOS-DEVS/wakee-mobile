# SPIKE - React Native Expo can have custom push notifications

1. custom sound push notification
2. can push the notification at a certain time
3. features works both for android and IOS
4. if the feature is NOT available, check if and how we 
5. can eject from Expo and still continue development
<br>
***
### The short answer is yes, Expo can do all these things. 
***

According to the Expo [documentation](https://docs.expo.dev/versions/latest/sdk/notifications/), Expo has the ability to push notifications with custom sounds at a scheduled time for both android and IOS. Ejecting is not required for this feature. 

### Compatibile with both android and IOS as seen below:<br>
Android and IOS emulators will not work with the notifications. So developers will need physical android and IOS devices to test notification code.

![androidIOS](/doc/images/Expo_notificationCompatibleAndroidIOS.PNG) <br>
***
### Custom sound notification [documentation](https://docs.expo.dev/versions/latest/sdk/notifications/) <br>
By configuring the [app.json](../app.json) file, custom sound files can be used as shown below.

![customSound](/doc/images/Expo_setCustomNotification.PNG)
***
### Scheduling notifications can be done per the [documentation](https://docs.expo.dev/versions/latest/sdk/notifications/) as shown below<br>
Click the [documentation](https://docs.expo.dev/versions/latest/sdk/notifications/) link  and then the information can be found by scrolling down or querying the page for "schedule notifications".

![scheduleNotifiaction](/doc/images/Expo_scheduleNotification.PNG)


