import { ReactElement, createElement } from "react";
import { ClipboardWrapper } from "./components/ClipboardWrapper";
import { ClipboardCopyPreviewProps } from "../typings/ClipboardCopyProps";
import { ClipboardButton } from "./components/ClipboardButton";
import { ClipboardLink } from "./components/ClipboardLink";
import { TooltipConfigProps } from "./utils/IClipboardCopyType";

export function preview(props: ClipboardCopyPreviewProps): ReactElement {
    let tooltipConfig : TooltipConfigProps = {
    }
    switch (props.componentStyle) {
        case "area":
            return (
                <ClipboardWrapper
                    id="Template"
                    content="ClipboardCopy"
                    extendedClass={props.class}
                    tooltipConfig={tooltipConfig}
                />
            );
        case "button":
            return (
                <ClipboardButton
                    id="Template"
                    extendedClass={props.class}
                    text="Your Text"
                    btnStyle={props.btnStyle}
                    tooltipConfig={tooltipConfig}
                />
            );
        case "link":
            return (
                <ClipboardLink 
                    id="Template"
                    extendedClass={props.class} 
                    text="Your Text"
                    tooltipConfig={tooltipConfig}
                />
            );
    }
}

export function getPreviewCss(): string {
    return require("./ui/ClipboardCopy.css");
}
