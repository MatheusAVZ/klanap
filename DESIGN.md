---
name: Klanap
description: Site institucional da importadora exclusiva do cimento branco Royal no Brasil
colors:
  primary: "#f97316"
  primary-soft: "#fb923c"
  primary-deep: "#ea580c"
  black: "#000000"
  graphite-950: "#141518"
  graphite-900: "#1d1f23"
  graphite-800: "#292c31"
  graphite-700: "#3d4149"
  ink: "#24262b"
  ink-soft: "#4d525c"
  mist: "#f3f4f5"
  line: "#e4e6e8"
  surface: "#ffffff"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.2vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.1rem + 2.8vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  spec-label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.09em"
  numeral:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(6rem, 4rem + 8vw, 8.5rem)"
    fontWeight: 800
    lineHeight: 1
rounded:
  sm: "2px"
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "clamp(80px, 10vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.graphite-950}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-soft}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline-inverse:
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  card-ficha:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
---

# Design System: Klanap

## 1. Overview

**Creative North Star: "A Espec com Aperto de Mão"**

O site da Klanap é uma sacaria bem impressa: números de norma em tipografia expandida gigante, dados carimbados em labels de spec, prova técnica (laudo, FDS) sempre a um clique — e gente de verdade nas fotos, porque o diferencial da empresa é o acompanhamento humano. O sistema combina precisão de engenharia com o calor de uma relação comercial de quase 30 anos.

