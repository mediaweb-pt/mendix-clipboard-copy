import { DynamicValue, WebIcon } from "mendix";
import { CSSProperties, ReactNode } from "react";

export interface TooltipConfigProps {
    hasTooltip?: boolean;
    textBeforeCopy?: string;
    textAfterCopy?: string;
    tooltipPosition?: string;
    tooltipVariant?: string;
    tooltipOffset?: number;
    delayShow?: number;
    delayHide?: number;
    noArrow?: boolean;
    tooltipClass?: string;
    tooltipArrowClass?: string;
}

export interface ClipboardCopyProps {
    stringToCopy?: string;
    icon?: DynamicValue<WebIcon>;
    tooltipConfig: TooltipConfigProps; 
    extendedClass: string;
    id: string;
    style?: CSSProperties;
}

export interface ClipboardCopyAreaProps extends ClipboardCopyProps {
    content?: ReactNode;
}
export interface ClipboardCopyButtonProps extends ClipboardCopyProps {
    text?: string;
    btnStyle?: string;
}
export interface ClipboardCopyLinkProps extends ClipboardCopyProps {
    text?: string;
}

export interface IconProps {
    icon?: DynamicValue<WebIcon>
    hasTextLeft: boolean;
}
