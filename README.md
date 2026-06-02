# @nextground/ui

Nextground 디자인 시스템. 아이콘은 SVG에서 자동 생성된 React(TSX) 컴포넌트로 제공됩니다.

## 설치 (GitHub Packages)

`@nextground` 스코프를 GitHub Packages 레지스트리로 매핑합니다. 소비 측 프로젝트 루트에 `.npmrc`:

```
@nextground:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm install @nextground/ui
```

## 사용

아이콘은 카테고리(`icons/<category>/`)별로 묶여 배포됩니다.

```tsx
// 카테고리 배럴에서 import (부수효과 없음 → 트리셰이킹됨)
import { ArrowRight } from '@nextground/ui/icons/default';

function App() {
  // 색은 color prop(또는 CSS color)으로, 크기는 width/height·font-size로 제어
  return <ArrowRight color="#2563eb" width={24} height={24} title="다음" />;
}
```

## 아이콘 추가 플로우 (자동화)

1. 아이콘 추출 플러그인이 `icons/<category>/*.svg`를 PR로 올림 (예: `icons/default/`)
2. CI가 **SVGO**(최적화) + **SVGR**(TSX 생성)을 돌려 `src/icons/<category>/`에 컴포넌트를 만들고 PR에 자동 커밋
3. CI가 **Storybook**을 빌드해 PR마다 프리뷰 URL을 코멘트 → 디자이너가 추가/누락 확인
4. 머지 후 GitHub Release를 발행하면 `@nextground/ui`가 GitHub Packages로 배포

## 개발

```bash
npm run storybook        # 로컬 Storybook (http://localhost:6006)
npm run icons:build      # SVG → TSX 수동 생성
npm run build            # 라이브러리 빌드 (dist/icons)
npm run build-storybook  # 정적 Storybook 빌드
```
