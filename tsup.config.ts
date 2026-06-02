import { defineConfig } from 'tsup';

// 디자인 시스템 라이브러리 빌드
// - 아이콘마다 개별 모듈 유지 (번들 X) → 소비 측이 @nextground/ui/icons/Bell 로 개별 import 가능
// - ESM 전용, .d.ts 생성, react는 peer (external)
export default defineConfig({
  entry: ['src/icons/**/*.{ts,tsx}', '!src/icons/**/*.stories.tsx'],
  outDir: 'dist/icons', // JS와 .d.ts 모두 여기로 → 소비 경로 @nextground/ui/icons/Bell
  format: ['esm'],
  dts: true,
  splitting: false, // 파일별 출력 유지 (공통 청크로 합치지 않음)
  treeshake: true,
  clean: true,
  target: 'es2022',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
});
