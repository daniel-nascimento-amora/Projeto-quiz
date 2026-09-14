export function QuizLogoBottom() {
  return (
    <svg
    width="90"
    height="90"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fundo do Ícone (App icon arredondado com gradiente azul/verde) */}
    <rect
      x="64"
      y="64"
      width="384"
      height="384"
      rx="96"
      fill="url(#paint0_linear)"
    />

    {/* Sombra suave / Prancheta branca do quiz */}
    <rect
      x="160"
      y="130"
      width="192"
      height="260"
      rx="24"
      fill="#FFFFFF"
      stroke="#E2E8F0"
      strokeWidth="6"
    />

    {/* Cabeçalho "QUIZ TIME!" simplificado em formas/linhas */}
    <rect x="184" y="156" width="144" height="16" rx="8" fill="#3B82F6" />

    {/* Círculo do ponto de interrogação (Esquerda) */}
    <circle cx="160" cy="190" r="28" fill="#FBBF24" />
    <text
      x="160"
      y="199"
      fill="#FFFFFF"
      fontSize="28"
      fontWeight="bold"
      textAnchor="middle"
      fontFamily="sans-serif"
    >
      ?
    </text>

    {/* Círculo da lâmpada (Direita) */}
    <circle cx="352" cy="190" r="28" fill="#F59E0B" />
    <path
      d="M346 178C346 174.686 348.686 172 352 172C355.314 172 358 174.686 358 178C358 180.115 356.892 181.947 355.25 183V187C355.25 187.552 354.802 188 354.25 188H349.75C349.198 188 348.75 187.552 348.75 187V183C347.108 181.947 346 180.115 346 178Z"
      fill="#FEF3C7"
    />

    {/* Ícone de Check principal central */}
    <path
      d="M232 235L256 259L296 219"
      stroke="#10B981"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Linhas de Opções (Option A, B, C) */}
    <rect x="192" y="290" width="16" height="16" rx="4" fill="#3B82F6" />
    <rect x="224" y="293" width="80" height="10" rx="5" fill="#94A3B8" />

    <rect x="192" y="326" width="16" height="16" rx="4" fill="#10B981" />
    <rect x="224" y="329" width="80" height="10" rx="5" fill="#10B981" />

    <rect x="192" y="362" width="16" height="16" rx="4" fill="#3B82F6" />
    <rect x="224" y="365" width="80" height="10" rx="5" fill="#94A3B8" />

    {/* Definição do Gradiente */}
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="64"
        y1="64"
        x2="448"
        y2="448"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>)
  
}
