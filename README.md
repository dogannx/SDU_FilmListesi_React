# Kampüs Film Kulübü - Dizi Arama Uygulaması

Bu proje, Süleyman Demirel Üniversitesi Film Kulübü için geliştirilmiş, TVMaze API'sini kullanarak dizi arama, filtreleme ve gösterim listesi oluşturma özelliklerine sahip bir React uygulamasıdır.

## Canlı Demo

Uygulamanın canlı versiyonuna buradan ulaşabilirsiniz: **[https://dogannx.github.io/SDU_FilmListesi_React/](https://dogannx.github.io/SDU_FilmListesi_React/)**

## Özellikler

- **Dizi Arama:** Anahtar kelime ile dizi arama.
- **Filtreleme:** Tür, dil ve minimum puana göre sonuçları filtreleme.
- **Gösterim Listesi:** Beğenilen dizileri "Gösterime Girecekler" listesine ekleyip çıkarma.
- **Sayfalama:** Arama sonuçlarını sayfalar arasında gezinme.
- **Detay Sayfası:** Bir dizinin detaylı bilgilerini ve bölüm listesini görüntüleme.

## Kullanılan Teknolojiler

- React
- `useReducer` ile state yönetimi
- Axios ile API istekleri
- React Router Dom ile sayfa yönlendirme

## Kurulum ve Çalıştırma

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/dogannx/SDU_FilmListesi_React.git
   ```
2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```
3. Projeyi geliştirme modunda başlatın:
   ```bash
   npm run dev
   ```
