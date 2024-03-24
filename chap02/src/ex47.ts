interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

type TopNavState = {
    [k in "userId" | "recentFiles"]: State[k]
}