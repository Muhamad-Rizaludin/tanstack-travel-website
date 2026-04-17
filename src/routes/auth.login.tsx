import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/auth/login')({
  component: LoginComponent,
})

function LoginComponent() {
  return (
    <div className="flex-grow flex items-center justify-center relative py-12 px-6">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-tertiary/5 blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0050cb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="w-full max-w-[440px]">
        {/* Branding Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-6 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-on-primary text-2xl">travel_explore</span>
          </div>
          <h1 className="font-headline text-3xl font-bold tracking-tight text-on-background">NusaBook</h1>
          <p className="mt-2 text-on-surface-variant font-medium">Selamat Datang Kembali</p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_32px_64px_-16px_rgba(19,27,46,0.08)] p-8 md:p-10 border border-outline-variant/10">
          <div className="space-y-6">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-sm font-label font-medium text-on-surface" htmlFor="email">Alamat Email</label>
              <Input 
                id="email" 
                icon="mail" 
                placeholder="nama@email.com" 
                type="email" 
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-label font-medium text-on-surface" htmlFor="password">Kata Sandi</label>
                <a className="text-xs font-medium text-primary hover:text-primary-container transition-colors" href="#">Lupa Password?</a>
              </div>
              <div className="relative">
                <Input 
                  id="password" 
                  icon="lock" 
                  placeholder="••••••••" 
                  type="password" 
                />
                <button className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-on-surface transition-colors" type="button">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </button>
              </div>
            </div>

            {/* Primary CTA */}
            <Button asChild size="lg" className="w-full py-3.5 px-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-lg shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-none">
              <Link to="/admin">Masuk Sekarang</Link>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
              <span className="bg-surface-container-lowest px-4 text-outline">Atau masuk dengan</span>
            </div>
          </div>

          {/* Social Login */}
          <button 
            onClick={() => {/* Navigate to admin */}}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors active:scale-[0.98]" 
            type="button"
          >
            <Link to="/admin" className="flex items-center justify-center gap-3 w-full">
              <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUBqZ8XlgT8swMx4_zymAlqyFQT3zIDzUb0y9bwru9BHGR8pf3KTuLIFFQgAHkr4vQoT86361dKisGx44rD7KcVeFiwXqWEmDatYFutx-nj7Ur-QQl2AtzQcFbDvBvjHSXMqfB8gnbhJ7sONCSefpfeYU15pqN7zWCWsSko7OgG4EYk6YgkSD9gVb_TSE1hcMFb821-fX8OVk0q5PdFA-TPsLg7ynPytShYTh17EFC-GB93JEQfzz-cOrRM7F688t2u90ejjcaNgA"/>
              <span>Masuk dengan Google</span>
            </Link>
          </button>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-on-surface-variant text-sm">
            Belum punya akun? 
            <Link to="/auth/register" className="font-semibold text-primary hover:text-primary-container transition-colors"> Daftar</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
