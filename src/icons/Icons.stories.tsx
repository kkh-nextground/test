/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string }>;

// icons:build가 만든 src/icons/<category>/*.tsx 를 전부 자동 수집.
// 새 카테고리/아이콘이 들어와도 스토리 코드는 그대로 (CI가 컴포넌트만 추가하면 됨).
const modules = import.meta.glob('./*/*.tsx', { eager: true }) as Record<string, { default: IconComponent }>;

type Entry = { name: string; category: string; Icon: IconComponent };
const all: Entry[] = Object.entries(modules)
  .filter(([path]) => !path.includes('.stories.'))
  .map(([path, mod]) => {
    const m = path.match(/\.\/([^/]+)\/(.+)\.tsx$/)!;
    return { category: m[1], name: m[2], Icon: mod.default };
  })
  .sort((a, b) => `${a.category}/${a.name}`.localeCompare(`${b.category}/${b.name}`));

const categories = [...new Set(all.map((e) => e.category))];
const optionLabels = all.map((e) => `${e.category}/${e.name}`);

// ───────────────────────── 갤러리: 카테고리별 그리드 + 색/크기 컨트롤 ─────────────────────────
function Gallery({ size, color }: { size: number; color: string }) {
  const [q, setQ] = useState('');
  const filtered = all.filter((e) => `${e.category}/${e.name}`.toLowerCase().includes(q.toLowerCase()));
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
          {filtered.length} / {all.length}개 · 카테고리 {categories.length}개
        </span>
      </div>
      {categories.map((cat) => {
        const items = filtered.filter((e) => e.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 13, color: '#888', textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 12px' }}>
              {cat}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 12 }}>
              {items.map(({ name, Icon }) => (
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
                  {/* color는 prop으로 전달 → stroke="currentColor"가 받음 */}
                  <Icon color={color} style={{ fontSize: size }} title={name} />
                  <figcaption style={{ fontSize: 12, color: '#555', textAlign: 'center', wordBreak: 'break-all' }}>
                    {name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

// ───────────────────────── 플레이그라운드: 아이콘 1개를 골라 prop 실시간 조절 ─────────────────────────
function Playground({ icon, color, size }: { icon: string; color: string; size: number }) {
  const entry = all.find((e) => `${e.category}/${e.name}` === icon) ?? all[0];
  if (!entry) return <p>아이콘이 없습니다.</p>;
  const { Icon, name } = entry;
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <Icon color={color} width={size} height={size} title={name} />
      <pre style={{ background: '#f6f8fa', padding: 16, borderRadius: 8, fontSize: 13 }}>
        {`<${name}\n  color="${color}"\n  width={${size}}\n  height={${size}}\n/>`}
      </pre>
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Icons',
  parameters: { layout: 'padded' },
  argTypes: {
    color: { control: { type: 'color' } },
    size: { control: { type: 'range', min: 12, max: 128, step: 2 } },
  },
};
export default meta;

// 전체 아이콘 갤러리 — 디자이너가 추가/누락 확인 + 색/크기 일괄 조절
export const AllIcons: StoryObj<typeof Gallery> = {
  render: (args) => <Gallery {...args} />,
  args: { size: 32, color: '#111111' },
};

// 단일 아이콘 플레이그라운드
export const Playground_: StoryObj<typeof Playground> = {
  name: 'Playground',
  render: (args) => <Playground {...args} />,
  args: { icon: optionLabels[0], color: '#2563eb', size: 64 },
  argTypes: {
    icon: { control: { type: 'select' }, options: optionLabels },
  },
};