A estrutura de cor é **grafite estrutural**: hero, seções-âncora e footer vivem no grafite quase-preto (a casa do logo); o corpo técnico é claro para leitura. O Laranja Klanap (#f97316) é carimbo: aparece só em ação e destaque. O sistema rejeita o "site corporativo engessado" — nada de texto vazio, cards genéricos de e-commerce ou frieza anos 2000.

**Key Characteristics:**
- Alternância grafite/claro por seção: pôster escuro, leitura clara
- Laranja restrito a CTAs, numerais de norma e o k-mark (≤10% da tela)
- Tipografia única (Archivo) com contraste comprometido: expandido 125% no display, normal no corpo
- Numerais de sacaria (52,5N · 1997) como motivo visual assinado
- Fichas de spec com borda fina, sem sombra, sem raio — documento, não card
- WhatsApp presente em toda página como canal humano

## 2. Colors

Grafite estrutural + um único acento laranja de carimbo.

### Primary
- **Laranja Klanap** (#f97316): CTAs, k-mark, numeral "1997". Vem do logotipo. Sobre laranja, o texto é sempre Grafite 950 — nunca branco (contraste).
- **Laranja Suave** (#fb923c): hover dos CTAs e destaques de texto sobre grafite.
- **Laranja Profundo** (#ea580c): numerais de norma e destaques sobre fundo claro (só em texto grande ≥1.5rem).

### Neutral
- **Preto** (#000000): header fixo e footer — a casa do logo (o PNG tem fundo preto sólido).
- **Grafite 950** (#141518): hero e seções-âncora escuras.
- **Grafite 900/800/700** (#1d1f23 / #292c31 / #3d4149): painéis, hovers e bordas sobre escuro.
- **Tinta** (#24262b): títulos e corpo sobre claro.
- **Tinta Suave** (#4d525c): texto de apoio sobre claro (7:1 sobre branco).
- **Névoa** (#f3f4f5): painéis de imagem e seções alternadas claras.
- **Linha** (#e4e6e8): bordas de ficha e divisores.
- Sobre grafite, texto de apoio é branco com opacidade (white/70–85), nunca cinza puro.

### Named Rules
**The Carimbo Rule.** O laranja ocupa no máximo ~10% de qualquer tela. Se duas seções vizinhas têm blocos laranja, uma está errada.

## 3. Typography

**Única família:** Archivo Variable (eixos wght + wdth, self-hosted via @fontsource-variable/archivo/wdth.css)

**Character:** Voz industrial de sacaria: o display estica para 125% de largura com peso 800 e caixa alta; labels de spec condensam para 95% com tracking aberto; o corpo fica em largura normal. Uma família, três vozes.

### Hierarchy
- **Display** (`.type-display` + `text-display-xl`, 800, clamp 2.5–4rem, stretch 125%, uppercase): h1 de página.
- **Headline** (`text-display`, mesmo tratamento): h2 de seção.
- **Title** (`text-display-sm`): h2 menores e nomes de produto.
- **Numeral** (`text-numeral` / `text-numeral-lg`, clamp 6–9rem): motivo decorativo — "52,5N" vazado atrás do saco, "1997" laranja. Sempre `aria-hidden`.
- **Body** (1rem–1.125rem, lh 1.6, max-w 52–68ch): texto corrido, sempre alinhado à esquerda.
- **Spec label** (`.type-spec`, 0.75rem, 600, stretch 95%, uppercase, tracking 0.09em): formatos, normas, títulos de coluna.

### Named Rules
**The Uma Voz Rule.** Archivo é a única família. As vozes vêm do eixo de largura (125% display / 95% spec / 100% corpo), nunca de uma fonte nova.
**The Sacaria Rule.** No máximo um numeral gigante por seção, sempre decorativo (`aria-hidden`) e ancorado em um fato real (norma, ano).

## 4. Elevation

Sem sombras decorativas. A profundidade vem da alternância de superfície (preto → grafite → branco) e de bordas de 1px. Exceções funcionais: o drop-shadow do saco no hero (objeto físico sobre o pôster), a sombra dos menus flutuantes (dropdown/hover-card) e nada mais.

### Named Rules
**The Plano-em-Repouso Rule.** Sombra responde a "o que está sobre o quê?". Ficha de produto não flutua: tem borda. Menu flutua: tem sombra.

## 5. Components

### Buttons
- **Shape:** retos, raio 2px (rounded-sm). Sem scale no hover; só transição de cor.
- **Primary:** fundo Laranja Klanap, texto Grafite 950 semibold; hover clareia para #fb923c. Ícone à esquerda quando há (WhatsApp).
- **Outline:** borda grafite translúcida, texto Tinta; hover escurece borda e texto.
- **Outline-inverse:** para fundos grafite — borda white/25, texto branco; hover borda branca + white/5 de fundo.
- Gerados por `buttonStyles(variant)` em `app/components/button.tsx`, aplicável a `<button>` e âncoras.

### Ficha de produto (card-assinatura)
- Documento, não card: borda 1px Linha, raio zero, sem sombra; hover escurece a borda.
- Anatomia: cabeçalho com formato + norma em spec label separado por borda; numeral da norma em Laranja Profundo; nome como link (área toda clicável via after:absolute); resumo; rodapé com "Ficha completa →" e "Laudo (PDF)" separado por borda.
- Grid: `sm:grid-cols-2 lg:grid-cols-4`, gap 24px.

### Faixa de spec
- `dl` em grid com divisores verticais (md+): valor em display pequeno + detalhe em texto de apoio. Usada para fatos reais (Desde 1997, Exclusiva, Acima da EN, Laudo + FDS).

### Navigation
- Header fixo preto (h-20, z-40, borda inferior white/10): logo + wordmark KLANAP expandido, links centrais, CTA WhatsApp laranja à direita.
- Produtos: hover-card (desktop) e dropdown Radix (mobile) em Grafite 900 com borda Grafite 800.
- Mobile: hambúrguer (LuMenu) com links, lista de produtos sob spec label e CTA WhatsApp.

### K-mark (motivo-assinatura)
- `.k-mark`: paralelogramo laranja skewX(-14deg), eco do badge do logo. Usos: antes de headings de seção e como marcador de lista nas fichas técnicas. Nunca como eyebrow de texto.

### Iconografia
- `react-icons/lu` (Lucide) para UI + `FaWhatsapp` para a marca. Nenhum outro set.

## 6. Do's and Don'ts

### Do:
- **Do** manter o laranja como carimbo: CTAs, k-mark e numerais — ≤10% da tela.
- **Do** escrever texto sobre laranja sempre em Grafite 950 (#141518); branco sobre laranja falha contraste.
- **Do** deixar laudo e FDS a um clique em toda superfície de produto.
- **Do** usar fotos reais do galpão e da equipe (public/img1–5) nas seções de confiança; gente de verdade é o aperto de mão.
- **Do** respeitar `prefers-reduced-motion` (a entrada `.rise` do hero já desliga sozinha).

### Don't:
- **Don't** parecer "site corporativo engessado" — o institucional frio anos 2000 (anti-referência do PRODUCT.md).
- **Don't** usar sombra ou raio nas fichas de produto; é documento com borda, não card flutuante.
- **Don't** aplicar scale em hover; feedback é cor, borda ou sublinhado.
- **Don't** usar `text-justify`; prosa é sempre alinhada à esquerda com medida de 52–68ch.
- **Don't** introduzir segunda família tipográfica ou eyebrows de texto em caixa alta acima de headings — a voz vem do eixo de largura da Archivo e do k-mark.
- **Don't** usar cinza puro para texto sobre grafite; use branco com opacidade.
