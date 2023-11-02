import classNames from "classnames";
import { ValueStatus } from "mendix";
import { createElement } from "react";
import { IconProps } from 'src/utils/IClipboardCopyType';

export const Icon = ({icon, hasTextLeft} : IconProps) => {

    let iconObj;
    let isGlyph = false;

    if (icon?.status === ValueStatus.Available && icon.value) {
        const test = icon.value;
        iconObj = {
            type: test.type,
            image: test.type === "image" ? test.iconUrl : test.iconClass
        };
        if (iconObj?.type === "glyph") {
            isGlyph = true;
        }
    } else return null;

    return (
        <span className={classNames(icon, { glyphicon: isGlyph }) + " " + iconObj?.image + (hasTextLeft ? " spacing-outer-left" : "")} />
    )
}
