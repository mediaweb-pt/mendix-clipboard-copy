import { ReactElement, createElement } from "react";
import { ClipboardWrapper } from "./components/ClipboardWrapper";

import { ClipboardCopyContainerProps } from "../typings/ClipboardCopyProps";

import "./ui/ClipboardCopy.css";
import { ClipboardButton } from "./components/ClipboardButton";
import { ClipboardLink } from "./components/ClipboardLink";
import { TooltipConfigProps } from "./utils/IClipboardCopyType";

export function ClipboardCopy(props: ClipboardCopyContainerProps): ReactElement {
    let tooltipConfig: TooltipConfigProps = {
        hasTooltip: props.hasTooltip,
        textBeforeCopy: props.textBeforeCopy?.value ?? "",
        textAfterCopy: props.textAfterCopy?.value ?? "",
        tooltipPosition: props.tooltipPosition,
        tooltipVariant: props.tooltipVariant,
        tooltipOffset: props.tooltipOffset,
        delayHide: props.delayHide,
        delayShow: props.delayShow,
        noArrow: props.noArrow,
        tooltipClass: props.tooltipClass?.value ?? "",
        tooltipArrowClass: props.tooltipArrowClass?.value ?? ""
    };

    switch (props.componentStyle) {
        case "area":
            return (
                <ClipboardWrapper
                    id={props.name}
                    style={props.style}
                    stringToCopy={props.stringToCopy?.value ?? ""}
                    content={props.content}
                    extendedClass={props.class}
                    tooltipConfig={tooltipConfig}
                />
            );
        case "button":
            return (
                <ClipboardButton
                    id={props.name}
                    style={props.style}
                    stringToCopy={props.stringToCopy?.value ?? ""}
                    extendedClass={props.class}
                    text={props.btnText?.value ?? ""}
                    btnStyle={props.btnStyle}
                    icon={props.icon}
                    tooltipConfig={tooltipConfig}
                />
            );
        case "link":
            return (
                <ClipboardLink
                    id={props.name}
                    style={props.style}
                    stringToCopy={props.stringToCopy?.value ?? ""}
                    extendedClass={props.class}
                    text={props.linkText?.value ?? ""}
                    icon={props.icon}
                    tooltipConfig={tooltipConfig}
                />
            );
    }
}
