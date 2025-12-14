export const metadata = {
  title: 'Neon Cat Animation',
  description: 'Cute fluffy cat watching floating swirling neon colors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
