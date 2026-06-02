import{a as e,i as t,r as n,s as r}from"./preload-helper-xPQekRTU.js";import{t as i}from"./iframe-CuskOGTc.js";var a=n((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),o=n(((e,t)=>{t.exports=a()})),s,c,l=t((()=>{s=o(),c=({title:e,titleId:t,...n})=>(0,s.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,"aria-labelledby":t,...n,children:[e?(0,s.jsx)(`title`,{id:t,children:e}):null,(0,s.jsx)(`path`,{stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 12h14m-6-6 6 6-6 6`})]}),c.__docgenInfo={description:``,methods:[],displayName:`SvgArrowRight`,props:{title:{required:!1,tsType:{name:`string`},description:``},titleId:{required:!1,tsType:{name:`string`},description:``}}}})),u,d,f=t((()=>{u=o(),d=({title:e,titleId:t,...n})=>(0,u.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,"aria-labelledby":t,...n,children:[e?(0,u.jsx)(`title`,{id:t,children:e}):null,(0,u.jsx)(`path`,{stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M20 6 9 17l-5-5`})]}),d.__docgenInfo={description:``,methods:[],displayName:`SvgCheck`,props:{title:{required:!1,tsType:{name:`string`},description:``},titleId:{required:!1,tsType:{name:`string`},description:``}}}})),p=e({ArrowRight:()=>c,Check:()=>d}),m=t((()=>{l(),f()}));function h({size:e,color:t}){let[n,r]=(0,_.useState)(``),i=y.filter(([e])=>e.toLowerCase().includes(n.toLowerCase()));return(0,v.jsxs)(`div`,{style:{fontFamily:`system-ui, sans-serif`},children:[(0,v.jsxs)(`div`,{style:{marginBottom:16,display:`flex`,gap:12,alignItems:`center`},children:[(0,v.jsx)(`input`,{placeholder:`아이콘 검색…`,value:n,onChange:e=>r(e.target.value),style:{padding:`8px 12px`,border:`1px solid #ccc`,borderRadius:8,fontSize:14,width:240}}),(0,v.jsxs)(`span`,{style:{color:`#888`,fontSize:13},children:[i.length,` / `,y.length,`개`]})]}),(0,v.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(110px, 1fr))`,gap:12},children:i.map(([n,r])=>(0,v.jsxs)(`figure`,{style:{margin:0,padding:16,border:`1px solid #eee`,borderRadius:12,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,v.jsx)(r,{color:t,style:{fontSize:e},title:n}),(0,v.jsx)(`figcaption`,{style:{fontSize:12,color:`#555`,textAlign:`center`,wordBreak:`break-all`},children:n})]},n))})]})}function g({icon:e,color:t,size:n}){let r=p[e];return r?(0,v.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`,fontFamily:`system-ui, sans-serif`},children:[(0,v.jsx)(r,{color:t,width:n,height:n,title:e}),(0,v.jsx)(`pre`,{style:{background:`#f6f8fa`,padding:16,borderRadius:8,fontSize:13},children:`<${e}\n  color="${t}"\n  width={${n}}\n  height={${n}}\n/>`})]}):(0,v.jsx)(`p`,{children:`아이콘을 선택하세요.`})}var _,v,y,b,x,S,C,w;t((()=>{_=r(i(),1),m(),v=o(),y=Object.entries(p),b=y.map(([e])=>e),x={title:`Design System/Icons`,parameters:{layout:`padded`},argTypes:{color:{control:{type:`color`}},size:{control:{type:`range`,min:12,max:128,step:2}}}},S={render:e=>(0,v.jsx)(h,{...e}),args:{size:32,color:`#111111`}},C={name:`Playground`,render:e=>(0,v.jsx)(g,{...e}),args:{icon:b[0],color:`#2563eb`,size:64},argTypes:{icon:{control:{type:`select`},options:b}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Gallery {...args} />,
  args: {
    size: 32,
    color: '#111111'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Playground {...args} />,
  args: {
    icon: iconNames[0],
    color: '#2563eb',
    size: 64
  },
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: iconNames
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`AllIcons`,`Playground_`]}))();export{S as AllIcons,C as Playground_,w as __namedExportsOrder,x as default};