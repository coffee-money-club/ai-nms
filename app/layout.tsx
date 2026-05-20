import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ai-nms — 전문가가 아니어도 쓰는 네트워크 관리 시스템",
  description:
    "교육청을 위한 AI NMS. 로그를 대신 읽어주고, 한 마디로 조작합니다. 멀티벤더 AP·스위치·라우터를 비전문가도 진단하고 운영하세요.",
  openGraph: {
    title: "ai-nms — 전문가가 아니어도 쓰는 네트워크 관리 시스템",
    description: "교육청을 위한 AI NMS. 로그를 대신 읽어주고, 한 마디로 조작합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
