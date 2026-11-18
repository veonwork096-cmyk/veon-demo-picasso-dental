// Facts only from veon/client.json (company.contacts, REQ-F002, REQ-F004–F009, REQ-F012, REQ-F014).
const waText = encodeURIComponent("Хочу записатися на консультацію");

export const clinic = {
  name: "Picasso Dental Clinic",
  legal: "ФОП Стецик А.О.",
  license: "Ліцензія МОЗ №235 від 12.02.2024",
  licenseShort: "Ліцензія МОЗ №235",
  phoneMain: { href: "tel:+380972475747", label: "+380 97 247 57 47" },
  phoneSecond: { href: "tel:+380672482853", label: "+380 67 248 28 53" },
  email: "dental.clinic.picasso@gmail.com",
  hours: "Пн–Сб 10:00–20:00",
  hoursOff: "Нд — вихідний",
  hoursFull: "Пн–Сб 10:00–20:00, нд — вихідний",
  street: "вул. Бабʼяка 1Б",
  building: "ЖК «Crystal», 2 поверх",
  city: "Ужгород, 88015",
  geo: { lat: 48.6120017, lng: 22.2637097 },
  placeId: "ChIJza8QDQAZOUcRmtGy_z1oNDY",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Picasso%20Dental%20Clinic%20Uzhhorod&query_place_id=ChIJza8QDQAZOUcRmtGy_z1oNDY",
  routeUrl:
    "https://www.google.com/maps/dir/?api=1&destination=48.6120017,22.2637097&destination_place_id=ChIJza8QDQAZOUcRmtGy_z1oNDY",
} as const;

export type MessengerId = "telegram" | "whatsapp" | "viber";
export const messengers: { id: MessengerId; name: string; href: string }[] = [
  { id: "telegram", name: "Telegram", href: "https://t.me/+380972475747" },
  { id: "whatsapp", name: "WhatsApp", href: `https://wa.me/380972475747?text=${waText}` },
  { id: "viber", name: "Viber", href: "viber://chat?number=%2B380972475747" },
];

export const nav = [
  { href: "#routes", label: "Напрями" },
  { href: "#prices", label: "Ціни" },
  { href: "#cases", label: "Роботи" },
  { href: "#doctors", label: "Лікарі" },
  { href: "#abroad", label: "З-за кордону" },
  { href: "#contacts", label: "Контакти" },
];

// REQ-F007
export const implants = [
  { brand: "Osstem", price: "20 400" },
  { brand: "Neodent", price: "25 600" },
  { brand: "Straumann", price: "36 000" },
];

// REQ-F006, REQ-F008, REQ-F009
export const priceRows = [
  { name: "Консультація", price: "500 ₴" },
  { name: "Консультація головного лікаря з планом лікування та аналізом КТ", price: "1 500 ₴" },
  { name: "Онлайн-консультація", price: "безкоштовно" },
  { name: "Керамічний вінір", price: "23 000 ₴ / од." },
  { name: "Коронка цирконій / E-max", price: "15 300 ₴" },
  { name: "Ендолікування", price: "4 000–8 500 ₴" },
  { name: "Професійна гігієна", price: "2 500–3 000 ₴" },
  { name: "Видалення зуба будь-якої складності", price: "3 500 ₴" },
];
