export const metadata = {
  title: "나의 첫 사이트",
  description: "세미님을 위한 연습용입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
