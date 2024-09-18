import { Paths } from "@/config";
import { useAuth } from "@/hooks";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UseHeaderProps {
  handleHiddenSidebar: () => void
}

export const useHeader = ({ handleHiddenSidebar }: UseHeaderProps) => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onProfilePage = () => {
    navigate(Paths.PROFILE);
    handleClose();
    handleHiddenSidebar();
  }

  return {
    onLogout,
    onProfilePage,
    handleClose,
    handleMenu,
    anchorEl,
  }
}