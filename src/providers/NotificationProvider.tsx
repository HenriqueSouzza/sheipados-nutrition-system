import { ReactNode, useMemo, useState } from "react";
import { Snackbar } from "@/components";
import { Alert, AlertProps } from "@mui/material";
import { NotificationContext, NotificationContextProps } from "@/contexts";

interface NotificationProviderProps {
  children: ReactNode
}

interface DataNotificationProps {
  type: AlertProps['color']
  feedbackText: string
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dataNotification, setDataNotification] = useState<DataNotificationProps>({ type: 'info', feedbackText: '' });

  const handleClose = () => {
    setOpen(false);
  };

  const handleNotification = (data: DataNotificationProps) => {
    setDataNotification(data);
    setOpen(true);
  }

  const NotificationContextValue: NotificationContextProps = useMemo(() => ({
    handleNotification,
  }), []);

  return (
    <NotificationContext.Provider value={NotificationContextValue}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={dataNotification.type}
          variant="filled"
        >
          {dataNotification.feedbackText}
        </Alert>
      </Snackbar >
    </NotificationContext.Provider>
  )
}