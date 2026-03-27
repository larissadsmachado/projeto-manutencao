import './globals.css'

export const metadata = {
  title: 'CIPTEA - Jaboatão dos Guararapes',
  description: 'Nosso site está passando por melhorias. Volte em breve!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}