import { ReactElement, createElement } from "react";
import { ClipboardCopyLinkProps } from "src/utils/IClipboardCopyType";
import { Icon } from "./Icon";
import useTooltip from "src/utils/useTooltip";
import TooltipWrapper from "./TooltipWrapper";

export function ClipboardLink({
    id,
    extendedClass,
    stringToCopy,
    text,
    style,
    icon,
    tooltipConfig
}: ClipboardCopyLinkProps): ReactElement {

    let {isAction,tooltipId,handleClick,afterTooltipHide} = useTooltip(id, stringToCopy);

    return (
        <a
            onClick={handleClick}
            className={`clipboard-link ${extendedClass}`}
            data-tooltip-id={tooltipId}
            style={{
                ...style
            }}
        >
            {text != "" && <span>{text}</span>}
            <Icon icon={icon} hasTextLeft={text!=""}/>

            {tooltipConfig.hasTooltip && <TooltipWrapper
                                                id={tooltipId}
                                                afterHide={afterTooltipHide}
                                                content={isAction ? tooltipConfig.textAfterCopy : tooltipConfig.textBeforeCopy}
                                                noArrow={tooltipConfig.noArrow}
                                                tooltipClass={tooltipConfig.tooltipClass}
                                                tooltipArrowClass={tooltipConfig.tooltipArrowClass}
                                                tooltipVariant={tooltipConfig.tooltipVariant}
                                                tooltipPosition={tooltipConfig.tooltipPosition}
                                                tooltipOffset={tooltipConfig.tooltipOffset}
                                                delayHide={tooltipConfig.delayHide}
                                                delayShow={tooltipConfig.delayShow}
                                            />
            }
        </a>
    );
}
