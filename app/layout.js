export const metadata = {
  title: 'TKhanh Hub - Tech Profile',
  description: 'Personal programming portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="dark">
      <body>{children}</body>
    </html>
  )
}
