import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/booking')({
  component: BookingLayout,
})

function BookingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>
  )
}
