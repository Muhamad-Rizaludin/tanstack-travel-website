import { createFileRoute } from '@tanstack/react-router'
import { Navbar, Footer } from '@/components/layout'

export const Route = createFileRoute('/booking/confirm')({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Konfirmasi Pesanan</h1>
        <p>Mohon periksa kembali detail pesanan Anda sebelum melakukan pembayaran.</p>
      </main>
      <Footer />
    </div>
  )
})
