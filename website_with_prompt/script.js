const galleryImages = document.querySelectorAll('.gallery img');
const infoBox = document.getElementById('infoBox');
const infoContent = document.getElementById('infoContent');

// Her bir resim için farklı bilgiler içeren bir nesne
const imageInfos = {
    'merkur.jpg': 'Merkür, Güneş Sistemi\'nin en küçük gezegenidir. Yüzeyi kraterlerle dolu ve sıcaklığı oldukça değişkendir. Merkür\'ün çevresindeki yörüngesi, Güneş\'e yakın olmasından dolayı Dünya\'nınkinin tersine dönüktür.',
    'venus.jpg': 'Venüs, Güneş Sistemi\'nde ikinci sırada bulunan ve Dünya\'ya en yakın gezegendir. Kalın bulut tabakası nedeniyle yüzeyini görmek zordur. Venüs, sıcaklığı ve atmosferik koşulları nedeniyle yaşam için uygun bir gezegen değildir.',
    'dunya.jpg': 'Dünya, Güneş Sistemi\'nde yaşam olan tek gezegen olarak bilinir. Su bulunduran ve atmosferi ile yaşamı destekleyen bir gezegendir. Yüzeyinde dağlar, ovalar, nehirler ve okyanuslar gibi çeşitli yer şekilleri bulunmaktadır.',
    'mars.jpg': 'Mars, kızıl gezegen olarak da bilinir ve Dünya\'ya en yakın dördüncü gezegendir. Yüzeyindeki kızıl rengi, yüksek miktarda demir oksit içermesinden kaynaklanmaktadır. Mars, potansiyel olarak insanların yaşayabileceği bir gezegen olarak araştırılmaktadır.',
    'jupiter.jpg': 'Jüpiter, Güneş Sistemi\'nin en büyük gezegenidir. Büyük Kırmızı Leke gibi belirgin özelliklere sahiptir. Jüpiter, büyük ölçüde hidrojen ve helyumdan oluşur ve etrafında birçok uydusu bulunur.',
    'saturn.jpg': 'Satürn, halkaları ile bilinen bir gezegendir. Halkaları, buz ve kaya parçalarından oluşur. Satürn, Güneş Sistemi\'ndeki en büyük ikinci gezegendir ve gaz devi olarak sınıflandırılır.',
    'uranus.jpg': 'Uranüs, eğik dönme ekseniyle dikkat çeken bir gezegendir. Diğer gezegenlerin tersine, yörüngesi yatay değil, dikeydir. Uranüs\'ün atmosferi hidrojen ve helyum ile birlikte su ve amonyak buzundan oluşur.',
    'neptun.jpg': 'Neptün, Güneş Sistemi\'nin en uzak gezegenidir. Mavi rengi, metan gazından kaynaklanır. Neptün\'ün büyük bir fırtına olan Büyük Karanlık Leke\'si bulunmaktadır.'
};

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const alt = img.getAttribute('alt');
        // Resmin alt özniteliğine göre bilgiyi al
        const info = imageInfos[img.getAttribute('src').split('/').pop()];
        // Bilgi kutusunu güncelle
        infoContent.innerHTML = `<h2>${alt}</h2><p>${info}</p>`;
        infoBox.style.display = 'block'; // Bilgi kutusunu göster
    });
});

function closeInfoBox() {
    infoBox.style.display = 'none'; // Bilgi kutusunu gizle
}
