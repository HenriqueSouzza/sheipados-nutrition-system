import { useAuth } from "@/hooks";
import { useTheme } from "@emotion/react";
import { Theme, useMediaQuery } from "@mui/material";
import { useCallback, useState } from "react";

export const useRootLayout = () => {
  const { onLogout } = useAuth();
  const theme = useTheme() as Theme;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hiddenSidebar, setHiddenSidebar] = useState<boolean>(false);

  const handleSidebar = useCallback(() => {
    if (isMobile) {
      setHiddenSidebar(!hiddenSidebar);
    }
  }, [isMobile, hiddenSidebar]);

  return {
    onLogout,
    handleSidebar,
    hiddenSidebar,
  }
}