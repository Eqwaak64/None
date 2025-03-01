async function removeBackground() {
  const input = document.getElementById('imageInput');
  const file = input.files[0];
  
  if (!file) return alert("Pilih gambar terlebih dahulu!");
  
  // Konfigurasi API key (opsional, jika menggunakan layanan berbayar)
  const apiKey = "da6witnwpNBhhxow31adTqpq"; // Ganti dengan API key Anda
  
  try {
    const result = await removeBackgroundFromImage({
      image: file,
      apiKey: apiKey, // Hapus baris ini jika tidak menggunakan API
      format: "png", // Output format
      quality: 100
    });
    
    const url = URL.createObjectURL(result);
    document.getElementById('result').innerHTML = `
      <h3>Hasil:</h3>
      <img src="${url}" style="max-width: 100%; height: auto;">
      <a href="${url}" download="no-bg.png">Unduh Gambar</a>
    `;
  } catch (error) {
    console.error(error);
    alert("Gagal memproses gambar!");
  }
}
