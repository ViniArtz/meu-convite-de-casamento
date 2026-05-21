# Eloizy & Vinicius — Convite Digital

Convite de casamento digital estático, construído com React + Vite. Sem backend, sem gerenciamento de lista de convidados — apenas a experiência do convite com links externos para RSVP e lista de presentes.

**Data:** 16 de Julho de 2026 · Quinta-feira · 17h00
**Local:** Coco Bambu Meireles — Fortaleza, Ceará

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI |
| Vite | 8 | Build / dev server |
| framer-motion | 12 | Animações de entrada, scroll, flip e hover |
| react-intersection-observer | 10 | Scroll-triggered animations |
| lucide-react | 1 | Ícones |

---

## Estrutura

```
src/
├── assets/
│   ├── SVG/
│   │   ├── Logo do Casal.svg        # Monograma E&V
│   │   └── Logo nome casal.svg      # Logo com nomes completos
│   ├── fundo-capa.png               # Foto de fundo das seções de capa
│   └── Foto- fundo-local.png        # Foto de fundo da seção de local
├── components/
│   ├── OpeningScreen.jsx            # Tela de entrada — desliza para cima ao toque
│   ├── HeroSection.jsx              # Seção principal com nomes, data e logo
│   ├── HeroSection.module.css
│   ├── CountdownSection.jsx         # Contador regressivo com flip animado
│   ├── DetailsSection.jsx           # Cards: data, horário, local, traje
│   ├── LocationSection.jsx          # Endereço com botão "Ver no Mapa"
│   ├── LinksSection.jsx             # Botões RSVP e lista de presentes
│   ├── Footer.jsx                   # Rodapé com nome do casal e data
│   └── FloatingPetals.jsx           # Pétalas flutuantes decorativas (fixed)
├── Fonts/
│   └── cinzel/                      # Fontes locais OTF (Cinzel + Cinzel Decorative)
├── App.jsx
├── main.jsx
└── index.css                        # Variáveis CSS, @font-face, reset global
```

---

## Paleta de cores

| Variável | Hex | Uso |
|---|---|---|
| `--gold` | `#bea56c` | Cor principal da identidade visual |
| `--gold-light` | `#ddc898` | Destaques suaves |
| `--gold-dark` | `#8a7040` | Variação escura |
| `--ivory` | `#f5f0e8` | Fundos secundários |
| `--cream` | `#faf8f5` | Background global |
| `--dark` | `#2c1810` | Textos principais |
| `--muted` | `#8b7355` | Textos secundários |

---

## Tipografia

- **Cinzel Decorative** — nomes do casal, títulos principais (local, OTF)
- **Playfair Display** — datas, subtítulos (Google Fonts)
- **Cormorant Garamond** — textos corridos, taglines (Google Fonts)

---

## Links externos

| Destino | Constante | Arquivo |
|---|---|---|
| Confirmação de presença | `RSVP_URL` | `LinksSection.jsx` |
| Lista de presentes | `GIFTS_URL` | `LinksSection.jsx` |
| Google Maps | `MAPS_URL` | `LocationSection.jsx` |

---

## Comandos

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Deploy

O projeto gera arquivos estáticos em `dist/` e pode ser hospedado em qualquer CDN ou serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).
