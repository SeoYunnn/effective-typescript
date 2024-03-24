const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
};

function shouldUpdate2(
    oldProps: ScatterProps,
    newProps: ScatterProps
) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
            return true;
        }
    }
    return false;
}