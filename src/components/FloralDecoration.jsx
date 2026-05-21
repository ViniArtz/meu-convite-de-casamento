const C = {
  coral: '#E8705A',
  deepCoral: '#C85840',
  orange: '#F5A040',
  deepOrange: '#E07828',
  hotPink: '#E83888',
  pink: '#F090B0',
  lightPink: '#F5C0D0',
  teal: '#62B0B0',
  darkTeal: '#488898',
  olive: '#7AAA72',
  center: '#F5E07A',
  center2: '#FFF0A0',
}

function petal(r, w = 0.47) {
  return `M 0,0 C ${-r * w},${-r * 0.28} ${-r * w * 0.92},${-r * 0.72} 0,${-r} C ${r * w * 0.92},${-r * 0.72} ${r * w},${-r * 0.28} 0,0`
}

function Flower({ x, y, r, color, n = 5, rotation = 0, centerR, centerColor, opacity = 1 }) {
  const step = 360 / n
  const w = n === 8 ? 0.38 : 0.47
  return (
    <g transform={`translate(${x},${y}) rotate(${rotation})`} opacity={opacity}>
      {Array.from({ length: n }, (_, i) => (
        <path key={i} d={petal(r, w)} fill={color} transform={`rotate(${i * step})`} />
      ))}
      <circle r={centerR ?? r * 0.28} fill={centerColor ?? C.center} />
    </g>
  )
}

function Leaf({ x, y, len, angle, color = C.teal, opacity = 1 }) {
  const w = len * 0.3
  const d = `M 0,0 C ${-w},${-len * 0.28} ${-w * 0.82},${-len * 0.72} 0,${-len} C ${w * 0.82},${-len * 0.72} ${w},${-len * 0.28} 0,0`
  return <path d={d} fill={color} opacity={opacity} transform={`translate(${x},${y}) rotate(${angle})`} />
}

function Bud({ x, y, r, color }) {
  return <ellipse cx={x} cy={y - r} rx={r * 0.5} ry={r} fill={color} opacity={0.85} />
}

export default function FloralDecoration({ flip = false, compact = false }) {
  const h = compact ? 160 : 220
  return (
    <div
      style={{
        width: '100%',
        lineHeight: 0,
        pointerEvents: 'none',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg
        viewBox={`0 0 800 ${h}`}
        fill="none"
        style={{ width: '100%', display: 'block' }}
        overflow="visible"
      >
        <Leaf x={55}  y={195} len={130} angle={-44} color={C.darkTeal} />
        <Leaf x={110} y={182} len={118} angle={-33} color={C.teal} />
        <Leaf x={168} y={168} len={122} angle={-22} color={C.olive} opacity={0.9} />
        <Leaf x={238} y={153} len={112} angle={-12} color={C.teal} />
        <Leaf x={308} y={140} len={102} angle={-5}  color={C.darkTeal} />
        <Leaf x={400} y={135} len={96}  angle={0}   color={C.olive} />
        <Leaf x={492} y={140} len={102} angle={5}   color={C.teal} />
        <Leaf x={562} y={148} len={110} angle={12}  color={C.darkTeal} opacity={0.9} />
        <Leaf x={632} y={160} len={118} angle={22}  color={C.olive} opacity={0.9} />
        <Leaf x={696} y={176} len={120} angle={33}  color={C.teal} />
        <Leaf x={748} y={190} len={112} angle={44}  color={C.darkTeal} />

        <Leaf x={210} y={160} len={60} angle={-42} color={C.olive} opacity={0.72} />
        <Leaf x={355} y={136} len={52} angle={28}  color={C.teal}  opacity={0.68} />
        <Leaf x={448} y={133} len={55} angle={-22} color={C.darkTeal} opacity={0.68} />
        <Leaf x={594} y={150} len={58} angle={40}  color={C.olive} opacity={0.72} />

        <Flower x={138} y={118} r={40} color={C.lightPink} rotation={22}  opacity={0.65} />
        <Flower x={662} y={112} r={36} color={C.lightPink} rotation={-18} opacity={0.65} />

        <Flower x={248} y={83}  r={52} color={C.coral}     rotation={18}  centerColor={C.center2} />
        <Flower x={552} y={78}  r={50} color={C.deepOrange} rotation={-22} centerColor={C.center} />

        <Flower x={338} y={58}  r={60} color={C.orange}    rotation={-10} centerColor={C.center2} />
        <Flower x={462} y={52}  r={62} color={C.hotPink}   n={8} rotation={9} centerColor={C.center} centerR={18} />

        <Flower x={175} y={142} r={30} color={C.pink}      rotation={14}  opacity={0.92} />
        <Flower x={625} y={135} r={28} color={C.coral}     rotation={-8}  opacity={0.92} />
        <Flower x={302} y={118} r={24} color={C.hotPink}   rotation={22}  opacity={0.88} centerR={8} />
        <Flower x={502} y={112} r={22} color={C.orange}    rotation={-16} opacity={0.88} centerR={7} />

        <Bud x={108} y={168} r={11} color={C.coral} />
        <Bud x={378} y={136} r={9}  color={C.hotPink} />
        <Bud x={428} y={138} r={8}  color={C.orange} />
        <Bud x={694} y={162} r={10} color={C.pink} />
      </svg>
    </div>
  )
}
