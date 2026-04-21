import product1 from "../assets/img/product/product1.png";
import product2 from "../assets/img/product/product2.png";
import pejantan from "../assets/img/product/pejantan.png";
import SKDG from "../assets/img/product/SKDG.png";
import SKDG1 from "../assets/img/product/SKDG1.png";
import bibit from "../assets/img/product/bibit.png";
import super1 from "../assets/img/product/super1.png";
import kelasA from "../assets/img/product/kelasA.png";
import kelasB from "../assets/img/product/kelasB.png";
import kelasC from "../assets/img/product/KelasC.png";
import kelasD from "../assets/img/product/KelasD.png";
import dombaGuling from "../assets/img/product/dombaGuling.png";
import dombaGuling1 from "../assets/img/product/dombaGuling1.png";
import testi1 from "../assets/img/Testimonial/testi1.jpg";
import testi2 from "../assets/img/Testimonial/testi2.jpg";
import testi3 from "../assets/img/Testimonial/Testi3.jpg";

export const navlinks = [
    {
        id: 1,
        path: "",
        Text: "Home",
    },
    {
        id: 2,
        path: "product",
        Text: "Product",
    },
    {
        id: 3,
        path: "testimonial",
        Text: "Testimonial",
    },
    {
        id: 4,
        path: "faq",
        Text: "FAQ",
    },
]

  export const catalog = [
    {
      id: 'Kurban',
      tittle: "Domba Kurban",
      description: "Pilihan terbaik untuk ibadah Kurban Anda.",
      image: product2,
      items: [
        { id: 1, 
            name: "Kurban Kelas Super",
            price: "Rp. 5.000.000 - Rp. 10.000.000 ", 
            weight: ">46kg",
            image: super1,
        },
        { id: 2, 
            name: "Kurban Kelas A ", 
            price: "Rp.4.800.000 - Rp. 5.500.000", 
            weight: "41-45kg", 
            image: kelasA,
        },
        { id: 3, 
            name: "Kurban Kelas B ", 
            price: "Rp. 4.600.000 - Rp. 5.000.000",
            weight: "36-40kg",
            image: kelasB,
        },
        { id: 4, 
            name: "Kurban Kelas C ", 
            price: "Rp. 3.800.000 - Rp. 4.500.000",
            weight: "31-35kg",
            image: kelasC,
        },
        { id: 5, 
            name: "Kurban Kelas D ", 
            price: "Rp. 3.200.000 - Rp. 4.000.000",
            weight: "26-30kg",
            image: kelasD,
        },
        { id: 6, 
            name: "Kurban Kelas E ", 
            price: "Rp. 2.500.000 - Rp. 3.000.000",
            weight: "21-25kg",
            image: product1,
        },
      ]
    },
    {
        id: 'pejantan',
      tittle: "Domba Garut Pejantan",
      description: "Bibit unggul untuk kualitas ternak terbaik.",
      image: pejantan,
      items: [
        { id: 1, 
            name: "Domba Garut Jantan SKDG", 
            price: "Rp 5.000.000 - Rp. 10.000.000", 
            weight: "Kelas C - A",
            image: product1,
        },
            

        { id: 2, 
            name: "Domba Garut Jantan pencetak Bibit Unggul ", 
            price: "Rp 10.000.000", 
            weight: "Kelas C - A",
            image: product1, 
        },
      ]
    },
    {
        id: 'bibit',
      tittle: "Bibit Domba",
      description: "Bakal domba sehat untuk investasi peternakan.",
      image: bibit,
      items: [
        { id: 1, 
            name: "Bibit Domba Garut Jantan", 
            price: "Rp 2.500.000", 
            weight: "Lepas sapih",
            image: product1, 
        },
        { id: 2, 
            name: "Bibit Domba Garut Betina", 
            price: "Rp 3.000.000", 
            weight: "Lepas Sapih",
            image: product1,
        },
      ]
    },
    {
      id: 'daging',
      tittle: "Domba Guling",
      description: "domba guling berkualitas",
      image: dombaGuling1,
      items: [
        { id: 1, 
            name: "Domba Guling", 
            price: "Rp 1.500.000 - Rp. 6.000.000", 
            weight: "Paket ekonomis - Premium",
            image: dombaGuling, 
        },

      ]
    }
  ];



  export const dataDomba = [
  {
    id: 1,
    nama: "Domba Garut Kurban",
    totalStok: 40,
    terjual: 20,
    harga: "Rp 3.500.000",
    gambar: "domba1.jpg"
  },
  {
    id: 2,
    nama: "Domba Garut Jantan",
    totalStok: 20,
    terjual: 10,
    harga: "Rp 4.500.000",
    gambar: "domba1.jpg"
  },
  {
    id: 3,
    nama: "Domba Garut Bibit",
    totalStok: 90,
    terjual: 10,
    harga: "Rp 6.500.000",
    gambar: "domba1.jpg"
  },

];

export const dataTestimoni = [
  {
    id: 1,
    nama: "Budi Budianto",
    pekerjaan: "Wiraswasta",
    komentar: "Sangat puas dengan kualitas domba dari Santika Farm. Hewannya sehat, gemuk, dengan pakan yang berkualitas. Pengiriman tepat waktu ke area Purwakarta dan gratis.",
    avatar: testi1, // Ganti dengan foto asli/placeholder
    rating: 5
  },
  {
    id: 2,
    nama: "Bu Siti ",
    pekerjaan: "Karyawan Swasta",
    komentar: "Tahun lalu pesan 10 ekor untuk Kurban masjid. Prosesnya mudah, tim Santika Farm sangat membantu memilihkan domba terbaik sesuai budget.",
    avatar: testi2,
    rating: 5
  },
  {
    id: 3,
    nama: "Mas Agus Setiawan",
    pekerjaan: "Wiraswasta",
    komentar: "Awalnya ragu untuk membeli, tapi setelah liat langsung kandangnya bagus, bersih, tidak bau, Pelayanannya ramah, edukatif dan Profesional. Santika Farm merupakan satu satunya kandang yang tidak bau dari semua kandang yang saya kunjungi",
    avatar: testi3,
    rating: 5
  }
];