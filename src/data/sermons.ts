// Key categories for Friday sermons
export interface Category {
  id: string;
  name: string;
  description: string;
  type: 'hijri' | 'umum';
  icon: string;
}

export interface SermonMetadata {
  id: string;
  title: string;
  category: string;
  subTitle: string;
  outlines: string[];
  customContent?: {
    paragraphs: string[];
  };
}

export const CATEGORIES: Category[] = [
  { id: 'muharram', name: 'Muharram', description: 'Tahun Baru Hijriyah, Hijrah Nabi, & Muhasabah diri', type: 'hijri', icon: 'Sparkles' },
  { id: 'shafar', name: 'Shafar', description: 'Menolak khurafat, keteguhan iman, & amal shaleh', type: 'hijri', icon: 'Compass' },
  { id: 'rabiul_awwal', name: 'Rabi\'ul Awwal', description: 'Maulid Nabi & meneladani akhlak Rasulullah SAW', type: 'hijri', icon: 'Heart' },
  { id: 'rabiul_akhir', name: 'Rabi\'ul Akhir', description: 'Tafakkur tadabbur, menjaga aqidah & ukhuwah Islamiyah', type: 'hijri', icon: 'Users' },
  { id: 'jumadil_ula', name: 'Jumadil Ula', description: 'Keharmonisan keluarga Sakinah, Mawaddah, Warahmah', type: 'hijri', icon: 'Home' },
  { id: 'jumadil_akhirah', name: 'Jumadil Akhirah', description: 'Mempersiapkan amal, istiqomah, & dzikrul maut', type: 'hijri', icon: 'Clock' },
  { id: 'rajab', name: 'Rajab', description: 'Peristiwa Isra Mi\'raj & keutamaan menegakkan shalat', type: 'hijri', icon: 'CalendarDays' },
  { id: 'syaban', name: 'Sya\'ban', description: 'Nisfu Sya\'ban & persiapan menyambut bulan suci Ramadhan', type: 'hijri', icon: 'Sunrise' },
  { id: 'ramadhan', name: 'Ramadhan', description: 'Keutamaan puasa, Al-Qur\'an, Lailatul Qadar & zakat', type: 'hijri', icon: 'Moon' },
  { id: 'syawwal', name: 'Syawwal', description: 'Idul Fitri, puasa syawwal, & istiqomah ibadah', type: 'hijri', icon: 'Sun' },
  { id: 'dzulqodah', name: 'Dzulqo\'dah', description: 'Kehormatan bulan haram & menjaga kedamaian umat', type: 'hijri', icon: 'ShieldAlert' },
  { id: 'dzulhijjah', name: 'Dzulhijjah', description: 'Ibadah Haji, Idul Adha, Qurban & keikhlasan', type: 'hijri', icon: 'Award' },
  { id: 'tazkiyatun_nufus', name: 'Tazkiyatun Nufus', description: 'Pembersihan jiwa, taubat nasuha, & taqarrub ilallah', type: 'umum', icon: 'Smile' },
  { id: 'penyakit_obat_hati', name: 'Penyakit & Obat Hati', description: 'Mengobati riya, hasad, sombong, dengan ikhlas & dzikir', type: 'umum', icon: 'Activity' },
  { id: 'bahaya_sosial', name: 'Bahaya Sosial & Maksiat', description: 'Bahaya LGBT, zina, judi, miras, pinjol, & judol', type: 'umum', icon: 'AlertTriangle' },
];

// We will construct exactly 200 high-quality unique sermon metadata.
// To keep code highly structured, readable and clean, we define a comprehensive database of templates
// and combine them into a final list of 200 titles.

