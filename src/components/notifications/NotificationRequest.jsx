import { useEffect, useState, useCallback } from "react";

const NotificationRequest = () => {
  const [notificationPermission, setNotificationPermission] = useState(
    () => Notification.permission,
  );

  const sendInitialMessage = useCallback(() => {
    new Notification("Welcome!", {
      body: "Thank you for visiting our app!",
      icon: "/logo.svg",
    });
    console.log("notification sent...");
  }, []);

  useEffect(() => {
    if (
      notificationPermission === "default" ||
      notificationPermission === "denied"
    ) {
      Notification.requestPermission()
        .then((permission) => {
          setNotificationPermission(permission);
        })
        .catch((error) => {
          console.error("Notification permission request was denied", error);
        });
    } else if (notificationPermission === "granted") {
      sendInitialMessage();
    }
  }, [notificationPermission, sendInitialMessage]);

  return (
    <div
      className={`relative w-full h-5 ${notificationPermission === "granted" ? "hidden" : ""}`}
    >
      {notificationPermission === "denied" && (
        <div
          className="absolute inset-0 text-sm pl-5 bg-green-600 w-full"
          style={{ zIndex: "1000" }}
        >
          <span>
            Notifications are blocked. Please enable notifications by clicking
            the lock/bell icon next to the URL.
          </span>
        </div>
      )}
    </div>
  );
};

export default NotificationRequest;
