/**
 * Copyright 2012 Tsvetan Tsvetkov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Tsvetan Tsvetkov (tsekach@gmail.com)
 */
/*
    Safari native methods required for Notification object do not run in strict mode.
 */
//"use strict";
(function(win) {
    var PERMISSION_DEFAULT = "default",
        PERMISSION_GRANTED = "granted",
        PERMISSION_DENIED = "denied",
        PERMISSION = [PERMISSION_GRANTED, PERMISSION_DEFAULT, PERMISSION_DENIED],

        isSupported = !!(win.Notification || win.webkitNotifications || (win.external && win.external.msIsSiteMode() !== undefined)),

        isFunction = function(value) {return typeof value == 'function'},
        noop = function() {};

    function _createNotification(title, options) {
        if (win.Notification) {
            return new win.Notification(title, {
                /* The notification's icon - For Chrome in Windows, Linux & Chrome OS */
                icon: options.icon,
                /* The notification’s subtitle. */
                body: options.body || "",
                /*
                    The notification’s unique identifier.
                    This prevents duplicate entries from appearing if the user has multiple instances of your website open at once.
                */
                tag: options.tag || ""
            })
        } else if (win.external && win.external.msIsSiteMode()) {
            //Clear any previous notifications
            window.external.msSiteModeClearIconOverlay();

            win.external.msSiteModeSetIconOverlay(options.icon, title)
        }
    }

    function _createWrapper(notification) {
        return {
            close: function() {
                if (notification && notification.close) {
                    notification.close()
                } else if (win.external && win.external.msIsSiteMode()) {
                    window.external.msSiteModeClearIconOverlay();
                }
            }
        }
    }

    function createNotification(/* String */ title, /* */ options) {
        /*
            Return undefined if notifications are not supported.

            Return undefined if no permissions for displaying notifications.

            Title and icons are required. Return undefined if not set.
         */
        if (!isSupported || !title || !options.icon || permissionLevel() !== PERMISSION_GRANTED) {return}

        var notification = _createNotification(title, options),
            wrapper = _createWrapper(notification);

        return wrapper
    }

    function permissionLevel() {
        if (!isSupported) {return}

        if (win.Notification && win.Notification.permissionLevel) {
            return win.Notification.permissionLevel();
        } else if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            return PERMISSION[win.webkitNotifications.checkPermission()];
        } else if (win.external.msIsSiteMode()) {
            return PERMISSION_GRANTED
        }
    }

    function requestPermission(callback) {
        if (!isSupported) {return}

        var callbackFunction = isFunction(callback) ? callback : noop;

        if (win.Notification && win.Notification.requestPermission && win.Notification.permissionLevel) {
            win.Notification.requestPermission(callbackFunction)
        } else if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            win.webkitNotifications.requestPermission(callbackFunction)
        }
    }

    win.notify = {
        PERMISSION_DEFAULT: PERMISSION_DEFAULT,
        PERMISSION_GRANTED: PERMISSION_GRANTED,
        PERMISSION_DENIED: PERMISSION_DENIED,

        createNotification: createNotification,
        isSupported: isSupported,
        permissionLevel: permissionLevel,
        requestPermission: requestPermission
    };
}(window));