interface Person4 {
    name: string;
}

const body = document.body;
const el = body as unknown as Person4;
/* 'HTMLElement' 형식을 'Person' 형식으로 변환한 작업은 실수일 수 있습니다.
두 형식이 서로 충분히 겹치지 않기 때문입니다.
의도적으로 변환한 경우에는 먼저 'unknown'으로 식을 변환합니다. */