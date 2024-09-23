import { useAuth } from "@/hooks";
import { useTheme } from "@emotion/react";
import { Theme, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export const useRootLayout = () => {
  const theme = useTheme() as Theme;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [hiddenSidebar, setHiddenSidebar] = useState<boolean>(false);
  const { profile: { name } } = useAuth();

  useEffect(() => {
    if (isDesktop) {
      setHiddenSidebar(false);
    }
  }, [isDesktop, hiddenSidebar]);

  const handleSidebar = useCallback(() => {
    if (!isDesktop) {
      setHiddenSidebar(!hiddenSidebar);
    }
  }, [hiddenSidebar, isDesktop]);

  const handleHiddenSidebar = () => {
    setHiddenSidebar(true)
  }

  return {
    handleSidebar,
    handleHiddenSidebar,
    hiddenSidebar,
    username: name ?? '',
  }
}