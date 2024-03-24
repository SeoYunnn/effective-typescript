const dates: readonly Date[] = [new Date()];
// dates.push(new Date());
// readonly Date[] 속성에 push 가 존재하지 않음
dates[0].setFullYear(2037); // 정상