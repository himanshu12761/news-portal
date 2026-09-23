import './globals.css'

export const metadata = {
  title: 'Navbar Project',
  description: 'Next.js project with Tailwind CSS navbar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}