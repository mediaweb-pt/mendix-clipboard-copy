import { ReactElement, createElement} from "react";
import { ClipboardCopyButtonProps } from "src/utils/IClipboardCopyType";
import { Icon } from "./Icon";
import TooltipWrapper from "./TooltipWrapper";
import useTooltip from "src/utils/useTooltip";

export function ClipboardButton({
    extendedClass,
    style,
    id,
    stringToCopy,
    text,
    btnStyle,
    icon,
    tooltipConfig

}: ClipboardCopyButtonProps): ReactElement {
    let {isAction,tooltipId,handleClick,afterTooltipHide} = useTooltip(id, stringToCopy);

    return (
        <button
            onClick={handleClick}
            className={`btn clipboard-button ${extendedClass} ${btnStyle !== "none" ? "btn-" + btnStyle : ""}`}
            data-tooltip-id={tooltipId}
            style={{
                ...style
            }}
        >
            {text != "" && text}

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
        </button>
    );
}
