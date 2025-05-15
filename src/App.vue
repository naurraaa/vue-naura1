<template>
  <div class="container">
    <header>
      <div class="logo">
        <i class="fas fa-utensils"></i>
        <span>Clair De Lune</span>
      </div>
      <nav>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Tentang Kami</a></li>
          <li><a href="#">Kontak</a></li>
          <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
        </ul>
      </nav>
    </header>
    
    <section class="hero">
      <div class="hero-content">
        <h1>Makanan Sehat & Lezat untuk Gaya Hidup Modern</h1>
        <p>Nikmati berbagai pilihan makanan sehat, lezat, dan bergizi yang disiapkan dengan penuh cinta oleh Chef kami. Semua bahan yang kami gunakan adalah bahan organik premium untuk kesehatan Anda.</p>
        <button class="btn">Pesan Sekarang</button>
      </div>
      <div class="hero-image">
        <img src="./assets/logo food.jpg" alt="Cafe yang menyajikan makanan sehat">
      </div>
    </section>
    
    <h2 class="section-title">Menu Favorit Kami</h2>                                              ``
    
    <section class="products">
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image" :alt="product.name">
        </div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-price">{{ product.price }}</div>
          <button class="btn">Tambahkan ke Keranjang</button>
        </div>
      </div>
    </section>
    
    
    <h2 class="section-title">Apa Kata Pelanggan Kami</h2>
    
    <section class="testimonials">
      <div class="testimonial-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <img :src="testimonial.avatar" :alt="testimonial.name">
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <footer>
      <div class="footer-content">
        <div class="footer-column">
          <h3>Clair De Lune</h3>
          <p>Makanan sehat dan lezat untuk gaya hidup modern Anda. Semua bahan yang kami gunakan adalah bahan organik premium.</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Tautan Cepat</h3>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Kontak</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Kontak Kami</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> Jl. Makanan Sehat No. 123, Jakarta</li>
            <li><i class="fas fa-phone"></i> +62 123 456 7890</li>
            <li><i class="fas fa-envelope"></i> info@deliciafood.com</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Jam Operasional</h3>
          <ul>
            <li>Senin - Jumat: 08:00 - 21:00</li>
            <li>Sabtu: 09:00 - 22:00</li>
            <li>Minggu: 10:00 - 20:00</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Clair De Lune. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import salad from '@/assets/salad.jpg'
import quiona from '@/assets/bowl quiona.jpg'
import bowl from '@/assets/Bowl.jpg'
import smoky from '@/assets/smoky.jpg'
import sayur from '@/assets/sup sayur.jpg'
import matcha from '@/assets/Iced Matcha.jpg'

export default {
  name: 'App',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Salad Buah Segar',
          description: 'Kombinasi buah-buahan segar dengan saus yogurt rendah kalori.',
          price: 'Rp 45.000',
          image: salad
        },
        {
          id: 2,
          name: 'Bowl Quinoa',
          description: 'Quinoa dengan sayuran segar, alpukat, dan saus lemon.',
          price: 'Rp 55.000',
          image: quiona
        },
        {
          id: 3,
          name: 'Smoothie Bowl Acai',
          description: 'Acai berry dengan granola, pisang, dan madu murni.',
          price: 'Rp 50.000',
          image: bowl
        },
        {
          id: 4,
          name: 'Wrap Ayam Panggang',
          description: 'Dada ayam panggang dengan hummus dan sayuran segar.',
          price: 'Rp 60.000',
          image: smoky
        },
        {
          id: 5,
          name: 'Sup Sayuran Organik',
          description: 'Sup sayuran musiman dengan rempah-rempah pilihan.',
          price: 'Rp 40.000',
          image: sayur
        },
        {
          id: 6,
          name: 'Matcha Latte',
          description: 'Matcha premium dengan susu almond, rendah gula.',
          price: 'Rp 35.000',
          image: matcha
        }
      ],
      testimonials: [
        {
          id: 1,
          text: 'Makanan di cafe ini tidak hanya lezat tetapi juga sangat sehat. Saya jadi lebih berenergi setelah rutin memesan makanan dari sini.',
          name: 'Nevanda Meilyna',
          position: 'Yoga Instructor',
          avatar: 'https://placehold.co/100x100'
        },
        {
          id: 2,
          text: 'Cafe yang terbaik! Makanan yang disajikan selalu segar dan penuh rasa. Saya sangat merekomendasikan DeliciaFood untuk siapa saja yang peduli dengan kesehatan.',
          name: 'Fina Nuril',
          position: 'Nutritionist',
          avatar: 'https://placehold.co/100x100'
        },
        {
          id: 3,
          text: 'Sebagai seorang model, saya sangat memperhatikan asupan makanan. Clair De Lune Cafe menjadi pilihan terbaik saya untuk mendapatkan nutrisi yang tepat dengan cita rasa yang luar biasa.',
          name: 'Vidya Eka',
          position: 'Fashion Model',
          avatar: 'https://placehold.co/100x100'
        }
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #fff5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #ff9fb0;
}

.logo {
  font-size: 32px;
  font-weight: bold;
  color: #ff6b8b;
  display: flex;
  align-items: center;
}

.logo i {
  margin-right: 10px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  text-decoration: none;
  color: #ff6b8b;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s ease;
}

nav ul li a:hover {
  color: #ff4d6d;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
}

.hero-content {
  flex: 1;
  padding-right: 50px;
}

.hero-content h1 {
  font-size: 48px;
  color: #ff4d6d;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(255, 107, 139, 0.2);
}

.btn {
  padding: 12px 30px;
  background-color: #ff6b8b;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #ff4d6d;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 107, 139, 0.4);
}

.section-title {
  text-align: center;
  font-size: 36px;
  color: #ff4d6d;
  margin: 60px 0 40px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(255, 107, 139, 0.3);
}

.product-image {
  height: 200px;
  width: 100%;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.product-info {
  padding: 20px;
}

.product-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.product-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.product-price {
  font-size: 22px;
  font-weight: 700;
  color: #ff4d6d;
  margin-bottom: 20px;
}

.chef-section {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  margin: 60px 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.chef-image {
  flex: 1;
  padding-right: 30px;
}

.chef-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.chef-content {
  flex: 1;
}

.chef-content h2 {
  font-size: 32px;
  color: #ff4d6d;
  margin-bottom: 20px;
}

.chef-content p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.testimonials {
  margin: 60px 0;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.testimonial-text {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.author-info h4 {
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
}

.author-info p {
  font-size: 14px;
  color: #999;
}

footer {
  background-color: #ff9fb0;
  color: white;
  padding: 40px 0;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-column {
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;
}

.footer-column h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-column ul li a:hover {
  color: #ffccd5;
}

.social-icons {
  display: flex;
  margin-top: 20px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin-right: 10px;
  color: #ff6b8b;
  font-size: 20px;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: #ff4d6d;
  color: white;
  transform: translateY(-5px);
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 1200px;
  margin: 30px auto 0;
  padding: 20px;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }
  
  .hero-content {
    padding-right: 0;
    margin-bottom: 30px;
  }
  
  .chef-section {
    flex-direction: column;
  }
  
  .chef-image {
    padding-right: 0;
    margin-bottom: 30px;
  }
  
  .footer-column {
    flex: 100%;
  }
}
</style>