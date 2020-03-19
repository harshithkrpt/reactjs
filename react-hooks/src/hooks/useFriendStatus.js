import React, { useState, useEffect } from "react";

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    setInterval(() => {
      handleStatusChange(true);
    }, 1000);
  });

  return isOnline;
}
