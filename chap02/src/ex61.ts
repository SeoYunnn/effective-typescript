interface ScatterProps {
    // The data
    xs: number[];
    ys: number[];

    // Display
    xRange: [number, number];
    yRange: [number, number];
    color: string;

    // Events
    onClick: (x: number, y: number, index: number) => void;
}

// 1번째 방법
/*
function shouldUpdate(
    oldProps: ScatterProps,
    newProps: ScatterProps
) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k]) {
            if (k !== "onClick") return true;
        }
    }
    return false;
}
*/

// 2번째 방법
function shouldUpdate(
    oldProps: ScatterProps,
    newProps: ScatterProps
) {
    return (
        oldProps.xs !== newProps.xs ||
        oldProps.ys !== newProps.ys ||
        oldProps.xRange !== newProps.xRange ||
        oldProps.yRange !== newProps.yRange ||
        oldProps.color !== newProps.color
    );
}