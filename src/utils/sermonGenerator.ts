import { SermonMetadata } from "../data/sermons";

// Arabic Liturgical Snippets (Proper Syafi'i Friday Sermon Elements)
export const ARABIC_MUKADDIMAH_1 = 
  `اَلْحَمْدُ للهِ، اَلْحَمْدُ للهِ الَّذِيْ هَدَانَا لِهٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللهُ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ لاَ نَبِيَّ بَعْدَهُ. اَللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ وَمَنْ تَبِعَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ. أَمَّا بَعْدُ، فَيَا عِبَادَ اللهِ، أُوْصِيْكُمْ وَنَفْسِيْ بِتَقْوَى اللهِ فَقَدْ فَازَ الْمُتَّقُوْنَ. فَقَالَ اللهُ تَعَالَى فِيْ كِتَابِهِ الْكَرِيْمِ: يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَموتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ.`;

export interface MukaddimahVariation {
  id: string;
  name: string;
  source: string;
  arabic: string;
  translation: string;
}

export const MUKADDIMAH_VARIATIONS: MukaddimahVariation[] = [
  {
    id: 'standar',
    name: 'Muqoddimah Standard (Aswaja Utama)',
    source: 'NU Online - Populer & Sesuai Rukun',
    arabic: `اَلْحَمْدُ للهِ، اَلْحَمْدُ للهِ الَّذِيْ هَدَانَا لِهٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللهُ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ لاَ نَبِيَّ بَعْدَهُ. اَللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ وَمَنْ تَبِعَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ. أَمَّا بَعْدُ، فَيَا عِبَادَ اللهِ، أُوْصِيْكُمْ وَنَفْسِيْ بِتَقْوَى اللهِ فَقَدْ فَازَ الْمُتَّقُوْنَ. فَقَالَ اللهُ تَعَالَى فِيْ كِتَابِهِ الْكَرِيْمِ: يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَموتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ.`,
    translation: 'Segala puji bagi Allah, segala puji bagi Allah yang telah menunjuki kami kepada (jalan) ini dan kami tidak akan mendapat petunjuk andai Allah tidak menunjuki kami. Aku bersaksi bahwa tiada Tuhan selain Allah yang Maha Esa tiada sekutu bagi-Nya, dan aku bersaksi bahwa Sayyidina Muhammad adalah hamba dan utusan-Nya yang tiada nabi setelahnya. Ya Allah limpahkanlah shalawat, salam, dan berkah kepada junjungan kami Nabi Muhammad, beserta keluarganya, para sahabatnya, dan orang-orang yang mengikuti mereka dengan baik hingga hari kiamat. Adapun setelah itu, wahai hamba-hamba Allah, aku berwasiat kepada diriku dan kalian semua untuk bertakwa kepada Allah, sungguh beruntunglah orang-orang yang bertakwa. Allah SWT berfirman: Wahai orang-orang yang beriman, bertakwalah kepada Allah dengan sebenar-benar takwa kepada-Nya dan janganlah sekali-kali kamu mati melainkan dalam keadaan beragama Islam.'
  },
  {
    id: 'syukur_iman',
    name: 'Muqoddimah Syukur & Cahaya Iman',
    source: 'NU Online - Kitab Nashaihul Ibad',
    arabic: `اَلْحَمْدُ للهِ الَّذِيْ نَوَّرَ قُلُوْبَ الْمُؤْمِنِيْنَ بِنُوْرِ الْهِدَايَةِ وَالْيَقِيْنِ، وَأَفْهَمَهُمْ أَنَّ التَّقْوَى هِيَ الْعُرْوَةُ الْوُثْقَى وَحَبْلُ الْمَتِيْنِ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ الْمَلِكُ الْحَقُّ الْمُبِيْنُ، وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ الصَّادِقُ الْوَعْدِ الْأَمِيْنُ. اَللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ رَحْمَةً لِلْعَالَمِيْنَ، وَعَلَى آلِهِ الطَّاهِرِيْنَ وَأَصْحَابِهِ الْمُجَاهِدِيْنَ الطَّيِّبِيْنَ وَمَنْ تَبِعَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ. أَمَّا بَعْدُ، فَيَا عِبَادَ اللهِ، أُوْصِيْكُمْ وَنَفْسِيْ بِتَقْوَى اللهِ الْعَلِيِّ الْعَظِيْمِ فَقَدْ فَازَ الْمُتَّقُوْنَ. فَقَالَ اللهُ تَعَالَى: يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا.`,
    translation: 'Segala puji bagi Allah yang menerangi hati orang-orang beriman dengan cahaya hidayah dan keyakinan, serta memberi mereka pemahaman bahwa takwa adalah pegangan yang paling kokoh dan tali yang sangat kuat. Aku bersaksi bahwa tiada Tuhan selain Allah Yang Maha Esa tiada sekutu bagi-Nya, Raja yang Haq lagi Nyata. Dan aku bersaksi bahwa Sayyidina Muhammad adalah hamba dan utusan-Nya yang jujur pada janji-Nya lagi tepercaya. Ya Allah limpahkanlah shalawat, salam, dan berkah kepada junjungan kami Nabi Muhammad sebagai rahmat bagi semesta alam, dan kepada keluarganya yang suci, sahabat-sahabatnya yang berjuang dengan baik, serta pengikutnya dengan baik hingga hari kiamat. Adapun setelah itu, wahai hamba-hamba Allah, aku berwasiat kepada diriku dan kalian semua untuk bertakwa kepada Allah yang Maha Tinggi lagi Maha Agung, sungguh beruntunglah orang-orang yang bertakwa. Allah berfirman: Wahai orang-orang yang beriman, bertakwalah kamu kepada Allah dan ucapkanlah perkataan yang benar.'
  },
  {
    id: 'sholawat_agung',
    name: 'Muqoddimah Sholawat & Cinta Rasul',
    source: 'NU Online - Pondok Pesantren Lirboyo',
    arabic: `اَلْحَمْدُ للهِ الَّذِيْ أَرْسَلَ رَسُوْلَهُ رَحْمَةً لِلْعَالَمِيْنَ وَأُسْوَةً لِلْعَابِدِيْنَ الْمُوَحِّدِيْنَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ وَلِيُّ الصَّالِحِيْنَ، وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ سَيِّدُ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ. اَللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ الْمَبْعُوْثِ رَحْمَةً لِلْعَالَمِيْنَ، وَعَلَى آلِهِ وَأَصْحَابِهِ وَأَتْبَاعِهِ أَجْمَعِيْنَ. أَمَّا بَعْدُ، فَيَا عِبَادَ اللهِ، أُوْصِيْكُمْ وَنَفْسِيْ بِتَقْوَى اللهِ فَقَدْ فَازَ الْمُتَّقُوْنَ كَمَا أَمَرَ رَبُّ الْعَالَمِيْنَ. فَقَالَ اللهُ تَعَالَى فِي الْقُرْآنِ الْكَرِيْمِ: وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ.`,
    translation: 'Segala puji bagi Allah yang mengutus utusan-Nya sebagai rahmat bagi semesta alam dan teladan bagi para hamba yang mengesakan-Nya. Aku bersaksi bahwa tiada Tuhan selain Allah Yang Maha Esa tiada sekutu bagi-Nya, Pelindung orang-orang shalih. Dan aku bersaksi bahwa Sayyidina Muhammad adalah hamba dan utusan-Nya, pemimpin para nabi dan rasul. Ya Allah, limpahkanlah shalawat, salam, dan berkah kepada junjungan kami Nabi Muhammad yang diutus sebagai rahmat bagi semesta alam, dan kepada keluarganya, sahabat-sahabatnya, serta pengikutnya semuanya. Adapun setelah itu, wahai hamba-hamba Allah, aku berwasiat kepada diriku dan kalian semua untuk bertakwa kepada Allah, sungguh beruntunglah orang-orang yang bertakwa sebagaimana yang diperintahkan Tuhan semesta alam. Allah SWT berfirman: Barangsiapa bertakwa kepada Allah niscaya Dia akan membukakan jalan keluar baginya, dan menganugerahkan rezeki kepadanya dari arah yang tidak disangka-sangka.'
  },
  {
    id: 'ilmu_amal',
    name: 'Muqoddimah Keutamaan Ilmu & Amal',
    source: 'NU Online - Kitab Ihya Ulumuddin',
    arabic: `اَلْحَمْدُ للهِ الَّذِيْ فَضَّلَ بَنِيْ آدَمَ بِالْعِلْمِ وَالْعَمَلِ عَلَى جَمِيْعِ الْعَالَمِ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ الْمُتَفَرِّدُ بِالْجَلَالِ وَالْكَرَمِ، وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ صَاحِبُ الْجُوْدِ وَالْحِكَمِ. اَللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ هَادِي الْأُمَمِ، وَعَلَى آلِهِ وَأَصْحَابِهِ مَصَابِيْحِ الظُّلَمِ وَمَنْ تَبِعَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ. أَمَّا بَعْدُ، فَيَا عِبَادَ اللهِ، اِتَّقُوا اللهَ تَعَالَى حَقَّ تُقَاتِهِ وَلَا تَمُوْتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُوْنَ. فَقَالَ اللهُ تَعَالَى فِيْ كِتَابِهِ الْعَزِيْزِ: يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ.`,
    translation: 'Segala puji bagi Allah yang melebihkan anak cucu Adam dengan ilmu dan amal atas seluruh semesta alam. Aku bersaksi bahwa tiada Tuhan selain Allah Yang Maha Esa tiada sekutu bagi-Nya, satu-satunya Pemilik keagungan dan kemuliaan. Dan aku bersaksi bahwa Sayyidina Muhammad adalah hamba dan utusan-Nya yang memiliki kedermawanan dan hikmah. Ya Allah limpahkanlah shalawat, salam, dan berkah kepada junjungan kami Nabi Muhammad penunjuk jalan umat, dan kepada keluarganya, sahabat-sahabatnya pelita kegelapan, dan orang-orang yang mengikuti mereka dengan baik hingga hari kiamat. Adapun setelah itu, wahai hamba-hamba Allah, bertakwalah kepada Allah dengan sebenar-benar takwa kepada-Nya, dan janganlah sekali-kali kamu mati melainkan dalam keadaan beragama Islam. Allah SWT berfirman: Wahai orang-orang yang beriman, bertakwalah kepada Allah dan hendaklah setiap diri memperhatikan apa yang telah diperbuatnya untuk hari esok (akhirat).'
  }
];

export const ARABIC_MUKADDIMAH_2 = 
  `اَلْحَمْدُ للهِ حَمْدًا كَثِيْرًا كَمَا أَمَرَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ إِرْغَامًا لِمَنْ جَحَدَ بِهِ وَكَفَرَ، وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ سَيِّدُ الْخَلَائِقِ وَالْبَشَرِ. اَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَمَنْ تَبِعَهُمْ بِإِحْسَانٍ مَا اتَّصَلَتْ عَيْنٌ بِنَظَرٍ وَأُذُنٌ بِخَبَرٍ. أَمَّا بَعْدُ، فَيَا عِبَادَ اللهِ، اِتَّقُوا اللهَ تَعَالَى وَاعْلَمُوْا أَنَّ اللهَ أَمَرَكُمْ بِأَمْرٍ بَدَأَ فِيْهِ بِنَفْسِهِ، فَقَالَ جَلَّ جَلَالُهُ: إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا.`;

export const ARABIC_DOA_2 = 
  `اَللَّهُمَّ اغْفِرْ لِلْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ، وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ، اَلْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ، إِنَّكَ سَمِيْعٌ قَرِيْبٌ مُجِيْبُ الدَّعَوَاتِ يَا قَاضِيَ الْحَاجَاتِ. اَللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِيْنَ، وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِيْنَ، وَانْصُرْ عِبَادَكَ الْمُوَحِّدِيْنَ. اَللَّهُمَّ ادْفَعْ عَنَّا الْبَلَاءَ وَالْوَبَاءَ وَالزَّلَازِلَ وَالْمِحَنَ وَسُوْءَ الْفِتْنَةِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، عَنْ بَلَدِنَا هٰذَا خَاصَّةً وَعَنْ سَائِرِ بِلْدَانِ الْمُسْلِمِيْنَ عَامَّةً يَا رَبَّ الْعَالَمِيْنَ. رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ. عِبَادَ اللهِ، إِنَّ اللهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيْتَاءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَالْبَغْيِ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُوْنَ. فَاذْكُرُوا اللهَ الْعَظِيْمَ يَذْكُرْكُمْ، وَاشْكُرُوْهُ عَلَى نِعَمِهِ يَزِدْكُمْ، وَلَذِكْرُ اللهِ أَكْبَرُ!`;

export const ARABIC_TRANSISI = 
  `بَارَكَ اللهُ لِيْ وَلَكُمْ فِي الْقُرْآنِ الْعَظِيْمِ، وَنَفَعَنِيْ وَإِيَّاكُمْ بِمَا فِيْهِ مِنَ الْآيَاتِ وَالذِّكْرِ الْحَكِيْمِ. أَقُوْلُ قَوْلِيْ هٰذَا وَأَسْتَغْفِرُ اللهَ الْعَظِيْمَ لِيْ وَلَكُمْ وَلِسَائِرِ الْمُسْلِمِيْنَ، فَاسْتَغْفِرُوْهُ إِنَّهُ هُوَ الْغَفُوْرُ الرَّحِيْمُ.`;

// Language metadata structure
export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'id', name: 'Indonesia', nativeName: 'Bahasa Indonesia' },
  { code: 'jv', name: 'Jawa', nativeName: 'Basa Jawa' },
  { code: 'su', name: 'Sunda', nativeName: 'Basa Sunda' },
  { code: 'ms', name: 'Melayu', nativeName: 'Bahasa Melayu' },
  { code: 'bug', name: 'Bugis', nativeName: 'Basa Ugi' },
  { code: 'bjn', name: 'Banjar', nativeName: 'Bahasa Banjar' },
  { code: 'ar', name: 'Full Arab', nativeName: 'العربية' },
  { code: 'en', name: 'Inggris', nativeName: 'English' }
];

