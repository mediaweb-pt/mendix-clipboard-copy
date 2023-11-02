import {useEffect, useState, useCallback} from 'react'

const useTooltip = (id:string, toCopy:string | undefined) => {
    let [isAction, setAction] = useState(false);
    let [tooltipId, setTooltipId] = useState(`tooltip-id-` + id);
    let [copy, setCopy] = useState(toCopy);

    useEffect(()=>{
        setTooltipId(`tooltip-id-` + id)
    }, [id])

    useEffect(() => {
        setCopy(toCopy);
    }, [toCopy])


    const handleClick = useCallback(()=>{
        navigator.clipboard.writeText(copy ?? '');
        setAction(true);
    }, [copy])

    const afterTooltipHide = useCallback(()=>{
        setAction(false);
    }, [])

    return {
        isAction,
        tooltipId,
        handleClick,
        afterTooltipHide
    }
}

export default useTooltip