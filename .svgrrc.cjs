// SVGR 설정 — SVG → React(TSX) 컴포넌트 변환
module.exports = {
  typescript: true, // .tsx + React.SVGProps 타입 생성
  icon: true, // width/height를 1em으로 → font-size로 크기 제어
  svgo: true,
  svgoConfig: require('./svgo.config.cjs'), // 위 SVGO 설정 사용
  prettier: true,
  jsxRuntime: 'automatic', // import React 불필요 (React 17+)
  titleProp: true, // 접근성: <Icon title="..." /> 지원
  // 하드코딩된 검정색을 currentColor로 치환 → CSS color로 아이콘 색 제어
  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor',
    black: 'currentColor',
  },
};
