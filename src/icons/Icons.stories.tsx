import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import * as Icons from './index';

// 배럴(index.ts)의 모든 export를 자동으로 읽어 렌더.
// CI가 icons:build로 새 아이콘을 추가하면 자동 반영됩니다 (스토리 코드 변경 불필요).
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string }>;
const entries = Object.entries(Icons) as [string, IconComponent][];
const iconNames = entries.map(([name]) => name);

// ───────────────────────── 갤러리: 전체 아이콘을 한눈에 + 색/크기 컨트롤 ─────────────────────────
function Gallery({ size, color }: { size: number; color: string }) {
  const [q, setQ] = useState('');
  const filtered = entries.filter(([name]) => name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ marginBottom: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
        <input
          placeholder="아이콘 검색…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14, width: 240 }}
        />
        <span style={{ color: '#888', fontSize: 13 }}>
          {filtered.length} / {entries.length}개
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 12 }}>
        {filtered.map(([name, Icon]) => (
          <figure
            key={name}
            style={{
              margin: 0,
              padding: 16,
              border: '1px solid #eee',
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {/* color는 prop으로 직접 전달 → stroke="currentColor"가 받음 */}
            <Icon color={color} style={{ fontSize: size }} title={name} />
            <figcaption style={{ fontSize: 12, color: '#555', textAlign: 'center', wordBreak: 'break-all' }}>
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

// ───────────────────────── 플레이그라운드: 아이콘 1개를 골라 prop을 실시간 조절 ─────────────────────────
function Playground({ icon, color, size }: { icon: string; color: string; size: number }) {
  const Icon = (Icons as Record<string, IconComponent>)[icon];
  if (!Icon) return <p>아이콘을 선택하세요.</p>;
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <Icon color={color} width={size} height={size} title={icon} />
      <pre style={{ background: '#f6f8fa', padding: 16, borderRadius: 8, fontSize: 13 }}>
        {`<${icon}\n  color="${color}"\n  width={${size}}\n  height={${size}}\n/>`}
      </pre>
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Icons',
  parameters: { layout: 'padded' },
  argTypes: {
    color: { control: { type: 'color' } }, // 색상 피커
    size: { control: { type: 'range', min: 12, max: 128, step: 2 } },
  },
};
export default meta;

// 전체 아이콘 갤러리 — 디자이너가 추가/누락 확인 + 색/크기 일괄 조절
export const AllIcons: StoryObj<typeof Gallery> = {
  render: (args) => <Gallery {...args} />,
  args: { size: 32, color: '#111111' },
};

// 단일 아이콘 플레이그라운드 — 아이콘을 골라 prop을 조절하며 확인
export const Playground_: StoryObj<typeof Playground> = {
  name: 'Playground',
  render: (args) => <Playground {...args} />,
  args: { icon: iconNames[0], color: '#2563eb', size: 64 },
  argTypes: {
    icon: { control: { type: 'select' }, options: iconNames },
  },
};
