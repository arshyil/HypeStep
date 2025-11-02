const products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    brand: "Nike",
    price: 1200000,
    image: "assets/img/NikeAirForce1.png",
    description:
      "Nike Air Force 1 menghadirkan siluet ikonik dengan desain klasik dan kenyamanan maksimal. Dikenal karena sol tebalnya dan tampilan serbaguna, cocok untuk streetwear atau gaya kasual harian."
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost",
    brand: "Adidas",
    price: 2500000,
    image: "assets/img/AdidasYeezy.png",
    description:
      "Adidas Yeezy Boost merupakan hasil kolaborasi dengan Kanye West yang memadukan gaya futuristik dan teknologi Boost untuk kenyamanan ekstra. Cocok untuk kamu yang suka tampil beda dan eksklusif."
  },
  {
    id: 3,
    name: "Converse Chuck 70",
    brand: "Converse",
    price: 950000,
    image: "assets/img/converse.png",
    description:
      "Converse Chuck 70 adalah versi modern dari sepatu klasik Converse dengan bahan kanvas premium dan sol yang lebih tebal. Memberikan kesan retro tapi tetap stylish untuk segala suasana."
  },
  {
    id: 4,
    name: "Vans Old Skool",
    brand: "Vans",
    price: 1000000,
    image: "assets/img/VansOldSkool.png",
    description:
      "Vans Old Skool punya desain legendaris dengan garis side stripe khas Vans. Tahan lama, nyaman, dan cocok untuk kegiatan sehari-hari maupun tampilan skate klasik."
  },
  {
    id: 5,
    name: "New Balance 550",
    brand: "New Balance",
    price: 1700000,
    image: "assets/img/NB550.png",
    description:
      "New Balance 550 menggabungkan nuansa retro dengan desain chunky yang sedang tren. Dikenal karena bantalan empuk dan warna-warna yang keren, cocok buat gaya sporty dan streetwear."
  },
  {
    id: 6,
    name: "Puma RS-X",
    brand: "Puma",
    price: 1600000,
    image: "assets/img/pumaRSX.png",
    description:
      "Puma RS-X menawarkan desain bold dan futuristik dengan teknologi RS yang empuk di kaki. Cocok buat kamu yang berani tampil dengan gaya modern dan berwarna."
  },
  {
    id: 7,
    name: "Reebok Club C 85",
    brand: "Reebok",
    price: 1200000,
    image: "assets/img/ReebokClubC85.png",
    description:
      "Reebok Club C 85 hadir dengan gaya klasik dan bahan kulit premium. Desainnya yang simpel namun elegan menjadikannya pilihan sempurna untuk tampilan bersih dan timeless."
  },
  {
    id: 8,
    name: "Nike Dunk Low",
    brand: "Nike",
    price: 1800000,
    image: "assets/img/NikeDunkLow.png",
    description:
      "Nike Dunk Low punya warna-warna keren dan desain low-cut yang fleksibel. Sering dipakai untuk streetwear dan skate, sepatu ini jadi salah satu ikon gaya muda masa kini."
  },
  {
    id: 9,
    name: "Nike Jordan 1 Retro High",
    brand: "Nike",
    price: 3000000,
    image: "assets/img/NikeJordan1Retro.png",
    description:
      "Nike Jordan 1 Retro High menawarkan desain timeless dan sangat ikonik dalam dunia streetwear dan sneaker culture. Material premium dan siluet klasik bikin terlihat eksklusif."
  },
  {
    id: 10,
    name: "Adidas Samba OG",
    brand: "Adidas",
    price: 1400000,
    image: "assets/img/AdidasSambaOG.png",
    description:
      "Adidas Samba OG hadir dengan desain klasik yang simpel dan elegan. Cocok untuk dipadukan dengan gaya casual ataupun streetwear minimalis."
  },

  // Tambahan produk sampai 30
  {
    id: 11,
    name: "Nike Blazer Mid 77",
    brand: "Nike",
    price: 1500000,
    image: "assets/img/NikeBlazerMid77.png",
    description: "Nike Blazer Mid 77 memberikan nuansa retro dengan detail swoosh besar dan mid-cut klasik."
  },
  {
    id: 12,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 2100000,
    image: "assets/img/AdidasUltraboost22.png",
    description: "Teknologi Boost yang super empuk untuk kenyamanan maksimal saat dipakai seharian."
  },
  {
    id: 13,
    name: "New Balance 2002R",
    brand: "New Balance",
    price: 2200000,
    image: "assets/img/NewBalance2002R.png",
    description: "Silhouette retro dengan kenyamanan tingkat tinggi dan vibe 'dad shoes' yang sedang tren."
  },
  {
    id: 14,
    name: "On Cloudswift",
    brand: "On Running",
    price: 2500000,
    image: "assets/img/OnCloudswift.png",
    description: "Mengusung teknologi CloudTec untuk sensasi ringan dan responsif saat berjalan atau jogging."
  },
  {
    id: 15,
    name: "Nike Air Max 97",
    brand: "Nike",
    price: 2400000,
    image: "assets/img/NikeAirMax97.png",
    description: "Dengan desain garis bergelombang dan air unit full-length, sepatu ini berkesan futuristik."
  },
  {
    id: 16,
    name: "Adidas Forum Low",
    brand: "Adidas",
    price: 1600000,
    image: "assets/img/AdidasForum.png",
    description: "Sepatu dengan strap tambahan yang memberikan vibe retro basket era ’80an."
  },
  {
    id: 17,
    name: "Vans Sk8-Hi",
    brand: "Vans",
    price: 1100000,
    image: "assets/img/VansSk8Hi.png",
    description: "High-top iconic Vans dengan material kuat dan cocok untuk kegiatan ekstrem/skate."
  },
  {
    id: 18,
    name: "Nike Pegasus Trail",
    brand: "Nike",
    price: 1900000,
    image: "assets/img/NikePegasusTrail.png",
    description: "Cocok untuk running maupun aktivitas outdoor dengan grip terbaik di kelasnya."
  },
  {
    id: 19,
    name: "Salomon XT-6",
    brand: "Salomon",
    price: 2600000,
    image: "assets/img/SalomonXT6.png",
    description: "Sepatu trail runner yang hype di streetwear scene karena desainnya yang tactical dan futuristik."
  },
  {
    id: 20,
    name: "Hoka Clifton 9",
    brand: "Hoka",
    price: 2000000,
    image: "assets/img/HokaClifton9.png",
    description: "Hoka terkenal dengan cushioning super empuk, cocok untuk lari jarak jauh."
  },
  {
    id: 21,
    name: "Puma Suede Classic",
    brand: "Puma",
    price: 1200000,
    image: "assets/img/PumaSuedeClassic.png",
    description: "Sepatu suede klasik yang timeless untuk style casual harian."
  },
  {
    id: 22,
    name: "Converse Run Star Hike",
    brand: "Converse",
    price: 1800000,
    image: "assets/img/ConverseRunStarHike.png",
    description: "Desain chunky dengan sol bergerigi yang menonjol membuat sepatu ini jadi pusat perhatian."
  },
  {
    id: 23,
    name: "Adidas Gazelle",
    brand: "Adidas",
    price: 1500000,
    image: "assets/img/AdidasGazzele.png",
    description: "Desain klasik dengan profil low-cut dan material suede premium."
  },
  {
    id: 24,
    name: "New Balance 574 Core",
    brand: "New Balance",
    price: 1300000,
    image: "assets/img/NewBalance574Core.png",
    description: "Sepatu legendaris dari NB yang simpel, nyaman, dan cocok dipakai sehari-hari."
  },
  {
    id: 25,
    name: "Fila Disruptor II",
    brand: "Fila",
    price: 1000000,
    image: "assets/img/FilaDisruptor2.png",
    description: "Chunky dan bold — buat yang mau tampil beda dengan vibe ’90an."
  },
  {
    id: 26,
    name: "Asics Gel-Lyte III",
    brand: "ASICS",
    price: 1700000,
    image: "assets/img/AsicsGelLyte3.png",
    description: "Split tongue design ikonik dan nyaman dipakai seharian."
  },
  {
    id: 27,
    name: "Asics Gel-Kayano 30",
    brand: "ASICS",
    price: 2600000,
    image: "assets/img/AsicsGelKayano30.png",
    description: "Sepatu running premium dengan stabilitas tinggi dan kenyamanan maksimal."
  },
  {
    id: 28,
    name: "Nike React Infinity Run",
    brand: "Nike",
    price: 2200000,
    image: "assets/img/NikeReactInfinityRun.png",
    description: "Didesain untuk mengurangi risiko cedera dan memberikan kenyamanan responsif."
  },
  {
    id: 29,
    name: "On Cloudmonster",
    brand: "On Running",
    price: 2900000,
    image: "assets/img/OnCloudmonster.png",
    description: "Midsole super tebal dan empuk, cocok buat yang suka kenyamanan ekstra."
  },
  {
    id: 30,
    name: "Nike Zoom Fly 5",
    brand: "Nike",
    price: 2400000,
    image: "assets/img/NikeZoomFly5.png",
    description: "Pilihan tepat untuk pelari yang ingin kecepatan dan responsivitas maksimal."
  }
];
