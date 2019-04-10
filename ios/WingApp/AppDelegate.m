/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can abe found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import <Firebase.h>
#import "RNFirebaseNotifications.h"
#import "RNFirebaseMessaging.h"
#import "RCCManager.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
  //////////////////////  PUSH NOTIFICATION PERMISSIONS /////////////////////////////////
  UIUserNotificationSettings *settings =
  [UIUserNotificationSettings
   settingsForTypes: (UIUserNotificationTypeBadge |
                      UIUserNotificationTypeSound |
                      UIUserNotificationTypeAlert)
   categories:nil];
  
  [[UIApplication sharedApplication] registerUserNotificationSettings:settings];
  
  // Register the supported interaction types.
  
  UIUserNotificationType types = UIUserNotificationTypeBadge |
  
  UIUserNotificationTypeSound | UIUserNotificationTypeAlert;
  
  UIUserNotificationSettings *mySettings =
  
  [UIUserNotificationSettings settingsForTypes:types categories:nil];
  
  [[UIApplication sharedApplication] registerUserNotificationSettings:mySettings];
  
  
  
  // Register for remote notifications.
  
  [[UIApplication sharedApplication] registerForRemoteNotifications];
  
  //////////////////////////////////////////////////////////////////////////s
  
  [FIRApp configure];
  [[UNUserNotificationCenter currentNotificationCenter] setDelegate:self];
  [RNFirebaseNotifications configure];

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation launchOptions:launchOptions];
  return YES;
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(nonnull NSDictionary *)userInfo
fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler{
  [[RNFirebaseNotifications instance] didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}

- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {
  [[RNFirebaseMessaging instance] didRegisterUserNotificationSettings:notificationSettings];
}

-(void) userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
  
  [[RNFirebaseMessaging instance] didReceiveRemoteNotification:response.notification.request.content.userInfo];
  completionHandler();
}


@end