function translatePoint(point: string, lang: string): string {
  if (lang === 'en') {
    return point
      .replace(/Awal Tahun Baru Hijriyah/gi, "the beginning of the New Hijri Year")
      .replace(/Makna hakiki/gi, "The true meaning of")
      .replace(/Urgensi/gi, "The urgency of")
      .replace(/Bahaya/gi, "The danger of")
      .replace(/Pentingnya/gi, "The importance of")
      .replace(/Kewajiban/gi, "The obligation of")
      .replace(/Kiat/gi, "Tips for")
      .replace(/Meluruskan/gi, "Rectifying")
      .replace(/Aqidah/gi, "Creed (Aqeedah)")
      .replace(/Tawakal/gi, "Trust in Allah (Tawakkul)")
      .replace(/Ketenangan Jiwa/gi, "Tranquility of the Soul")
      .replace(/Judi Online/gi, "Online Gambling")
      .replace(/Masa Depan Pemuda/gi, "The Future of the Youth")
      .replace(/Bulan Shafar/gi, "the Month of Shafar")
      .replace(/Sunnah Rasulullah/gi, "the Sunnah of Prophet Muhammad")
      .replace(/Kelahiran/gi, "the Birth of")
      .replace(/Menepis Keyakinan Sial/gi, "Dispelling Myths of Bad Luck")
      .replace(/Memurnikan/gi, "Purifying")
      .replace(/Mengapa/gi, "Why")
      .replace(/sangat adiktif/gi, "is highly addictive")
      .replace(/dan merusak/gi, "and damaging")
      .replace(/Skema penipuan/gi, "Fraudulent schemes of")
      .replace(/Langkah bertaubat/gi, "Steps to repent")
      .replace(/bertaubat/gi, "repenting")
      .replace(/ke usaha yang barokah/gi, "to blessed endeavors");
  }
  if (lang === 'ar') {
    return point
      .replace(/Awal Tahun Baru Hijriyah/gi, "بداية العام الهجري الجديد")
      .replace(/Makna hakiki/gi, "المعنى الحقيقي لـ")
      .replace(/Urgensi/gi, "أهمية")
      .replace(/Bahaya/gi, "خطورة")
      .replace(/Pentingnya/gi, "أهمية")
      .replace(/Kewajiban/gi, "وجوب")
      .replace(/Kiat/gi, "طرق")
      .replace(/Meluruskan/gi, "تصحيح")
      .replace(/Aqidah/gi, "العقيدة")
      .replace(/Tawakal/gi, "التوكل على الله")
      .replace(/Ketenangan Jiwa/gi, "طمأنينة النفس")
      .replace(/Judi Online \(Judol\)/gi, "المقامرة الإلكترونية")
      .replace(/Judi Online/gi, "المقامرة الإلكترونية")
      .replace(/Masa Depan Pemuda/gi, "مستقبل الشباب")
      .replace(/Bulan Shafar/gi, "شهر صفر")
      .replace(/Sunnah Rasulullah/gi, "سنة رسول الله صلى الله عليه وسلم")
      .replace(/Kelahiran/gi, "مولد")
      .replace(/Menepis Keyakinan Sial/gi, "دفع التشاؤم والاعتقادات الباطلة")
      .replace(/Memurnikan/gi, "تصفية")
      .replace(/Mengapa/gi, "لماذا")
      .replace(/sangat adiktif/gi, "يسبب الإدمان الشديد")
      .replace(/dan merusak/gi, "والدمار")
      .replace(/Skema penipuan/gi, "مخططات الاحتيال")
      .replace(/Langkah bertaubat/gi, "خطوات التوبة")
      .replace(/bertaubat/gi, "التوبة")
      .replace(/ke usaha yang barokah/gi, "إلى الكسب الطيب المبارك")
      .replace(/Pilar Pertama/gi, "الركيزة الأولى")
      .replace(/Pilar Kedua/gi, "الركيزة الثانية")
      .replace(/Pilar Ketiga/gi, "الركيزة الثالثة")
      .replace(/Memahami konsep/gi, "فهم مفهوم")
      .replace(/Mengamalkan nilai/gi, "العمل بقيم")
      .replace(/Istiqomah dalam/gi, "الاستقامة في")
      .replace(/Menjaga/gi, "حفظ")
      .replace(/Mendidik/gi, "تربية")
      .replace(/Keutamaan/gi, "فضيلة")
      .replace(/Membangun/gi, "بناء")
      .replace(/Mencegah/gi, "منع")
      .replace(/Melestarikan/gi, "إحياء")
      .replace(/Meneladani/gi, "الاقتداء بـ")
      .replace(/Kunci/gi, "مفتاح")
      .replace(/Tantangan/gi, "تحديات")
      .replace(/Solusi/gi, "الحل")
      .replace(/Persiapan/gi, "الاستعداد")
      .replace(/Evaluasi/gi, "المحاسبة")
      .replace(/Zikir/gi, "الذكر")
      .replace(/Sabar/gi, "الصبر")
      .replace(/Syukur/gi, "الشكر")
      .replace(/Ikhlas/gi, "الإخلاص")
      .replace(/Taqwa/gi, "التقوى")
      .replace(/Keluarga/gi, "الأسرة")
      .replace(/Masyarakat/gi, "المجتمع")
      .replace(/Umat/gi, "الأمة")
      .replace(/Akhir Zaman/gi, "آخر الزمان")
      .replace(/Harta Haram/gi, "المال الحرام")
      .replace(/Riba/gi, "الربا");
  }
  return point;
}

export function translateTitle(title: string, lang: string): string {
  if (lang === 'en') {
    return title
      .replace(/Meluruskan Aqidah: Menepis Keyakinan Sial di Bulan Shafar/gi, "Rectifying the Creed: Dispelling Myths of Bad Luck in the Month of Shafar")
      .replace(/Maulid Nabi: Momentum Mengidupkan Sunnah Rasulullah SAW/gi, "Maulid of the Prophet: Momentum to Revive the Sunnah of Rasulullah SAW")
      .replace(/Bahaya Jeratan Judi Online \(Judol\) Bagi Masa Depan Pemuda/gi, "The Danger of Online Gambling Snares for the Future of Youth")
      .replace(/Muhasabah Agung di Awal Tahun Baru Hijriyah/gi, "Grand Self-Reflection at the Beginning of the New Hijri Year")
      .replace(/Spirit Hijrah: Berubah dari Kegelapan Menuju Cahaya Islam/gi, "Spirit of Hijrah: Changing from Darkness into the Light of Islam")
      .replace(/Tawakal yang Benar Sebagai Kunci Ketenangan Jiwa/gi, "True Tawakkul as the Key to Tranquility of the Soul");
  }
  if (lang === 'ar') {
    return title
      .replace(/Meluruskan Aqidah: Menepis Keyakinan Sial di Bulan Shafar/gi, "تصحيح العقيدة: دفع التشاؤم والاعتقادات الباطلة في شهر صفر")
      .replace(/Maulid Nabi: Momentum Mengidupkan Sunnah Rasulullah SAW/gi, "المولد النبوي الشريف: فرصة لإحياء سنة رسول الله صلى الله عليه وسلم")
      .replace(/Bahaya Jeratan Judi Online \(Judol\) Bagi Masa Depan Pemuda/gi, "خطورة المقامرة الإلكترونية على مستقبل الشباب والجيل الجديد")
      .replace(/Muhasabah Agung di Awal Tahun Baru Hijriyah/gi, "المحاسبة الكبرى في مستهل العام الهجري الجديد")
      .replace(/Spirit Hijrah: Berubah dari Kegelapan Menuju Cahaya Islam/gi, "روح الهجرة: التغيير من الظلمات إلى نور الإسلام")
      .replace(/Tawakal yang Benar Sebagai Kunci Ketenangan Jiwa/gi, "التوكل الصحيح مفتاح طمأنينة النفس");
  }
  return title;
}

interface SermonResource {
  verse: {
    text: string;
    translation: string;
    surah: string;
  };
  hadith: {
    text: string;
    translation: string;
    narrator: string;
  };
  maqolah: {
    text: string;
    author: string;
  };
}

const CATEGORY_RESOURCES: Record<string, SermonResource> = {
  muharram: {
    verse: {
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ",
      translation: "Hai orang-orang yang beriman, bertakwalah kepada Allah dan hendaklah setiap diri memperhatikan apa yang telah diperbuatnya untuk hari esok (akhirat); dan bertakwalah kepada Allah, sesungguhnya Allah Maha Mengetahui apa yang kamu kerjakan.",
      surah: "Surah Al-Hasyr Ayat 18"
    },
    hadith: {
      text: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ",
      translation: "Seorang Muslim adalah orang yang membuat Muslim lainnya selamat dari lisan dan tangannya, sedangkan orang yang berhijrah (Muhajir) adalah orang yang meninggalkan apa saja yang dilarang oleh Allah SWT.",
      narrator: "Hadits Riwayat Imam Al-Bukhari"
    },
    maqolah: {
      text: "Hijrah yang hakiki adalah hijrahnya hati dari mencintai selain Allah kepada mencintai-Nya, dari menyembah makhluk menuju menyembah Al-Khaliq, dan dari kemaksiatan menuju ketaatan.",
      author: "Ibnu Qayyim Al-Jauziyyah rahimahullah"
    }
  },
  shafar: {
    verse: {
      text: "وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ وَإِنْ يُرِدْكَ بِخَيْرٍ فَلَا رَادَّ لِفَضْلِهِ",
      translation: "Jika Allah menimpakan sesuatu kemudharatan kepadamu, maka tidak ada yang menghilangkannya melainkan Dia sendiri. Dan jika Allah menghendaki kebaikan bagi kamu, maka tidak ada yang dapat menolak karunia-Nya.",
      surah: "Surah Yunus Ayat 107"
    },
    hadith: {
      text: "لَا عَدْوَى وَلَا طِيَرَةَ وَلَا هَامَةَ وَلَا صَفَرَ وَفِرَّ مِنَ الْمَجْذُومِ كَمَا تَفِرُّ مِنَ الأَسَدِ",
      translation: "Tidak ada penularan penyakit (tanpa izin Allah), tidak ada ramalan sial (thiyarah), tidak ada kesialan karena burung hantu, dan tidak ada kesialan pada bulan Shafar, dan larilah dari penyakit kusta sebagaimana engkau lari dari singa.",
      narrator: "Hadits Riwayat Imam Al-Bukhari"
    },
    maqolah: {
      text: "Bulan Shafar adalah salah satu bulan dari bulan-bulan Allah, ia tidak memiliki kekuasaan atas kebaikan maupun keburukan. Anggapan sial padanya adalah sisa-sisa keyakinan jahiliyah yang merusak tauhid.",
      author: "Ibnu Rajab Al-Hambali rahimahullah"
    }
  },
  rabiul_awwal: {
    verse: {
      text: "قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهَ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَاللَّهُ غَفُورٌ رَحِيمٌ",
      translation: "Katakanlah: 'Jika kamu (benar-benar) mencintai Allah, ikutilah aku, niscaya Allah mengasihi dan mengampuni dosa-dosamu'. Allah Maha Pengampun lagi Maha Penyayang.",
      surah: "Surah Ali 'Imran Ayat 31"
    },
    hadith: {
      text: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ",
      translation: "Tidak sempurna iman salah seorang di antara kalian sampai aku (Rasulullah) lebih ia cintai daripada orang tuanya, anaknya, dan seluruh manusia.",
      narrator: "Hadits Riwayat Imam Al-Bukhari dan Muslim"
    },
    maqolah: {
      text: "Sunnah Nabi itu laksana Bahtera Nabi Nuh. Barangsiapa yang menaikinya maka ia akan selamat, dan barangsiapa yang tertinggal darinya maka ia akan tenggelam dalam lautan kesesatan.",
      author: "Imam Malik bin Anas rahimahullah"
    }
  },
  rabiul_akhir: {
    verse: {
      text: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ",
      translation: "Dan berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah kamu bercerai berai, dan ingatlah akan nikmat Allah kepadamu.",
      surah: "Surah Ali 'Imran Ayat 103"
    },
    hadith: {
      text: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
      translation: "Seorang mukmin dengan mukmin lainnya bagaikan satu bangunan yang saling menguatkan satu sama lain.",
      narrator: "Hadits Riwayat Imam Al-Bukhari"
    },
    maqolah: {
      text: "Persaudaraan yang tulus di jalan Allah adalah nikmat terbesar setelah nikmat iman. Ia menghangatkan batin kala sepi dan menguatkan langkah kala lemah menghadapi badai kehidupan.",
      author: "Imam Syafi'i rahimahullah"
    }
  },
  jumadil_ula: {
    verse: {
      text: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً",
      translation: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.",
      surah: "Surah Ar-Rum Ayat 21"
    },
    hadith: {
      text: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي",
      translation: "Sebaik-baik kalian adalah yang paling baik perilakunya kepada keluarganya, dan aku adalah orang yang paling baik perilakunya kepada keluargaku.",
      narrator: "Hadits Riwayat Imam At-Tirmidzi"
    },
    maqolah: {
      text: "Rumah tangga yang berkah bukanlah rumah yang sepi dari masalah, melainkan rumah yang jika terjadi badai, suami istri meredakannya dengan bimbingan Al-Qur'an dan Sunnah.",
      author: "Imam Al-Ghazali rahimahullah"
    }
  },
  jumadil_akhirah: {
    verse: {
      text: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ",
      translation: "Tiap-tiap yang bernyawa akan merasakan mati. Dan sesungguhnya pada hari kiamat sajalah disempurnakan pahalamu.",
      surah: "Surah Ali 'Imran Ayat 185"
    },
    hadith: {
      text: "أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ: الْمَوْتَ",
      translation: "Perbanyaklah mengingat pemutus segala kelezatan duniawi, yaitu kematian.",
      narrator: "Hadits Riwayat Imam At-Tirmidzi"
    },
    maqolah: {
      text: "Siapa yang senantiasa membiasakan hatinya untuk mengingat kematian, maka Allah SWT akan memuliakannya dengan tiga hal: bersegera bertaubat, qana'ah dalam hati, dan rajin beribadah.",
      author: "Syaikh Ad-Daqqaq rahimahullah"
    }
  },
  rajab: {
    verse: {
      text: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ",
      translation: "Maha Suci Allah, yang telah memperjalankan hamba-Nya pada suatu malam dari Al Masjidil Haram ke Al Masjidil Aqsha yang telah Kami berkahi sekelilingnya.",
      surah: "Surah Al-Isra Ayat 1"
    },
    hadith: {
      text: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ",
      translation: "Sesungguhnya amal seorang hamba yang pertama kali akan dihisab pada hari kiamat kelak adalah shalatnya.",
      narrator: "Hadits Riwayat Imam At-Tirmidzi"
    },
    maqolah: {
      text: "Bulan Rajab adalah saat yang tepat untuk menanam benih amal, bulan Sya'ban adalah waktu menyiramnya, dan bulan Ramadhan adalah saat memanen buah manisnya.",
      author: "Abu Bakar Al-Balkhi rahimahullah"
    }
  },
  syaban: {
    verse: {
      text: "وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ",
      translation: "Dan untuk yang demikian itu (pahala dan keridhaan Allah) hendaknya orang-orang berlomba-lomba.",
      surah: "Surah Al-Muthaffifin Ayat 26"
    },
    hadith: {
      text: "ذَلِكَ شَهْرٌ يَغْفُلُ النَّاسُ عَنْهُ بَيْنَ رَجَبٍ وَرَمَضَانَ وَهُوَ شَهْرٌ تُرْفَعُ فِيهِ الْأَعْمَالُ إِلَى رَبِّ الْعَالَمِينَ",
      translation: "Bulan Sya'ban adalah bulan yang sering dilalaikan manusia antara Rajab dan Ramadhan. Padahal ia adalah bulan diangkatnya amal perbuatan kepada Tuhan semesta alam.",
      narrator: "Hadits Riwayat Imam An-Nasa'i"
    },
    maqolah: {
      text: "Apabila engkau tidak melatih jiwamu untuk ruku' dan sujud di bulan Sya'ban, niscaya jiwamu akan terasa kaku dan berat untuk menegakkan qiyamul lail di malam-malam Ramadhan.",
      author: "Ibnul Qayyim Al-Jauziyyah rahimahullah"
    }
  },
  ramadhan: {
    verse: {
      text: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ",
      translation: "Bulan Ramadhan, bulan yang di dalamnya diturunkan (permulaan) Al-Qur'an sebagai petunjuk bagi manusia dan penjelasan-penjelasan mengenai petunjuk itu dan pembeda (antara yang hak dan yang bathil).",
      surah: "Surah Al-Baqarah Ayat 185"
    },
    hadith: {
      text: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
      translation: "Barangsiapa yang berpuasa di bulan Ramadhan karena dilandasi iman dan mengharap ridha Allah, maka akan diampuni dosa-dosanya yang telah lalu.",
      narrator: "Hadits Riwayat Imam Al-Bukhari"
    },
    maqolah: {
      text: "Puasa bukanlah sekadar menahan lapar dan dahaga dari fajar hingga tenggelam matahari, melainkan puasa sejati adalah menahan seluruh anggota badan dari perbuatan dosa.",
      author: "Imam Al-Ghazali rahimahullah"
    }
  },
  syawwal: {
    verse: {
      text: "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِمَّا يَجْمَعُونَ",
      translation: "Katakanlah: 'Dengan kurnia Allah dan rahmat-Nya, hendaklah dengan itu mereka bergembira. Kurnia Allah dan rahmat-Nya itu adalah lebih baik dari apa yang mereka kumpulkan'.",
      surah: "Surah Yunus Ayat 58"
    },
    hadith: {
      text: "مَنْ صَامَ رَمَضَانَ ثُمَّ أَتْبَعَهُ سِتًّا مِنْ شَوَّالٍ كَانَ كَصِيَامِ الدَّهِرِ",
      translation: "Barangsiapa yang berpuasa Ramadhan kemudian diiringi dengan puasa enam hari di bulan Syawwal, maka seolah-olah ia berpuasa sepanjang tahun.",
      narrator: "Hadits Riwayat Imam Muslim"
    },
    maqolah: {
      text: "Seburuk-buruk manusia adalah golongan 'Ramadhaniyyun' yang rajin beribadah hanya di bulan Ramadhan lalu kembali berpaling di bulan Syawwal. Jadilah hamba yang 'Rabbaniyyun' yang setia mengabdi sepanjang hayat.",
      author: "Bisyr Al-Hafi rahimahullah"
    }
  },
  dzulqodah: {
    verse: {
      text: "إِنَّ عِدَّةَ الشُّهُورِ عِنْدَ اللَّهِ اثْنَا عَشَرَ شَهْرًا فِي كِتَابِ اللَّهِ يَوْمَ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ مِنْهَا أَرْبَعَةٌ حُرُمٌ",
      translation: "Sesungguhnya bilangan bulan pada sisi Allah adalah dua belas bulan, dalam ketetapan Allah di waktu Dia menciptakan langit dan bumi, di antaranya empat bulan haram (mulia).",
      surah: "Surah At-Tawbah Ayat 36"
    },
    hadith: {
      text: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      translation: "Seorang Muslim sejati adalah orang yang membuat Muslim lainnya merasa aman dan selamat dari bahaya gangguan lidah serta tangannya.",
      narrator: "Hadits Riwayat Imam Al-Bukhari"
    },
    maqolah: {
      text: "Melakukan kemaksiatan dan kezaliman di bulan-bulan haram (termasuk Dzulqa'dah) dosanya dilipatgandakan oleh Allah SWT, sebagaimana amal ketaatan di dalamnya juga dilipatgandakan pahalanya.",
      author: "Imam Qatadah rahimahullah"
    }
  },
  dzulhijjah: {
    verse: {
      text: "لَنْ يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَٰكِنْ يَنَالُهُ التَّقْوَىٰ مِنْكُمْ",
      translation: "Daging-daging unta dan darahnya itu sekali-kali tidak dapat mencapai (keridhaan) Allah, tetapi ketakwaan dari kamulah yang dapat mencapainya.",
      surah: "Surah Al-Hajj Ayat 37"
    },
    hadith: {
      text: "مَا مِنْ أَيَّامٍ الْعَمَلُ الصَّالِحُ فِيهِنَّ أَحَبُّ إِلَى اللَّهِ مِنْ هَذِهِ الْأَيَّامِ الْعَشْرِ",
      translation: "Tidak ada hari-hari di mana amal shalih di dalamnya lebih dicintai oleh Allah daripada sepuluh hari pertama di bulan Dzulhijjah ini.",
      narrator: "Hadits Riwayat Imam Al-Bukhari"
    },
    maqolah: {
      text: "Induk dari segala ketaatan dan ibadah berkumpul di dalam sepuluh hari pertama Dzulhijjah, yaitu shalat, puasa, sedekah, haji, dan penyembelihan kurban. Sungguh agung rahmat-Nya di bulan ini.",
      author: "Al-Hafizh Ibnu Hajar Al-Asqalani rahimahullah"
    }
  },
  tazkiyatun_nufus: {
    verse: {
      text: "قَدْ أَفْلَحَ مَنْ زَكَّاهَا * وَقَدْ خَابَ مَنْ دَسَّاهَا",
      translation: "Sesungguhnya beruntunglah orang yang mensucikan jiwa itu, dan sesungguhnya merugilah orang yang mengotorinya.",
      surah: "Surah Asy-Syams Ayat 9-10"
    },
    hadith: {
      text: "أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ",
      translation: "Ingatlah, sesungguhnya di dalam tubuh manusia terdapat segumpal daging. Jika ia baik, maka baiklah seluruh tubuhnya. Jika ia rusak, maka rusaklah seluruh tubuhnya. Ketahuilah ia adalah hati.",
      narrator: "Hadits Riwayat Imam Al-Bukhari dan Muslim"
    },
    maqolah: {
      text: "Hati manusia itu ibarat cermin yang mengkilap. Setiap perbuatan maksiat laksana setitik debu hitam yang mengotorinya. Dan taubat nasuha serta dzikrullah adalah pengkilap utama cermin batin tersebut.",
      author: "Imam Al-Ghazali rahimahullah"
    }
  },
  penyakit_obat_hati: {
    verse: {
      text: "يَوْمَ لَا يَنْفَعُ مَالٌ وَلَا بَنُونَ * إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ",
      translation: "(Yaitu) di hari tiada berguna harta dan anak-anak, kecuali orang-orang yang menghadap Allah dengan hati yang bersih.",
      surah: "Surah Asy-Syu'ara' Ayat 88-89"
    },
    hadith: {
      text: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
      translation: "Sesungguhnya Allah tidak melihat kepada rupa kalian dan harta-harta kalian, melainkan Dia melihat kepada keikhlasan hati-hati kalian dan amal-amal perbuatan kalian.",
      narrator: "Hadits Riwayat Imam Muslim"
    },
    maqolah: {
      text: "Meninggalkan amalan saleh karena takut dilihat manusia adalah riya' (pamer), sementara beramal saleh sengaja agar dipuji manusia adalah syirik. Dan ikhlas adalah ketika Allah menyelamatkanmu dari keduanya.",
      author: "Fudhail bin 'Iyadh rahimahullah"
    }
  },
  bahaya_sosial: {
    verse: {
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشِّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ",
      translation: "Hai orang-orang yang beriman, sesungguhnya (meminum) khamar, berjudi, (berkorban untuk) berhala, mengundi nasib dengan panah, adalah termasuk perbuatan syaitan. Maka jauhilah perbuatan-perbuatan itu agar kamu mendapat keberuntungan.",
      surah: "Surah Al-Ma'idah Ayat 90"
    },
    hadith: {
      text: "كُلُّ لَحْمٍ نَبَتَ مِنْ سُحْتٍ فَالنَّارُ أَوْلَىٰ بِهِ",
      translation: "Setiap daging yang tumbuh di dalam tubuh dari harta hasil usaha yang haram (seperti judi online, riba, atau pinjol ilegal), maka api neraka lebih layak menyentuhnya.",
      narrator: "Hadits Riwayat Imam At-Tirmidzi"
    },
    maqolah: {
      text: "Mencari rezeki dengan jalan maksiat, judi, atau riba laksana orang yang berusaha memadamkan api yang berkobar menggunakan minyak tanah. Bukannya padam, justru kehancuran hidupnya akan semakin dahsyat.",
      author: "Sufyan ats-Tsauri rahimahullah"
    }
  }
};

