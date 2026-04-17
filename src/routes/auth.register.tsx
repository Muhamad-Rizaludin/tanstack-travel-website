import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/auth/register')({
  component: RegisterComponent,
})

function RegisterComponent() {
  return (
    <div className="flex-grow flex items-stretch min-h-[800px]">
      {/* Left Side: Immersive Visual & Testimonial */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-inverse-surface">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Travel Aesthetic" 
            className="w-full h-full object-cover opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWQ-WWueyuLfU_hnSmPZSjF_VICLcAnJyskYGW5S2RSNl50qHDTmVsRAXnQSqr6Ro9JWmaG_1sD6XtovNt5_csVxVCxKEOwHsL2hhGVA7gJuygSl7fsaVYcrpXS02i-G-XtVxhVpCmEeqCzXW9ZfB4pakAVOnGjTrO4pWyhHZ__6XrbyFSb6eGAPa3qRGyulfhemI2znXG_sAEN6E6ogCHgxEeIgxKAp1_vBrVvCSE2bq7fSdIvANtWKP9kIBbF5Vv-5lalaDt8gA" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-12">
          {/* Brand Anchor */}
          <div>
            <h1 className="font-headline font-bold text-2xl tracking-tight text-white">NusaBook</h1>
          </div>
          
          {/* Testimonial Editorial */}
          <div className="max-w-md">
            <div className="flex gap-1 mb-6 text-primary-fixed">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <blockquote className="font-headline text-3xl font-bold text-white leading-tight mb-6">
              "Pengalaman booking paling mulus yang pernah saya rasakan. Presisi dalam setiap detail perjalanan."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-fixed">
                <img 
                  alt="Avatar" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMb0yiAPwqE1TF4iuKpvUno93acn9cLVwvM4xr9zqC5pvGAtjAb_Ub1BrfKba7Amb__g1V8k5CRujl6dIsNq2Ul9PBhaWWcrs4jyeXqOssSj7Ig6_yrGIVy5vrzuUKvrQnX4rzN7VMuwgHJXIp74B7L8x-rENY_-9M0cHHDovJBcjYtftTykf73WPAkKDOlPeNNVwNANQ5sQCRxolvJeNmWbRJIybxTUsqsRJyvGI8kYdQAPBhYTwmOInhgSqFovmqpKJNCDdBQ0" 
                />
              </div>
              <div>
                <p className="font-bold text-white">Andika Pratama</p>
                <p className="text-white/70 text-sm">Travel Blogger & Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Conversion Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-surface">
        <div className="w-full max-w-[440px]">
          <div className="mb-12">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-2 tracking-tight">Buat Akun NusaBook</h2>
            <p className="text-on-surface-variant text-lg">Mulai petualangan Anda dengan presisi dan kenyamanan terbaik.</p>
          </div>

          {/* Social Login */}
          <Button asChild variant="outline" className="w-full py-7 border-outline-variant/30 rounded-xl hover:bg-surface-container transition-all group mb-8">
            <Link to="/admin" className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span className="font-bold text-on-surface">Daftar dengan Google</span>
            </Link>
          </Button>

          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30"></div>
            </div>
            <span className="relative bg-surface px-4 text-xs text-on-surface-variant font-bold uppercase tracking-widest">Atau gunakan email</span>
          </div>

          {/* Registration Form */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-on-surface-variant/70 uppercase ml-1" htmlFor="name">Nama Lengkap</label>
              <Input id="name" placeholder="Contoh: Andika Pratama" type="text" className="rounded-xl py-6" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-on-surface-variant/70 uppercase ml-1" htmlFor="email">Email</label>
              <Input id="email" placeholder="andika@email.com" type="email" className="rounded-xl py-6" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-on-surface-variant/70 uppercase ml-1" htmlFor="whatsapp">Nomor WhatsApp</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl bg-secondary-container text-on-secondary-container text-xs font-bold border-r border-outline-variant/20">
                  +62
                </span>
                <Input className="rounded-l-none rounded-xl py-6" id="whatsapp" placeholder="8123456789" type="tel" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-on-surface-variant/70 uppercase ml-1" htmlFor="password">Password</label>
              <Input id="password" icon="lock" placeholder="••••••••" type="password" className="rounded-xl py-6" />
            </div>
            
            <div className="flex items-start gap-3 py-2">
              <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/30 mt-0.5" id="terms" type="checkbox" />
              <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                Saya menyetujui <span className="text-primary font-bold hover:underline cursor-pointer">Syarat & Ketentuan</span> serta <span className="text-primary font-bold hover:underline cursor-pointer">Kebijakan Privasi</span> yang berlaku.
              </label>
            </div>

            <Button asChild size="lg" className="w-full py-8 rounded-xl font-bold text-lg shadow-xl shadow-primary/20">
              <Link to="/admin">Daftar Sekarang</Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-on-surface-variant text-sm font-medium">
              Sudah punya akun? <Link to="/auth/login" className="text-primary font-bold hover:underline">Masuk</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
