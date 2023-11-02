import { ReactElement, createElement } from "react";
import { ClipboardCopyAreaProps } from "src/utils/IClipboardCopyType";
import TooltipWrapper from "./TooltipWrapper";
import useTooltip from "src/utils/useTooltip";



export function ClipboardWrapper({
    extendedClass,
    style,
    id,
    stringToCopy,
    content,
    tooltipConfig,
}: ClipboardCopyAreaProps ): ReactElement {
    

    let {isAction,tooltipId,handleClick,afterTooltipHide} = useTooltip(id, stringToCopy);

    return (
        <div
            onClick={handleClick}
            className={`clipboard-wrapper ${extendedClass}`}
            data-tooltip-id={tooltipId}
            style={{
                ...style
            }}
        >
            {content}
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
        </div>
    );
}
