import type {
  Product,
  DiscountProduct,
  NewProduct,
  CategoryLink,
  BrandLogo,
} from "../types";

export const categoryLinks: CategoryLink[] = [
  { label: "لپتاپ", href: "/laptop", icon: "/img/cat-laptop.png" },
  { label: "موبایل", href: "/phone", icon: "/img/cat-phone.png" },
  { label: "دوربین", href: "/camera", icon: "/img/cat-camera.png" },
];

export const navLinks = [
  { label: "خرید اقساطی", icon: "/icon/installment.svg" },
  { label: "مجله پرو استور", icon: "/icon/magazine.svg" },
  { label: "پیشنهاد طلایی", icon: "/icon/golden-offer.svg" },
  { label: "شعب پرو استور", icon: "/icon/branches.svg" },
  { label: "نمایندگی پرو استور بگیرید !", icon: "/icon/agency.svg" },
];

export const sliderImages: string[] = [
  "/img/slide-1.webp",
  "/img/slide-2.jpg",
  "/img/slide-3.jpg",
  "/img/slide-4.jpg",
  "/img/slide-5.webp",
];

export const newProducts: NewProduct[] = [
  {
    id: "new-1",
    image: "/img/new-galaxy-a55.webp",
    title: "گوشی موبایل سامسونگ مدل Galaxy A55",
    price: "۲۰,۸۵۹,۰۰۰ تومان",
  },
  {
    id: "new-2",
    image: "/img/new-macbook-air.webp",
    title: "MacBook Air MGN63 لپ تاپ 13.3 اینچی اپل",
    price: "۴۶,۸۹۹,۰۰۰ تومان",
  },
  {
    id: "new-3",
    image: "/img/new-sony-zve10.webp",
    title: "دوربین دیجیتال بدون آینه سونی مدل ZV-E10",
    price: "۴۵,۳۵۷,۰۰۰ تومان",
  },
];

export const discountProducts: DiscountProduct[] = [
  {
    id: "off-1",
    image: "/img/off-ps5.jpg",
    titleEn: "PlayStation 5 Digital Two DualSence Bundle",
    titleFa: "PS5 دیجیتال - باندل دو دوال سنس",
    oldPrice: "29,999,000",
    newPrice: "28,850,000",
    discountPercent: 4,
  },
  {
    id: "off-2",
    image: "/img/off-asus-expertbook.webp",
    titleEn: "Asus ExpertBook B1 1215U 8GB 15.6 Inch Laptop",
    titleFa: "لپ تاپ 15.6 اینچی ایسوس مدل ExpertBook B1 1215U",
    oldPrice: "22,489,000",
    newPrice: "20,499,000",
    discountPercent: 9,
  },
  {
    id: "off-3",
    image: "/img/off-galaxy-a55.webp",
    titleEn: "Samsung Galaxy A55 Dual SIM 128GB",
    titleFa: "گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت",
    oldPrice: "26,999,000",
    newPrice: "25,299,000",
    discountPercent: 6,
  },
  {
    id: "off-4",
    image: "/img/off-sony-a7iii.webp",
    titleEn: "Sony Alpha a7 III 28-70mm camera",
    titleFa: "دوربین دیجیتال سونی مدل Alpha a7 III 28-70mm",
    oldPrice: "92,210,000",
    newPrice: "85,663,000",
    discountPercent: 7,
  },
  {
    id: "off-5",
    image: "/img/off-honor-90.webp",
    titleEn: "HONOR 90 Dual SIM 256GB",
    titleFa: "گوشی موبایل آنر مدل 90 دو سیم کارت",
    oldPrice: "20,299,000",
    newPrice: "19,299,000",
    discountPercent: 5,
  },
];

export const laptopBrands: BrandLogo[] = [
  { id: "asus", src: "/img/brand-asus.png", alt: "Asus" },
  { id: "msi", src: "/img/brand-msi.png", alt: "MSI" },
  { id: "mac", src: "/img/brand-mac.jpg", alt: "Apple" },
  { id: "hp", src: "/img/brand-hp.webp", alt: "HP" },
];

export const phoneBrands: BrandLogo[] = [
  { id: "apple", src: "/img/brand-apple.png", alt: "Apple" },
  { id: "samsung", src: "/img/brand-samsung.png", alt: "Samsung" },
  { id: "xiaomi", src: "/img/brand-xiaomi.png", alt: "Xiaomi" },
  { id: "huawei", src: "/img/brand-huawei.png", alt: "Huawei" },
];

export const cameraBrands: BrandLogo[] = [
  { id: "canon", src: "/img/brand-canon.jpg", alt: "Canon" },
  { id: "sony", src: "/img/brand-sony.png", alt: "Sony" },
  { id: "gopro", src: "/img/brand-gopro.png", alt: "GoPro" },
  { id: "nikon", src: "/img/brand-nikon.jfif", alt: "Nikon" },
];

