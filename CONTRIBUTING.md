# Contributing — ai-nms

## 워크플로우

```
Linear 이슈 → 브랜치 → 코드 → PR → 리뷰 → 머지 → 자동 배포
```

1. **이슈에서 시작**: Linear 이슈(COF-N)의 자동 브랜치명 복사해서 작업.
2. **커밋 컨벤션** (Conventional Commits):
   ```
   <type>: <설명>

   type: feat | fix | refactor | docs | test | chore | perf | ci
   ```
3. **PR 본문에 `Closes COF-N`** → 머지 시 이슈 자동 종료.
4. **리뷰 1명 이상 승인** 후 머지 (main 직푸시 금지).
5. **머지 = main** → Vercel production 자동 배포.

## 브랜치 전략

- `main` — 항상 배포 가능 상태. 보호됨(PR+리뷰 필수).
- 작업 브랜치 — Linear 자동 생성 이름 사용 (`<user>/cof-N-...`).

## Definition of Ready (이슈가 작업 가능해지는 조건)

- [ ] 무엇을 왜 하는지 한 줄로 설명됨
- [ ] 완료 기준(acceptance criteria) 있음
- [ ] 의존성/블로커 없음 (있으면 명시)
- [ ] 우선순위 + (가능하면) 마일스톤 배정됨

## Definition of Done (PR이 머지 가능해지는 조건)

- [ ] 완료 기준 충족
- [ ] lint/format/typecheck 통과
- [ ] 테스트 추가/통과
- [ ] 리뷰 승인 1명+
- [ ] 시크릿 하드코딩 없음
- [ ] 관련 문서 갱신

## 도구별 역할

| 도구 | 역할 |
| --- | --- |
| Linear | 이슈·스프린트 (작업의 단일 출처) |
| Notion | PRD·ADR·회의록 (지식) |
| GitHub | 코드·PR·CI |
| Figma | 디자인 |
| Vercel | 배포 |
| Slack | `#ai-nms` 대화 · `#ai-nms-feed` 알림 · `#ai-nms-meeting` 회의 |
