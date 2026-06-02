import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import * as Icons from './index';

// 배럴(index.ts)의 모든 export를 자동으로 읽어 그리드로 렌더.
// CI가 icons:build로 새 아이콘을 추가하면 이 갤러리에 자동 반영됩니다 (스토리 코드 변경 불필요).
type IconComponent = (props: { style?: React.CSSProperties; title?: string }) => React.ReactElement;
const entries = Object.entries(Icons) as [string, IconComponent][];

function Gallery({ size }: { size: number }) {
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
            <Icon style={{ fontSize: size, color: '#111' }} title={name} />
            <figcaption style={{ fontSize: 12, color: '#555', textAlign: 'center', wordBreak: 'break-all' }}>
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const meta: Meta<typeof Gallery> = {
  title: 'Design System/Icons',
  component: Gallery,
  args: { size: 32 },
  argTypes: { size: { control: { type: 'range', min: 16, max: 96, step: 4 } } },
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Gallery>;

// 전체 아이콘 갤러리 — 디자이너가 추가/누락 확인용
export const AllIcons: Story = {};