const DEFAULT_RESOURCE: SermonResource = {
  verse: {
    text: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ ۗ إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ",
    translation: "Katakanlah: 'Adakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?' Sesungguhnya orang yang berakallah yang dapat menerima pelajaran.",
    surah: "Surah Az-Zumar Ayat 9"
  },
  hadith: {
    text: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    translation: "Sesungguhnya Allah tidak melihat kepada rupa kalian dan harta-harta kalian, melainkan Dia melihat kepada hati-hati kalian dan amal-amal perbuatan kalian.",
    narrator: "Hadits Riwayat Imam Muslim"
  },
  maqolah: {
    text: "Ilmu tanpa amal laksana kegilaan, sementara amal tanpa ilmu adalah suatu kesia-siaan.",
    author: "Hujjatul Islam Imam Al-Ghazali rahimahullah"
  }
};

export function generateOfflineSermon(sermon: SermonMetadata, lang: string, variationId: string = 'standar'): string {
  const outlinesList = sermon.outlines || [];
  const selectedVar = MUKADDIMAH_VARIATIONS.find(v => v.id === variationId) || MUKADDIMAH_VARIATIONS[0];
  const firstKhutbahArabicIntro = selectedVar.arabic;

  let welcomeText = "";
  let firstKhutbahTitle = "KHUTBAH PERTAMA (الخطبة الأولى)";
  let secondKhutbahTitle = "KHUTBAH KEDUA (الخطبة الثانية)";
  let rukunBadgeText = "RUKUN KHUTBAH TERPENUHI: 1. Hamdalah | 2. Shalawat | 3. Wasiat Taqwa | 4. Membaca Ayat Al-Qur'an";
  let rukunBadgeTextSecond = "RUKUN KHUTBAH TERPENUHI: 1. Hamdalah | 2. Shalawat | 3. Wasiat Taqwa";
  let rukunBadgeTextPrayer = "RUKUN KHUTBAH TERPENUHI: 5. Doa untuk Kaum Muslimin";
  let transisiBadgeText = "Penutup Khutbah Pertama & Doa Transisi (Istighfar)";

  let praiseIntro = "";
  let shalawatIntro = "";
  let taqwaIntro = "";
  let themeTransition = "";
  let closingIntro = "";

  if (lang === 'id') {
    welcomeText = "Sidang Jum'at yang dirahmati Allah SWT,";
    praiseIntro = "Pertama-tama, marilah kita senantiasa memanjatkan puja, puji, dan syukur kehadirat Allah SWT, Dzat yang Maha Pengasih lagi Maha Penyayang, yang tiada henti-hentinya melimpahkan nikmat iman, Islam, serta nikmat kesehatan dan kelonggaran waktu yang luar biasa kepada kita semua. Hanya dengan hidayah, taufik, serta rahmat-Nya lah kita dapat meringankan langkah kaki, mengalahkan rasa malas dan kesibukan duniawi, demi memenuhi panggilan suci ibadah shalat Jum'at berjamaah di masjid yang mulia ini.";
    shalawatIntro = "Shalawat beriringkan salam yang paling agung dan mulia semoga senantiasa tercurahkan kepada uswah hasanah kita, teladan terbaik sepanjang zaman, penutup para nabi dan rasul, Nabi Agung Muhammad SAW, beserta seluruh keluarga beliau, para sahabatnya yang setia, serta seluruh pengikutnya yang senantiasa istiqomah menghidupkan dan memperjuangkan sunnah-sunnah beliau yang suci hingga hari kiamat kelak.";
    taqwaIntro = "Selaku khatib, berdiri di atas mimbar yang penuh berkah ini, saya berwasiat khusus kepada diri saya pribadi and umumnya kepada seluruh jamaah sekalian, marilah kita senantiasa meningkatkan kualitas ketaqwaan kita kepada Allah SWT secara sungguh-sungguh dan berkesinambungan. Ketaqwaan dalam arti menjalankan seluruh perintah-perintah Allah dengan penuh keikhlasan, serta menjauhi segala bentuk larangan-Nya dengan keteguhan hati.";
    themeTransition = `Sidang Jum'at yang dirahmati Allah, mari kita buka hati dan lapangkan pikiran kita sejenak untuk merenungi untaian nasihat berharga kehidupan berikut ini:`;
    closingIntro = "Marilah kita jadikan momentum berharga ibadah shalat Jum'at ini untuk memohon petunjuk, kekuatan, dan keteguhan iman kepada Allah SWT agar kita, anak-anak kita, istri kita, dan seluruh anggota keluarga besar kita senantiasa dibimbing di atas jalan ketaatan yang lurus dan diselamatkan dari badai fitnah akhir zaman. Semoga Allah SWT berkenan menerima seluruh amal ibadah kita yang sedikit ini.";
  } 
  else if (lang === 'jv') {
    welcomeText = "Para jamaah Shalat Jum'at ingkang dipun mulyaken dening Allah SWT,";
    firstKhutbahTitle = "KHUTBAH KAPISAN (الخطبة الأولى)";
    secondKhutbahTitle = "KHUTBAH KAPING KALIH (الخطبة الثانية)";
    rukunBadgeText = "RUKUN KHUTBAH JAWAB: 1. Hamdalah | 2. Shalawat | 3. Wasiat Taqwa";
    rukunBadgeTextSecond = "RUKUN KHUTBAH JAWAB: 1. Hamdalah | 2. Shalawat | 3. Wasiat Taqwa";
    transisiBadgeText = "Panutup Khutbah Kapisan & Donga Transisi (Istighfar)";
    
    praiseIntro = "Sepindah, mangga kita sesarengan tansah ngaturaken puja, puji, lan syukur dhumateng ngarsanipun Allah SWT, Dzat ingkang Maha Welas asih lan Maha Penyayang, ingkang boten kendhat-kendhat paring mapinten-pinten kanikmatan dhumateng kita sedaya. Kanikmatan iman, Islam, sarta kasarasan lan kalodhangan wekdal saingga kita saged nglonggaraken langkah, nilaraken kesibukan ndonya, kagem nindakaken ibadah shalat Jum'at kanthi jamaah wonten ing masjid ingkang mulya punika.";
    shalawatIntro = "Shalawat dalah salam mugi tansah katuraken dhumateng junjungan kita, nabi panutan, panutuping para nabi lan rasul, inggih punika Nabi Agung Muhammad SAW, dalah kulawarga piyambakipun, para sahabatipun ingkang setya, sarta sedaya pandherekipun ingkang tansah istiqomah ngurip-urip sunnah sucinipun ngantos dinten kiamat mangke.";
    taqwaIntro = "Kula minangka khatib ingkang jumeneng wonten ing mimbar mulya punika, paring wasiat mligi dhumateng dhiri pribadi kula piyambak sarta dhumateng para jamaah sedaya, mangga kita sami ningkataken kualitas ketaqwaan dhumateng Allah SWT kanthi saestu lan terus-terusan. Tegesipun takwa inggih punika nindakaken sedaya dhawuh-dhawuh-Ipun kanthi ikhlas, lan nebihi sedaya pepacu-Ipun kanthi manah ingkang bakoh.";
    themeTransition = `Para jamaah ingkang dipun mulyaken Allah, wonten ing kalodhangan khutbah ingkang kebak barokah punika, mangga kita larasaken manah lan pikiran kita kagem nggalih piwulang mulya punika:`;
    closingIntro = "Mangga kita dadosaken momentum ibadah shalat Jum'at punika kagem nyenyuwun pitedah, kakuwatan, lan keteguhan iman dhumateng Allah SWT supados kita, putra-putri kita, semah kita, lan sedaya kulawarga tansah dipun bimbing wonten margi ketaatan ingkang lurus saking fitnah jaman akhir.";
  } 
  else if (lang === 'su') {
    welcomeText = "Para jamaah Shalat Jum'at anu dimulyakeun ku Allah SWT,";
    firstKhutbahTitle = "KHUTBAH KAHIJI (الخطبة الأولى)";
    secondKhutbahTitle = "KHUTBAH KADUA (الخطبة الثانية)";
    rukunBadgeText = "RUKUN KHUTBAH: 1. Hamdalah | 2. Shalawat | 3. Wasiat Taqwa";
    rukunBadgeTextSecond = "RUKUN KHUTBAH: 1. Hamdalah | 2. Shalawat | 3. Wasiat Taqwa";
    transisiBadgeText = "Panutup Khutbah Kahiji & Doa Transisi (Istighfar)";

    praiseIntro = "Langkung tipayun, mangga urang sasarengan nyanggakeun puji sinareng syukur ka hadirat Allah SWT, Dzat anu Maha Welas tur Maha Asih, anu teu petot-petot maparin mangrebu-rebu kanikmatan iman, Islam, sareng kasehatan ka urang sadaya. Ku jalaran hidayah sareng taufik-Na urang sadaya tiasa ngaringankeun lengkah, ninggalkeun urusan dunya sawatara waktu, pikeun nedunan panggilan suci ibadah shalat Jum'at berjamaah di masjid anu mulia ieu.";
    shalawatIntro = "Shalawat sareng salam mugi tetep dicurahkeun ka junjungan urang sadaya, nabi anu janten suri tauladan, panutup para nabi sareng rasul, nyaeta Nabi Agung Muhammad SAW, kulawargana, para sahabatna, sareng sakumna umatna anu istiqomah ngajalankeun sunnah-Na dugi ka dinten kiamat.";
    taqwaIntro = "Simkuring salaku khatib wasiat, hususna ka diri simkuring nyalira, umumna ka para jamaah sadayana, mangga urang ningkatkeun katakwaan urang ka Allah SWT sacara daria sareng istiqomah. Takwa dina harti ngajalankeun sadaya perintah Allah kalayan ikhlas, sareng nebihan sagala larangan-Na ku katekudan manah.";
    themeTransition = `Para jamaah anu dimulyakeun ku Allah, hayu urang sami-sami muka hate sareng pikiran urang pikeun ngalenyepan pépéling anu mulia ieu:`;
    closingIntro = "Mangga urang jantenkeun momentum ibadah shalat Jum'at ieu kanggo nyuhunkeun pituduh, kakuatan, sareng katetepan iman ka Allah SWT sangkan urang, kulawarga urang, sareng turunan urang salawasna dibimbing dina jalan ketaatan anu lempeng tur salamet tina fitnah akhir jaman.";
  } 
  else if (lang === 'ms') {
    welcomeText = "Sidang Jumaat yang dirahmati Allah SWT sekalian,";
    firstKhutbahTitle = "KHUTBAH PERTAMA (الخطبة الأولى)";
    secondKhutbahTitle = "KHUTBAH KEDUA (الخطبة الثانية)";
    
    praiseIntro = "Pertama-tamanya, marilah kita merafakkan setinggi-tinggi kesyukuran ke hadrat Allah SWT, Tuhan yang Maha Pengasih lagi Maha Penyayang, atas segala nikmat iman, Islam, serta nikmat kesihatan dan kelapangan waktu yang tiada putus-putus dikurniakan kepada kita. Hanya dengan taufik dan hidayah-Nya jua kita dapat meringankan langkah kaki, meninggalkan urusan duniawi seketika, demi menyahut seruan suci ibadah solat Jumaat berjemaah di masjid yang diberkati ini.";
    shalawatIntro = "Selawat dan salam ke atas junjungan besar kita, nabi ikutan, penutup sekalian nabi dan rasul, Nabi Muhammad SAW, ahli keluarga baginda, para sahabat yang setia, serta sekular pengikut baginda yang istiqomah menghidupkan dan memperjuangkan sunnah baginda hingga ke hari kiamat.";
    taqwaIntro = "Saya selaku khatib berpesan kepada diri saya sendiri and sidang jemaah sekalian, marilah kita bersama-sama meningkatkan ketakwaan kita kepada Allah SWT dengan sebenar-benar takwa. Iaitu dengan melaksanakan segala titah perintah-Nya dengan penuh keikhlasan, serta menjauhi segala bentuk larangan-Nya dengan keteguhan iman.";
    themeTransition = `Sidang Jumaat yang dirahmati Allah, marilah kita lapangkan dada dan tumpukan perhatian kita sepenuhnya untuk merenungi risalah agung ini:`;
    closingIntro = "Marilah kita jadikan momentum solat Jumaat yang berkat ini untuk memohon petunjuk dan keteguhan iman kepada Allah SWT agar diri kita, anak isteri serta seluruh ahli keluarga kita sentiasa terpelihara di atas jalan ketaatan yang diredhai dan diselamatkan daripada fitnah akhir zaman.";
  } 
  else if (lang === 'bug') {
    welcomeText = "Sining umma' selleng malebbi'na ri amasei ri Allah SWT,";
    firstKhutbahTitle = "KHUTBAH PERTAMA (الخطبة الأولى)";
    secondKhutbahTitle = "KHUTBAH KEDUA (الخطبة الثانية)";
 
    praiseIntro = "Mammuare' makketennung ritu iyasenna pappuji ri sesena Allah Ta'ala, Dzat iya mapaccingnge nennia mabeangnge apolengang iman, Islam, nennia kanyameang makkalebué ri seseta. Nasaba' hidayah nennia barakka'-Na narapi'ta paleleangnge gajutta kagem madditu-ditu megau' shalat Jumu'ah berjamaah ri masjid marajaé iye'.";
    shalawatIntro = "Salawa' nennia mappasalama' lao ri Nabitta Muhammad SAW, sining kaluwargana nennia sining sahaba'na iya makkatenningnge ri lalenna nabié ripadditué ri kiamat mangke.";
    taqwaIntro = "Iyakona salaku khatib wasiat ri aleku nennia ri umma' selleng malebbi'na, ala'na mapaccing ri sesena takwaé lao ri Allah Ta'ala, iyasenna makkuragaé megau' sangadinna parentana nennia mabela'i asappangngenna.";
    themeTransition = `Sining umma' selleng malebbi'na ri amasei ri Allah SWT, ri laleng wettu mapaccingnge iye', upatumpu'ki akkaleta nennia ateitta untu' makkulaga risalah muliaé iye':`;
    closingIntro = "Mammuare'i idi' maneng ripabbekkeangnga hidayah nennia asennangeng ri sesena Allah Ta'ala ri laleng lalenna ketaatan lurusé nennia rilaingnge rupa fitnah jaman akhir.";
  } 
  else if (lang === 'bjn') {
    welcomeText = "Sidang Jum'at nang dirahmati Allah SWT,";
    firstKhutbahTitle = "KHUTBAH KAPERTAMA (الخطبة الأولى)";
    secondKhutbahTitle = "KHUTBAH KADUA (الخطبة الثانية)";
 
    praiseIntro = "Puji wan syukur nang tiada tara hayu kita haturkan gasan Allah SWT, Dzat nang Maha Pengasih lagi Penyayang, nang kada baparakan mambagiakan nikmat iman, Islam, wan kesehatan gasan kita barataan. Lawan hidayah-Nya jua kita kawa malangkahakan batis, mambuang rasa ngalih wan kasibukan dunya, gasan manyahut seruan shalat Jum'at baimbai di masjid nang berkah ini.";
    shalawatIntro = "Shalawat wan salam moga salalajur tercurahkan gasan junjungan kita, nabi panutan, penutup para nabi wan rasul, Nabi Muhammad SAW, kaluarga sidin, sahabat sidin, wan barataan umat nang istiqomah manggawé sunnah sidin sampai hari kiamat.";
    taqwaIntro = "Ulun salaku khatib bapesan gasan diri ulun saorangan wan barataan jemaah sekalian, ayo kita tingkatkan ketakwaan kita gasan Allah SWT sacara sungguh-sungguh. Menggawé parintah Allah wan mambuang barataan larangan-Nya lawan keteguhan iman.";
    themeTransition = `Sidang Jum'at nang dirahmati Allah, ayo kita buka hati wan pikiran gasan mamikirakan nasehat nang berharga ini:`;
    closingIntro = "Ayo kita jadikan shalat Jum'at ini gasan mamohon petunjuk wan keteguhan iman lawan Allah SWT supaya diri kita, bini, anak, wan barataan kaluarga salalajur dibimbing di jalan ketaatan nang lurus wan aman matan fitnah akhir jaman.";
  } 
  else if (lang === 'en') {
    welcomeText = "Dear brothers in Islam and respected congregation of the Friday prayer,";
    firstKhutbahTitle = "FIRST KHUTBAH (الخطبة الأولى)";
    secondKhutbahTitle = "SECOND KHUTBAH (الخطبة الثانية)";
    rukunBadgeText = "SERMON PILLARS FULFILLED: 1. Praising Allah | 2. Shalawat | 3. Admonition to Taqwa | 4. Qur'anic Verse";
    rukunBadgeTextSecond = "SERMON PILLARS FULFILLED: 1. Praising Allah | 2. Shalawat | 3. Admonition to Taqwa";
    rukunBadgeTextPrayer = "SERMON PILLARS FULFILLED: 5. Supplication for Muslims";
    transisiBadgeText = "Closing of the First Sermon & Transition Prayer (Istighfar)";

    praiseIntro = "First and foremost, let us continuously express our deepest gratitude to Allah SWT, the Most Gracious and Most Merciful, who endlessly bestows upon us the countless blessings of faith (Iman), Islam, and good health. It is solely through His guidance (Hidayah) and grace that we are able to step forward, leaving behind our worldly engagements, to fulfill the sacred call of the Friday prayer congregation in this blessed house of Allah.";
    shalawatIntro = "May peace and infinite blessings be upon our beloved master, the best of creation, the seal of prophets and messengers, Prophet Muhammad SAW, and upon his pure family, his noble companions, and all his righteous followers who steadfastly revive and champion his holy Sunnah until the establishment of the Hour.";
    taqwaIntro = "Standing on this blessed pulpit, as the khatib, I advise myself first and all of you to continuously strive to increase our fear and consciousness of Allah SWT (Taqwa). True Taqwa means executing all of His commandments with absolute sincerity and keeping away from all His prohibitions with strong determination wherever we are.";
    themeTransition = `Respected brothers and sisters, let us open our hearts and focus our minds to reflect deeply on this noble and sacred message:`;
    closingIntro = "Let us utilize the precious moments of this Friday prayer to beg Allah SWT for guidance, strength, and steadfastness in faith. May Allah guide us, our children, our spouses, and our entire family upon the straight path of obedience, and protect us from the trials and tribulations of the end of times.";
  }
  else if (lang === 'ar') {
    welcomeText = "مَعَاشِرَ الْمُسْلِمِينَ وَزُمْرَةَ الْمُؤْمِنِينَ رَحِمَكُمُ اللهُ،";
    firstKhutbahTitle = "الخطبة الأولى";
    secondKhutbahTitle = "الخطبة الثانية";
    rukunBadgeText = "أركان الخطبة مستوفاة: ١. الحمد لله | ٢. الصلاة على النبي | ٣. الوصية بالتقوى | ٤. قراءة آية من القرآن الكريم";
    rukunBadgeTextSecond = "أركان الخطبة مستوفاة: ١. الحمد لله | ٢. الصلاة على النبي | ٣. الوصية بالتقوى";
    rukunBadgeTextPrayer = "أركان الخطبة مستوفاة: ٥. الدعاء للمؤمنين والمؤمنات";
    transisiBadgeText = "خاتمة الخطبة الأولى ودعاء الاستغفار بين الخطبتين";

    praiseIntro = "أَمَّا بَعْدُ، فَالْحَمْدُ للهِ الَّذِي جَعَلَ الْجُمُعَةَ عِيدًا لِلْمُسْلِمِينَ، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ سَيِّدُ الْمُرْسَلِينَ.";
    shalawatIntro = "وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللهِ سَيِّدِنَا مُحَمَّدٍ، وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ.";
    taqwaIntro = "فَيَا عِبَادَ اللهِ، أُوصِيكُمْ وَنَفْسِي بِتَقْوَى اللهِ الْعَلِيِّ الْعَظِيمِ، فَقَدْ فَازَ الْمُتَّقُونَ.";
    themeTransition = "مَعَاشِرَ الْمُسْلِمِينَ رَحِمَكُمُ اللهُ، دَعُونَا نَتَفَكَّرُ فِي هَذِهِ النَّصِيحَةِ الْغَالِيَةِ:";
    closingIntro = "أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ، وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَلَذِكْرُ اللهِ أَكْبَرُ.";
  }

  let outlinesHTML = "";

  if (lang === 'id' && sermon.customContent && Array.isArray(sermon.customContent.paragraphs)) {
    outlinesHTML = sermon.customContent.paragraphs.map((paragraph, index) => {
      let cleanParagraph = paragraph;
      const match = paragraph.match(/^<strong>\d+\.\s*(.*?)<\/strong><br\/>/i);
      let pointTitle = outlinesList[index] || `Poin ${index + 1}`;
      if (match) {
        cleanParagraph = paragraph.replace(/^<strong>\d+\.\s*(.*?)<\/strong><br\/>/i, "");
        pointTitle = match[1];
      }
      return `
      <div class="outline-section space-y-3 p-5 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <h4 class="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-2 font-sans">
          <span class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ${index + 1}
          </span>
          ${pointTitle}
        </h4>
        <div class="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed md:leading-loose space-y-4 select-text">
          <p class="mb-4">${cleanParagraph}</p>
        </div>
      </div>
      `;
    }).join("");
  } else {
    outlinesHTML = outlinesList.map((point, index) => {
      const translatedPoint = translatePoint(point, lang);
      let contentParagraph = "";

      const categoryKey = (sermon.category || '').toLowerCase();
      const resource = CATEGORY_RESOURCES[categoryKey] || DEFAULT_RESOURCE;

      if (lang === 'id') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              Sidang Jum'at yang dirahmati Allah, marilah kita buka hati dan pikiran kita sejenak untuk merenungkan hakikat dari <strong>${point}</strong>. Di dalam ajaran Islam yang mulia, kesadaran dan pemahaman yang mendalam mengenai hal ini bukanlah sekadar wacana intelektual semata, melainkan fondasi batin yang menentukan kokoh atau rapuhnya seluruh bangunan keshalehan kita sebagai seorang hamba. Tanpa adanya pemahaman yang jernih dan kokoh mengenai hal ini, seorang Muslim akan sangat mudah terombang-ambing, goyah, dan hanyut di tengah hantaman badai syubhat serta syahwat yang melanda kehidupan modern hari ini.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Sebagaimana firman Allah SWT dalam Al-Qur'an ${resource.verse.surah}:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <p class="arabic-text text-xl mb-2 text-slate-800 dark:text-slate-100" dir="rtl">${resource.verse.text}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans">"${resource.verse.translation}"</p>
            </div>
            <p class="mb-4">
              Allah SWT di dalam Kitab-Nya yang suci senantiasa memotivasi orang-orang beriman agar menggunakan potensi akal sehat, hati nurani, dan keimanan mereka untuk merenungi risalah ini secara mendalam dan berulang-ulang. Pemahaman yang benar akan melahirkan rasa <em>khasyah</em> (takut yang disertai pengagungan dan cinta) kepada Allah SWT, yang pada gilirannya akan menuntun kita untuk menyelaraskan setiap ucapan, tindakan, dan keputusan hidup kita dengan garis syariat yang telah ditetapkan oleh-Nya. Bila pondasi batin ini rapuh, maka runtuhlah seluruh amalan lahiriah yang diupayakan seseorang.
            </p>
            <p class="mb-4">
              Terkait hal ini, Hujjatul Islam Imam Al-Ghazali rahimahullah dalam kitabnya <em>Ihya Ulumuddin</em> pernah memberikan maqolah (perkataan bijak) yang sangat masyhur:
              <span class="italic text-slate-600 dark:text-slate-300">"Ilmu tanpa amal laksana kegilaan, sementara amal tanpa ilmu adalah suatu kesia-siaan."</span>
              Maka, landasan kesadaran, ilmu, dan pemahaman batin yang benar mengenai <strong>${point}</strong> merupakan gerbang pembuka utama agar amal ibadah kita diterima di sisi-Nya.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Di era digital saat ini, tantangan terbesar kita adalah kebanjiran informasi yang sering melalaikan kita dari pemahaman hakiki tentang kehidupan. Marilah kita luangkan waktu minimal 15-30 menit setiap hari untuk menepi dari hiruk-pikuk media sosial dan gadget, merenungi hakikat <strong>${point}</strong> ini, serta mendengarkan kajian keislaman yang murni agar hati kita senantiasa terarah pada ketakwaan dan kebenaran yang hakiki.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              Jamaah sekalian yang dimuliakan Allah, di sisi lain, kesadaran batin tersebut barulah menjadi sempurna manakala mewujud nyata dalam pembuktian amal, yaitu dengan memahami dan mengamalkan secara konkret mengenai <strong>${point}</strong>. Pada tahapan praktis inilah, seluruh konsep keimanan dan teori keagamaan dituntut untuk menjelma menjadi aksi nyata dalam kehidupan sehari-hari. Iman tanpa amal adalah laksana pohon yang rimbun namun tidak pernah berbuah; ia tampak indah dari kejauhan, tetapi tidak memberikan manfaat nyata.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Rasulullah SAW memberikan penegasan kuat dalam ${resource.hadith.narrator}:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <p class="arabic-text text-xl mb-2 text-slate-800 dark:text-slate-100" dir="rtl">${resource.hadith.text}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans">"${resource.hadith.translation}"</p>
            </div>
            <p class="mb-4">
              Terkait pengamalan nyata ini, salah seorang ulama terkemuka, yaitu <strong>${resource.maqolah.author}</strong>, pernah memberikan wasiat emas yang sangat mendalam:
              <span class="italic text-slate-600 dark:text-slate-300">"${resource.maqolah.text}"</span>
            </p>
            <p class="mb-4">
              Oleh karenanya, mengamalkan tuntunan <strong>${point}</strong> dalam keseharian adalah bukti autentik kejujuran iman kita. Allah SWT tidak menuntut kita untuk menjadi sempurna tanpa khilaf, melainkan melihat kesungguhan ikhtiar kita untuk tunduk melangkah di atas ketakwaan nyata.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Wujud nyata dari implementasi <strong>${point}</strong> di masa kini adalah menjaga integritas moral dan menjaga lisan dari fitnah. Di tengah maraknya fitnah finansial modern seperti judi online, pinjaman online ilegal, dan investasi palsu, pembuktian iman yang sesungguhnya adalah keberanian kita untuk menolak segala bentuk kemudahan finansial yang haram dan tetap sabar bertahan pada rezeki yang halal serta penuh berkah.
            </p>
          `;
        } else {
          let closingHTML = "";
          let appNyataHTML = "";

          if (categoryKey === "muharram") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, dalam mengakhiri pembahasan khutbah hari ini, marilah kita camkan pentingnya menjaga ketaatan dalam <strong>${point}</strong>. Momentum perubahan batin dan berhijrah dari kelalaian masa lalu tidaklah bernilai kecuali jika disempurnakan dengan kesungguhan mengevaluasi diri secara jujur dan terus-menerus.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Sayyidina Umar bin Khattab radhiyallahu 'anhu pernah memberikan wasiat emas (atsar) yang senantiasa bergaung melintasi zaman:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <p class="arabic-text text-xl mb-2 text-slate-800 dark:text-slate-100" dir="rtl">حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا، وَزِنُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُوزَنُوا</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans">"Hisablah diri kalian sebelum kalian dihisab di akhirat kelak, dan timbanglah amal-amal kalian sebelum kalian ditimbang (di hadapan Allah)!"</p>
            </div>
            <p class="mb-4">
              Muhasabah harian terhadap <strong>${point}</strong> akan melahirkan keinsyafan mendalam bahwa sisa umur kita semakin berkurang setiap harinya. Sungguh beruntung hamba yang menutup lembaran lamanya dengan istighfar, lalu mengukir hari baru dengan amal kebajikan yang nyata demi menggapai rida Allah SWT.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Lakukan evaluasi (muhasabah) harian sebelum berbaring tidur malam. Amati apakah implementasi <strong>${point}</strong> dalam kehidupan harian kita hari ini sudah lebih baik daripada kemarin, lalu berkomitmenlah kuat untuk memperbaikinya esok pagi.
            `;
          } else if (categoryKey === "shafar") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, sebagai penutup, marilah kita perkokoh keyakinan kita dalam <strong>${point}</strong>. Ketahuilah bahwa seluruh manfaat dan mudharat yang terjadi di alam semesta ini mutlak berada di bawah genggaman kekuasaan Allah SWT semata. Tidak ada satu pun hari, bulan, angka, atau tanda alam yang mampu membawa sial bagi hamba yang beriman.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Terkait keteguhan tauhid dan kepasrahan batin ini, salah seorang ulama tabi'in yang agung, Imam Al-Hasan Al-Bashri rahimahullah memberikan maqolah berharga:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Hamba yang telah merasakan manisnya tauhid akan berdiri kokoh laksana gunung. Tiada badai ramalan buruk, thiyarah, atau mitos kesialan yang mampu menggoyahkan tawakalnya kepada sang Khaliq, karena ia tahu takdirnya telah ditulis dengan tinta kasih sayang-Nya."</span>
            </div>
            <p class="mb-4">
              Maka, dengan terus bersandar penuh dan menguatkan <strong>${point}</strong>, kita membebaskan diri dari segala belenggu takhayul modern dan khurafat yang dapat mengotori kemurnian tauhid kita.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Hindari dan bersihkan gawai (smartphone) kita dari konten-konten khurafat modern seperti ramalan zodiak, weton sial, atau ramalan nasib harian. Gantungkan seluruh harapan dan implementasi <strong>${point}</strong> murni hanya dengan bertawakal dan berprasangka baik (husnudzon) kepada Allah SWT.
            `;
          } else if (categoryKey === "rabiul_awwal") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, menutup khutbah yang mulia ini, mari kita buktikan kecintaan kita kepada Baginda Nabi SAW dengan mempraktikkan <strong>${point}</strong> secara nyata. Pengakuan cinta yang tulus tidak sekadar bergaung lewat lisan atau peringatan seremonial, melainkan tecermin dari kerinduan batin untuk mengikuti langkah kaki beliau dalam segala urusan kehidupan kita.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai keagungan mengamalkan tuntunan nabi, sahabat dekat Anas bin Malik radhiyallahu 'anhu meriwayatkan wasiat mulia dari Rasulullah SAW:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <p class="arabic-text text-xl mb-2 text-slate-800 dark:text-slate-100" dir="rtl">مَنْ أَحْيَا سُنَّتِي فَقَدْ أَحَبَّنِي، وَمَنْ أَحَبَّنِي كَانَ مَعِي فِي الْجَنَّةِ</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans">"Barangsiapa yang menghidupkan sunnahku maka sungguh ia telah mencintaiku, dan barangsiapa mencintaiku maka ia bersamaku di dalam surga."</p>
            </div>
            <p class="mb-4">
              Marilah kita jadikan <strong>${point}</strong> sebagai bagian tak terpisahkan dari ikhtiar kita menghidupkan sunnah beliau di lingkungan keluarga, tempat kerja, dan masyarakat luas, agar kelak kita berhak mendapatkan syafaat beliau yang agung di yaumul qiyamah.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Hidupkan kembali minimal satu sunnah harian Rasulullah SAW yang mulai dilupakan di dalam rumah kita, seperti adab makan-minum sambil duduk dan menggunakan tangan kanan, atau menyebarkan salam yang santun di setiap kesempatan interaksi terkait <strong>${point}</strong>.
            `;
          } else if (categoryKey === "rabiul_akhir") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, sebagai akhir pembahasan, marilah kita rajut kembali tali ukhuwah islamiyah dengan merawat <strong>${point}</strong>. Kekuatan umat ini terletak pada kelembutan hati warganya untuk saling menyayangi, saling merangkul, dan menutup rapat-rapat pintu perpecahan serta ghibah yang sering kali menghancurkan persaudaraan.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Terkait indahnya menjaga keharmonisan ukhuwah ini, salah seorang ulama salaf terkemuka, Fudhail bin 'Iyadh rahimahullah memberikan maqolah emas:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Seorang mukmin sejati adalah yang senantiasa sibuk mencari-cari uzur (alasan baik) atas kesalahan saudaranya demi menjaga keutuhan ukhuwah. Sedangkan seorang munafik adalah orang yang matanya tajam mencari-cari cacat dan kesalahan saudaranya kian kemari."</span>
            </div>
            <p class="mb-4">
              Maka, mari kita jadikan <strong>${point}</strong> sebagai perekat ukhuwah kita, menjauhi prasangka buruk (su'udzon), serta saling mendoakan dalam kebaikan di dunia nyata maupun di media sosial.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Ketika mendapati perbedaan pendapat di grup percakapan digital atau lingkungan sosial, pilihlah untuk menahan diri dari debat kusir yang tidak berujung. Tegakkan nilai <strong>${point}</strong> dengan mengedepankan tabayyun (klarifikasi) dan ucapan yang menyejukkan hati.
            `;
          } else if (categoryKey === "jumadil_ula") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, untuk menutup bagian utama khutbah ini, mari kita sadari bahwa benteng pertahanan terbaik umat Islam di akhir zaman dimulai dari keharmonisan keluarga melalui <strong>${point}</strong>. Rumah tangga kita bukanlah sekadar tempat berteduh dari hujan dan panas, melainkan madrasah agung yang akan melahirkan generasi penerus perjuangan Islam.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai tanggung jawab suci pendidikan keluarga ini, Hujjatul Islam Imam Al-Ghazali rahimahullah menuliskan maqolah yang sangat mendalam:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Anak-anakmu adalah permata murni yang masih polos tanpa ukiran. Orang tualah yang akan mengukir keindahan iman di jiwanya atau membiarkannya ternoda oleh debu-debu kelalaian duniawi. Jagalah amanah suci itu dengan keteladanan cinta."</span>
            </div>
            <p class="mb-4">
              Marilah kita rawat kehangatan dan ketaatan dalam rumah tangga kita dengan terus mempraktikkan <strong>${point}</strong>, saling menasihati dalam kebenaran, serta mengedepankan sabar dan kasih sayang di setiap sendi kehidupan keluarga.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Sediakan waktu khusus (quality time) bebas gawai bersama anak dan istri di rumah minimal 15-30 menit setiap hari untuk saling mendengarkan isi hati, mengevaluasi ibadah harian bersama, dan menguatkan bimbingan ketakwaan terkait <strong>${point}</strong>.
            `;
          } else if (categoryKey === "jumadil_akhirah") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, sebagai penutup, marilah kita sadari dengan penuh keheningan hati bahwa bekal terbaik sebelum ajal menjemput kita adalah konsistensi dalam <strong>${point}</strong>. Dunia ini hanyalah tempat mampir sejenak untuk mengumpulkan bekal, sedangkan akhirat adalah tempat tinggal yang kekal abadi tanpa batas akhir.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai kesadaran akan fana-nya dunia dan kepastian maut, sahabat mulia Abdullah bin Umar radhiyallahu 'anhuma meninggalkan atsar yang sangat berharga:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Jika engkau berada di sore hari, janganlah menunggu datangnya pagi hari (untuk beramal). Dan jika engkau berada di pagi hari, janganlah menunda amalmu hingga sore hari. Pergunakanlah masa sehatmu sebelum datang sakitmu, dan masa hidupmu sebelum datang matimu."</span>
            </div>
            <p class="mb-4">
              Maka, mari kita jadikan <strong>${point}</strong> ini sebagai ladang investasi akhirat kita yang paling utama, agar di saat malaikat maut datang memanggil, kita berada dalam keadaan melakukan amal shaleh terbaik (husnul khatimah).
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Biasakan menyisihkan sebagian rezeki kita untuk sedekah subuh atau amal jariyah secara rutin walau nominalnya kecil. Jadikan kesadaran akan kematian memotivasi kita mempercepat taubat dan menegakkan <strong>${point}</strong> tanpa menunda-nunda lagi.
            `;
          } else if (categoryKey === "rajab") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, di akhir khutbah pertama ini, marilah kita bersihkan batin kita dengan membiasakan diri dalam <strong>${point}</strong>. Bulan Rajab yang mulia ini adalah pintu gerbang spiritual yang menuntut kita untuk berbenah, menanam benih amal, dan memangkas segala duri kemaksiatan yang menyelimuti hati kita.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai momentum pengkondisian batin di bulan Rajab, ulama salaf yang arif, Abu Bakar al-Balkhi rahimahullah memberikan maqolah yang indah:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Bulan Rajab adalah kesempatan emas untuk menanam benih-benih amal shalih, bulan Sya'ban adalah waktu yang tepat untuk menyiram benih tersebut dengan air mata taubat, dan bulan Ramadhan adalah saat indah untuk memanen kebaikan yang melimpah."</span>
            </div>
            <p class="mb-4">
              Bagaimana mungkin kita bisa memanen buah manis ketakwaan di bulan Ramadhan jika kita enggan menanam dan merawat <strong>${point}</strong> sejak bulan mulia ini? Marilah kita perbanyak istighfar dan amal ketaatan mulai saat ini juga.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Gunakan bulan Rajab ini untuk merutinkan kembali shalat lima waktu berjamaah tepat waktu di masjid bagi kaum laki-laki, serta mulailah melatih diri berpuasa sunnah demi menguatkan pondasi <strong>${point}</strong>.
            `;
          } else if (categoryKey === "syaban") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, sebagai penutup khutbah, mari kita maksimalkan persiapan rohani kita dengan memperteguh <strong>${point}</strong> di bulan Sya'ban ini. Bulan ini sering kali dilalaikan manusia karena terapit di antara dua bulan besar. Namun, justru di saat orang lain lalai, nilai amalan seorang hamba yang tulus akan membubung tinggi ke langit rida Allah SWT.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Terkait urgensi melatih jiwa di bulan Sya'ban, Ibnu Qayyim al-Jauziyyah rahimahullah menuliskan maqolah yang sangat bernilai:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Bulan Sya'ban adalah mukadimah bagi bulan Ramadhan. Melatih diri beramal shalih di bulan Sya'ban akan membuat jiwa terbiasa dan terasa ringan dalam menegakkan shalat tarawih, puasa, dan membaca Al-Qur'an kelak di bulan suci Ramadhan."</span>
            </div>
            <p class="mb-4">
              Marilah kita basahi hati kita yang gersang dengan konsisten mengamalkan <strong>${point}</strong>, agar saat hilal Ramadhan tampak di ufuk timur, jiwa kita telah siap sepenuhnya menyerap samudra berkah dan ampunan-Nya.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Mulailah mencicil tilawah Al-Qur'an harian dan melatih kesabaran mengontrol amarah di bulan Sya'ban ini. Jadikan pembiasaan <strong>${point}</strong> sebagai pemanasan terbaik agar ibadah Ramadhan kita melesat optimal tanpa rasa kaku.
            `;
          } else if (categoryKey === "ramadhan") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, untuk mengakhiri nasihat Jum'at di bulan yang penuh berkah ini, marilah kita fokuskan sisa energi spiritual kita untuk meraih <strong>${point}</strong>. Ramadhan bergulir begitu cepat, dan kita tidak pernah tahu apakah tahun depan kita masih diberikan kesempatan indah untuk bersua kembali dengan bulan suci yang agung ini.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai kesungguhan menyelesaikan garis akhir Ramadhan dengan kebaikan, ulama tabi'in yang mulia, Al-Hasan al-Basri rahimahullah memberikan wasiat indah:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Perbaikilah amal perbuatanmu di sisa hari-hari Ramadhan yang masih tersisa, niscaya Allah SWT akan mengampuni dosa-dosamu di masa lalu. Namun, jika engkau menyia-nyiakan sisa hari ini, engkau akan dimintai pertanggungjawaban atas masa lalumu dan masa sekarangmu."</span>
            </div>
            <p class="mb-4">
              Marilah kita kencangkan ikat pinggang, meningkatkan ibadah, dan terus menjaga <strong>${point}</strong> dengan harapan cemas agar kita keluar dari madrasah Ramadhan ini sebagai hamba bertaqwa yang terbebas dari siksa api neraka.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Di sepuluh hari terakhir Ramadhan, kurangi aktivitas berbelanja atau bermedia sosial secara berlebihan. Fokuskan waktu malam kita untuk beriktikaf atau beribadah khusyuk di masjid guna menggapai kemuliaan Lailatul Qadar berlandaskan <strong>${point}</strong>.
            `;
          } else if (categoryKey === "syawwal") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, menutup khutbah pasca-Ramadhan ini, mari kita pahami bersama bahwa bukti diterimanya puasa kita adalah bertambahnya konsistensi dalam <strong>${point}</strong>. Bulan Syawwal is bulan peningkatan akhlak dan ibadah, sebuah pembuktian nyata apakah madrasah Ramadhan telah membekas dalam perilaku kita sehari-hari ataukah menguap begitu saja.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Terkait hal ini, salah seorang ulama salaf yang agung, Bisyr Al-Hafi rahimahullah memberikan maqolah emas yang sangat menohok sanubari:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Seburuk-buruk kaum adalah golongan manusia yang rajin beribadah, ruku', dan sujud secara luar biasa hanya di bulan Ramadhan saja, namun mengabaikan kewajiban begitu Ramadhan usai. Jadilah hamba yang mengabdi setia kepada Allah di sepanjang tahun, bukan hanya musiman."</span>
            </div>
            <p class="mb-4">
              Maka, marilah kita rawat dan jaga kesinambungan amal shaleh serta ketaatan berupa <strong>${point}</strong> ini sebagai wujud syukur kita yang sejati atas limpahan ampunan di bulan suci yang lalu.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Sempurnakan puasa Ramadhan kita dengan menunaikan puasa sunnah enam hari di bulan Syawwal, serta pertahankan rutinitas shalat berjamaah dan sedekah yang telah terbentuk selama Ramadhan berlandaskan nilai <strong>${point}</strong>.
            `;
          } else if (categoryKey === "dzulqodah") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, sebagai penutup, marilah kita jaga kedamaian sosial dengan sungguh-sungguh melalui <strong>${point}</strong>. Bulan Dzulqa'dah adalah salah satu bulan haram (mulia) di mana Allah SWT melarang keras segala bentuk kemaksiatan, kezaliman, serta perpecahan. Di masa kini, menjaga lisan dan jemari kita dari fitnah digital adalah perjuangan moral yang paling utama.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Ulama ahli tafsir terkemuka dari kalangan tabi'in, Imam Qatadah rahimahullah memberikan maqolah yang sangat bernilai:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Sesungguhnya perbuatan zalim di bulan-bulan haram (seperti Dzulqa'dah) memiliki beban dosa yang jauh lebih besar dan mengerikan dibandingkan dengan kezaliman di bulan-bulan lainnya, meskipun kezaliman dalam kondisi apa pun tetaplah perkara besar yang dilarang Allah."</span>
            </div>
            <p class="mb-4">
              Marilah kita gunakan waktu di bulan mulia ini untuk menahan diri dari menyakiti sesama, merawat kedamaian, serta memperkokoh <strong>${point}</strong> agar hidup kita diliputi oleh keberkahan dunya dan akhirah.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Kendalikan jemari dan lisan kita dari menulis komentar negatif, menghujat, atau menyebarkan hoaks di platform sosial media. Gantilah dengan menyebarkan nasihat damai dan ilmu yang bermanfaat selaras dengan pilar <strong>${point}</strong>.
            `;
          } else if (categoryKey === "dzulhijjah") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, menutup khutbah yang penuh berkah di bulan mulia ini, marilah kita hayati esensi kurban yang sesungguhnya dengan merawat <strong>${point}</strong>. Ibadah kurban yang kita tunaikan bukan sekadar ritual menyembelih hewan dan membagikan dagingnya, melainkan simbol kepatuhan total serta kerelaan mengorbankan ego kesombongan kita demi ketauhidan yang murni.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai makna batin dari penyembelihan kurban ini, ulama besar Ibnu Qayyim al-Jauziyyah rahimahullah menuliskan maqolah yang sangat indah:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Penyembelihan hewan kurban adalah bentuk pendekatan diri kepada Allah SWT dengan meneladani keikhlasan Nabi Ibrahim. Hakikatnya adalah menyembelih kecintaan yang berlebihan pada dunia dan ego kebinatangan di dalam jiwa kita, agar yang tersisa di dalam dada hanyalah ketakwaan yang murni."</span>
            </div>
            <p class="mb-4">
              Marilah kita jadikan <strong>${point}</strong> sebagai wujud pengorbanan sosial dan ketulusan iman kita kepada Allah SWT, dengan harapan kurban kita diterima dan menjadi saksi penyelamat di akhirat kelak.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Laksanakan ibadah kurban dengan penuh keikhlasan tanpa rasa pamer (riya') atas status sosial atau beratnya timbangan hewan kurban. Jadikan daging kurban sebagai wasilah berbagi kebahagiaan kepada dhuafa di sekitar kita demi memperkokoh <strong>${point}</strong>.
            `;
          } else if (categoryKey === "tazkiyatun_nufus") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, di akhir khutbah tentang pembersihan jiwa ini, marilah kita periksa kembali keikhlasan niat kita dalam mengamalkan <strong>${point}</strong>. Hati manusia adalah medan pertempuran rohani yang sangat halus. Setitik penyakit sombong atau riya' yang menyelinap tanpa disadari dapat melebur pahala amal saleh kita dalam sekejap mata.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai kehalusan niat dan keikhlasan batin, salah seorang ulama salaf terkemuka, Fudhail bin 'Iyadh rahimahullah memberikan maqolah emas:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Meninggalkan amalan baik karena takut dilihat manusia adalah riya' (pamer), sedangkan beramal saleh sengaja agar dipuji atau dilihat manusia adalah syirik. Dan ikhlas yang sesungguhnya adalah ketika Allah SWT menyelamatkan serta membebaskan hatimu dari keduanya."</span>
            </div>
            <p class="mb-4">
              Mari kita senantiasa merawat <strong>${point}</strong> dengan niat yang murni hanya mengharap rida Allah SWT, menjauhi haus pujian makhluk, serta memperbanyak amal-amal tersembunyi yang hanya diketahui oleh-Nya semata.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Rutinkan memiliki setidaknya satu amal shalih rahasia setiap hari—seperti sedekah sembunyi-sembunyi, berdoa khusyuk di keheningan malam, atau membantu kesulitan orang lain—tanpa perlu dipublikasikan di akun media sosial mana pun guna menguji ketulusan <strong>${point}</strong>.
            `;
          } else if (categoryKey === "penyakit_obat_hati") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, sebagai penutup, marilah kita bersihkan hati kita dari berbagai noda batin dengan mengutamakan <strong>${point}</strong>. Penyakit hati seperti hasad (iri dengki) dan kiber (sombong) adalah penyakit mematikan yang mula-mula menyebabkan iblis diusir dari surga. Hanya dengan penawar berupa ketawadhuan yang tulus lah hati kita akan kembali memperoleh ketenangan.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai bahaya kesombongan batin ini, ulama sufi terkemuka Sahl bin Abdullah at-Tustari rahimahullah meninggalkan maqolah yang sangat mendalam:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Tiada hijab penghalang antara seorang hamba dengan Tuhannya yang lebih tebal dan gelap daripada kesombongan diri, dan tiada jalan penawar hati yang lebih cepat mengantarkan hamba pada rida-Nya selain ketawadhuan (merendah hati) dan mengakui segala kefakiran diri di hadapan-Nya."</span>
            </div>
            <p class="mb-4">
              Marilah kita latih diri kita untuk melunakkan hati melalui <strong>${point}</strong>, selalu berprasangka baik (husnudzon) kepada sesama hamba Allah, serta bersyukur atas segala karunia nikmat yang telah dianugerahkan-Nya kepada kita.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Saat terbersit perasaan iri atas nikmat yang didapatkan rekan atau tetangga, segeralah berdoa: "Ya Allah berkahilah dia, dan karuniakanlah pula kebaikan padaku." Lawan penyakit hasad tersebut dengan menumbuhkan qana'ah dan mempraktikkan pilar <strong>${point}</strong>.
            `;
          } else if (categoryKey === "bahaya_sosial") {
            closingHTML = `
            <p class="mb-4">
              Hadirin yang dirahmati Allah, menutup khutbah yang krusial ini, marilah kita selamatkan diri, keluarga, dan generasi muda kita dengan berkomitmen penuh pada <strong>${point}</strong>. Di tengah kepungan badai godaan finansial modern seperti judi online yang kian adiktif, jerat pinjol ilegal yang menjanjikan kemudahan semu, serta riba yang merusak, pembuktian iman yang sejati adalah keberanian kita untuk bertahan di atas kehalalan nafkah.
            </p>
            <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
              Mengenai ngerinya mengonsumsi harta haram dan riba, sahabat agung Abdullah bin Mas'ud radhiyallahu 'anhu menegaskan wasiat (atsar) yang sangat keras:
            </p>
            <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
              <span class="italic text-slate-600 dark:text-slate-300">"Satu dirham dari harta riba atau hasil haram yang dikonsumsi oleh seseorang dalam keadaan dia mengetahuinya, dosanya di sisi Allah jauh lebih mengerikan daripada berzina sebanyak tiga puluh omen kali. Dan setiap tubuh yang tumbuh dari makanan yang haram, maka neraka adalah tempat tinggal yang paling layak untuknya."</span>
            </div>
            <p class="mb-4">
              Marilah kita bangun benteng integritas moral dan nafkah yang berkah di rumah kita dengan menegakkan <strong>${point}</strong>. Ingatlah, rezeki yang sedikit namun berkah dan halal jauh lebih mulia serta mendatangkan ketenangan batin, daripada harta melimpah dari jalan maksiat yang mengantarkan kita pada kehancuran dunia dan akhirat.
            </p>
            `;
            appNyataHTML = `
              <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Edukasi anak-anak dan anggota keluarga kita secara berkala mengenai bahaya judi online, game haram yang berbau taruhan, dan pinjaman online. Jaga kehalalan piring makan di rumah kita dengan berpegang teguh pada tuntunan <strong>${point}</strong>.
            `;
          } else {
            const titleHash = (sermon.title || "").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const closingVariant = titleHash % 5;

            if (closingVariant === 0) {
              closingHTML = `
              <p class="mb-4">
                Hadirin yang berbahagia, perjalanan spiritual kita tentu tidak berhenti pada pemahaman dan amal sesaat saja. Mahkota tertinggi yang menyempurnakan seluruh ikhtiar ini adalah kesungguhan kita untuk senantiasa merawat serta memperkokoh <strong>${point}</strong> secara istiqomah. Perlu kita sadari bersama bahwa mempertahankan sebuah kebaikan sering kali jauh lebih menantang dan membutuhkan perjuangan ekstra daripada sekadar memulainya. Keberhasilan kita sangat menuntut adanya sikap keistiqomahan (konsistensi) yang tiada henti di setiap helaan nafas kehidupan kita sehari-hari.
              </p>
              <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
                Allah SWT meneguhkan kedudukan mulia orang-orang yang istiqomah dalam firman-Nya Surah Fushshilat ayat 30:
              </p>
              <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
                <p class="arabic-text text-xl mb-2 text-slate-800 dark:text-slate-100" dir="rtl">إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ أَلَّا تَخَافُوا وَلَا تَحْزَنُوا</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-sans">"Sesungguhnya orang-orang yang berkata: 'Tuhan kami adalah Allah' kemudian mereka meneguhkan pendirian mereka (istiqomah), maka malaikat-malaikat akan turun kepada mereka (dengan berkata): 'Janganlah kamu merasa takut dan janganlah kamu bersedih hati'."</p>
              </div>
              <p class="mb-4">
                Untuk meraih derajat istiqomah tersebut, kita harus proaktif melakukan <em>tazkiyatun nufus</em> (pembersihan jiwa) dari berbagai penyakit batin yang merusak keikhlasan, seperti kesombongan, riya' (pamer), hasad (iri dengki), dan cinta dunia yang berlebihan. Mari kita gantikan semua itu dengan sifat keikhlasan yang tulus, ketawadhuan yang mendalam, serta kepasrahan yang total (tawakal) kepada segala ketetapan takdir Allah SWT.
              </p>
              <p class="mb-4">
                Mengenai hal ini, Ibnu Qayyim Al-Jauziyyah rahimahullah menuliskan maqolah yang sangat bernilai:
                <span class="italic text-slate-600 dark:text-slate-300">"Keistiqomahan adalah kerahmatan yang mengikat keberkahan amal seorang hamba."</span>
              </p>
              `;
              appNyataHTML = `
                <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Supaya kita senantiasa istiqomah mengamalkan nilai-nilai <strong>${point}</strong>, rajinlah menghadiri majelis taklim dan berkumpul bersama orang-orang shaleh.
              `;
            } else if (closingVariant === 1) {
              closingHTML = `
              <p class="mb-4">
                Hadirin sekalian, mari kita hiasi seluruh rangkaian amal kita dengan keikhlasan yang tulus. Ikhlas adalah ruh dari setiap ketaatan, di mana hati kita bersih dari keinginan dipuji manusia (riya') atau mengharap balasan duniawi. Tanpa keikhlasan, amalan sebesar apa pun akan sirna bagaikan debu yang tertiup angin topan.
              </p>
              <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
                Ulama sufi terkemuka, Fudhail bin 'Iyadh rahimahullah memberikan wasiat emas:
              </p>
              <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
                <span class="italic text-slate-600 dark:text-slate-300">"Meninggalkan amalan saleh karena manusia adalah riya', sedangkan beramal saleh karena manusia adalah syirik. Dan ikhlas adalah ketika Allah menyelamatkanmu dari keduanya."</span>
              </div>
              <p class="mb-4">
                Semoga Allah melimpahkan keteguhan hati kepada kita untuk senantiasa menjaga keikhlasan dalam mengamalkan pilar <strong>${point}</strong> di mana pun kita berada.
              </p>
              `;
              appNyataHTML = `
                <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Latihlah keikhlasan kita dengan memperbanyak amalan rahasia (sirr) yang tidak diketahui orang lain, seperti sedekah sembunyi-sembunyi atau istighfar di keheningan malam selaras dengan nilai <strong>${point}</strong>.
              `;
            } else if (closingVariant === 2) {
              closingHTML = `
              <p class="mb-4">
                Hadirin yang dirahmati Allah, marilah kita senantiasa sadar bahwa sisa umur kita di dunia ini sangatlah terbatas. Setiap detik yang berlalu membawa kita semakin dekat dengan liang lahat dan hari pertanggungjawaban di akhirat kelak. Oleh karena itu, mari kita pergunakan nikmat waktu ini sebaik-baiknya untuk menguatkan ketakwaan kita.
              </p>
              <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
                Imam Hasan Al-Bashri rahimahullah memberikan untaian nasihat yang sangat mendalam:
              </p>
              <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
                <span class="italic text-slate-600 dark:text-slate-300">"Wahai anak Adam, sesungguhnya engkau hanyalah kumpulan hari-hari. Setiap kali satu hari berlalu dari umurmu, maka telah hilang pula sebagian dari dirimu."</span>
              </div>
              <p class="mb-4">
                Marilah kita bertekad bulat untuk tidak menunda-nunda amal saleh dan terus meningkatkan pengamalan <strong>${point}</strong> sebelum ajal menjemput kita secara tiba-tiba.
              </p>
              `;
              appNyataHTML = `
                <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Buatlah jadwal harian yang seimbang antara ibadah dan urusan duniawi. Kurangi membuang waktu secara sia-sia untuk hal-hal yang tidak bermanfaat, demi mengoptimalkan implementasi <strong>${point}</strong>.
              `;
            } else if (closingVariant === 3) {
              closingHTML = `
              <p class="mb-4">
                Hadirin sekalian, sebagai penutup khutbah, mari kita sadari bahwa kesalehan spiritual haruslah berbanding lurus dengan kesalehan sosial. Hubungan yang harmonis dengan Allah (habluminallah) harus dibuktikan dengan hubungan yang baik dengan sesama manusia (habluminannas). Hindarilah permusuhan, saling mendengki, dan memutuskan tali silaturahim.
              </p>
              <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
                Hujjatul Islam Imam Al-Ghazali rahimahullah mengingatkan kita dalam wasiatnya:
              </p>
              <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
                <span class="italic text-slate-600 dark:text-slate-300">"Barangsiapa memperbaiki hubungannya dengan Allah, niscaya Allah akan memperbaiki hubungannya dengan sesama manusia. Dan barangsiapa memperbaiki urusan akhiratnya, niscaya Allah akan mencukupkan urusan dunianya."</span>
              </div>
              <p class="mb-4">
                Marilah kita rajut tali ukhuwah islamiyah, saling menolong dalam kebaikan, serta mengamalkan pilar kesucian <strong>${point}</strong> demi kedamaian bersama.
              </p>
              `;
              appNyataHTML = `
                <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Jalin kembali silaturahim dengan kerabat atau tetangga yang sempat renggang. Maafkanlah kesalahan orang lain dengan tulus dan hindari perdebatan yang sia-sia selaras dengan pilar <strong>${point}</strong>.
              `;
            } else {
              closingHTML = `
              <p class="mb-4">
                Hadirin yang berbahagia, akhirlah seluruh ikhtiar kita dengan senantiasa bersyukur atas limpahan karunia Allah SWT dan qana'ah (merasa cukup) dengan apa yang telah dibagikan untuk kita. Rasa syukur akan melapangkan dada, menjauhkan kita dari keserakahan duniawi, serta mengundang keberkahan hidup yang berlipat ganda.
              </p>
              <p class="mb-4 text-emerald-700 dark:text-emerald-400 font-medium italic">
                Syaikh Ibnu Atha'illah Al-Iskandari rahimahullah dalam kitab <em>Al-Hikam</em> menuliskan wasiat indah:
              </p>
              <div class="my-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-emerald-600 text-center">
                <span class="italic text-slate-600 dark:text-slate-300">"Barangsiapa yang tidak mensyukuri nikmat, maka ia telah bersiap-siap untuk kehilangannya. Dan barangsiapa yang mensyukurinya, maka ia telah mengikat nikmat itu dengan ikatan yang kuat."</span>
              </div>
              <p class="mb-4">
                Marilah kita hiasi hari-hari kita dengan lisan yang basah akan hamdalah dan hati yang rida atas segala ketentuan-Nya, sembari istiqomah mengamalkan nilai-nilai <strong>${point}</strong>.
              </p>
              `;
              appNyataHTML = `
                <strong>Aplikasi Nyata & Tantangan Zaman:</strong> Biasakan mencatat atau merenungi tiga nikmat yang kita terima setiap harinya sebelum tidur, sebagai terapi spiritual melatih rasa syukur dan qana'ah berlandaskan nilai <strong>${point}</strong>.
              `;
            }
          }

          contentParagraph = `
            ${closingHTML}
            <div class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              ${appNyataHTML}
            </div>
          `;
        }
      } else if (lang === 'jv') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              Magepokan kaliyan poin kapisan ingkang dados rukun rembag, inggih punika babagan <strong>${translatedPoint}</strong>. Wonten ing piwulang Islam ingkang agung, pangertosan ingkang lebet babagan punika boten namung dados rembag pikiran kemawon, nanging minangka pondasi utami ingkang nemtokaken bakoh utawi ringkihing iman kita dhumateng Allah SWT. Tanpa wontenipun pangertosan ingkang cetha, sawijining Muslim bakal gampil sanget kegiles dening ombak syubhat lan syahwat jaman sakpunika.
            </p>
            <p class="mb-4">
              Gusti Allah SWT wonten ing Kitab Suci Al-Qur'an paring dhawuh supados kita ngginakaken akal sehat lan manah kagem nggalih babagan punika kanthi sae lan terus-terusan. Pangertosan ingkang leres bakal nglairaken rasa wedi ingkang dibarengi rasa tresna dhumateng Allah, saingga kita saged nindakaken sedaya amalan kanthi ikhlas.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata ing Gesang Padintenan:</strong> Ing jaman digital punika, mangga kita luangaken wekdal kagem maos lan nggalih babagan <strong>${translatedPoint}</strong> punika, mligi kagem njaga kulawarga kita saking bebaya dunya lan akhirat.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              Salajengipun, poin kaping kalih ingkang boten kalah wigati inggih punika ngenani <strong>${translatedPoint}</strong>. Amalan nyata punika wujud saking iman ingkang tulus wonten ing manah. Iman tanpa amal punika kados dene wit ingkang rimbun nanging boten nate ngasilaken woh; katingal endah nanging boten paring manfaat kagem tiyang sanes.
            </p>
            <p class="mb-4">
              Para ulama bilih iman punika dipun buktikaken kanthi tumindak ingkang shaleh wonten ing gesang padintenan. Menawi iman kita kiat, mila kita badhe gampil nindakaken kesaenan lan nebihi sedaya kemaksiatan ingkang dipun sengit dening Gusti Allah.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata ing Gesang Padintenan:</strong> Wujud nyata saking nindakaken <strong>${translatedPoint}</strong> inggih punika njaga kejujuran ing pakaryan lan nebihi transaksi ingkang haram kados judi lan pinjol.
            </p>
          `;
        } else {
          contentParagraph = `
            <p class="mb-4">
              Dene poin kaping tiga kagem nyampurnakaken sedaya inggih punika babagan <strong>${translatedPoint}</strong>. Njaga keistiqomahan punika pancen awrat sanget, nanging kanthi pitulungan saking Allah SWT, kita mesthi saged ngadhepi sedaya pacoben lan fitnah ing jaman akhir punika.
            </p>
            <p class="mb-4">
              Supados saged istiqomah, kita kedah tansah ngresiki manah saking penyakit batin kados sombong, riya', lan hubbud-dunya (tresna ndonya ingkang kelangkung). Mangga kita gantos penyakit punika kanthi sifat ikhlas lan pasrah sumeleh (tawakal) dhumateng takdiripun Allah SWT.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata ing Gesang Padintenan:</strong> Mangga kita pados lingkungan lan kanca ingkang shaleh kagem njaga keistiqomahan kita wonten ing margi <strong>${translatedPoint}</strong> punika.
            </p>
          `;
        }
      } else if (lang === 'su') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              Perkawis poin kahiji anu kacida utami, nyaeta ngeunaan <strong>${translatedPoint}</strong>. Dina ajaran Islam anu mulia, pamahaman anu jero ngeunaan perkawis ieu sanés ngan saukur obrolan wungkul, tapi mangrupikeun pondasi awal anu nangtukeun kokohna kaimanan urang ka Allah SWT. Lamun taya pamahaman anu bener, kaimanan urang bakal gampang oyag ku gogoda jaman.
            </p>
            <p class="mb-4">
              Allah SWT dina Al-Qur'an salawasna ngajak urang sadaya sangkan ngagunakeun akal sareng manah pikeun ngalenyepan perkawis ieu sacara jero. Pamahaman anu bener bakal ngahirupkeun rasa sieun anu dibarengan ku rasa cinta ka hadirat Allah SWT.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata dina Kahirupan:</strong> Mangga urang gunakeun waktos urang unggal dinten kanggo diajar ngeunaan <strong>${translatedPoint}</strong> supados akidah urang sareng kulawarga salawasna kajaga tina rupa-rupa fitnah.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              Salajengna, poin kadua anu teu kirang pentingna nyaeta ngeunaan <strong>${translatedPoint}</strong>. Amalan nyata tina kaimanan urang kedah dibuktikeun dina kahirupan sapopoé. Para ulama parantos nyebatkeun yén kaimanan anu sajati nyaeta anu napel dina jero manah sareng dibuktikeun ku amal perbuatan anu ikhlas. Kaimanan tanpa amal mah sapertos tangkal anu rindang tapi teu buahan.
            </p>
            <p class="mb-4">
              Ku kituna, dina kahirupan sapopoé, urang kedah ngabuktikeun cinta urang ka Allah ku cara ngalaksanakeun amalan-amalan anu shaleh dumasar kana tuntunan anu parantos diajarkeun ku Rasulullah SAW.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata dina Kahirupan:</strong> Bukti nyata tina ngajalankeun <strong>${translatedPoint}</strong> di jaman ayeuna nyaeta ku cara milari kasab atanapi rezeki anu halal sareng nebihan sagala rupi paculukan finansial anu haram.
            </p>
          `;
        } else {
          contentParagraph = `
            <p class="mb-4">
              Dupi poin katilu anu nyampurnakeun sadayana nyaeta ngeunaan <strong>${translatedPoint}</strong>. Ngajaga kaiqomahan atanapi konsistensi dina kahoyong kasaean memang meryogikeun perjuangan anu ageung, tapi ku ayana pitulung ti Allah SWT, urang bakal dipasihan kakuatan pikeun nyanghareupan gogoda jaman.
            </p>
            <p class="mb-4">
              Supados tiasa istiqomah, urang kedah proaktif ngabersihan jiwa (tazkiyatun nufus) tina panyakit hate sapertos sombong, riya', sareng mikacinta dunya anu kaleuleuwihi. Hayu urang ganti ku rasa ikhlas sareng tawakal anu total ka Allah.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata dina Kahirupan:</strong> Sangkan urang tetep istiqomah dina ngajalankeun <strong>${translatedPoint}</strong>, mangga urang sering sumping ka majelis taklim sareng kumpul sareng jalmi-jalmi shaleh.
            </p>
          `;
        }
      } else if (lang === 'ms') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              Mengenai poin pertama yang sangat mendasar ini, iaitu tentang <strong>${translatedPoint}</strong>. Di dalam ajaran Islam yang mulia, kesedaran dan kefahaman yang mendalam mengenai hal ini bukanlah sekadar wacana intelektual semata-mata, melainkan fondasi awal yang menentukan kukuh atau rahbunya seluruh bangunan kesalehan seorang hamba.
            </p>
            <p class="mb-4">
              Allah SWT di dalam Kitab-Nya yang suci sentiasa menyeru orang-orang beriman agar merenungi hal ini secara mendalam. Pemahaman yang betul akan melahirkan rasa takut yang disertai pengagungan kepada Allah SWT, yang menuntun kita untuk menyelaraskan setiap ucapan dan tindakan dengan syariat-Nya.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata & Cabaran Zaman:</strong> Di era digital ini, marilah kita meluangkan masa setiap hari untuk merenungi hakikat <strong>${translatedPoint}</strong> ini, serta menjauhkan diri daripada kelalaian media sosial yang merosakkan fokus rohani kita.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              Seterusnya, langkah kedua yang tidak kurang pentingnya ialah memahami dan mengamalkan secara konkrit mengenai <strong>${translatedPoint}</strong>. Pada tahapan praktikal ini, keimanan kita dituntut untuk menjelmakan menjadi aksi nyata, iaitu amal soleh yang memberikan manfaat. Iman tanpa amal adalah seperti pohon yang rimbun tetapi tidak berbuah.
            </p>
            <p class="mb-4">
              Sebagaimana kata para ulama, iman sejati ialah apa yang tertanam kukuh di dalam hati dan dibuktikan dengan amal perbuatan yang ikhlas. Kita mesti membuktikan keimanan kita dalam bentuk pergaulan yang baik, kejujuran dalam mencari rezeki, dan amanah dalam tugasan harian.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata & Cabaran Zaman:</strong> Bukti keimanan kita dalam mempraktikkan <strong>${translatedPoint}</strong> adalah dengan menolak sekeras-kerasnya riba, rasuah, judi internet, dan segala kemudahan finansial yang haram.
            </p>
          `;
        } else {
          contentParagraph = `
            <p class="mb-4">
              Poin ketiga yang menyempurnakan seluruh perjalanan rohani kita ialah sentiasa memelihara dan memperkukuh <strong>${translatedPoint}</strong>. Mengekalkan kebaikan memerlukan keistiqomahan (konsistensi) yang tinggi dalam menghadapi dugaan hidup akhir zaman.
            </p>
            <p class="mb-4">
              Untuk mencapai istiqomah, kita perlu membersihkan jiwa daripada segala penyakit batin seperti riya', hasad, dan cinta dunia yang melampau. Gantikanlah dengan sifat reda, syukur, dan tawakal sepenuhnya kepada ketentuan qada' dan qadar Allah SWT.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata & Cabaran Zaman:</strong> Marilah kita sentiasa mendampingi para ulama, menghadiri majelis ilmu, dan memakmurkan masjid demi memelihara keistiqomahan kita dalam <strong>${translatedPoint}</strong>.
            </p>
          `;
        }
      } else if (lang === 'bug') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              Passaleng poin pammulanna, iyami ritu <strong>${translatedPoint}</strong>. Ri laleng pappasenna agama Islam malebbi'na, akkatenningang ri passaleng iye' ritu lambang madécéng untu' makkatenning ri aqidah tauhidta lao ri Allah SWT. Narekko de'gaga pappahang iye', umma' sellengé gampangngi ri giling-giling ri sining fitnah jaman sakpunika.
            </p>
            <p class="mb-4">
              Allah Ta'ala ri laleng Kitta' Marajaé marasa asennangeng lao ri sining rupa tau iya ngerang akkalena ngerang ateitta untu' makkulaga ngerang akkaleta ngerang ateitta madécéng ri passaleng iye'.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata ri Laleng Lalenna:</strong> Mangga kita meluangaken wekdal kagem maos lan nggalih babagan <strong>${translatedPoint}</strong> punika, mligi kagem njaga kulawarga kita saking bebaya jaman.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              Maddiona, poin maduanna iya de'to nagaga maseddingngi ri passaleng <strong>${translatedPoint}</strong>. Gau' madécéng iya makkatenningngé ri gau'na ritu asennangeng lao ri seddi-seddi rupa tau. Pappasenna para ulamaé makkeda gau' madécéng iye' ritu rupa nyata'na akkatenningang ateitta.
            </p>
            <p class="mb-4">
              Akkatenningang ateitta ritu sining nyata'na ri laleng sining gau' madécéng padintenan, kados nyampurnakaken akhalak nennia megau' sining amalan sunnahé.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata ri Laleng Lalenna:</strong> Wujud nyata saking nindakaken <strong>${translatedPoint}</strong> inggih punika njaga kejujuran ing pakaryan lan nebihi transaksi ingkang haram kados judi.
            </p>
          `;
        } else {
          contentParagraph = `
            <p class="mb-4">
              Poin matellunna iya mappasukkke' manengngi sining pakkasiwiangta iyami ritu <strong>${translatedPoint}</strong>. Makkatenning ri gau' madécéng ritu memeng mawatang, narekko ri amasei ri Allah SWT weddingngi ri papoleng lalenna madécéng ritu.
            </p>
            <p class="mb-4">
              Maccingnge ateitta ritu sining lambang ketaatan lurusé, iya weddingngi ri papoleng asennangeng batin nerekko sumeleh dhumateng takdiripun Allah SWT.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Aplikasi Nyata ri Laleng Lalenna:</strong> Mangga kita pados lingkungan lan kanca ingkang shaleh kagem njaga keistiqomahan kita wonten ing margi <strong>${translatedPoint}</strong> punika.
            </p>
          `;
        }
      } else if (lang === 'bjn') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              Mengenai poin kapertama nang dasar banar ini, yaitu tentang <strong>${translatedPoint}</strong>. Di dalam ajaran Islam nang mulia, paham wan sadar nang dalam ngenai hal ini lain am sekadar pandiran haja, melainkan pondasi awal nang menetukan kukuh wan kadasnya keshalehan kita sebagai hamba Allah. Lamun kada paham, iman kita gampang banar digulung cobaan jaman.
            </p>
            <p class="mb-4">
              Allah SWT di dalam Al-Qur'an menyuruh kita gasan mamikirakan hal ini baimbai gasan membakar rasa takutan kita nang dibarengi rasa cinta lawan Allah SWT, sahingga kelakuan kita sesuai lawan syariat-Nya.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Praktek Nyata Matan Kahidupan:</strong> Ayo kita luangakan waktu gasan belajar wan mamikirakan ngenai <strong>${translatedPoint}</strong> ini, supaya akidah diri wan kaluarga salajur aman wan barokah.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              Salanajurnya, langkah kadua nang kada kalah pentingnya yaitu paham wan mengamalaakan secara nyata ngenai <strong>${translatedPoint}</strong>. Pada tingkatan praktis ini, iman kita dituntut gasan jadi bukti nyata beramal shaleh gasan banyaki kegunaan gasan sesama. Iman nang kada digawi lawan amal ibarat pohon nang rimbun tapi kadada buahnya sama sekali.
            </p>
            <p class="mb-4">
              Kaya wasiat para ulama bilih iman bujur itu ada di dalam hati wan digawi lawan kelakuan. Kita musti membuktikan kaimanan kita lawan kelakuan jujur gasan becari nafkah halal wan amanah dalam barataan gawean.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Praktek Nyata Matan Kahidupan:</strong> Bukti kaimanan nyata dalam <strong>${translatedPoint}</strong> jaman wahini yaitu wani menulak barataan tawaran riba, judi online, pinjol ilegal, wan becari nafkah nang halal haja.
            </p>
          `;
        } else {
          contentParagraph = `
            <p class="mb-4">
              Poin katiga nang menyampurnakan barataan perjalanan rohani kita yaitu menjaga wan mengukuhakan <strong>${translatedPoint}</strong>. Menjaga kebaikan wan keistiqomahan pancen ganal banar cobaannya, tapi lawan berkat pertolongan Allah SWT kita pasti kawa melewati barataan fitnah akhir zaman ini.
            </p>
            <p class="mb-4">
              Supaya kawa istiqomah, kita musti menyuciakan jiwa matan penyakit batin kaya sombong, riya', wan rakus lawan duniawi. Ayo ganti lawan rasa ikhlas wan pasrah tawakal lawan ketetapan Allah SWT.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Praktek Nyata Matan Kahidupan:</strong> Supaya kita kawal istiqomah mengamalaakan <strong>${translatedPoint}</strong>, rajini sumping ka majelis ilmu wan bekumpul lawan urang-urang shaleh.
            </p>
          `;
        }
      } else if (lang === 'ar') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              أما بالنسبة للنقطة الأولى والأساسية، وهي المتعلقة بـ <strong>${translatedPoint}</strong>. ففي شريعة الإسلام الغراء، ليس فهم هذا الأمر مجرد ترف فكري أو نقاش نظري، بل هو الركيزة الأساسية والعقيدة الراسخة التي يبنى عليها إيمان العبد وصلاحه. وبدون هذا الفهم الواضح واليقين الثابت، يسهل على المسلم التذبذب والانجراف وراء الشهوات والشبهات في هذا العصر المليء بالفتن والمغريات.
            </p>
            <p class="mb-4">
              لقد حثنا الله سبحانه وتعالى في كتابه الكريم على تفكر وتأمل هذا الأمر، ليتولد في قلوبنا الخوف المقترن بالمحبة والتعظيم لله عز وجل، مما يدفعنا إلى توجيه كل أقوالنا وأعمالنا وحركاتنا وسكناتنا وفق ما يرضي الله سبحانه وتعالى.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>التطبيق العملي في الحياة:</strong> في هذا العصر الرقمي، يجب علينا تخصيص جزء من وقتنا يوميًا لنتفكر في حقيقة <strong>${translatedPoint}</strong> ونربي أولادنا وأهلينا عليها، لنحميهم من المهالك والاعتقادات الفاسدة.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              ثم إن الخطوة الثانية التي لا تقل أهمية عن الأولى هي العمل بمقتضى <strong>${translatedPoint}</strong> وتطبيقه في واقعنا المعاش. فالعقيدة والإيمان لا بد لهما من ثمرة تظهر على الجوارح، وهي العمل الصالح. والإيمان بلا عمل كشجرة بلا ثmer، لا ينفع صاحبها ولا مجتمعه.
            </p>
            <p class="mb-4">
              وقد أثر عن السلف الصالح رضي الله عنهم قولهم: <em>"ليس الإيمان بالتمني ولا بالتحلي، ولكن الإيمان ما وقر في القلب وصدقه العمل."</em> فلنثبت صدق إيماننا بحسن المعاملة والأمانة والصدق في كسب لقمة العيش والبعد عن المحرمات.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>التطبيق العملي في الحياة:</strong> إن أعظم مظهر للعمل بـ <strong>${translatedPoint}</strong> في زماننا هو اجتناب كسب المال الحرام بشتى صوره، كالقمار الإلكتروني والربا والرشوة، والصبر على الكسب الحلال الطيب.
            </p>
          `;
        } else {
          contentParagraph = `
            <p class="mb-4">
              وأما النقطة الثالثة التي تكتمل بها مسيرتنا الإيمانية وتتوج بها أعمالنا فهي الثبات والاستمرار على <strong>${translatedPoint}</strong>. فالاستقامة على الحق هي من أعظم التحديات التي يواجهها المسلم، وهي تحتاج إلى مجاهدة مستمرة وصبر عظيم وصحبة صالحة تعين على طاعة الله تعالى.
            </p>
            <p class="mb-4">
              ولتحقيق الاستقامة والسبات، لا بد لنا من تطهير قلوبنا من أمراض القلوب كالكبر والرياء والحسد وحب الدنيا، واستبدالها بالإخلاص لله تعالى والتوكل عليه والرضا بقضائه وقدره، لتعيش نفوسنا مطمئنة طائعة لربها.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>التطبيق العملي في الحياة:</strong> لكي نثبت على <strong>${translatedPoint}</strong>، علينا بملازمة بيوت الله والمواظبة على قراءة القرآن وحضور مجالس العلم، ومرافقة الصالحين الذين يذكروننا بالله إذا نسينا.
            </p>
          `;
        }
      } else if (lang === 'en') {
        if (index === 0) {
          contentParagraph = `
            <p class="mb-4">
              Regarding the first and most fundamental point, which is about <strong>${translatedPoint}</strong>. In the noble teachings of Islam, a deep understanding of this matter is not merely an intellectual exercise, but the very foundation of our devotion to Allah. Without a clear and solid comprehension of this point, a Muslim will easily be swayed, shaken, and carried away by the storms of doubts (Shubuhat) and worldly desires (Shahawat) that characterize modern society.
            </p>
            <p class="mb-4">
              Allah SWT in His Holy Book constantly encourages believers to utilize their intellect and sound hearts to reflect deeply on this. Proper understanding breeds a sincere fear (Khashyah) accompanied by deep love and glorification of Allah SWT, which in turn guides us to align our speech, actions, and decisions with the boundaries of His Shariah.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Practical Application in Life:</strong> In this digital age, our biggest challenge is the flood of distractions. Let us allocate at least 15-30 minutes daily to disconnect from social media and reflect on <strong>${translatedPoint}</strong>, ensuring our family's creed remains protected.
            </p>
          `;
        } else if (index === 1) {
          contentParagraph = `
            <p class="mb-4">
              Moving forward, the second crucial step for all of us is to understand, internalize, and concretely implement <strong>${translatedPoint}</strong>. At this practical level, all our theoretical knowledge of faith must translate into active, righteous deeds. Faith (Iman) without action is like a lush tree that never bears fruit; it might look beautiful from a distance, but it provides no real benefit.
            </p>
            <p class="mb-4">
              As the great Tabii scholar Al-Hasan al-Basri (may Allah have mercy on him) wisely remarked: <em>"Faith is not achieved through mere wishful thinking or outward adornments. Rather, true faith is that which is firmly rooted in the depths of the heart and validated through sincere, righteous actions."</em>
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Practical Application in Life:</strong> The concrete manifestation of implementing <strong>${translatedPoint}</strong> today is protecting our integrity and honesty. Amidst modern financial trials like online gambling and illegal loans, true faith is shown by rejecting all forbidden financial pathways and remaining patient with what is halal.
            </p>
          `;
        } else {
          contentParagraph = `
            <p class="mb-4">
              The third point that completes and perfects our spiritual journey is to continuously maintain and strengthen <strong>${translatedPoint}</strong>. We must recognize that maintaining a good habit is often far more challenging and requires greater spiritual effort than initiating it. Sustaining these values demands unwavering consistency (Istiqamah) in our daily lives.
            </p>
            <p class="mb-4">
              To attain this level of steadfastness, we must proactively engage in Tazkiyatun Nufus (purification of the soul) from spiritual diseases such as pride, showing off (Riya'), jealousy (Hasad), and excessive love for the material world. We must replace these with absolute sincerity, humility, and complete reliance (Tawakkul) upon Allah's decrees.
            </p>
            <p class="mt-4 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 rounded-xl border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 italic leading-relaxed text-sm">
              <strong>Practical Application in Life:</strong> Staying steadfast in <strong>${translatedPoint}</strong> requires a spiritual support system. Surround yourself with righteous companions, routinely attend Islamic gatherings, and make the mosque your second home.
            </p>
          `;
        }
      }

      return `
      <div class="outline-section space-y-3 p-5 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <h4 class="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-2 font-sans">
          <span class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ${index + 1}
          </span>
          ${translatedPoint}
        </h4>
        <div class="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed md:leading-loose space-y-4 select-text">
          ${contentParagraph}
        </div>
      </div>
      `;
    }).join("");
  }

  // ---------------------------------------------------------------
  // FINAL CONCATENATED SERMON TEMPLATE IN SELECTED LANGUAGE
  // ---------------------------------------------------------------
  return `
<div class="space-y-8 select-text" style="direction: ${lang === 'ar' ? 'rtl' : 'ltr'}; text-align: ${lang === 'ar' ? 'right' : 'left'};">
  
  <!-- KHUTBAH PERTAMA SECTIONS -->
  <div class="space-y-6">
    <div class="flex items-center gap-2 border-l-4 border-[#064E3B] pl-3">
      <h3 class="text-xl font-bold font-serif text-[#064E3B] dark:text-emerald-300">
        ${firstKhutbahTitle}
      </h3>
    </div>

    <!-- ARABIC INTRO FIRST -->
    <div class="space-y-2">
      <div class="flex items-center">
        <span class="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] md:text-[11px] font-extrabold px-2 py-1.5 md:px-2.5 md:py-1.5 rounded-lg border border-amber-500/20 font-sans shadow-sm whitespace-normal leading-relaxed">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
          ${rukunBadgeText}
        </span>
      </div>
      <div class="arabic-block p-3.5 sm:p-5 md:p-6 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl leading-[1.9] sm:leading-[2.2] md:leading-[2.5] text-right font-serif text-lg sm:text-xl md:text-2xl text-emerald-900 dark:text-emerald-200" style="direction: rtl;">
        ${firstKhutbahArabicIntro}
      </div>
      ${lang !== 'ar' ? `
      <details class="group bg-slate-100/50 dark:bg-slate-900/30 rounded-xl border border-slate-200/40 dark:border-slate-800/40 overflow-hidden">
        <summary class="flex items-center justify-between p-3 text-xs font-semibold text-slate-500 dark:text-slate-400 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors select-none">
          <span>Terjemahan Muqoddimah</span>
          <span class="text-[10px] text-emerald-700 dark:text-emerald-400 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div class="p-3.5 pt-1 border-t border-slate-200/20 text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed bg-slate-50/50 dark:bg-slate-900/20">
          ${selectedVar.translation}
        </div>
      </details>
      ` : ''}
    </div>

    <!-- LITURGICAL TRANSLATED GREETING & INTRO -->
    <div class="prose dark:prose-invert text-slate-700 dark:text-slate-300 space-y-4 text-base md:text-[17px] leading-relaxed md:leading-loose font-serif">
      <p>
        <strong>${welcomeText}</strong>
      </p>
      <p>
        ${praiseIntro}
      </p>
      <p>
        ${shalawatIntro}
      </p>
      <p>
        ${taqwaIntro}
      </p>
    </div>

    <!-- MAIN TRANSITION TO OUTLINES -->
    <div class="space-y-6 pt-2">
      <div class="border-t border-slate-100 dark:border-slate-800 my-4"></div>
      
      <p class="font-semibold text-slate-800 dark:text-slate-200 text-base md:text-lg leading-relaxed font-serif">
        ${themeTransition}
      </p>

      ${outlinesHTML}
    </div>

    <!-- TRANSITION INDO/LANG CLOSING -->
    <div class="prose dark:prose-invert text-slate-700 dark:text-slate-300 space-y-4 pt-4 text-base md:text-[17px] leading-relaxed md:leading-loose font-serif">
      <p>
        ${closingIntro}
      </p>
    </div>

    <!-- ARABIC CLOSING OF FIRST SERMON -->
    <div class="space-y-2">
      <div class="flex items-center">
        <span class="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-[10px] md:text-[11px] font-extrabold px-2 py-1.5 md:px-2.5 md:py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 font-sans shadow-sm whitespace-normal leading-relaxed">
          ${transisiBadgeText}
        </span>
      </div>
      <div class="arabic-block p-3.5 sm:p-5 md:p-6 bg-emerald-50/30 dark:bg-emerald-950/10 rounded-xl leading-[1.9] sm:leading-[2.2] md:leading-[2.5] text-right font-serif text-base sm:text-lg md:text-xl text-emerald-900/80 dark:text-emerald-200/80" style="direction: rtl;">
        ${ARABIC_TRANSISI}
      </div>
    </div>

  </div>

  <div class="border-t border-slate-100 dark:border-slate-800 my-6"></div>

  <!-- KHUTBAH KEDUA SECTIONS -->
  <div class="space-y-6">
    <div class="flex items-center gap-2 border-l-4 border-[#064E3B] pl-3">
      <h3 class="text-xl font-bold font-serif text-[#064E3B] dark:text-emerald-300">
        ${secondKhutbahTitle}
      </h3>
    </div>

    <!-- ARABIC INTRO SECOND -->
    <div class="space-y-2">
      <div class="flex items-center">
        <span class="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] md:text-[11px] font-extrabold px-2 py-1.5 md:px-2.5 md:py-1.5 rounded-lg border border-amber-500/20 font-sans shadow-sm whitespace-normal leading-relaxed">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
          ${rukunBadgeTextSecond}
        </span>
      </div>
      <div class="arabic-block p-3.5 sm:p-5 md:p-6 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl leading-[1.9] sm:leading-[2.2] md:leading-[2.5] text-right font-serif text-lg sm:text-xl md:text-2xl text-emerald-900 dark:text-emerald-200" style="direction: rtl;">
        ${ARABIC_MUKADDIMAH_2}
      </div>
    </div>

    <!-- ARABIC FINAL PRAYER -->
    <div class="space-y-2">
      <div class="flex items-center">
        <span class="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] md:text-[11px] font-extrabold px-2 py-1.5 md:px-2.5 md:py-1.5 rounded-lg border border-amber-500/20 font-sans shadow-sm whitespace-normal leading-relaxed">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
          ${rukunBadgeTextPrayer}
        </span>
      </div>
      <div class="arabic-block p-3.5 sm:p-5 md:p-6 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl leading-[1.9] sm:leading-[2.2] md:leading-[2.5] text-right font-serif text-lg sm:text-xl md:text-2xl text-emerald-900 dark:text-emerald-200" style="direction: rtl;">
        ${ARABIC_DOA_2}
      </div>
    </div>

  </div>

</div>
  `;
}
