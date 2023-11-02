import { createElement} from 'react';
import { TooltipConfigProps } from "src/utils/IClipboardCopyType";
import { mapToPlacesType, mapToVariantType } from "src/utils/mapTooltipType";
import { Tooltip } from "react-tooltip";

interface TooltipWrapperProps extends TooltipConfigProps{
    id: string,
    content?: string
    afterHide: () => void,
}

const TooltipWrapper = (props:TooltipWrapperProps) => {

    return (
        <Tooltip
            id={props.id}
            afterHide={props.afterHide}
            noArrow={props.noArrow}
            className={props.tooltipClass}
            classNameArrow={props.tooltipArrowClass}
            variant={mapToVariantType(props.tooltipVariant)}
            place={mapToPlacesType(props.tooltipPosition)}
            offset={props.tooltipOffset ?? 10}
            delayHide={props.delayHide ?? 0}
            delayShow={props.delayShow ?? 0}
            content={props.content}
            positionStrategy= 'fixed'
            style={{ zIndex: 1 }} />
    )
}

export default TooltipWrapper