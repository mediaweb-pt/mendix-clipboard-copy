/**
 * This file was generated from ClipboardCopy.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, WebIcon } from "mendix";

export type ComponentStyleEnum = "area" | "button" | "link";

export type BtnStyleEnum = "default" | "inverse" | "primary" | "info" | "success" | "warning" | "danger";

export type TooltipPositionEnum = "top" | "top_start" | "top_end" | "right" | "right_start" | "right_end" | "bottom" | "bottom_start" | "bottom_end" | "left" | "left_start" | "left_end";

export type TooltipVariantEnum = "dark" | "light" | "success" | "warning" | "error" | "info";

export interface ClipboardCopyContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    componentStyle: ComponentStyleEnum;
    stringToCopy?: DynamicValue<string>;
    content?: ReactNode;
    icon?: DynamicValue<WebIcon>;
    linkText?: DynamicValue<string>;
    btnStyle: BtnStyleEnum;
    btnText?: DynamicValue<string>;
    hasTooltip: boolean;
    textBeforeCopy?: DynamicValue<string>;
    textAfterCopy?: DynamicValue<string>;
    tooltipPosition: TooltipPositionEnum;
    tooltipVariant: TooltipVariantEnum;
    advancedOptions: boolean;
    tooltipClass?: DynamicValue<string>;
    noArrow: boolean;
    tooltipArrowClass?: DynamicValue<string>;
    tooltipOffset: number;
    delayShow: number;
    delayHide: number;
}

export interface ClipboardCopyPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    componentStyle: ComponentStyleEnum;
    stringToCopy: string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    icon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    linkText: string;
    btnStyle: BtnStyleEnum;
    btnText: string;
    hasTooltip: boolean;
    textBeforeCopy: string;
    textAfterCopy: string;
    tooltipPosition: TooltipPositionEnum;
    tooltipVariant: TooltipVariantEnum;
    advancedOptions: boolean;
    tooltipClass: string;
    noArrow: boolean;
    tooltipArrowClass: string;
    tooltipOffset: number | null;
    delayShow: number | null;
    delayHide: number | null;
}