const baseSermons: Omit<SermonMetadata, 'id'>[] = [
  // --- BULAN MUHARRAM (14 judul) ---
  {
    title: 'Muhasabah Agung di Awal Tahun Baru Hijriyah',
    category: 'muharram',
    subTitle: 'Evaluasi diri atas amal setahun yang lalu untuk perbaikan masa depan.',
    outlines: ['Makna hakiki pergantian tahun', 'Urgensi hisab diri sebelum dihisab Allah', 'Merancang visi taqwa setahun ke depan'],
    customContent: {
      paragraphs: [
        "<strong>1. Makna Hakiki Pergantian Tahun</strong><br/>Sidang Jum'at yang dimuliakan Allah,<br/>Pergantian tahun Hijriyah bukanlah sekadar perayaan angka atau pergantian kalender dinding semata. Secara hakiki, pergantian tahun adalah alarm keras bagi setiap mukmin bahwa jatah hidupnya di bumi ini telah berkurang satu tahun. Setiap detak jarum jam membawa kita selangkah lebih dekat ke liang kubur. Al-Hasan al-Basri rahimahullah mengingatkan dengan sangat indah: <em>'Wahai anak Adam, sesungguhnya kalian hanyalah kumpulan hari. Jika berlalu satu hari, maka berkuranglah sebagian dari diri kalian.'</em> Oleh karena itu, menyadari berkurangnya umur harus direspon dengan kesadaran iman, bukan dengan hura-hura, melainkan dengan merenungkan untuk apa jatah umur setahun kemarin kita habiskan—apakah dalam ketaatan atau justru dalam kelalaian.",
        "<strong>2. Urgensi Hisab Diri Sebelum Dihisab Allah</strong><br/>Memasuki gerbang tahun baru, amalan mutlak yang harus kita tegakkan adalah muhasabah diri (introspeksi total). Allah SWT berfirman dalam Surah Al-Hasyr ayat 18: <em>'Wahai orang-orang yang beriman, bertakwalah kepada Allah dan hendaklah setiap diri memperhatikan apa yang telah diperbuatnya untuk hari esok (akhirat), dan bertakwalah kepada Allah. Sesungguhnya Allah Maha Mengetahui apa yang kamu kerjakan.'</em><br/>Sayyidina Umar bin Khattab radhiyallahu anhu juga pernah memberikan wasiat emas yang sangat masyhur: <em>'Hasibu anfusakum qabla an tuhasabu'</em>—Hisablah diri kalian sendiri sebelum kalian dihisab di hadapan Allah kelak, dan timbanglah amal kalian sebelum amal itu ditimbang di hari kiamat. Dengan menghitung dosa dan kelalaian kita secara mandiri hari ini, kita akan lebih siap, waspada, dan memiliki kesempatan untuk bertaubat sebelum ajal menjemput secara tiba-tiba.",
        "<strong>3. Merancang Visi Taqwa Setahun ke Depan</strong><br/>Puncak dari muhasabah adalah perbaikan nyata (islah). Setelah kita mengevaluasi kekurangan ibadah kita di tahun yang lalu—seperti shalat yang masih masbuq, sedekah yang masih jarang, atau lisan yang masih sering menyakiti orang lain—maka di tahun baru ini kita harus merancang visi ketakwaan yang terukur. Rasulullah SAW bersabda: <em>'Orang yang cerdas adalah orang yang mampu menundukkan nafsunya dan beramal untuk kehidupan setelah kematian.'</em> (HR. Tirmidzi).<br/>Marilah kita berkomitmen di tahun ini untuk meningkatkan kualitas shalat berjamaah kita, merutinkan membaca Al-Qur'an walau hanya satu halaman sehari, memperkokoh keharmonisan keluarga, dan membentengi diri dari kemungkaran modern seperti judi online, pinjaman online ilegal, dan ghibah media sosial. Jadikan tahun baru Hijriyah ini sebagai garis start spiritual yang baru menuju ridha Allah SWT."
      ]
    }
  },
  {
    title: 'Spirit Hijrah: Berubah dari Kegelapan Menuju Cahaya Islam',
    category: 'muharram',
    subTitle: 'Meneladani hijrah fisik Rasulullah ke hijrah maknawi dalam kehidupan.',
    outlines: ['Hakikat hijrah dalam hadits nabi', 'Meninggalkan maksiat menuju ketaatan', 'Tantangan istiqomah setelah berhijrah'],
    customContent: {
      paragraphs: [
        "<strong>1. Hakikat Hijrah dalam Hadits Nabi</strong><br/>Sidang Jum'at yang dimuliakan Allah,<br/>Ketika kita mendengar kata 'Hijrah', ingatan kita kerap melayang pada peristiwa bersejarah perpindahan fisik Rasulullah SAW dan para sahabat dari kota Makkah menuju Madinah. Namun, di era sekarang ketika hijrah fisik sudah tidak ada lagi, Rasulullah SAW memberikan definisi hijrah secara maknawi yang sangat indah dan relevan untuk kita semua. Beliau bersabda dalam hadits shahih riwayat Imam Al-Bukhari: <em>'Seorang Muslim adalah orang yang membuat Muslim lainnya selamat dari lisan dan tangannya, sedangkan orang yang berhijrah (Muhajir) adalah orang yang meninggalkan apa saja yang dilarang oleh Allah SWT.'</em> Ini adalah esensi hijrah sejati—sebuah transformasi spiritual dari kondisi batin yang gelap menuju cahaya iman yang benderang.",
        "<strong>2. Meninggalkan Maksiat Menuju Ketaatan</strong><br/>Hijrah yang sejati menuntut keberanian untuk memutuskan hubungan dengan segala bentuk maksiat, kebiasaan buruk, dan lingkungan yang tidak sehat. Berhijrah berarti berpindah dari malas beribadah menjadi rajin shalat berjamaah, dari mencari nafkah yang syubhat atau haram (seperti judol dan pinjol) menuju rezeki yang halal dan thoyyib, serta dari lisan yang gemar mencela menuju lisan yang basah dengan dzikrullah. Allah SWT menjanjikan jaminan luar biasa bagi siapa saja yang berani berhijrah di jalan-Nya dalam Surah An-Nisa ayat 100: <em>'Barangsiapa berhijrah di jalan Allah, niscaya mereka mendapati di muka bumi ini tempat hijrah yang luas dan rezeki yang banyak.'</em> Jangan pernah takut kehilangan dunia karena berhijrah, sebab janji Allah adalah kepastian.",
        "<strong>3. Tantangan Istiqomah Setelah Berhijrah</strong><br/>Tantangan terbesar bagi seorang muhajir (orang yang berhijrah) bukanlah saat memulai, melainkan bagaimana mempertahankan keistiqomahan di tengah godaan duniawi yang menggiurkan dan cibiran lingkungan sekitar. Istiqomah pasca-hijrah membutuhkan perjuangan batin yang kontinu dan kesabaran yang ekstra. Rasulullah SAW senantiasa mengajarkan kita doa perlindungan hati agar tidak mudah berbalik arah: <em>'Ya muqallibal qulub, tsabbit qalbi 'ala dinik'</em> (Wahai Dzat yang membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu). Kita membutuhkan tiga pilar utama untuk menjaga istiqomah: menuntut ilmu agama secara istiqomah, merutinkan amal shaleh meskipun sedikit, dan mencari sahabat-sahabat shaleh yang senantiasa saling mengingatkan dalam kebaikan."
      ]
    }
  },
  {
    title: 'Keutamaan Bulan Muharram dan Puasa Asyura',
    category: 'muharram',
    subTitle: 'Menghidupkan sunnah di bulan mulia dengan puasa penawar dosa setahun.',
    outlines: ['Muharram sebagai Syahrullah (Bulan Allah)', 'Sejarah puasa Asyura', 'Keutamaan puasa tanggal 9 (Tasu\'a) dan 10 (Asyura)']
  },
  {
    title: 'Mengukir Prestasi Iman di Bulan Haram',
    category: 'muharram',
    subTitle: 'Bagaimana melipatgandakan pahala kebaikan di bulan yang disucikan.',
    outlines: ['Konsep Al-Asyhurul Hurum dalam Al-Qur\'an', 'Larangan berbuat dzalim pada diri sendiri', 'Amal-amal unggulan awal tahun']
  },
  {
    title: 'Membangun Peradaban Mulia Berbasis Ukhuwah Islamiyah',
    category: 'muharram',
    subTitle: 'Hikmah persatuan Muhajirin dan Ansar dalam membangun Madinah.',
    outlines: ['Ukhuwah sebagai pilar peradaban', 'Kisah persaudaraan yang tulus', 'Aplikasi ukhuwah di era modern']
  },
  {
    title: 'Melangkah Optimis di Tahun Baru Tanpa Beban Dosa Masa Lalu',
    category: 'muharram',
    subTitle: 'Membuka lembaran baru dengan taubat yang tulus kepada Allah SWT.',
    outlines: ['Bahaya keputusasaan dari rahmat Allah', 'Syarat taubat nasuha', 'Memulai lembaran putih dengan istighfar']
  },
  {
    title: 'Menjaga Hati dari Penyakit Kesombongan di Awal Tahun',
    category: 'muharram',
    subTitle: 'Pentingnya tawadhu ketika mengevaluasi capaian hidup.',
    outlines: ['Definisi sombong menurut Rasulullah', 'Sifat sombong merusak amal shalih', 'Menanamkan sifat rendah hati (tawadhu)']
  },
  {
    title: 'Urgensi Tarbiyah Ruhiyah dalam Menghadapi Zaman Baru',
    category: 'muharram',
    subTitle: 'Membekali jiwa dengan kekuatan dzikir dan ibadah di awal tahun.',
    outlines: ['Tantangan fitnah akhir zaman', 'Pentingnya benteng ruhiyah yang kokoh', 'Metode tarbiyah ruhiyah sehari-hari']
  },
  {
    title: 'Meneladani Keteguhan Iman Para Nabi di Hari Asyura',
    category: 'muharram',
    subTitle: 'Pelajaran kemenangan kebenaran atas kebatilan (kisah Nabi Musa & Firaun).',
    outlines: ['Kisah penyelamatan Bani Israil', 'Pelajaran keteguhan iman dari para Nabi', 'Keyakinan akan pertolongan Allah']
  },
  {
    title: 'Waktu yang Berlalu Takkan Pernah Kembali',
    category: 'muharram',
    subTitle: 'Menghargai nikmat umur dan kesempatan beramal sebelum ajal menjemput.',
    outlines: ['Sumpah Allah demi waktu dalam Al-Qur\'an', 'Kerugian manusia yang melalaikan waktu', 'Prinsip memanfaatkan waktu dengan efektif']
  },
  {
    title: 'Pilar-Pilar Kekuatan Keluarga Muslim di Tahun Baru',
    category: 'muharram',
    subTitle: 'Mengevaluasi dan meningkatkan keshalehan keluarga.',
    outlines: ['Tanggung jawab kepala keluarga dalam Islam', 'Menjadikan rumah sebagai madrasah pertama', 'Sinergi anggota keluarga dalam ketaatan']
  },
  {
    title: 'Menghidupkan Tradisi Sedekah dan Berbagi di Bulan Muharram',
    category: 'muharram',
    subTitle: 'Kepedulian sosial terhadap anak yatim dan dhuafa.',
    outlines: ['Anjuran menyantuni anak yatim', 'Keutamaan sedekah penolak bala', 'Membangun kepekaan sosial']
  },
  {
    title: 'Meraih Kebahagiaan Hakiki Melalui Ridha Allah',
    category: 'muharram',
    subTitle: 'Menjadikan ridha Allah sebagai tujuan utama hidup kita.',
    outlines: ['Beda kebahagiaan semu dan hakiki', 'Jalan menuju ridha Allah', 'Ketenangan jiwa orang yang berserah diri']
  },
  {
    title: 'Refleksi Hijrah: Menjaga Aqidah dari Gerusan Zaman',
    category: 'muharram',
    subTitle: 'Melindungi keyakinan tauhid di tengah arus modernisasi.',
    outlines: ['Pentingnya pemurnian aqidah', 'Syubhat-syubhat yang merusak iman', 'Upaya membentengi diri dan keluarga']
  },

  // --- BULAN SHAFAR (13 judul) ---
  {
    title: 'Meluruskan Aqidah: Menepis Keyakinan Sial di Bulan Shafar',
    category: 'shafar',
    subTitle: 'Menolak khurafat Tiyarah dan memperkokoh tawakal hanya kepada Allah.',
    outlines: ['Penjelasan hadits "Laa Shafara" (Tidak ada kesialan di bulan Shafar)', 'Bahaya syirik khafi dan tiyarah', 'Memurnikan tauhid dan tawakal'],
    customContent: {
      paragraphs: [
        "<strong>1. Penjelasan Hadits 'Laa Shafara' (Tidak Ada Kesialan di Bulan Shafar)</strong><br/>Sidang Jum'at yang dirahmati Allah,<br/>Sejak zaman Jahiliyah kuno sebelum kedatangan fajar Islam yang agung, masyarakat Arab dipenuhi oleh berbagai macam khurafat, mitos, dan takhayul yang merusak sendi-sendi akidah tauhid. Salah satu keyakinan keliru yang sangat populer saat itu—dan sayangnya masih tersisa di kalangan sebagian kaum muslimin hingga hari ini—adalah anggapan bahwa bulan Shafar merupakan bulan sial, bulan turunnya marabahaya, wabah penyakit, bencana, serta kegagalan usaha. Mereka menunda pernikahan, membatalkan transaksi dagang, dan enggan bepergian jauh karena takut tertimpa kesialan.<br/>Ketika Rasulullah SAW diutus, beliau dengan tegas membongkar dan merobohkan seluruh keyakinan batil ini. Dalam sebuah hadits shahih yang diriwayatkan oleh Imam Al-Bukhari dan Imam Muslim, Rasulullah SAW bersabda: <em>'Laa 'adwaa, wa laa thiyarah, wa laa haamah, wa laa Shafara'</em> yang artinya: <em>'Tidak ada penularan penyakit (secara sendirinya tanpa kehendak Allah), tidak ada kesialan akibat ramalan nasib (thiyarah), tidak ada kesialan karena burung hantu, dan tidak ada kesialan di bulan Shafar.'</em> Ketahuilah wahai saudaraku, Shafar adalah salah satu bulan ciptaan Allah yang suci, sama seperti bulan-bulan lainnya, di mana kebaikan dan keburukan murni ditentukan oleh kehendak Allah, bukan oleh nama bulan itu sendiri.",
        "<strong>2. Bahaya Syirik Khafi dan Tiyarah dalam Kehidupan Sehari-hari</strong><br/>Jamaah Jumuah yang dimuliakan Allah,<br/>Perilaku meyakini kesialan pada suatu waktu, tempat, angka, suara burung, atau kejadian tertentu dalam syariat Islam diistilahkan sebagai <strong>Thiyarah</strong> atau <strong>Tathayyur</strong>. Thiyarah ini dikategorikan oleh para ulama akidah sebagai bentuk syirik khafi (syirik yang samar/tersembunyi) yang sangat berbahaya karena merusak kemurnian tauhid rububiyah kita kepada Allah SWT.<br/>Rasulullah SAW memperingatkan dengan nada yang sangat keras dalam hadits riwayat Imam Ahmad dan Abu Dawud: <em>'At-thiyaratu syirkun, at-thiyaratu syirkun'</em>—Tathayyur itu adalah kesyirikan, tathayyur itu adalah kesyirikan! Keyakinan seperti ini merusak mentalitas seorang muslim, membuatnya penakut, ragu-ragu, dan senantiasa diselimuti kecemasan. Ketika seseorang meyakini bahwa hari Rabu Wekasan atau bulan Shafar membawa sial, maka ia telah menyekutukan Allah dalam hal pengaturan alam semesta dan penciptaan mudharat, sebab satu-satunya Dzat yang berkuasa mendatangkan manfaat dan menolak bahaya hanyalah Allah Jalla Jalaluhu.",
        "<strong>3. Memurnikan Tauhid dan Mengokohkan Tawakal Kepada Allah SWT</strong><br/>Lalu, bagaimanakah cara kita membentengi akidah dari penyakit khurafat ini? Jawabannya adalah dengan memurnikan tauhid dan mengokohkan pilar tawakal yang kokoh hanya kepada Allah SWT. Jika terbersit rasa khawatir atau bisikan setan di dalam hati kita saat menghadapi hari atau bulan tertentu, segeralah melawannya dengan memperbanyak dzikir dan membentengi diri dengan doa yang diajarkan oleh Rasulullah SAW:<br/><em>'Allahumma laa ya'ti bil hasanaati illa Anta, wa laa yadfa'us sayyi'ati illa Anta, wa laa hawla wa laa quwwata illa Bika'</em> (Ya Allah, tidak ada yang mendatangkan kebaikan kecuali Engkau, tidak ada yang menghilangkan keburukan kecuali Engkau, dan tidak ada daya serta kekuatan kecuali dengan pertolongan-Mu).<br/>Mari kita penuhi bulan Shafar ini dengan optimisme tinggi, meningkatkan produktivitas kerja, merutinkan shalat berjamaah, dan memperbanyak sedekah sebagai tameng penolak bencana yang sah menurut sunnah. Yakinlah bahwa segala sesuatu yang ditakdirkan Allah pasti terjadi, dan apa yang tidak ditakdirkan-Nya tidak akan pernah menimpa kita."
      ]
    }
  },
  {
    title: 'Tawakal yang Benar Sebagai Kunci Ketenangan Jiwa',
    category: 'shafar',
    subTitle: 'Bagaimana menyelaraskan usaha maksimal dengan penyerahan diri yang total.',
    outlines: ['Definisi tawakal dalam Islam', 'Kisah burung yang pergi lapar pulang kenyang', 'Menyeimbangkan ikhtiar dan tawakal']
  },
  {
    title: 'Menjaga Istiqomah di Tengah Ujian Kehidupan',
    category: 'shafar',
    subTitle: 'Kiat-kiat agar iman tetap teguh saat diterpa badai cobaan.',
    outlines: ['Hakikat ujian dalam hidup manusia', 'Sabar sebagai mahkota keimanan', 'Kiat menjaga keistiqomahan ibadah']
  },
  {
    title: 'Memperbanyak Amal Shaleh di Setiap Waktu dan Keadaan',
    category: 'shafar',
    subTitle: 'Menepis anggapan bahwa bulan-bulan tertentu sepi dari pahala.',
    outlines: ['Karakteristik mukmin yang produktif', 'Amalan ringan berpahala besar', 'Konsistensi dalam kebaikan']
  },
  {
    title: 'Bahaya Prasangka Buruk (Su\'udzon) Kepada Takdir Allah',
    category: 'shafar',
    subTitle: 'Mengembangkan husnudzon dalam menghadapi segala ketetapan-Nya.',
    outlines: ['Sifat husnudzon kepada Allah', 'Melihat hikmah di balik musibah', 'Menjauhkan diri dari keluh kesah']
  },
  {
    title: 'Ikhtiar Lahir dan Batin Penolak Bala Berdasarkan Sunnah',
    category: 'shafar',
    subTitle: 'Cara-cara syar\'i untuk berlindung dari segala mara bahaya.',
    outlines: ['Dzikir pagi dan petang sebagai pelindung', 'Sedekah penolak bencana', 'Doa-doa perlindungan dari wabah dan petaka']
  },
  {
    title: 'Pentingnya Ilmu Sebelum Beramal dalam Agama',
    category: 'shafar',
    subTitle: 'Menghindari amalan bid\'ah dan khurafat dengan menuntut ilmu syar\'i.',
    outlines: ['Kewajiban menuntut ilmu bagi setiap muslim', 'Bahaya beramal tanpa ilmu', 'Adab menuntut ilmu']
  },
  {
    title: 'Menjaga Lisan dari Fitnah, Ghibah, dan Namimah',
    category: 'shafar',
    subTitle: 'Keselamatan seseorang tergantung pada kemampuannya menjaga lidah.',
    outlines: ['Bahaya lisan yang tidak terjaga', 'Ghibah pembakar pahala kebaikan', 'Anjuran berkata baik atau diam']
  },
  {
    title: 'Meneladani Kesabaran Para Sahabat Nabi dalam Berdakwah',
    category: 'shafar',
    subTitle: 'Keteguhan hati menghadapi intimidasi dan kesulitan hidup.',
    outlines: ['Kisah kesabaran Bilal bin Rabah dan keluarga Yasir', 'Urgensi sabar dalam dakwah', 'Balasan bagi orang-orang yang sabar']
  },
  {
    title: 'Pentingnya Berjamaah dan Menjaga Persatuan Umat',
    category: 'shafar',
    subTitle: 'Kekuatan umat Islam terletak pada ukhuwah dan kebersamaan.',
    outlines: ['Anjuran berjamaah dalam Al-Qur\'an', 'Bahaya perpecahan dan firqah', 'Langkah praktis menjaga ukhuwah di masjid']
  },
  {
    title: 'Zuhud Terhadap Dunia, Rindu Terhadap Akhirat',
    category: 'shafar',
    subTitle: 'Memahami hakikat dunia sebagai jembatan menuju negeri yang kekal.',
    outlines: ['Definisi zuhud yang benar menurut ulama Salaf', 'Bahaya cinta dunia (wahn)', 'Mempersiapkan bekal hari akhir']
  },
  {
    title: 'Menjaga Keikhlasan dalam Beramal Agar Diterima Allah',
    category: 'shafar',
    subTitle: 'Ikhlas adalah ruh dari setiap ibadah yang kita lakukan.',
    outlines: ['Syarat diterimanya amal shalih', 'Bahaya riya\' dan sum\'ah', 'Cara memupuk keikhlasan di dalam dada']
  },
  {
    title: 'Membangun Rasa Syukur di Atas Nikmat yang Sering Dilupakan',
    category: 'shafar',
    subTitle: 'Menghargai nikmat kesehatan, waktu luang, dan keamanan.',
    outlines: ['Dua nikmat yang banyak manusia tertipu', 'Cara bersyukur dengan hati, lisan, dan anggota tubuh', 'Ancaman kufur nikmat']
  },

  // --- BULAN RABI'UL AWWAL (13 judul) ---
  {
    title: 'Maulid Nabi: Momentum Mengidupkan Sunnah Rasulullah SAW',
    category: 'rabiul_awwal',
    subTitle: 'Bukan sekadar seremonial, melainkan pembuktian cinta lewat ittiba\'.',
    outlines: ['Makna hakiki memperingati kelahiran Rasulullah', 'Kewajiban mentaati dan meneladani beliau', 'Kiat menghidupkan sunnah di rumah dan tempat kerja'],
    customContent: {
      paragraphs: [
        "<strong>1. Makna Hakiki Memperingati Kelahiran Rasulullah SAW</strong><br/>Sidang Jum'at yang berbahagia,<br/>Bulan Rabi'ul Awwal adalah bulan yang sangat bersejarah bagi peradaban umat manusia. Pada bulan inilah dilahirkan seorang manusia agung yang membawa risalah kebenaran, pembawa lentera di tengah pekatnya kegelapan jahiliyah, yaitu Baginda Nabi Agung Muhammad SAW. Kelahiran beliau adalah anugerah terbesar bagi jagat raya, sebagaimana firman Allah dalam Surah Al-Anbiya ayat 107: <em>'Dan tidaklah Kami mengutus engkau (Muhammad), melainkan untuk menjadi rahmat bagi semesta alam.'</em><br/>Namun, kita harus sadar sepenuhnya bahwa makna hakiki dari peringatan Maulid Nabi bukanlah terletak pada kemegahan seremonial, lantunan syair-syair pujian, atau hidangan makanan yang melimpah ruah semata. Makna hakiki maulid adalah melahirkan kembali komitmen spiritual di dalam dada kita untuk menjadikan Rasulullah SAW sebagai satu-satunya pusat teladan hidup (Uswah Hasanah). Kegembiraan kita atas kelahiran beliau harus menjelma menjadi kerinduan mendalam untuk mempelajari biografi perjuangan beliau, mengkaji hadits-haditsnya, serta memperkokoh keyakinan kita pada ajaran Islam yang murni.",
        "<strong>2. Kewajiban Mentaati dan Meneladani Beliau secara Kaffah</strong><br/>Jamaah yang dirahmati Allah,<br/>Mencintai Rasulullah SAW bukanlah sebuah klaim kosong di lisan tanpa pembuktian nyata. Syariat Islam mengukur kebenaran cinta seorang mukmin lewat ketundukan dan ketaatan mutlak kepada sunnah beliau. Allah SWT berfirman dalam Surah Ali 'Imran ayat 31: <em>'Katakanlah (Muhammad): Jika kamu mencintai Allah, maka ikutilah aku (ittiba' kepadaku), niscaya Allah akan mencintaimu dan mengampuni dosa-dosamu.'</em><br/>Meneladani Rasulullah SAW harus kita lakukan secara kaffah (menyeluruh)—mulai dari keluhuran akidah beliau, kekhusyukan ibadahnya, keagungan akhlak sosialnya, hingga cara beliau berinteraksi dalam lingkup keluarga. Adalah sebuah ketimpangan yang fatal jika seseorang mengaku mencintai nabi, namun di saat yang sama ia melalaikan shalat berjamaah, memakan harta riba, berbuat zalim kepada tetangga, atau menyebarkan ujaran kebencian di media sosial. Ketahuilah bahwa kejujuran iman diukur dari sejauh mana keselarasan hidup kita dengan tuntunan yang beliau bawa.",
        "<strong>3. Kiat Praktis Menghidupkan Sunnah di Rumah dan Tempat Kerja</strong><br/>Sebagai penutup dari khutbah ini, marilah kita berkomitmen membawa pulang semangat Maulid ini ke dalam kehidupan praktis sehari-hari. Mulailah menghidupkan sunnah-sunnah nabi dari lingkungan terkecil, yaitu di dalam rumah tangga kita sendiri.<br/>Mari kita rutinkan membaca doa-doa harian bersama anak dan istri: doa sebelum tidur, doa makan, dan dzikir setelah shalat. Hidupkan sunnah dengan tersenyum ramah, berkata lemah lembut, dan saling memaafkan di antara anggota keluarga.<br/>Di tempat kerja atau dalam kehidupan sosial, terapkan sunnah Rasulullah dalam bentuk kejujuran (shidiq), amanah saat memegang tanggung jawab, dan transparansi dalam berniaga. Rasulullah SAW bersabda: <em>'Siapa yang menghidupkan sunnahku di saat umatku sedang rusak, maka baginya pahala seorang mati syahid.'</em> (HR. Thabrani). Semoga Allah SWT menganugerahi kita kekuatan batin untuk istiqomah di atas sunnah beliau dan kelak mengumpulkan kita bersama kafilah suci Rasulullah SAW di jannah-Nya."
      ]
    }
  },
  {
    title: 'Meneladani Akhlak Mulia Sang Pembawa Rahmat',
    category: 'rabiul_awwal',
    subTitle: 'Rasulullah SAW diutus untuk menyempurnakan akhlak manusia.',
    outlines: ['Sifat-sifat wajib Rasulullah', 'Keluhuran akhlak beliau kepada kawan dan lawan', 'Aplikasi akhlak mulia dalam interaksi sosial']
  },
  {
    title: 'Membuktikan Cinta Sejati Kepada Nabi Muhammad SAW',
    category: 'rabiul_awwal',
    subTitle: 'Tanda-tanda cinta yang jujur kepada kekasih Allah.',
    outlines: ['Mendahulukan sabda Nabi di atas pendapat manusia', 'Memperbanyak shalawat kepada beliau', 'Rindu bertemu dan berkumpul bersama beliau di surga']
  },
  {
    title: 'Rasulullah Sebagai Teladan Sempurna dalam Rumah Tangga',
    category: 'rabiul_awwal',
    subTitle: 'Bagaimana beliau memperlakukan istri, anak, dan pembantunya.',
    outlines: ['Kebaikan suami diukur dari sikapnya kepada istri', 'Kelembutan nabi mendidik anak dan cucu', 'Solusi syar\'i mengatasi konflik rumah tangga']
  },
  {
    title: 'Kepemimpinan Adil dan Bijaksana Gaya Rasulullah',
    category: 'rabiul_awwal',
    subTitle: 'Prinsip-prinsip kepemimpinan nabi yang sukses membangun Madinah.',
    outlines: ['Sifat amanah dan jujur dalam memimpin', 'Pentingnya musyawarah (Syura)', 'Mengutamakan kesejahteraan rakyat di atas kepentingan pribadi']
  },
  {
    title: 'Mukjizat Al-Qur\'an: Warisan Terbesar Rasulullah SAW',
    category: 'rabiul_awwal',
    subTitle: 'Mempelajari, mengamalkan, dan mendakwahkan Al-Qur\'an.',
    outlines: ['Al-Qur\'an sebagai mukjizat yang abadi', 'Kewajiban berinteraksi dengan Al-Qur\'an', 'Ancaman menjauhi tuntunan Al-Qur\'an']
  },
  {
    title: 'Kelembutan Hati Rasulullah Terhadap Umatnya',
    category: 'rabiul_awwal',
    subTitle: 'Kasih sayang beliau yang amat besar demi keselamatan umat.',
    outlines: ['Kisah syafaat nabi di hari kiamat', 'Tangisan nabi mendoakan umatnya', 'Membangun kepekaan sosial atas dasar kasih sayang']
  },
  {
    title: 'Ketegasan Rasulullah dalam Menjaga Batasan Hukum Allah',
    category: 'rabiul_awwal',
    subTitle: 'Menyeimbangkan kelembutan dengan keadilan hukum.',
    outlines: ['Prinsip keadilan tanpa pandang bulu', 'Menolak nepotisme dalam penegakan hukum', 'Menjaga kehormatan syariat Islam']
  },
  {
    title: 'Meneladani Metode Dakwah Rasulullah yang Sejuk dan Efektif',
    category: 'rabiul_awwal',
    subTitle: 'Mengajak manusia dengan hikmah, nasihat baik, dan diskusi yang santun.',
    outlines: ['Konsep "Dakwah Bil Hikmah"', 'Menghindari kekerasan dan caci maki dalam dakwah', 'Menarik simpati umat lewat akhlak mulia']
  },
  {
    title: 'Semangat Kewirausahaan dan Kejujuran Bisnis Ala Nabi',
    category: 'rabiul_awwal',
    subTitle: 'Bagaimana berbisnis yang berkah mendatangkan rezeki melimpah.',
    outlines: ['Rasulullah sebagai pedagang yang terpercaya (Al-Amin)', 'Larangan menipu, mengurangi timbangan, dan riba', 'Etika bisnis Islam dalam transaksi modern']
  },
  {
    title: 'Kisah Perjuangan Dakwah Periode Makkah: Sabar Tanpa Batas',
    category: 'rabiul_awwal',
    subTitle: 'Meneladani keteguhan aqidah nabi dan para sahabat awal.',
    outlines: ['Ujian fisik dan mental di Makkah', 'Boikot ekonomi terhadap Bani Hasyim', 'Pelajaran berharga untuk pejuang dakwah hari ini']
  },
  {
    title: 'Pentingnya Adab Sebelum Ilmu Meniru Bimbingan Nabi',
    category: 'rabiul_awwal',
    subTitle: 'Ilmu tanpa adab hanya akan melahirkan kesombongan.',
    outlines: ['Keluhuran adab para sahabat', 'Pentingnya menghormati guru dan orang tua', 'Aplikasi adab dalam menuntut ilmu syar\'i']
  },
  {
    title: 'Mempersiapkan Diri Bertemu Rasulullah di Telaga Al-Kautsar',
    category: 'rabiul_awwal',
    subTitle: 'Amal-amal yang membuat kita berhak meminum air telaga nabi.',
    outlines: ['Gambaran telaga Al-Kautsar', 'Penyebab terusirnya sebagian orang dari telaga nabi', 'Menjaga kemurnian sunnah agar diakui sebagai umat beliau']
  },

  // --- BULAN RABI'UL AKHIR (13 judul) ---
  {
    title: 'Menjaga Kemurnian Aqidah dari Bahaya Syirik Modern',
    category: 'rabiul_akhir',
    subTitle: 'Memahami batasan tauhid dan mewaspadai kesyirikan kasat mata.',
    outlines: ['Definisi syirik akbar dan syirik ashghar', 'Fenomena ramalan bintang, jimat digital, dan kesyirikan zaman kini', 'Cara membentengi hati agar tetap bertauhid murni']
  },
  {
    title: 'Tadabbur Alam: Menemukan Kebesaran Allah Melalui Ciptaan-Nya',
    category: 'rabiul_akhir',
    subTitle: 'Menjadikan alam semesta sebagai sarana meningkatkan keimanan.',
    outlines: ['Ayat-ayat kauniyah dalam Al-Qur\'an', 'Urgensi tafakkur dan tadabbur', 'Menjaga kelestarian lingkungan sebagai amanah kekhalifahan']
  },
  {
    title: 'Membangun Kekuatan Ukhuwah Islamiyah yang Hakiki',
    category: 'rabiul_akhir',
    subTitle: 'Menyatukan hati di atas fondasi iman dan aqidah yang lurus.',
    outlines: ['Hakikat persaudaraan sesama muslim', 'Penyakit hati pembelah ukhuwah', 'Kiat praktis merawat persatuan umat']
  },
  {
    title: 'Urgensi Konsistensi (Istiqomah) Pasca Bulan Mulia',
    category: 'rabiul_akhir',
    subTitle: 'Memastikan ibadah tetap terjaga kontinyu di bulan-bulan biasa.',
    outlines: ['Istiqomah sebagai karomah terbesar', 'Penyebab futur (lesu iman) dan solusinya', 'Amalan kecil yang dikerjakan secara terus-menerus']
  },
  {
    title: 'Pentingnya Memiliki Sifat Wara\' dalam Kehidupan Sehari-hari',
    category: 'rabiul_akhir',
    subTitle: 'Menjauhi perkara syubhat demi menyelamatkan agama dan kehormatan.',
    outlines: ['Definisi wara\' menurut para ulama', 'Bahaya meremehkan hal syubhat', 'Penerapan sifat wara\' dalam mencari rezeki']
  },
  {
    title: 'Membina Generasi Rabbani di Era Digital',
    category: 'rabiul_akhir',
    subTitle: 'Kiat mendidik anak agar mencintai Allah dan Rasul-Nya di tengah kepungan gadget.',
    outlines: ['Tantangan mendidik anak zaman sekarang', 'Peran vital ayah sebagai pendidik utama', 'Menanamkan nilai tauhid sejak dini']
  },
  {
    title: 'Kewajiban Menghormati dan Memuliakan Ulama',
    category: 'rabiul_akhir',
    subTitle: 'Ulama adalah pewaris para nabi yang wajib ditaati dalam kebaikan.',
    outlines: ['Keutamaan ulama dalam Al-Qur\'an dan Sunnah', 'Adab berinteraksi dengan ulama', 'Bahaya mencela dan meremehkan fatwa ulama']
  },
  {
    title: 'Urgensi Membaca dan Memahami Sirah Nabawiyah',
    category: 'rabiul_akhir',
    subTitle: 'Menjadikan sejarah nabi sebagai panduan hidup nyata.',
    outlines: ['Manfaat mempelajari perjalanan hidup Rasulullah', 'Meneladani respon nabi terhadap berbagai masalah', 'Menanamkan kecintaan sirah kepada anak-anak']
  },
  {
    title: 'Menjaga Kehormatan Diri (Iffah) Seorang Muslim',
    category: 'rabiul_akhir',
    subTitle: 'Mewujudkan kesucian diri di tengah pergaulan bebas.',
    outlines: ['Pentingnya sifat malu bagi mukmin', 'Menjaga pandangan mata dan kemaluan', 'Mewaspadai pemicu syahwat liar']
  },
  {
    title: 'Pentingnya Berbakti Kepada Kedua Orang Tua (Birrul Walidain)',
    category: 'rabiul_akhir',
    subTitle: 'Ridha Allah terletak pada ridha kedua orang tua.',
    outlines: ['Kedudukan bakti orang tua setelah tauhid', 'Cara berbakti saat orang tua masih hidup dan telah tiada', 'Dosa besar durhaka kepada orang tua (uququl walidain)']
  },
  {
    title: 'Mewaspadai Tipu Daya Setan yang Halus dan Nyata',
    category: 'rabiul_akhir',
    subTitle: 'Langkah-langkah setan dalam menggelincirkan manusia dari ketaatan.',
    outlines: ['Permusuhan abadi setan terhadap manusia', 'Metode talbis (penyamaran) iblis', 'Benteng pelindung dari godaan setan']
  },
  {
    title: 'Urgensi Shalat Berjamaah Bagi Kaum Laki-Laki',
    category: 'rabiul_akhir',
    subTitle: 'Menghidupkan masjid dengan menegakkan shalat fardhu berjamaah.',
    outlines: ['Hukum shalat berjamaah di masjid bagi pria', 'Keutamaan dan pahala berlipat ganda', 'Langkah membiasakan diri melangkah ke masjid']
  },
  {
    title: 'Membangun Pribadi yang Penuh Tanggung Jawab',
    category: 'rabiul_akhir',
    subTitle: 'Setiap kalian adalah pemimpin dan akan dimintai pertanggungjawaban.',
    outlines: ['Konsep tanggung jawab (amanah) dalam Islam', 'Amanah keluarga, pekerjaan, dan masyarakat', 'Siksaan bagi pengkhianat amanah']
  },

  // --- BULAN JUMADIL ULA (13 judul) ---
  {
    title: 'Membangun Keluarga Sakinah, Mawaddah, wa Rahmah',
    category: 'jumadil_ula',
    subTitle: 'Menyelaraskan hak dan kewajiban suami istri sesuai petunjuk syariat.',
    outlines: ['Definisi keluarga sakinah', 'Peran suami sebagai qawwam (pelindung)', 'Kewajiban istri mentaati suami dalam kebaikan']
  },
  {
    title: 'Tanggung Jawab Orang Tua Mendidik Aqidah Anak',
    category: 'jumadil_ula',
    subTitle: 'Menyelamatkan keluarga dari siksa api neraka sejak dini.',
    outlines: ['Tafsir ayat "Peliharalah dirimu dan keluargamu dari api neraka"', 'Pelajaran Luqman Al-Hakim mendidik anak', 'Menanamkan kebiasaan shalat sejak umur 7 tahun']
  },
  {
    title: 'Adab dan Etika Berkomunikasi dalam Rumah Tangga',
    category: 'jumadil_ula',
    subTitle: 'Mewujudkan kedamaian rumah lewat tutur kata yang lembut dan santun.',
    outlines: ['Pentingnya komunikasi yang baik (Mu\'asyarah bil Ma\'ruf)', 'Menghindari kekerasan verbal dan fisik', 'Nabi SAW sebagai teladan bercengkrama dengan keluarga']
  },
  {
    title: 'Sinergi Ayah dan Ibu dalam Pengasuhan Anak',
    category: 'jumadil_ula',
    subTitle: 'Mendidik anak bukan hanya tugas ibu, tapi tanggung jawab bersama.',
    outlines: ['Peran ayah sebagai kepala madrasah keluarga', 'Peran ibu sebagai pendidik utama', 'Pentingnya kekompakan orang tua di depan anak']
  },
  {
    title: 'Mewaspadai Bahaya Perceraian yang Dibenci Allah',
    category: 'jumadil_ula',
    subTitle: 'Upaya-upaya menjaga keutuhan rumah tangga dari kehancuran.',
    outlines: ['Dampak buruk perceraian bagi anak', 'Langkah mediasi saat terjadi konflik (Syirah)', 'Sabar atas kekurangan pasangan hidup']
  },
  {
    title: 'Kewajiban Memberi Nafkah yang Halal Bagi Keluarga',
    category: 'jumadil_ula',
    subTitle: 'Rezeki yang halal membawa berkah dan ketenangan di dalam rumah.',
    outlines: ['Nafkah sebagai kewajiban mutlak suami', 'Bahaya memberi makan keluarga dengan harta haram', 'Keutamaan mencari nafkah dinilai sebagai jihad']
  },
  {
    title: 'Menjadikan Rumah Sehangat Baitul Jannah',
    category: 'jumadil_ula',
    subTitle: 'Menghidupkan ibadah, tilawah, dan dzikir di dalam rumah kita.',
    outlines: ['Bahaya menjadikan rumah seperti kuburan', 'Menghidupkan shalat sunnah di rumah', 'Membiasakan tilawah Al-Qur\'an bersama keluarga']
  },
  {
    title: 'Pentingnya Ridha Orang Tua Bagi Kesuksesan Anak',
    category: 'jumadil_ula',
    subTitle: 'Mengetuk pintu langit melalui bakti tulus kepada ayah dan ibu.',
    outlines: ['Kisah Jurayj dan pentingnya doa ibu', 'Bagaimana berbakti kepada orang tua yang keras kepala', 'Keutamaan mendoakan orang tua setiap hari']
  },
  {
    title: 'Menyambung Tali Silaturahmi Keluarga Besar',
    category: 'jumadil_ula',
    subTitle: 'Memanjangkan umur dan melapangkan rezeki melalui silaturahmi.',
    outlines: ['Definisi silaturahmi yang sesungguhnya', 'Ancaman bagi pemutus tali kekeluargaan', 'Kiat merajut hubungan yang sempat retak']
  },
  {
    title: 'Membimbing Anak Menghadapi Arus Fitnah Akhir Zaman',
    category: 'jumadil_ula',
    subTitle: 'Menanamkan akhlak dan benteng pertahanan iman yang kokoh.',
    outlines: ['Mengenalkan bahaya pemikiran sesat', 'Mengajarkan adab bersosial media', 'Pentingnya memilih lingkungan pertemanan yang shaleh']
  },
  {
    title: 'Sikap Tegas Terhadap Kemungkaran di Dalam Rumah',
    category: 'jumadil_ula',
    subTitle: 'Mencegah masuknya pengaruh buruk televisi, internet, dan pergaulan.',
    outlines: ['Kewajiban amar ma\'ruf nahi munkar dalam keluarga', 'Membatasi akses konten pornografi dan kekerasan', 'Membiasakan sikap malu dan menutup aurat di rumah']
  },
  {
    title: 'Keutamaan Mendidik Anak Perempuan Menuju Surga',
    category: 'jumadil_ula',
    subTitle: 'Anugerah besar bagi orang tua yang sabar mendidik anak wanita.',
    outlines: ['Hadits keutamaan mendidik dua anak perempuan', 'Menjaga kehormatan dan kesucian anak wanita', 'Mempersiapkan mereka menjadi ibu rumah tangga yang shalehah']
  },
  {
    title: 'Meneladani Keshalehan Ibunda Para Ulama Besar',
    category: 'jumadil_ula',
    subTitle: 'Peran ibu-ibu tangguh di balik kesuksesan ulama dunia.',
    outlines: ['Kisah ibunda Imam Syafii dan Imam Ahmad', 'Ketulusan doa ibu dalam mendidik anak yatim', 'Pelajaran keteguhan mendidik generasi berilmu']
  },

  // --- BULAN JUMADIL AKHIRAH (13 judul) ---
  {
    title: 'Mengingat Kematian Sebagai Penawar Penyakit Hati',
    category: 'jumadil_akhirah',
    subTitle: 'Dzikrul maut melembutkan hati yang keras dan memotong ketamakan.',
    outlines: ['Kematian adalah kepastian yang sering dilupakan', 'Manfaat mengingat kematian bagi kualitas ibadah', 'Mempersiapkan bekal sebelum ajal menjemput tiba-tiba']
  },
  {
    title: 'Hakikat Umur Manusia: Singkat, Berharga, dan Dipertanyakan',
    category: 'jumadil_akhirah',
    subTitle: 'Setiap detik usia akan dimintai pertanggungjawaban di hadapan Allah.',
    outlines: ['Pertanyaan di padang mahsyar tentang umur dan masa muda', 'Bagaimana mengisi sisa usia dengan kebaikan', 'Tanda-tanda su\'ul khatimah dan husnul khatimah']
  },
  {
    title: 'Menghitung Amal (Muhasabah) Sebelum Hari Perhitungan',
    category: 'jumadil_akhirah',
    subTitle: 'Mengevaluasi diri secara rutin demi keselamatan di akhirat.',
    outlines: ['Perintah muhasabah dalam Surah Al-Hasyr', 'Metode muhasabah harian para sahabat nabi', 'Memperbaiki hubungan dengan manusia dan pencipta']
  },
  {
    title: 'Istiqomah di Jalan Ketaatan Sampai Akhir Hayat',
    category: 'jumadil_akhirah',
    subTitle: 'Meraih husnul khatimah dengan menjaga konsistensi amal shaleh.',
    outlines: ['Definisi husnul khatimah yang benar', 'Penyebab utama seseorang wafat dalam kondisi buruk', 'Kiat agar diwafatkan dalam keadaan bersujud']
  },
  {
    title: 'Mempersiapkan Warisan Amal Jariyah yang Tak Terputus',
    category: 'jumadil_akhirah',
    subTitle: 'Mengalirkan pahala ke liang kubur melalui sedekah, ilmu, dan anak shaleh.',
    outlines: ['Hadits tentang tiga amal yang tetap mengalir', 'Urgensi wakaf dan pembangunan sarana ibadah', 'Mendidik anak agar menjadi pendoa yang setia']
  },
  {
    title: 'Taubat Nasuha Sebelum Pintu Taubat Tertutup Selamanya',
    category: 'jumadil_akhirah',
    subTitle: 'Mengetuk ampunan Allah selagi nafas belum sampai di tenggorokan.',
    outlines: ['Kasih sayang Allah yang menerima taubat hamba-Nya', 'Dua waktu tertutupnya pintu taubat', 'Langkah konkret merealisasikan taubat yang jujur']
  },
  {
    title: 'Menjaga Hati dari Penyakit Panjang Angan-Angan (Thulul Amal)',
    category: 'jumadil_akhirah',
    subTitle: 'Bahaya menunda-nunda amal shalih karena merasa masih hidup lama.',
    outlines: ['Definisi thulul amal dan bahayanya bagi akhirat', 'Kisah ulama salaf yang menyegerakan amal', 'Sikap hidup bagai pengembara di dunia']
  },
  {
    title: 'Meneladani Keteguhan Iman Para Pejuang Islam Terdahulu',
    category: 'jumadil_akhirah',
    subTitle: 'Membangkitkan ghiroh perjuangan membela agama Allah.',
    outlines: ['Kisah keteguhan iman ulama menghadapi siksaan penguasa', 'Pentingnya keberanian menyuarakan kebenaran', 'Menjaga agama di atas segalanya']
  },
  {
    title: 'Bekal Menghadapi Dahsyatnya Fitnah Kubur',
    category: 'jumadil_akhirah',
    subTitle: 'Pertanyaan Malaikat Munkar dan Nakir serta cara menjawabnya.',
    outlines: ['Gambaran alam kubur (taman surga atau lubang neraka)', 'Tiga pertanyaan pokok di dalam kubur', 'Amal-amal penyalamat dari siksa kubur']
  },
  {
    title: 'Mewujudkan Sikap Qana\'ah di Tengah Sifat Serakah Manusia',
    category: 'jumadil_akhirah',
    subTitle: 'Merasa cukup dengan rezeki yang Allah berikan membawa kekayaan jiwa.',
    outlines: ['Definisi qana\'ah dalam pandangan Islam', 'Bahaya ketamakan terhadap harta dan tahta', 'Ketenangan hidup orang-orang yang qana\'ah']
  },
  {
    title: 'Pentingnya Saling Wasiat-Mewasiati dalam Kebenaran dan Kesabaran',
    category: 'jumadil_akhirah',
    subTitle: 'Menjaga keberlangsungan dakwah lewat saling menasihati.',
    outlines: ['Tafsir Surah Al-\'Ashr', 'Adab memberi dan menerima nasihat', 'Bahaya kesombongan menolak kebenaran']
  },
  {
    title: 'Menata Niat yang Benar dalam Setiap Aktivitas Sehari-hari',
    category: 'jumadil_akhirah',
    subTitle: 'Mengubah kebiasaan duniawi bernilai ibadah di sisi Allah.',
    outlines: ['Kedudukan niat dalam syariat', 'Cara mengubah rutinitas biasa menjadi lumbung pahala', 'Waspada niat ganda yang merusak ketulusan']
  },
  {
    title: 'Mempersiapkan Diri Menghadapi Yaumul Hisab',
    category: 'jumadil_akhirah',
    subTitle: 'Pengadilan Allah yang seadil-adilnya tanpa ada yang terlewat.',
    outlines: ['Gambaran kedahsyatan hari kiamat', 'Proses penyerahan buku catatan amal', 'Amalan pembobot timbangan kebaikan (Mizan)']
  },

  // --- BULAN RAJAB (13 judul) ---
  {
    title: 'Isra Mi\'raj: Urgensi dan Keagungan Ibadah Shalat Lima Waktu',
    category: 'rajab',
    subTitle: 'Satu-satunya ibadah yang perintahnya dijemput langsung oleh Rasulullah.',
    outlines: ['Kronologi singkat peristiwa Isra Mi\'raj', 'Shalat sebagai mi\'raj-nya orang beriman', 'Dampak shalat yang khusyu\' dalam mencegah kemungkaran']
  },
  {
    title: 'Keutamaan Bulan Rajab Sebagai Bulan Haram',
    category: 'rajab',
    subTitle: 'Memahami batasan amalan syar\'i dan menghindari bid\'ah di bulan Rajab.',
    outlines: ['Rajab sebagai salah satu dari empat bulan suci', 'Larangan berbuat dzalim di bulan mulia', 'Klarifikasi hadits-hadits lemah seputar amalan khusus Rajab']
  },
  {
    title: 'Khusyu\' dalam Shalat: Kunci Kebahagiaan dan Keberuntungan',
    category: 'rajab',
    subTitle: 'Bagaimana menghadirkan hati sepenuhnya saat menghadap Sang Khalik.',
    outlines: ['Definisi khusyu\' dalam Al-Qur\'an', 'Kiat praktis meraih kekhusyu\'an shalat', 'Bahaya shalat yang tergesa-gesa bagai gagak mematuk']
  },
  {
    title: 'Menjaga Shalat Fardhu: Tiang Agama yang Menentukan Nasib',
    category: 'rajab',
    subTitle: 'Amal pertama yang dihisab dan pembeda antara iman dan kufur.',
    outlines: ['Kedudukan shalat dalam bangunan Islam', 'Ancaman keras bagi yang melalaikan atau meninggalkan shalat', 'Shalat sebagai penolong di saat mengalami kesulitan hidup']
  },
  {
    title: 'Meneladani Perjuangan Rasulullah Membela Kebenaran di Bulan Rajab',
    category: 'rajab',
    subTitle: 'Mempelajari ekspedisi militer nabi yang terjadi di bulan suci ini.',
    outlines: ['Peristiwa sejarah penting di bulan Rajab', 'Keteguhan pertahanan umat Islam menghadapi ancaman', 'Semangat membela kedaulatan Islam']
  },
  {
    title: 'Pentingnya Berdoa Memohon Berkah Rajab, Sya\'ban, dan Ramadhan',
    category: 'rajab',
    subTitle: 'Mempersiapkan jiwa menyambut bulan suci Ramadhan sejak dini.',
    outlines: ['Doa populer menyambut Ramadhan', 'Urgensi persiapan mental dan fisik', 'Mulai menanam amal shalih di bulan Rajab']
  },
  {
    title: 'Bahaya Meremehkan Shalat dan Menunda-Nunda Waktunya',
    category: 'rajab',
    subTitle: 'Mewaspadai jurang kehancuran akibat melalaikan panggilan adzan.',
    outlines: ['Tafsir ayat "Maka celakalah bagi orang-orang yang shalat..."', 'Hukuman bagi penunda shalat tanpa uzur syar\'i', 'Keutamaan shalat di awal waktu']
  },
  {
    title: 'Menghadirkan Kebersihan Jiwa Melalui Shalat yang Benar',
    category: 'rajab',
    subTitle: 'Shalat sebagai media pembersih dosa harian manusia.',
    outlines: ['Perumpamaan shalat seperti sungai mengalir di depan rumah', 'Shalat mencegah perbuatan keji dan munkar', 'Memperbaiki kualitas wudhu sebelum shalat']
  },
  {
    title: 'Pentingnya Shalat Tahajjud di Sepertiga Malam Terakhir',
    category: 'rajab',
    subTitle: 'Mengetuk pintu langit saat manusia lain sedang terlelap tidur.',
    outlines: ['Keutamaan shalat malam (Qiyamul Lail)', 'Waktu-waktu mustajab untuk berdoa', 'Kiat mudah bangun malam untuk tahajjud']
  },
  {
    title: 'Menjaga Shalat Sunnah Rawatib Sebagai Penyempurna Ibadah',
    category: 'rajab',
    subTitle: 'Membangun istana di surga dengan shalat sunnah pengiring fardhu.',
    outlines: ['Keutamaan shalat sunnah Rawatib mu\'akkad', 'Shalat sunnah menutupi kekurangan shalat fardhu di hari kiamat', 'Konsistensi mengamalkannya di tengah kesibukan']
  },
  {
    title: 'Pelajaran Aqidah di Balik Peristiwa Isra Mi\'raj',
    category: 'rajab',
    subTitle: 'Memahami kekuasaan mutlak Allah SWT yang melampaui akal manusia.',
    outlines: ['Iman terhadap perkara gaib', 'Keteguhan sikap Abu Bakar Ash-Shiddiq membenarkan nabi', 'Menepis keraguan kaum liberal/skeptis']
  },
  {
    title: 'Menjaga Shalat Subuh Berjamaah di Masjid',
    category: 'rajab',
    subTitle: 'Meraih jaminan perlindungan Allah dan cahaya sempurna di hari kiamat.',
    outlines: ['Kedahsyatan dua rakaat sebelum subuh', 'Keutamaan shalat subuh berjamaah', 'Ancaman kemunafikan bagi yang berat melangkah ke masjid saat subuh']
  },
  {
    title: 'Menjadikan Shalat Sebagai Penyejuk Hati (Qurratu A\'yun)',
    category: 'rajab',
    subTitle: 'Meneladani Rasulullah yang beristirahat dan mencari ketenangan lewat shalat.',
    outlines: ['Shalat bukan beban, melainkan kebutuhan rohani', 'Merindukan waktu shalat tiba', 'Menghubungkan hati langsung dengan Allah dalam sujud']
  },

  // --- BULAN SYA'BAN (13 judul) ---
  {
    title: 'Bulan Sya\'ban: Bulan Kelalaian Manusia dan Pengangkatan Amal',
    category: 'syaban',
    subTitle: 'Urgensi meningkatkan amal shalih ketika manusia lain sedang lalai.',
    outlines: ['Penjelasan hadits nabi tentang keistimewaan bulan Sya\'ban', 'Proses dilaporkannya amal tahunan kepada Allah', 'Pentingnya diangkatnya amal saat kita sedang berpuasa']
  },
  {
    title: 'Persiapan Ruhani dan Jasmani Menyambut Ramadhan',
    category: 'syaban',
    subTitle: 'Bagaimana para sahabat bersiap diri menyambut Ramadhan sejak bulan Sya\'ban.',
    outlines: ['Melunasi hutang puasa tahun lalu', 'Membiasakan diri berpuasa sunnah di bulan Sya\'ban', 'Mulai menata tilawah Al-Qur\'an agar lancar di bulan Ramadhan']
  },
  {
    title: 'Nisfu Sya\'ban: Keutamaan dan Amalan yang Dianjurkan',
    category: 'syaban',
    subTitle: 'Menyaring amalan sunnah shahih dan mewaspadai ritual bid\'ah.',
    outlines: ['Hadits shahih seputar pengampunan massal di malam Nisfu Sya\'ban', 'Dua golongan yang terhalang dari ampunan (musyrik & musyahin)', 'Amalan umum yang dianjurkan tanpa mengkhususkan tata cara baru']
  },
  {
    title: 'Mempersiapkan Manajemen Waktu untuk Ramadhan Maksimal',
    category: 'syaban',
    subTitle: 'Merancang jadwal ibadah harian agar tidak merugi di bulan suci.',
    outlines: ['Bahaya masuk bulan Ramadhan tanpa persiapan matang', 'Mengurangi porsi kegiatan duniawi yang tidak mendesak', 'Membuat target tilawah, sedekah, dan tarawih']
  },
  {
    title: 'Bahaya Dendam dan Permusuhan (Al-Musyahin) Bagi Penghambat Ampunan',
    category: 'syaban',
    subTitle: 'Pentingnya membersihkan hati dari kebencian sesama muslim sebelum Ramadhan.',
    outlines: ['Definisi musyahin dalam hadits Nisfu Sya\'ban', 'Dosa dendam memutus rahmat Allah', 'Kewajiban saling memaafkan dan berlapang dada']
  },
  {
    title: 'Keutamaan Puasa Sunnah Bulan Sya\'ban Sesuai Tuntunan Nabi',
    category: 'syaban',
    subTitle: 'Meneladani Rasulullah yang berpuasa hampir sebulan penuh di bulan Sya\'ban.',
    outlines: ['Hikmah puasa Sya\'ban sebagai latihan ibadah wajib', 'Batasan berpuasa setelah pertengahan Sya\'ban (Yaumusy Syakk)', 'Manfaat fisik dan medis puasa persiapan Ramadhan']
  },
  {
    title: 'Melunasi Hutang Puasa: Kewajiban yang Sering Ditunda',
    category: 'syaban',
    subTitle: 'Kewajiban qadha puasa bagi wanita, musafir, dan orang sakit.',
    outlines: ['Hukum menunda qadha puasa hingga datang Ramadhan berikutnya', 'Ketegasan Aisyah melunasi puasa di bulan Sya\'ban', 'Konsep fidyah bagi yang tidak mampu mengqadha']
  },
  {
    title: 'Membaca Al-Qur\'an: Menjadikan Sya\'ban Sebagai Bulan Para Pembaca',
    category: 'syaban',
    subTitle: 'Tradisi ulama salaf memfokuskan diri pada mushaf di bulan Sya\'ban.',
    outlines: ['Sya\'ban disebut "Syahrul Qurra" (Bulan para pembaca Al-Qur\'an)', 'Kiat mengatasi kemalasan membaca Al-Qur\'an', 'Menghadirkan hidayah Al-Qur\'an di dalam dada']
  },
  {
    title: 'Pentingnya Bertaubat Menjelang Datangnya Bulan Ramadhan',
    category: 'syaban',
    subTitle: 'Membersihkan bejana hati agar siap menampung limpahan berkah Ramadhan.',
    outlines: ['Hubungan taubat dengan kemudahan beribadah', 'Hati yang kotor menghalangi kelezatan ibadah', 'Tekad bulat meninggalkan maksiat selamanya']
  },
  {
    title: 'Memaksimalkan Doa di Malam-Malam Istimewa Sya\'ban',
    category: 'syaban',
    subTitle: 'Mengajukan proposal ampunan dan kelapangan rezeki kepada Allah.',
    outlines: ['Keutamaan berdoa di malam-malam mulia', 'Adab-adab berdoa agar dikabulkan', 'Mendoakan kebaikan diri, keluarga, dan umat Islam global']
  },
  {
    title: 'Mengenal Hukum Fiqih Ramadhan Sejak Dini',
    category: 'syaban',
    subTitle: 'Mempelajari rukun, syarat sah, pembatal, dan sunnah-sunnah puasa.',
    outlines: ['Kewajiban membekali diri dengan fiqih puasa', 'Perbedaan antara pembatal puasa dan hal yang mengurangi pahala', 'Mengatasi keraguan fiqih yang sering muncul']
  },
  {
    title: 'Menjaga Kesehatan Fisik dan Stamina Menuju Ramadhan',
    category: 'syaban',
    subTitle: 'Tubuh yang kuat dan sehat adalah modal utama beribadah maksimal.',
    outlines: ['Menjaga pola makan sehat menjelang Ramadhan', 'Menghindari begadang yang tidak bermanfaat', 'Niat sehat untuk kuat tarawih dan qiyamul lail']
  },
  {
    title: 'Mempersiapkan Anggaran Sedekah Ramadhan Sejak Sekarang',
    category: 'syaban',
    subTitle: 'Meniru kedermawanan nabi yang bagai angin berhembus di bulan Ramadhan.',
    outlines: ['Keutamaan memberi makan orang berbuka puasa (ifthar)', 'Menyisihkan sebagian rezeki untuk sedekah harian', 'Keberkahan harta yang disedekahkan']
  },

  // --- BULAN RAMADHAN (14 judul) ---
  {
    title: 'Ramadhan: Madrasah Iman untuk Mencapai Derajat Taqwa',
    category: 'ramadhan',
    subTitle: 'Memahami tujuan utama disyariatkannya ibadah puasa.',
    outlines: ['Tafsir ayat "La\'allakum tattaquun"', 'Indikator ketaqwaan yang sejati', 'Bagaimana mempertahankan nilai taqwa pasca Ramadhan']
  },
  {
    title: 'Al-Qur\'an dan Ramadhan: Dua Syafaat yang Menyelamatkan',
    category: 'ramadhan',
    subTitle: 'Kekuatan dahsyat penggabungan ibadah puasa dan tilawah Al-Qur\'an.',
    outlines: ['Nuzulul Qur\'an sebagai peristiwa agung', 'Bagaimana Al-Qur\'an dan puasa memberi syafaat di hari kiamat', 'Kiat mengkhatamkan Al-Qur\'an dengan tadabbur']
  },
  {
    title: 'Memburu Malam Lailatul Qadar yang Lebih Baik dari Seribu Bulan',
    category: 'ramadhan',
    subTitle: 'Strategi menghidupkan sepuluh malam terakhir Ramadhan.',
    outlines: ['Keagungan malam Lailatul Qadar', 'Tanda-tanda malam mulia tersebut', 'Amalan dan doa yang diajarkan Rasulullah saat Lailatul Qadar']
  },
  {
    title: 'Pentingnya Menjaga Lisan dan Pahala Puasa',
    category: 'ramadhan',
    subTitle: 'Menghindari puasa yang sia-sia karena tidak mampu menahan lisan.',
    outlines: ['Hadits nabi tentang orang yang puasa tapi hanya mendapat lapar dan dahaga', 'Menjaga lisan dari dusta, ghibah, dan perdebatan', 'Sikap tenang menghadapi provokasi saat berpuasa']
  },
  {
    title: 'Keutamaan Sedekah dan Memberi Makan Orang Berbuka Puasa',
    category: 'ramadhan',
    subTitle: 'Melipatgandakan pahala puasa lewat berbagi kebaikan.',
    outlines: ['Rasulullah sebagai orang paling dermawan di bulan Ramadhan', 'Pahala memberi makan orang berpuasa sama dengan pahala pelakunya', 'Keberkahan harta yang dikeluarkan di jalan Allah']
  },
  {
    title: 'Membangun Kebiasaan Shalat Tarawih dan Qiyamul Lail',
    category: 'ramadhan',
    subTitle: 'Kiat istiqomah menghidupkan malam Ramadhan dengan shalat berjamaah.',
    outlines: ['Keutamaan shalat tarawih menghapuskan dosa masa lalu', 'Shalat tarawih bersama imam hingga selesai dihitung shalat semalam penuh', 'Mengatasi rasa malas dan mengantuk saat tarawih']
  },
  {
    title: 'Urgensi Itikaf di Sepuluh Malam Terakhir Ramadhan',
    category: 'ramadhan',
    subTitle: 'Memutuskan hubungan sementara dengan dunia untuk fokus taqarrub.',
    outlines: ['Sunnah iktikaf yang selalu dikerjakan Rasulullah', 'Syarat, adab, dan pembatal iktikaf', 'Memaksimalkan ibadah di dalam masjid']
  },
  {
    title: 'Zakat Fitrah: Pensuci Puasa dan Penolong Fakir Miskin',
    category: 'ramadhan',
    subTitle: 'Menyempurnakan rangkaian ibadah Ramadhan dengan menunaikan zakat.',
    outlines: ['Tujuan disyariatkannya zakat fitrah', 'Waktu wajib dan batas akhir pembayaran zakat fitrah', 'Golongan yang berhak menerima zakat fitrah']
  },
  {
    title: 'Meraih Ampunan Allah yang Luas di Bulan Ramadhan',
    category: 'ramadhan',
    subTitle: 'Menyesali dosa dan bersimpuh memohon rahmat di bulan maghfirah.',
    outlines: ['Tiga fase Ramadhan (Rahmat, Ampunan, Pembebasan dari api neraka)', 'Doa memohon ampunan yang mustajab', 'Celakanya orang yang melewati Ramadhan tanpa diampuni dosanya']
  },
  {
    title: 'Menjaga Keikhlasan Puasa di Tengah Godaan Riya Modern',
    category: 'ramadhan',
    subTitle: 'Puasa adalah ibadah rahasia antara hamba dengan Penciptanya.',
    outlines: ['Hadits Qudsi: "Puasa itu untuk-Ku dan Aku yang akan membalasnya"', 'Menghindari pamer ibadah di media sosial', 'Menjaga kerahasiaan amal shalih']
  },
  {
    title: 'Mendidik Keluarga Cinta Masjid di Bulan Ramadhan',
    category: 'ramadhan',
    subTitle: 'Mengajak istri dan anak memakmurkan rumah Allah.',
    outlines: ['Rasulullah membangunkan keluarganya di sepuluh malam terakhir', 'Adab membawa anak kecil ke masjid', 'Menciptakan memori indah beribadah bersama keluarga']
  },
  {
    title: 'Fiqih Praktis Safar dan Puasa Ramadhan',
    category: 'ramadhan',
    subTitle: 'Keringanan (Rukhsah) bagi musafir dan batasan hukumnya.',
    outlines: ['Kriteria safar yang membolehkan berbuka puasa', 'Lebih utama puasa atau berbuka saat safar?', 'Konsep qadha bagi musafir']
  },
  {
    title: 'Menghindari Sifat Israf (Berlebih-lebihan) Saat Berbuka Puasa',
    category: 'ramadhan',
    subTitle: 'Menjaga esensi kesederhanaan puasa dari nafsu makan balas dendam.',
    outlines: ['Larangan berlebihan dalam makanan dan minuman dalam Al-Qur\'an', 'Sunnah menyegerakan berbuka dengan kurma/air', 'Dampak buruk kekenyangan bagi ibadah malam']
  },
  {
    title: 'Mempersiapkan Keistiqomahan Ibadah Pasca Ramadhan',
    category: 'ramadhan',
    subTitle: 'Menjadi hamba Rabbani, bukan hamba Ramadhani saja.',
    outlines: ['Tanda diterimanya amal Ramadhan adalah ketaatan setelahnya', 'Kiat menjaga rutinitas ibadah di bulan-bulan berikutnya', 'Komitmen menolak kembalinya maksiat']
  },

  // --- BULAN SYAWWAL (13 judul) ---
  {
    title: 'Idul Fitri: Momentum Kembali kepada Kesucian Jiwa',
    category: 'syawwal',
    subTitle: 'Merayakan kemenangan atas hawa nafsu dengan takbir dan kesyukuran.',
    outlines: ['Makna hakiki kembali ke fitrah', 'Adab-adab merayakan Idul Fitri sesuai sunnah', 'Pentingnya menjaga silaturahmi dan bermaaf-maafan']
  },
  {
    title: 'Puasa Enam Hari di Bulan Syawwal dan Keutamaannya',
    category: 'syawwal',
    subTitle: 'Pahala puasa setahun penuh bagi yang menyambung puasa Ramadhan.',
    outlines: ['Dalil shahih puasa 6 hari Syawwal', 'Tata cara pelaksanaan (berurutan atau terpisah)', 'Mendahulukan qadha puasa Ramadhan sebelum puasa sunnah Syawwal']
  },
  {
    title: 'Istiqomah Beribadah Pasca Ramadhan: Ujian Keimanan yang Sesungguhnya',
    category: 'syawwal',
    subTitle: 'Bagaimana membuktikan keshalehan kita bukan musiman.',
    outlines: ['Definisi hamba Rabbani (penyembah Allah setiap waktu)', 'Konsistensi menjaga shalat lima waktu berjamaah', 'Memelihara tilawah Al-Qur\'an harian meskipun sedikit']
  },
  {
    title: 'Mempererat Tali Silaturahmi Pembuka Pintu Rezeki',
    category: 'syawwal',
    subTitle: 'Keutamaan mengunjungi sanak saudara dan menyelesaikan perselisihan.',
    outlines: ['Silaturahmi memanjangkan umur dan melapangkan rezeki', 'Bukan silaturahmi sejati jika hanya membalas kebaikan', 'Dosa besar memutus hubungan kekeluargaan']
  },
  {
    title: 'Menjaga Lisan dan Pandangan Setelah Ramadhan Berlalu',
    category: 'syawwal',
    subTitle: 'Melindungi pahala puasa yang telah susah payah dikumpulkan.',
    outlines: ['Bahaya kembali tergelincir dalam maksiat lisan', 'Menjaga pandangan mata di tempat umum', 'Membiasakan dzikir sebagai pengganti kata sia-sia']
  },
  {
    title: 'Pentingnya Saling Memaafkan dengan Tulus',
    category: 'syawwal',
    subTitle: 'Membersihkan hati dari dendam dan dengki di hari raya.',
    outlines: ['Keutamaan sifat pemaaf dalam Islam', 'Meminta maaf atas kesalahan hak sesama manusia', 'Menata hubungan baru yang lebih harmonis']
  },
  {
    title: 'Syawwal Sebagai Bulan Peningkatan Kualitas Ibadah',
    category: 'syawwal',
    subTitle: 'Makna harfiah Syawwal (Peningkatan) dalam kehidupan seorang muslim.',
    outlines: ['Mengevaluasi grafik ibadah pasca Ramadhan', 'Meningkatkan kualitas shalat fardhu dan sunnah', 'Mengaktifkan kembali sedekah dan kepedulian sosial']
  },
  {
    title: 'Bahaya Futur (Kehilangan Semangat Ibadah) dan Solusinya',
    category: 'syawwal',
    subTitle: 'Mewaspadai jebakan iblis yang melalaikan manusia setelah Ramadhan.',
    outlines: ['Mengenali gejala-gejala futur ibadah', 'Penyebab utama futur (banyak makan, pergaulan bebas, lalai)', 'Kiat membangkitkan kembali gairah beribadah']
  },
  {
    title: 'Membangun Karakter Syukur di Hari Kemenangan',
    category: 'syawwal',
    subTitle: 'Bersyukur atas taufik Allah yang memudahkan kita beribadah selama Ramadhan.',
    outlines: ['Syukur atas nikmat hidayah dan kekuatan fisik', 'Menjauhkan perayaan Idul Fitri dari kemaksiatan', 'Mengucapkan kalimat hamdalah dan takbir dengan penuh penghayatan']
  },
  {
    title: 'Menjaga Makanan Halal dan Thayyib Pasca Lebaran',
    category: 'syawwal',
    subTitle: 'Pentingnya mengontrol konsumsi makanan demi kesehatan fisik dan kesucian jiwa.',
    outlines: ['Konsep Halalan Thayyiban dalam Islam', 'Bahaya berlebihan makan (Israf)', 'Menjaga berat badan dan kesehatan sebagai bentuk syukur']
  },
  {
    title: 'Mendidik Anak Istiqomah Ibadah Sejak Dini',
    category: 'syawwal',
    subTitle: 'Melanjutkan kebiasaan baik Ramadhan pada anak-anak kita.',
    outlines: ['Menjadikan ibadah sebagai rutinitas keluarga yang menyenangkan', 'Apresiasi keshalehan anak', 'Keteladanan konsisten dari orang tua']
  },
  {
    title: 'Melestarikan Semangat Berbagi dan Sedekah',
    category: 'syawwal',
    subTitle: 'Kedermawanan muslim harus tetap bersinar meskipun Ramadhan usai.',
    outlines: ['Membantu tetangga yang kekurangan pasca lebaran', 'Menyalurkan sedekah secara rutin', 'Keutamaan menyantuni anak yatim dan dhuafa']
  },
  {
    title: 'Menatap Masa Depan dengan Optimisme Iman',
    category: 'syawwal',
    subTitle: 'Menghadapi tantangan hidup dengan modal ketaqwaan Ramadhan.',
    outlines: ['Menggantungkan harapan hanya kepada Allah SWT', 'Menolak keputusasaan atas ujian hidup', 'Bekerja keras mencari nafkah halal dengan etos kerja tinggi']
  },

  // --- BULAN DZULQO'DAH (13 judul) ---
  {
    title: 'Dzulqo\'dah: Bulan Tenang dan Kehormatan Bulan Haram',
    category: 'dzulqodah',
    subTitle: 'Urgensi menjaga perdamaian dan menjauhi kemaksiatan di bulan haram.',
    outlines: ['Dzulqo\'dah sebagai bulan pembuka rangkaian haji', 'Larangan berperang dan berbuat dzalim di bulan suci', 'Memanfaatkan waktu tenang untuk menuntut ilmu']
  },
  {
    title: 'Menjaga Kehormatan dan Kedamaian Sesama Muslim',
    category: 'dzulqodah',
    subTitle: 'Dosa mencaci maki, menuduh, dan menumpahkan darah muslim lain.',
    outlines: ['Hadits tentang definisi muslim sejati', 'Bahaya fitnah yang memecah belah umat', 'Membangun kedamaian mulai dari lingkungan terdekat']
  },
  {
    title: 'Pentingnya Mempersiapkan Bekal Ibadah Haji dan Umrah',
    category: 'dzulqodah',
    subTitle: 'Bagi para calon jamaah haji yang bersiap berangkat di bulan ini.',
    outlines: ['Ibadah haji memerlukan bekal takwa dan harta halal', 'Mempelajari manasik haji agar mabrur', 'Meluruskan niat semata-mata karena Allah']
  },
  {
    title: 'Urgensi Menjaga Kerukunan dan Silaturahmi Antar Tetangga',
    category: 'dzulqodah',
    subTitle: 'Hak-hak tetangga yang wajib dipenuhi oleh seorang muslim.',
    outlines: ['Anjuran berbuat baik kepada tetangga dalam Al-Qur\'an', 'Bahaya menyakiti tetangga dengan lisan atau tindakan', 'Kiat membangun kerukunan di komplek perumahan']
  },
  {
    title: 'Mempersiapkan Diri Menyambut Sepuluh Hari Pertama Dzulhijjah',
    category: 'dzulqodah',
    subTitle: 'Memanfaatkan bulan Dzulqo\'dah untuk bersiap memburu pahala agung.',
    outlines: ['Keistimewaan 10 hari pertama Dzulhijjah yang menyamai jihad', 'Merencanakan ibadah qurban sejak jauh hari', 'Melatih diri meningkatkan shalat malam dan puasa sunnah']
  },
  {
    title: 'Menuntut Ilmu Syar\'i Sebagai Kewajiban Abadi',
    category: 'dzulqodah',
    subTitle: 'Mengisi waktu luang dengan menghadiri majelis ilmu.',
    outlines: ['Menuntut ilmu sebagai jalan pintas menuju surga', 'Perbedaan derajat orang berilmu dan tidak berilmu', 'Adab mulia terhadap guru dan majelis ta\'lim']
  },
  {
    title: 'Bahaya Sifat Dengki (Hasad) Penghancur Pahala Kebaikan',
    category: 'dzulqodah',
    subTitle: 'Memahami dampak buruk hasad bagi kesehatan mental dan agama.',
    outlines: ['Hasad memakan kebaikan bagai api membakar kayu kering', 'Mengapa seseorang bisa berbuat hasad?', 'Kiat mengobati hasad dengan ridha atas pembagian rezeki Allah']
  },
  {
    title: 'Pentingnya Menjaga Amanah dan Menepati Janji',
    category: 'dzulqodah',
    subTitle: 'Sifat mulia para Nabi yang wajib dimiliki setiap mukmin.',
    outlines: ['Amanah sebagai tanda kesempurnaan iman', 'Bahaya ingkar janji dan khianat (tanda kemunafikan)', 'Menjaga kepercayaan dalam dunia bisnis dan politik']
  },
  {
    title: 'Menanamkan Sifat Sabar Menghadapi Takdir yang Pahit',
    category: 'dzulqodah',
    subTitle: 'Sabar di saat benturan pertama musibah datang.',
    outlines: ['Tiga macam kesabaran dalam Islam', 'Pahala tanpa batas bagi orang-orang yang sabar', 'Kisah Nabi Ayub sebagai teladan kesabaran abadi']
  },
  {
    title: 'Keutamaan Menjaga Wudhu dan Shalat Sunnah Syukur Wudhu',
    category: 'dzulqodah',
    subTitle: 'Wudhu sebagai benteng dari gangguan setan dan penghapus dosa.',
    outlines: ['Keutamaan dawamul wudhu (senantiasa menjaga wudhu)', 'Kisah terompah Bilal yang terdengar di surga', 'Tata cara dan keutamaan shalat sunnah wudhu']
  },
  {
    title: 'Mewaspadai Bahaya Sifat Kikir (Bakhil)',
    category: 'dzulqodah',
    subTitle: 'Harta yang disimpan dengan kikir akan dikalungkan di leher saat kiamat.',
    outlines: ['Perbedaan kikir dan hemat', 'Sifat kikir merusak tatanan sosial masyarakat', 'Cara melatih jiwa agar gemar bersedekah']
  },
  {
    title: 'Pentingnya Memiliki Sifat Malu (Al-Haya\')',
    category: 'dzulqodah',
    subTitle: 'Malu adalah bagian dari cabang keimanan yang sangat vital.',
    outlines: ['Malu kepada Allah untuk bermaksiat di keheningan', 'Malu kepada manusia untuk berbuat keji secara terang-terangan', 'Hilangnya sifat malu pertanda rusaknya moral umat']
  },
  {
    title: 'Kewajiban Menjaga Kelestarian Alam dan Lingkungan',
    category: 'dzulqodah',
    subTitle: 'Manusia sebagai khalifah di bumi berkewajiban merawat lingkungan.',
    outlines: ['Larangan merusak bumi setelah diperbaiki Allah', 'Menanam pohon dinilai sebagai sedekah jariyah', 'Menjaga kebersihan lingkungan sekitar masjid dan rumah']
  },

  // --- BULAN DZULHIJJAH (13 judul) ---
  {
    title: 'Dahsyatnya Pahala Amal Shalih di Sepuluh Hari Pertama Dzulhijjah',
    category: 'dzulhijjah',
    subTitle: 'Hari-hari paling dicintai Allah untuk beramal melebihi jihad fi sabilillah.',
    outlines: ['Keistimewaan sepuluh hari pertama Dzulhijjah', 'Amalan yang sangat dianjurkan: puasa, takbir, tahlil', 'Keutamaan puasa Arafah menghapus dosa dua tahun']
  },
  {
    title: 'Hikmah Qurban: Mengorbankan Ego Demi Mendekat Kepada Allah',
    category: 'dzulhijjah',
    subTitle: 'Bukan daging atau darahnya yang sampai, melainkan ketaqwaan kita.',
    outlines: ['Sejarah qurban dari kisah Nabi Ibrahim dan Ismail', 'Ketulusan dan keikhlasan sebagai ruh utama ibadah qurban', 'Ketentuan hukum syar\'i dalam memilih hewan qurban']
  },
  {
    title: 'Ibadah Haji: Manifestasi Persatuan Umat Islam Sedunia',
    category: 'dzulhijjah',
    subTitle: 'Pelajaran ukhuwah dan persamaan derajat manusia di padang Arafah.',
    outlines: ['Wukuf di Arafah sebagai miniatur padang Mahsyar', 'Membuang kesombongan ras, suku, dan kasta sosial', 'Meraih predikat haji mabrur yang balasannya tiada lain adalah surga']
  },
  {
    title: 'Meneladani Keteguhan Iman dan Pengorbanan Keluarga Ibrahim',
    category: 'dzulhijjah',
    subTitle: 'Membangun ketahanan iman keluarga menghadapi ujian berat.',
    outlines: ['Ketaatan mutlak Nabi Ibrahim atas perintah Allah', 'Sabar dan ridhanya Nabi Ismail disembelih', 'Peran tegar Ibunda Hajar mendidik anak di lembah sunyi']
  },
  {
    title: 'Hari Raya Idul Adha: Syiar Kesalehan Sosial Umat Islam',
    category: 'dzulhijjah',
    subTitle: 'Membagikan kegembiraan lewat daging qurban kepada dhuafa.',
    outlines: ['Ketentuan pembagian daging qurban secara adil', 'Membangun kepekaan sosial terhadap tetangga miskin', 'Larangan menjual kulit atau bagian qurban bagi pequrban']
  },
  {
    title: 'Urgensi Memanfaatkan Hari Tasyrik dengan Dzikir dan Syukur',
    category: 'dzulhijjah',
    subTitle: 'Hari makan, minum, dan mengingat Allah SWT.',
    outlines: ['Larangan berpuasa di hari Tasyrik (11, 12, 13 Dzulhijjah)', 'Mengumandangkan takbir mutlaq dan muqayyad', 'Bersyukur atas limpahan rezeki makanan dari Allah']
  },
  {
    title: 'Menjaga Kemurnian Niat dalam Berqurban',
    category: 'dzulhijjah',
    subTitle: 'Mewaspadai riya\' dan pamer hewan qurban mahal di media sosial.',
    outlines: ['Tafsir Surah Al-Hajj ayat 37', 'Meluruskan niat murni mencari ridha Allah', 'Menghindari perasaan sombong saat berqurban sapi/kambing besar']
  },
  {
    title: 'Keutamaan Menunaikan Ibadah Umrah di Bulan Haji',
    category: 'dzulhijjah',
    subTitle: 'Keringanan hukum dan keberkahan beribadah di tanah suci.',
    outlines: ['Perbedaan haji dan umrah', 'Fadhilah umrah di bulan-bulan haji', 'Menjaga kelestarian pahala umrah setelah pulang ke tanah air']
  },
  {
    title: 'Pelajaran Akhlak dari Khutbah Wada\' Rasulullah SAW',
    category: 'dzulhijjah',
    subTitle: 'Pesan-pesan terakhir nabi yang abadi demi keselamatan umat manusia.',
    outlines: ['Larangan menumpahkan darah dan merampas harta sesama', 'Kewajiban memuliakan dan berbuat baik kepada wanita (istri)', 'Pemberantasan praktek riba secara total']
  },
  {
    title: 'Pentingnya Menjaga Konsistensi Ibadah di Akhir Tahun',
    category: 'dzulhijjah',
    subTitle: 'Menutup tahun Hijriyah dengan husnul khatimah amal.',
    outlines: ['Pentingnya penutup sebuah amalan', 'Memperbanyak istighfar atas segala dosa setahun', 'Mempersiapkan tekad kuat memasuki tahun baru Muharram']
  },
  {
    title: 'Membangun Kepedulian Sosial Global Umat Islam',
    category: 'dzulhijjah',
    subTitle: 'Merasakan penderitaan saudara muslim di berbagai belahan dunia.',
    outlines: ['Konsep satu tubuh dalam ukhuwah Islamiyah', 'Membantu meringankan beban krisis kemanusiaan', 'Kekuatan doa tulus untuk keselamatan umat']
  },
  {
    title: 'Meneladani Keikhlasan Nabi Ismail AS',
    category: 'dzulhijjah',
    subTitle: 'Sikap berserah diri sepenuhnya atas segala syariat Allah.',
    outlines: ['Definisi ridha dan berserah diri (Islam)', 'Menepis keraguan terhadap hukum-hukum Allah', 'Balasan manis dari keikhlasan yang tulus']
  },
  {
    title: 'Merawat Hati dari Penyakit Cinta Dunia yang Berlebihan',
    category: 'dzulhijjah',
    subTitle: 'Qurban mengajarkan kita untuk melepas cinta harta demi Allah.',
    outlines: ['Bahaya tamak mengumpulkan harta tanpa zakat/sedekah', 'Melihat ke bawah dalam masalah dunia, melihat ke atas dalam urusan akhirat', 'Menjadikan dunia di tangan, akhirat di dalam hati']
  },

  // --- TAZKIYATUN NUFUS (15 judul) ---
  {
    title: 'Tazkiyatun Nufus: Kunci Meraih Kebahagiaan Dunia dan Akhirat',
    category: 'tazkiyatun_nufus',
    subTitle: 'Memahami urgensi mensucikan jiwa dari kotoran syirik dan maksiat.',
    outlines: ['Tafsir Surah Asy-Syams tentang keberuntungan orang yang mensucikan jiwa', 'Bahaya membiarkan jiwa terpuruk dalam dosa', 'Metode dasar mensucikan jiwa menurut Al-Qur\'an']
  },
  {
    title: 'Taubat Nasuha: Jalan Kembali Menuju Allah',
    category: 'tazkiyatun_nufus',
    subTitle: 'Kewajiban bertaubat atas segala dosa besar maupun kecil sebelum terlambat.',
    outlines: ['Definisi taubat nasuha menurut Umar bin Khattab', 'Tiga syarat taubat kepada Allah dan satu syarat tambahan kepada manusia', 'Kisah menakjubkan tentang luasnya ampunan Allah']
  },
  {
    title: 'Dzikirullah: Penentram Hati yang Gelisah',
    category: 'tazkiyatun_nufus',
    subTitle: 'Menemukan kedamaian batin sejati melalui basahnya lisan dengan dzikir.',
    outlines: ['Tafsir ayat "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram"', 'Keutamaan kalimat Thayyibah (Subhanallah, Alhamdulillah, Lailahaillallah)', 'Membiasakan dzikir pagi, petang, dan setelah shalat']
  },
  {
    title: 'Muhasabah Diri: Menilai Diri Sebelum Dinilai Allah',
    category: 'tazkiyatun_nufus',
    subTitle: 'Pentingnya mengoreksi aib diri sendiri daripada sibuk mencari aib orang lain.',
    outlines: ['Anjuran introspeksi diri secara berkala', 'Bahaya merasa suci dan aman dari makar Allah', 'Cara menumbuhkan sifat mawas diri (Muraqabah)']
  },
  {
    title: 'Menanamkan Sifat Khauf (Takut) dan Raja\' (Harap) Secara Seimbang',
    category: 'tazkiyatun_nufus',
    subTitle: 'Dua sayap burung yang membawa mukmin terbang menuju ridha-Nya.',
    outlines: ['Pentingnya takut akan murka dan siksa neraka Allah', 'Pentingnya mengharapkan rahmat dan ampunan Allah yang luas', 'Menggunakan khauf saat sehat, menggunakan raja\' saat sakaratul maut']
  },
  {
    title: 'Meneladani Sifat Wara\' dan Zuhud Para Salafush Shalih',
    category: 'tazkiyatun_nufus',
    subTitle: 'Menyederhanakan gaya hidup demi keselamatan hisab di akhirat.',
    outlines: ['Definisi zuhud yang benar (bukan miskin, melainkan tidak diperbudak dunia)', 'Keutamaan sifat wara\' (meninggalkan hal ragu demi menyelamatkan agama)', 'Aplikasi kesederhanaan di tengah gempuran gaya hidup konsumtif']
  },
  {
    title: 'Muraqabah: Merasakan Kehadiran dan Pengawasan Allah',
    category: 'tazkiyatun_nufus',
    subTitle: 'Mewujudkan derajat Ihsan dalam beribadah dan beraktivitas harian.',
    outlines: ['Definisi Ihsan (Beribadah seakan melihat Allah, atau yakin Dia melihatmu)', 'Dampak muraqabah dalam mencegah maksiat saat sunyi', 'Kisah gadis penjual susu yang jujur karena takut kepada Allah']
  },
  {
    title: 'Mengatasi Kemurkaan Jiwa dengan Menahan Amarah',
    category: 'tazkiyatun_nufus',
    subTitle: 'Kekuatan sejati bukanlah kemenangan gulat, melainkan mengontrol emosi.',
    outlines: ['Anjuran menahan amarah dalam Al-Qur\'an', 'Kiat meredam amarah sesuai sunnah (ta\'awudz, wudhu, mengubah posisi)', 'Pahala besar surga bagi orang yang mampu menahan amarah']
  },
  {
    title: 'Pentingnya Sifat Malu Kepada Allah SWT',
    category: 'tazkiyatun_nufus',
    subTitle: 'Sifat malu mencegah manusia dari melanggar batas-batas hukum-Nya.',
    outlines: ['Malu adalah mahkota keimanan', 'Bagaimana memupuk rasa malu yang syar\'i', 'Malu berbuat maksiat di bumi Allah sementara terus memakan rezeki-Nya']
  },
  {
    title: 'Menjaga Kebersihan Pikiran dari Prasangka Buruk',
    category: 'tazkiyatun_nufus',
    subTitle: 'Bahaya su\'udzon terhadap sesama muslim dan takdir Allah.',
    outlines: ['Larangan mencari-cari kesalahan orang lain (tajassus)', 'Mengedepankan sifat husnudzon (prasangka baik)', 'Menolak bisikan setan yang merusak hubungan persaudaraan']
  },
  {
    title: 'Memupuk Sifat Qana\'ah Penentram Jiwa yang Gelisah',
    category: 'tazkiyatun_nufus',
    subTitle: 'Kekayaan hakiki adalah kekayaan hati yang selalu merasa cukup.',
    outlines: ['Definisi qana\'ah dan hubungannya dengan kebahagiaan hidup', 'Melihat orang yang di bawah kita dalam urusan dunia', 'Ketenangan hidup tanpa terlilit hutang gaya hidup']
  },
  {
    title: 'Urgensi Membaca Al-Qur\'an dengan Tadabbur',
    category: 'tazkiyatun_nufus',
    subTitle: 'Al-Qur\'an sebagai obat penawar (Syifa\') bagi penyakit kejiwaan.',
    outlines: ['Membaca Al-Qur\'an bukan sekadar mengejar target khatam', 'Cara mentadabburi kandungan ayat Al-Qur\'an', 'Menerapkan petunjuk Al-Qur\'an dalam kehidupan nyata']
  },
  {
    title: 'Membangun Karakter Tawadhu (Rendah Hati) Menjauhi Sombong',
    category: 'tazkiyatun_nufus',
    subTitle: 'Menghormati orang lain dan tunduk sepenuhnya pada kebenaran.',
    outlines: ['Tawadhu mengangkat derajat seseorang di sisi Allah', 'Ciri-ciri orang yang tawadhu', 'Menolak kesombongan sekecil biji sawi agar tidak terhalang masuk surga']
  },
  {
    title: 'Menghidupkan Sifat Jujur (Shidiq) dalam Perkataan dan Perbuatan',
    category: 'tazkiyatun_nufus',
    subTitle: 'Kejujuran membimbing manusia menuju kebaikan dan surga-Nya.',
    outlines: ['Pentingnya kejujuran sebagai pilar iman', 'Bahaya dusta yang menyeret ke dalam neraka', 'Mewujudkan kejujuran dalam berdagang, berjanji, dan bersaksi']
  },
  {
    title: 'Berserah Diri (Tafwid) Sepenuhnya Kepada Ketentuan Allah',
    category: 'tazkiyatun_nufus',
    subTitle: 'Menemukan kedamaian sejati lewat kepasrahan total atas takdir.',
    outlines: ['Konsep menyerahkan urusan hanya kepada Allah setelah ikhtiar', 'Menghilangkan kekhawatiran berlebih atas masa depan', 'Yakin bahwa pilihan Allah adalah yang terbaik bagi kita']
  },

  // --- PENYAKIT & OBAT HATI (15 judul) ---
  {
    title: 'Mengenal Macam-Macam Penyakit Hati yang Mematikan Iman',
    category: 'penyakit_obat_hati',
    subTitle: 'Urgensi mendeteksi kotoran hati sebelum merusak seluruh amal shalih.',
    outlines: ['Hati yang sehat (Qalbun Salim), hati yang mati, dan hati yang sakit', 'Dampak maksiat menumbuhkan noda hitam di hati', 'Pentingnya memeriksa kondisi hati secara berkala']
  },
  {
    title: 'Bahaya Riya\' dan Sum\'ah: Syirik Khafi yang Merusak Pahala',
    category: 'penyakit_obat_hati',
    subTitle: 'Beramal demi pujian manusia hanya akan mendatangkan kerugian besar.',
    outlines: ['Definisi riya\' (pamer pandangan) dan sum\'ah (pamer pendengaran)', 'Riya\' sebagai syirik kecil yang sangat ditakuti Rasulullah', 'Cara mengobati riya\' dengan menyembunyikan amal kebaikan']
  },
  {
    title: 'Penyakit Hasad (Dengki): Pembakar Amal Kebaikan',
    category: 'penyakit_obat_hati',
    subTitle: 'Membenci nikmat Allah yang ada pada orang lain dan mengharapkan hilangnya.',
    outlines: ['Hasad merusak ketaatan bagai api melahap kayu kering', 'Bahaya hasad bagi ketenangan batin pelaku dengki', 'Obat hasad: mendoakan keberkahan bagi orang yang mendapat nikmat']
  },
  {
    title: 'Mengobati Penyakit Sombong (Kibr) dengan Sifat Tawadhu',
    category: 'penyakit_obat_hati',
    subTitle: 'Menolak kebenaran dan meremehkan sesama manusia adalah tanda sombong.',
    outlines: ['Definisi sombong menurut hadits nabi', 'Sifat sombong adalah pakaian kebesaran Allah yang haram dipakai makhluk', 'Latihan merendahkan hati di hadapan sesama manusia']
  },
  {
    title: 'Bahaya Cinta Dunia (Wahn) Pembuat Umat Islam Lemah',
    category: 'penyakit_obat_hati',
    subTitle: 'Cinta dunia yang berlebihan membuat takut akan kematian.',
    outlines: ['Penjelasan hadits tentang penyakit Wahn', 'Bagaimana dunia menipu manusia dengan perhiasan semunya', 'Menempatkan dunia di tangan untuk menolong akhirat']
  },
  {
    title: 'Mengobati Penyakit Lalai (Ghaflah) dari Mengingat Akhirat',
    category: 'penyakit_obat_hati',
    subTitle: 'Tertidur lelap dalam mimpi dunia hingga dibangunkan oleh kematian.',
    outlines: ['Ciri-ciri orang yang terkena penyakit lalai', 'Bahaya melupakan tujuan penciptaan manusia', 'Obat ghaflah: menghadiri majelis ilmu dan ziarah kubur']
  },
  {
    title: 'Sabar: Obat Mujarab Saat Diterpa Musibah dan Kesulitan',
    category: 'penyakit_obat_hati',
    subTitle: 'Menahan diri dari keluh kesah, lisan dari mencela, dan anggota tubuh dari maksiat.',
    outlines: ['Keutamaan sabar dalam ketaatan, sabar menjauhi maksiat, dan sabar atas takdir', 'Sabar mendatangkan pahala tanpa batas', 'Kiat melatih kesabaran di era serba instan']
  },
  {
    title: 'Syukur: Kunci Melimpahnya Nikmat dan Keberkahan Hidup',
    category: 'penyakit_obat_hati',
    subTitle: 'Mengakui nikmat dengan hati, memuji Allah dengan lisan, mengamalkan dengan anggota tubuh.',
    outlines: ['Tafsir ayat "Jika kalian bersyukur niscaya Aku tambah nikmat-Ku"', 'Bahaya kufur nikmat yang mendatangkan adzab pedih', 'Kiat praktis menjadi hamba yang pandai bersyukur']
  },
  {
    title: 'Keikhlasan: Ruh Utama dan Syarat Diterimanya Ibadah',
    category: 'penyakit_obat_hati',
    subTitle: 'Membersihkan amal dari segala noda motivasi selain Allah.',
    outlines: ['Syarat mutlak diterimanya amal shalih: Ikhlas dan Ittiba\'', 'Tanda-tanda keikhlasan sejati dalam beramal', 'Kiat menjaga keikhlasan agar tidak luntur di tengah jalan']
  },
  {
    title: 'Khusnudzon Kepada Allah di Balik Segala Ketentuan Takdir',
    category: 'penyakit_obat_hati',
    subTitle: 'Allah bertindak sesuai prasangka hamba-Nya.',
    outlines: ['Urgensi berprasangka baik kepada Allah saat sempit maupun lapang', 'Melihat hikmah indah di balik peristiwa menyedihkan', 'Mewaspadai bahaya putus asa dari rahmat Allah']
  },
  {
    title: 'Iri Hati yang Diperbolehkan (Ghibthah) dalam Syariat',
    category: 'penyakit_obat_hati',
    subTitle: 'Menginginkan keshalehan atau kedermawanan orang lain tanpa membencinya.',
    outlines: ['Dua golongan yang boleh diirikan (ahli Qur\'an dan orang dermawan)', 'Memanfaatkan ghibthah untuk memicu semangat fastabiqul khairat', 'Perbedaan nyata ghibthah dengan hasad']
  },
  {
    title: 'Menjaga Kebersihan Hati dari Rasa Dendam dan Kebencian',
    category: 'penyakit_obat_hati',
    subTitle: 'Berlapang dada memaafkan kesalahan orang lain membawa ketenangan.',
    outlines: ['Bahaya menyimpan dendam bagi kesehatan fisik dan jiwa', 'Anjuran menyambung silaturahmi dengan orang yang memusuhi kita', 'Kisah sahabat nabi penghuni surga karena tidak menyimpan dendam di malam hari']
  },
  {
    title: 'Pentingnya Menghadirkan Rasa Malu (Haya\') dalam Dada',
    category: 'penyakit_obat_hati',
    subTitle: 'Malu berbuat dosa di bawah pengawasan Allah yang Maha Melihat.',
    outlines: ['Malu adalah benteng pertahanan moral terakhir umat', 'Hubungan erat antara sifat malu dengan tingkat keimanan', 'Mengatasi hilangnya sifat malu akibat pengaruh budaya barat']
  },
  {
    title: 'Mengobati Penyakit Was-Was Setan yang Merusak Ibadah',
    category: 'penyakit_obat_hati',
    subTitle: 'Kiat mengatasi keraguan dalam bersuci, shalat, dan aqidah.',
    outlines: ['Sumber penyakit was-was dari bisikan setan Khanzab', 'Kaidah fiqih: "Keyakinan tidak bisa dihilangkan dengan keraguan"', 'Cara syar\'i berlindung dari gangguan was-was dengan ta\'awudz']
  },
  {
    title: 'Tawakal Sebagai Obat Segala Kegelisahan Hidup',
    category: 'penyakit_obat_hati',
    subTitle: 'Menyerahkan hasil akhir perjuangan hidup hanya kepada Allah SWT.',
    outlines: ['Hakikat tawakal yang disertai ikhtiar maksimal', 'Tawakal mendatangkan kecukupan rezeki dan perlindungan', 'Menyingkirkan kecemasan berlebih atas masa depan duniawi']
  },

  // --- BAHAYA SOSIAL & KEMAKSIATAN (15 judul) ---
  {
    title: 'Menjaga Kehormatan Umat: Bahaya dan Ancaman Zina',
    category: 'bahaya_sosial',
    subTitle: 'Zina merusak nasab, moral, mendatangkan wabah penyakit, dan murka Allah.',
    outlines: ['Zina sebagai dosa besar yang mendekatinya saja dilarang', 'Dampak sosial, moral, dan kesehatan akibat perzinaan bebas', 'Langkah preventif: menjaga pandangan, menutup aurat, dan menyegerakan nikah']
  },
  {
    title: 'Meluruskan Fitrah Manusia: Bahaya dan Penyimpangan LGBT',
    category: 'bahaya_sosial',
    subTitle: 'Menjaga kelestarian generasi dari perilaku menyimpang kaum Nabi Luth.',
    outlines: ['LGBT sebagai penyimpangan fitrah dan dosa besar dalam syariat', 'Kisah adzab dahsyat kaum Luth sebagai pelajaran sejarah', 'Upaya proteksi keluarga dan rehabilitasi penderita secara syar\'i']
  },
  {
    title: 'Menjauhi Perjudian Konvensional dan Bahaya Judi Online (Judol)',
    category: 'bahaya_sosial',
    subTitle: 'Judi menghancurkan ekonomi keluarga, memicu kriminalitas, dan melalaikan shalat.',
    outlines: ['Hukum judi (Maysir) dalam Al-Qur\'an disejajarkan dengan miras dan berhala', 'Fenomena judol yang merambah segala lapisan masyarakat dan merusak mental', 'Solusi bertaubat dan memulihkan ekonomi dengan nafkah halal']
  },
  {
    title: 'Bahaya Khamr (Miras) dan Narkoba: Perusak Akal Sehat',
    category: 'bahaya_sosial',
    subTitle: 'Khamr adalah induk dari segala kejahatan dan keburukan.',
    outlines: ['Larangan khamr secara tegas dalam syariat Islam', 'Dosa bagi pembuat, penjual, pembawa, hingga peminum khamr', 'Bahaya narkoba bagi kehancuran masa depan fisik dan mental pemuda']
  },
  {
    title: 'Bahaya Riba Zaman Modern: Jeratan Pinjaman Online (Pinjol) Ilegal',
    category: 'bahaya_sosial',
    subTitle: 'Riba menyatakan perang melawan Allah dan Rasul-Nya serta menyengsarakan hidup.',
    outlines: ['Ancaman dosa riba yang mengerikan dalam hadits nabi', 'Bahaya pinjol riba yang melilit masyarakat hingga memicu bunuh diri', 'Kiat hidup qana\'ah menjauhi hutang dan mengoptimalkan sedekah']
  },
  {
    title: 'Mewaspadai Fitnah Harta Haram dan Etika Mencari Rezeki',
    category: 'bahaya_sosial',
    subTitle: 'Setiap daging yang tumbuh dari harta haram, neraka lebih utama baginya.',
    outlines: ['Kewajiban mencari nafkah halal demi diterimanya doa', 'Bahaya korupsi, suap (Risywah), dan manipulasi keuangan', 'Keberkahan sedikit rezeki yang halal dibanding banyak harta haram']
  },
  {
    title: 'Bahaya Pornografi dan Pornoaksi Bagi Kerusakan Otak Pemuda',
    category: 'bahaya_sosial',
    subTitle: 'Pornografi adalah narkoba lewat mata yang merusak sel saraf berpikir.',
    outlines: ['Pornografi merusak kesucian hati dan menurunkan konsentrasi ibadah', 'Peran orang tua mengawasi konten digital anak-anak', 'Kiat taubat dan terapi lepas dari kecanduan pornografi']
  },
  {
    title: 'Menjaga Pergaulan Bebas Remaja dari Kerusakan Moral',
    category: 'bahaya_sosial',
    subTitle: 'Mewujudkan pergaulan remaja islami yang produktif dan beradab.',
    outlines: ['Bahaya ikhtilath (bercampur baur pria wanita) dan khalwat (berdua-duaan)', 'Pentingnya pengawasan orang tua terhadap jam malam anak', 'Mengarahkan energi muda untuk kegiatan positif di masjid']
  },
  {
    title: 'Bahaya Ghibah, Fitnah, dan Hoaks di Media Sosial',
    category: 'bahaya_sosial',
    subTitle: 'Dosa lisan di era digital menyebar secepat kilat membakar pahala.',
    outlines: ['Ghibah di medsos disamakan dengan memakan bangkai saudara sendiri', 'Kewajiban Tabayyun (klarifikasi) berita sebelum membagikan', 'Menjadikan akun medsos sebagai ladang dakwah bukan dosa jariah']
  },
  {
    title: 'Mewaspadai Bahaya Pembegalan, Tawuran, dan Kriminalitas Jalanan',
    category: 'bahaya_sosial',
    subTitle: 'Menghargai darah dan harta sesama manusia sebagai hal suci.',
    outlines: ['Dosa besar membunuh satu jiwa tanpa hak disamakan membunuh seluruh manusia', 'Bahaya kenakalan remaja yang meresahkan keamanan umum', 'Pentingnya peran lingkungan mendidik pemuda berakhlak mulia']
  },
  {
    title: 'Bahaya Konsumsi Konten Ghibah dan Gosip Infotainment',
    category: 'bahaya_sosial',
    subTitle: 'Mencari-cari kesalahan orang lain merusak kebersihan hati pendengar.',
    outlines: ['Menjauhi majelis yang membicarakan aib orang lain', 'Bahaya menyebarluaskan aib pribadi dan keluarga orang lain', 'Menyibukkan diri dengan kebaikan diri sendiri']
  },
  {
    title: 'Bahaya Gaya Hidup Mewah (Tabdzir) dan Pamer Harta (Flexing)',
    category: 'bahaya_sosial',
    subTitle: 'Orang yang boros adalah saudara-saudara setan.',
    outlines: ['Tafsir ayat larangan tabdzir dan israf', 'Fenomena pamer kemewahan yang merusak kecemburuan sosial', 'Menumbuhkan kesederhanaan dan empati kepada kaum miskin']
  },
  {
    title: 'Bahaya Sumpah Palsu dan Kesaksian Palsu dalam Hukum',
    category: 'bahaya_sosial',
    subTitle: 'Dosa besar yang memutarbalikkan kebenaran demi keuntungan sesaat.',
    outlines: ['Kesaksian palsu disejajarkan dengan syirik dalam sebagian hadits', 'Bahaya memakan hak orang lain dengan sumpah dusta', 'Pentingnya kejujuran di pengadilan dan kehidupan sehari-hari']
  },
  {
    title: 'Bahaya Bullying (Perundungan) Fisik dan Verbal dalam Islam',
    category: 'bahaya_sosial',
    subTitle: 'Melarang keras menghina, mengolok-olok, dan merendahkan martabat muslim.',
    outlines: ['Tafsir Surah Al-Hujurat ayat 11 tentang larangan mengolok-olok', 'Dampak psikologis korban bullying yang berkepanjangan', 'Kewajiban saling menghormati dan melindungi sesama saudara']
  },
  {
    title: 'Mewaspadai Pengaruh Ideologi Liberalisme dan Sekularisme',
    category: 'bahaya_sosial',
    subTitle: 'Upaya menjauhkan umat Islam dari nilai-nilai syariat yang murni.',
    outlines: ['Memahami bahaya sekularisme (memisahkan agama dari kehidupan)', 'Liberalisme yang merusak batasan hukum halal dan haram', 'Memperkokoh aqidah berlandaskan Al-Qur\'an dan Sunnah']
  }
];

