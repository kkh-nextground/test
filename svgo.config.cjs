// SVGO 최적화 설정 — SVGR가 컴포넌트 생성 전에 이 설정으로 SVG를 먼저 정리합니다.
module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // viewBox는 반응형 스케일링에 필수이므로 제거하지 않음
          removeViewBox: false,
          // id 제거는 그라데이션/clipPath 참조를 깨뜨릴 수 있어 보수적으로
          cleanupIds: false,
        },
      },
    },
    // 고정 width/height 제거 → SVGR의 icon 옵션(1em)으로 크기 제어
    'removeDimensions',
  ],
};
