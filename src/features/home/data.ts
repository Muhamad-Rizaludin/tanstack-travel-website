import { Destination, Region } from "../../types"

export const DUMMY_DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Ubud, Bali",
    location: "Bali",
    price: 1250000,
    rating: 4.9,
    reviewCount: 2000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZCu6j6IrWUjNuVV5zTFe1xwTRGGj6wIL_rHxdRM-tZXwrH1aUGLeXRBege3l89fQUPXqOEauZL9o7cZxWB1YCDhRbrOQj4lDuLurO-XPdjI78LjwfqoTv9zAz-YX3pKJhz2rxgecCU9AGw77MkC-Sn0dMsl2QDGFdDEv6AivImhwaE4tR5F9yNdsjnnyRRCU_YJfNN3Kp6gRhyhOkXXKvj4cYBEsYZY2OlzZoKPgXshLHRoPjXolp-9kTVTp6w7KrUc0YOmAKuBU",
    isTrending: true,
    description: "Pusat seni dan budaya di jantung pulau dewata yang menenangkan jiwa."
  },
  {
    id: "2",
    name: "Raja Ampat",
    location: "Papua Barat",
    price: 4500000,
    rating: 5.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANq_xPmzFik1bT-wleyLSMuz7WNVKKGOzCH8tkdNhZgEXDWWRWnJtkgr-8IbjL0SiL7XgSQ0vmqzvX1WNYAlpreskFAar8lPQwpowcx1JA14VEfjK7Pgl1Nq4MTg9mfR7f2W_0i2WRlT4WIrX4sNIKOuzHdJyDAs52HsvE5ni19CGPg0cwqNEnD7f-9C29krmYIjK9kcMqSk89TLYHlh2JGdD-f3EqDMFUUEXx9GoT6wMAe4-95C00R-mdyR2E5gMsIMyoD1qa4nk"
  },
  {
    id: "3",
    name: "Labuan Bajo",
    location: "NTT",
    price: 2100000,
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUay_ak3bSTBRVDe3sLmy7AmKBJYkDphM7OfseuIf7a72n2O0F18NwBEY_RNCmWVQMdPagGIY4AAFjGsGngQfJcJCbI5NUv-yVgD18B-T8LDTLDsEeJjTTRezkQYHMRq501vIjTCPdFCMUdsEd5wSCyPWIKKeJLylw9qltdxS9Spjd0LXagyQvXHTII0LC-Bx03gJ0VIpOtZFBLa5RgU8nmGUoGBt6rboHYi44nWgUbkrkRyUTTdNiNMAgqxdPRWHPDfkO3GoLyZM"
  },
  {
    id: "4",
    name: "Gunung Bromo",
    location: "Jawa Timur",
    price: 850000,
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwjAWyd6YKb0mK_cOf1aTzl_TS9w4oOiccx-sUS7PJRT1Knnt9P34LKUZS----kkSj6Itcj-Ez5LT57xusxpDeVapDiuPcjbg81y8XZ4r84GQt5ksPCTpqSbUJnWUwvdDy2FeJUM4sFS61aDbukX4fTI6p-LV4aeCeR40aO1Xpmt8dIkkA4cBeBWf0yVUAcVPwP-8ECXfjj-zbWb6hDnG_Mdk2OoKjgHXb7DR-PKdbejf8E5I1KL3xSpB7TfGpoc0B4p7CU7fzqWM"
  },
  {
    id: "5",
    name: "Yogyakarta",
    location: "DIY",
    price: 650000,
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf14vqdufBYU7kVqH3TZeS0Xg5QtPWLb6gWA4noZt8mEFgXxFr7Jt3UVrCn2erhwORI0aD59jJCWsg1lEAz0UX6RqPIjUdzcrdBOfwzVlDqojnq7IgZZSgfxfrKkNg82a7LkoF5MYCUO4RyH8m02po2Ocl-HRslZKO6cbS3Ro8xZk-gAqUqCiFlmYWGyh2wsfvLvTrdR4YGntZzxKHKnwPtjRA8Xw_5xards1sa3d-QCJDzCMIslg4qCbuxP7vb7TyICF1WQs5-ro"
  }
]

export const REGIONS: Region[] = [
  { id: "all", name: "Semua Pulau" },
  { id: "bali", name: "Bali" },
  { id: "java", name: "Jawa" },
  { id: "sumatra", name: "Sumatra" },
  { id: "kalimantan", name: "Kalimantan" },
  { id: "sulawesi", name: "Sulawesi" },
  { id: "papua", name: "Papua" }
]
