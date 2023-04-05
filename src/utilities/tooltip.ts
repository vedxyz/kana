import { TooltipProps } from "@mantine/core";

export const tooltipProps: Partial<TooltipProps> = {
  withArrow: true,
  events: { hover: true, focus: false, touch: true },
};