export const bestLaptops: Product[] = [
  {
    id: "laptop-1",
    image: "/img/laptop-asus-vivobook15.webp",
    title: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook 15",
    price: "21,420,000 تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "laptop-2",
    image: "/img/laptop-msi-thin15.webp",
    title: "لپ تاپ 15.6 اینچی ام اس آی مدل Thin 15 B13UCX-i5",
    price: "48,000,000 تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "laptop-3",
    image: "/img/laptop-hp-g10.webp",
    title: "لپ تاپ 15.6 اینچی اچ‌ پی مدل G10 255-Athlon Silver",
    price: "17,800,000 تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "laptop-4",
    image: "/img/laptop-macbook-air-mrxv3.webp",
    title: "لپ تاپ 13.6 اینچی اپل مدل MacBook Air MRXV3 2024",
    price: "64,399,000 تومان",
    rating: 4.6,
    shipping: "free",
  },
  {
    id: "laptop-5",
    image: "/img/laptop-asus-rog-strix-g16.webp",
    title: "لپ تاپ 16 اینچی ایسوس مدل ROG Strix G16",
    price: "87,950,000 تومان",
    rating: 4.6,
    shipping: "fast",
    tag: "gaming",
  },
  {
    id: "laptop-6",
    image: "/img/laptop-hp-fd0361nia.webp",
    title: "لپ تاپ 15.6 اینچی اچ‌ پی مدل fd0361nia-15 i5-1334U-8GB",
    price: "35,500,000 تومان",
    rating: 4.6,
    shipping: "fast",
  },
];

export const bestPhones: Product[] = [
  {
    id: "phone-1",
    image: "/img/phone-iphone-13-pro-max.webp",
    title: "گوشی موبایل اپل مدل iPhone 13 Pro Max ZDA تک سیم",
    price: "۹۲,۰۲۰,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "phone-2",
    image: "/img/phone-samsung-s24fe.webp",
    title: "گوشی موبایل سامسونگ مدل S24 FE دو سیم کارت",
    price: "48,000,000 تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "phone-3",
    image: "/img/phone-redmi-note13.webp",
    title: "گوشی موبایل شیائومی مدل Redmi Note 13 4G",
    price: "۹,۹۲۹,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "phone-4",
    image: "/img/phone-iphone-13.webp",
    title: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت",
    price: "۴۷,۴۴۰,۰۰۰ تومان",
    rating: 4.6,
    shipping: "free",
  },
  {
    id: "phone-5",
    image: "/img/phone-galaxy-a05.webp",
    title: "گوشی موبایل سامسونگ مدل Galaxy A05 دو سیم کارت",
    price: "۵,۳۶۵,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "phone-6",
    image: "/img/phone-huawei-pura70.webp",
    title: "گوشی موبایل هوآوی مدل Pura 70 دو سیم کارت",
    price: "6,۳۶۵,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
];

export const bestCameras: Product[] = [
  {
    id: "camera-1",
    image: "/img/camera-canon-eos2000d.webp",
    title: "دوربین دیجیتال کانن مدل EOS 2000D",
    price: "31,780,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "camera-2",
    image: "/img/camera-canon-eos90d.webp",
    title: "دوربین دیجیتال کانن مدل EOS 90D",
    price: "89,650,000 تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "camera-3",
    image: "/img/camera-sony-zve10.webp",
    title: "دوربین دیجیتال بدون آینه سونی مدل ZV-E10",
    price: "51,318,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "camera-4",
    image: "/img/camera-sony-zv1.webp",
    title: "دوربین دیجیتال سونی مدل ZV-1",
    price: "۴8,90۰,۰۰۰ تومان",
    rating: 4.6,
    shipping: "free",
  },
  {
    id: "camera-5",
    image: "/img/camera-sport-g53er.webp",
    title: "دوربین فیلم برداری ورزشی مدل G53ER",
    price: "3,195,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
  {
    id: "camera-6",
    image: "/img/camera-insta360.webp",
    title: "دوربین فیلم برداری ورزشی اینستا 360 مدل Insta360",
    price: "20,700,۰۰۰ تومان",
    rating: 4.6,
    shipping: "fast",
  },
];

export const sectionBanners: string[] = [
  "/img/banner-section-1.jpeg",
  "/img/banner-section-2.jpeg",
  "/img/banner-section-3.jpeg",
];

export const wideBanner = "/img/banner-phone-wide.png";

export const bottomBanners: string[] = [
  "/img/banner-bottom-1.jpeg",
  "/img/banner-bottom-2.jpeg",
];

export const footerColumns = [
  {
    title: "درباره‌ی پرو استور",
    items: [
      "تماس با ما",
      "درباره‌ی ما",
      "مجله‌ی دی‌جی‌لند",
      "شعب",
      "شرایط و قوانین",
      "خرید اقساطی",
    ],
  },
  {
    title: "خدمات مشتریان",
    items: [
      "پرسش‌های متداول",
      "راهنمای خرید",
      "شرایط بازگشت کالا",
      "ثبت شکایات",
      "حریم خصوصی",
    ],
  },
  {
    title: "دسته‌بندی‌های پربازدید",
    items: ["گوشی موبایل", "لپتاب", "دوربین عکاسی"],
  },
];
