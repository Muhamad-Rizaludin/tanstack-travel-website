import { Stat, Booking } from "../../types"

export const DUMMY_STATS: Stat[] = [
  {
    label: "Total Reservasi",
    value: "1,284",
    trend: 12.5,
    trendDirection: 'up',
    icon: "event_available",
    color: "primary"
  },
  {
    label: "Pendapatan Bulan Ini",
    value: "Rp42.500.000",
    trend: 8.2,
    trendDirection: 'up',
    icon: "payments",
    color: "tertiary"
  },
  {
    label: "Pelanggan Baru",
    value: "156",
    trend: 2.4,
    trendDirection: 'down',
    icon: "group",
    color: "secondary"
  }
]

export const RECENT_BOOKINGS: Booking[] = [
  {
    id: "1",
    customerName: "Andi Saputra",
    serviceName: "Paket Tour Bali Utara",
    date: "14 Okt 2024",
    status: "Berhasil"
  },
  {
    id: "2",
    customerName: "Maya Lestari",
    serviceName: "Glamping Kintamani",
    date: "13 Okt 2024",
    status: "Pending"
  },
  {
    id: "3",
    customerName: "Budi Raharjo",
    serviceName: "Sewa Mobil Lepas Kunci",
    date: "12 Okt 2024",
    status: "Berhasil"
  },
  {
    id: "4",
    customerName: "Dewi Putri",
    serviceName: "Villa Kayu Manis",
    date: "12 Okt 2024",
    status: "Dibatalkan"
  }
]
