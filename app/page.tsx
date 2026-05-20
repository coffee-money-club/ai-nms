const queries = [
  {
    q: "3일째 오프라인인 장비 알려줘",
    a: "3일 이상 오프라인 장비 2대입니다.\n• 본관 3F AP-12 — 마지막 응답 5/17\n• 체육관 SW-02 — 마지막 응답 5/16\n둘 다 같은 PoE 스위치 하위입니다. 전원·케이블부터 확인해보세요.",
  },
  {
    q: "AP-12 로그 분석해서 뭔 일인지 알려줘",
    a: "재부팅이 6시간마다 반복됩니다. 설정값보다 하드웨어 결함 패턴에 가까워요.\n→ 엔지니어 출동보다 벤더사 RMA를 먼저 권장합니다.",
  },
];

const steps = [
  { n: "1", t: "장비 연결", d: "멀티벤더 AP·스위치·라우터를 등록하면 상태·로그가 한곳에 모입니다." },
  { n: "2", t: "자연어로 질문", d: "\"무슨 일이야?\" 한 마디. 전문 용어·필터·대시보드를 몰라도 됩니다." },
  { n: "3", t: "정리된 답 + 올바른 조치", d: "원인 추정과 다음 행동까지. 엔지니어 vs 벤더 RMA로 라우팅합니다." },
];

const faqs = [
  { q: "우리 망 밖으로 데이터가 나가나요?", a: "아니요. 설치형 + 자체 LLM으로 망 내부에서 동작합니다." },
  { q: "우리 벤더 장비도 지원하나요?", a: "멀티벤더 구조라 신규 벤더는 어댑터로 추가됩니다." },
  { q: "AI가 틀린 답을 하면요?", a: "읽기(진단)는 조언일 뿐 사람이 판단합니다. 쓰기(조작)는 실행 전 미리보기·확인을 거칩니다." },
];

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="text-neutral-800">
      {/* NAV */}
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-neutral-900">ai-nms</span>
          <a
            href="#contact"
            className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
          >
            문의하기
          </a>
        </nav>
      </header>

      {/* HERO */}
      <Section className="text-center">
        <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1.5 text-[13px] font-medium text-blue-600">
          교육청 전용 · AI 네트워크 관리
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
          전문가가 아니어도 쓰는
          <br />
          네트워크 관리 시스템
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
          교육청을 위한 AI NMS — 로그를 대신 읽어주고, 한 마디로 조작합니다.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-7 py-3.5 text-base font-medium text-white transition hover:bg-blue-700"
          >
            데모 보기
          </a>
        </div>
        <p className="mt-5 text-[13px] text-neutral-400">설치형 · 우리 망 안에서 동작 · 멀티벤더 지원</p>
      </Section>

      {/* PROBLEM */}
      <Section className="bg-neutral-50 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">이런 적, 없으세요?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-neutral-500">
          학교 AP 하나가 죽어도 교육청엔 네트워크 전문가가 없어 매번 엔지니어를 부릅니다.
          <br className="hidden sm:block" />
          그런데 그중 절반은 굳이 출동할 필요도 없던 일이었죠.
        </p>
      </Section>

      {/* SOLUTION */}
      <Section className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">NMS 안에 들어온 AI 헬퍼</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-7 text-left">
            <h3 className="text-lg font-bold text-neutral-900">🔍 진단</h3>
            <p className="mt-3 leading-relaxed text-neutral-500">
              &quot;3일째 오프라인인 장비 알려줘&quot;, &quot;AP 로그 분석해서 무슨 일인지 알려줘&quot; — 로그를 사람이 읽을 수 있게 정리합니다.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-7 text-left">
            <h3 className="text-lg font-bold text-neutral-900">⚡ 조작</h3>
            <p className="mt-3 leading-relaxed text-neutral-500">
              &quot;신규 AP 등록해줘&quot; 한 마디로. 시스템 사용법을 몰라도 자연어로 굴러갑니다.
            </p>
          </div>
        </div>
      </Section>

      {/* CHAT EXAMPLE */}
      <Section className="bg-neutral-50">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">실제로, 이렇게 물어보세요</h2>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
          {queries.map((m, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="flex justify-end">
                <p className="max-w-[80%] rounded-2xl bg-blue-600 px-4 py-3 text-[15px] text-white">{m.q}</p>
              </div>
              <div className="flex justify-start">
                <p className="max-w-[85%] whitespace-pre-line rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-[15px] leading-relaxed text-neutral-700">
                  {m.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">어떻게 동작하나</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-neutral-50 p-7 text-left">
              <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[13px] font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-3 text-[17px] font-bold text-neutral-900">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DIFFERENTIATOR */}
      <Section className="bg-neutral-50 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">레거시 NMS와 뭐가 다른가</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 text-left">
            <h3 className="font-bold text-neutral-400">기존 NMS</h3>
            <ul className="mt-3 space-y-2 text-[15px] text-neutral-500">
              <li>• AI 없음</li>
              <li>• 전문가가 있어야 해석 가능</li>
              <li>• 높은 학습 곡선</li>
              <li>• 장애 = 무조건 사람 호출</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-blue-600 bg-white p-7 text-left">
            <h3 className="font-bold text-blue-600">ai-nms</h3>
            <ul className="mt-3 space-y-2 text-[15px] text-neutral-700">
              <li>• 자연어 질의·진단</li>
              <li>• 전문가 아니어도 사용</li>
              <li>• 한 마디로 조작</li>
              <li>• 올바른 곳으로 정리된 escalation</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* MULTIVENDOR */}
      <Section className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">어떤 장비든, 한 화면에서</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
          AP · 스위치 · 라우터 — 벤더가 섞여 있어도 통합 수집·진단합니다.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Dasan", "Davo", "AllRadio", "Mercury", "+ more"].map((v) => (
            <span
              key={v}
              className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-500"
            >
              {v}
            </span>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-neutral-50">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">자주 묻는 질문</h2>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5">
              <p className="font-bold text-neutral-900">Q. {f.q}</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-500">A. {f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="bg-neutral-900 text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl">
          교육청 네트워크, 더 이상 전화로만 해결하지 마세요
        </h2>
        <div className="mt-8">
          <a
            href="mailto:contact@coffeemoneyclub.example"
            className="inline-block rounded-xl bg-blue-600 px-7 py-3.5 text-base font-medium text-white transition hover:bg-blue-700"
          >
            도입 문의
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-neutral-400 sm:flex-row">
          <span className="font-semibold text-neutral-600">ai-nms</span>
          <span>© {new Date().getFullYear()} Coffee Money Club</span>
        </div>
      </footer>
    </main>
  );
}
