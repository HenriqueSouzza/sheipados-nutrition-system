import { AlertProps } from "@mui/material";
import { createContext } from "react";

export interface DataNotificationProps {
  type: AlertProps['color']
  feedbackText: string
}

export interface NotificationContextProps {
  handleNotification: (data: DataNotificationProps) => void,
}

const NotificationContextValues: NotificationContextProps = {
  handleNotification: () => null,
}

export const NotificationContext = createContext(NotificationContextValues);
