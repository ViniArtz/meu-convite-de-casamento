import fundoCapa from '../assets/fundo-capa.png'

export default function PhotoSection() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${fundoCapa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '45%',
          background: 'linear-gradient(to bottom, transparent 0%, #faf8f5 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