// Dynamically generate exactly 200 high-quality unique items by populating baseSermons and appending variants.
// We have 200 items to represent exactly "paling tidak berjumlah 199 judul".
export function getSermons(): SermonMetadata[] {
  const result: SermonMetadata[] = [];
  
  // 1. Add all baseSermons directly
  baseSermons.forEach((s, idx) => {
    result.push({
      id: `khutbah-${idx + 1}`,
      ...s
    });
  });

  // 2. We currently have 14 + 13*10 + 15 + 15 + 15 = 14 + 130 + 45 = 189 items in baseSermons? 
  // Let's count baseSermons:
  // Muharram: 14
  // Shafar: 13
  // Rabi'ul Awwal: 13
  // Rabi'ul Akhir: 13
  // Jumadil Ula: 13
  // Jumadil Akhirah: 13
  // Rajab: 13
  // Sya'ban: 13
  // Ramadhan: 14
  // Syawwal: 13
  // Dzulqo'dah: 13
  // Dzulhijjah: 13
  // Tazkiyatun Nufus: 15
  // Penyakit Hati: 15
  // Bahaya Sosial: 15
  // Total baseSermons = 14 + 13*10 + 15*3 = 14 + 130 + 45 = 189 sermons.
  // We need exactly 11 more sermons to reach exactly 200 items. Let's add them dynamically below to avoid huge file sizes!

  const extraSermons: Omit<SermonMetadata, 'id'>[] = [
    {
      title: 'Bahaya Jeratan Judi Online (Judol) Bagi Masa Depan Pemuda',
      category: 'bahaya_sosial',
      subTitle: 'Menyelamatkan mentalitas generasi penerus dari kecanduan judi maya.',
      outlines: ['Mengapa judi online sangat adiktif dan merusak psikologis', 'Skema penipuan judol yang memiskinkan penggunanya', 'Langkah bertaubat dan beralih ke usaha yang barokah'],
      customContent: {
        paragraphs: [
          "<strong>1. Mengapa Judi Online Sangat Adiktif dan Merusak Psikologis</strong><br/>Sidang Jum'at yang dirahmati Allah SWT,<br/>Di era kemajuan teknologi digital saat ini, setan terus memperbarui caranya dalam menyesatkan anak cucu Adam. Salah satu bahaya terbesar dan paling merusak yang tengah melanda masyarakat kita hari ini, khususnya generasi muda, adalah wabah judi online (judol). Judi online dikemas sedemikian rupa dengan visual yang menarik, aksesibilitas mudah lewat smartphone di genggaman, dan iming-iming kemenangan cepat dengan modal yang sangat minim.<br/>Secara psikologis, judi online dirancang dengan algoritma manipulatif yang memicu pelepasan hormon dopamin secara berlebihan di otak ketika penggunanya mendapatkan sensasi 'nyaris menang'. Hal ini menciptakan kecanduan ekstrem yang merusak kesehatan mental. Seorang yang sudah terjerat judol akan kehilangan akal sehatnya, mengalami kecemasan konstan, emosi yang tidak stabil, mudah depresi, hingga abai terhadap tanggung jawab belajarnya, pekerjaannya, bahkan shalat lima waktunya. Allah SWT berfirman dengan sangat tegas dalam Surah Al-Maidah ayat 90: <em>'Wahai orang-orang yang beriman! Sesungguhnya minuman keras, berjudi, (berkurban untuk) berhala, dan mengundi nasib dengan anak panah, adalah perbuatan keji dan termasuk perbuatan setan. Maka jauhilah (perbuatan-perbuatan) itu agar kamu beruntung.'</em>",
          "<strong>2. Skema Penipuan Judol yang Memiskinkan dan Menjerat Pinjol</strong><br/>Jamaah Jumuah yang dimuliakan Allah,<br/>Banyak pemuda kita yang terperangkap dalam mitos dusta bahwa judi online dapat menjadi jalan pintas merubah nasib dan keluar dari kemiskinan. Padahal, secara matematika dan kenyataan, sistem judi online telah diatur sepenuhnya oleh bandar dan algoritma komputer untuk selalu memenangkan pemilik situs. Kemenangan kecil di awal hanyalah umpan beracun untuk menjebak korban agar terus menyetor uang mereka.<br/>Ketika kekalahan beruntun terjadi, korban judol yang telah kehilangan akal sehat akan mulai menjual aset keluarga, mencuri harta orang tua, berbohong, hingga menempuh jalan haram lainnya seperti terjerat pinjaman online (pinjol) ilegal untuk menutupi rasa penasarannya. Berapa banyak rumah tangga yang hancur berantakan, perceraian yang terjadi, hingga kasus bunuh diri tragis para pemuda akibat dikejar-kejar hutang pinjol demi bermain judol. Ini adalah bukti nyata kebenaran firman Allah dalam Surah Al-Maidah ayat 91: <em>'Dengan berjudi dan meminum khamar itu, setan hanyalah bermaksud menimbulkan permusuhan dan kebencian di antara kamu, dan menghalang-halangi kamu dari mengingat Allah dan melaksanakan shalat, maka tidakkah kamu mau berhenti?'</em>",
          "<strong>3. Langkah Nyata Bertaubat dan Beralih ke Usaha yang Barokah</strong><br/>Bagi siapapun yang saat ini sedang diuji atau sempat mencicipi lingkaran setan judi online, ketahuilah bahwa pintu ampunan Allah SWT senantiasa terbuka lebar bagi hamba-Nya yang bersungguh-sungguh ingin memperbaiki diri. Langkah pertama untuk lepas dari jerat ini adalah melakukan taubat nasuha—menyesali perbuatan maksiat tersebut dengan setulus hati, bertekad bulat untuk tidak mengulanginya kembali, dan segera memutus segala sarana yang menghubungkan ke arah judi (seperti menghapus aplikasi, memblokir akun, dan keluar dari lingkaran pertemanan yang buruk).<br/>Langkah kedua, carilah rezeki lewat jalur yang halal dan penuh berkah meskipun dirintis dari hal yang sangat kecil. Jangan tertipu dengan kecepatan melipatgandakan uang instan, karena harta yang diperoleh secara haram tidak akan pernah mendatangkan ketenangan rohani dan akan dimintai pertanggungjawaban yang sangat berat di akhirat kelak. Rasulullah SAW bersabda: <em>'Setiap tubuh yang tumbuh dari harta yang haram, maka neraka lebih utama baginya.'</em> (HR. Tirmidzi). Marilah kita beralih ke usaha-usaha yang halal dan produktif, mengasah skill yang bermanfaat, serta meramaikan masjid-masjid Allah agar hati kita dipenuhi oleh ketenangan dan rezeki kita senantiasa diberkahi-Nya."
        ]
      }
    },
    {
      title: 'Pentingnya Kehalalan Makanan Bagi Dikabulkannya Doa',
      category: 'penyakit_obat_hati',
      subTitle: 'Makanan haram menjadi penghalang terbesar diijabahnya untaian doa.',
      outlines: ['Kisah musafir yang doanya tertolak karena makanan haram', 'Dampak makanan syubhat dan haram bagi kekhusyukan ibadah', 'Berkomitmen hanya mengonsumsi yang halalan thayyiban']
    },
    {
      title: 'Membangun Etika dan Sopan Santun Berlalu Lintas',
      category: 'bahaya_sosial',
      subTitle: 'Jalan raya adalah fasilitas umum yang harus dihormati hak-hak penggunanya.',
      outlines: ['Menghormati hak pejalan kaki dan pengendara lain', 'Larangan berkendara dengan ugal-ugalan yang membahayakan nyawa', 'Berlalu lintas sebagai cerminan akhlak islami di ruang publik']
    },
    {
      title: 'Urgensi Menjaga Keamanan Nasional dan Ketertiban Umat',
      category: 'dzulqodah',
      subTitle: 'Peran aktif setiap individu muslim dalam menjaga kedamaian bangsa.',
      outlines: ['Pentingnya rasa aman (Al-Amn) sebagai nikmat terbesar', 'Menghindari provokasi, radikalisme, dan perpecahan', 'Sinergi umat dalam mewujudkan Baldatun Toyyibatun Warobbun Ghofur']
    },
    {
      title: 'Keutamaan Menyayangi Anak Yatim dan Menyantuninya',
      category: 'tazkiyatun_nufus',
      subTitle: 'Kedekatan di surga bersama Rasulullah seperti dua jari yang berdampingan.',
      outlines: ['Anjuran mengusap kepala anak yatim untuk melembutkan hati yang keras', 'Pemberian santunan dan pemenuhan kebutuhan pendidikan mereka', 'Ancaman keras bagi orang yang memakan harta anak yatim secara zalim']
    },
    {
      title: 'Menjaga Kebersihan Hati dari Sifat Riya\' dalam Beramal',
      category: 'penyakit_obat_hati',
      subTitle: 'Melatih diri untuk beramal ikhlas semata-mata karena Allah SWT.',
      outlines: ['Definisi syirik kecil dan talbis iblis seputar pujian manusia', 'Bahaya riya\' yang menggugurkan seluruh pahala ibadah', 'Kiat istiqomah beramal baik di kala sepi maupun ramai']
    },
    {
      title: 'Bahaya Sifat Pelit dan Kikir Terhadap Masa Depan Umat',
      category: 'penyakit_obat_hati',
      subTitle: 'Kikir memutus tali persaudaraan dan menghalangi turunnya rahmat.',
      outlines: ['Kisah Tsa\'labah sebagai pelajaran penting tentang bahaya kikir', 'Harta hanyalah titipan yang harus dizakatkan dan disedekahkan', 'Membiasakan diri bersedekah di waktu lapang maupun sempit']
    },
    {
      title: 'Peristiwa Hijrah Nabi SAW: Pelajaran Pengorbanan dan Strategi',
      category: 'muharram',
      subTitle: 'Memahami urgensi perencanaan matang dikombinasikan dengan tawakal total.',
      outlines: ['Peran strategis Ali bin Abi Thalib dan Asma binti Abu Bakar', 'Tawakal tingkat tinggi Rasulullah saat dikepung di Gua Tsur', 'Mengambil hikmah hijrah untuk diaplikasikan dalam kesuksesan hidup']
    },
    {
      title: 'Meneladani Kelembutan Hati Sahabat Abu Bakar Ash-Shiddiq',
      category: 'rabiul_akhir',
      subTitle: 'Keluhuran akhlak sahabat terbaik nabi yang gemar membebaskan budak.',
      outlines: ['Ketulusan iman Abu Bakar dalam membenarkan peristiwa Isra Mi\'raj', 'Kelembutan hati beliau yang mudah menangis saat membaca Al-Qur\'an', 'Semangat mengorbankan seluruh hartanya demi kejayaan Islam']
    },
    {
      title: 'Ketegasan Khalifah Umar bin Khattab dalam Menegakkan Keadilan',
      category: 'rabiul_akhir',
      subTitle: 'Keadilan hukum tanpa pandang bulu demi kemaslahatan seluruh rakyat.',
      outlines: ['Pemisah antara hak dan batil (Al-Faruq)', 'Kisah Umar mengawasi rakyatnya langsung di malam hari', 'Menegakkan integritas kepemimpinan bebas dari korupsi']
    },
    {
      title: 'Sifat Malu dan Kedermawanan Khalifah Utsman bin Affan',
      category: 'rabiul_akhir',
      subTitle: 'Malaikat pun malu kepada sosok hamba yang sangat pemalu ini.',
      outlines: ['Kedermawanan Utsman membeli sumur Raumah untuk umat Islam', 'Sifat malu yang membentengi dari segala macam kemungkaran', 'Inspirasi hidup sukses dan berkontribusi besar untuk agama']
    }
  ];

  extraSermons.forEach((s, idx) => {
    result.push({
      id: `khutbah-${baseSermons.length + idx + 1}`,
      ...s
    });
  });

  return result;
}
