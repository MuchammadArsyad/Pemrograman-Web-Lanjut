**Praktikum – Bagian 1: JSONPlaceHolder**

Pada bagian ini kita akan menggunakan fake HTTP Service yang akan kita gunakan
sebagai back end aplikasi kita. Kunjungi alamat berikut :
<http://jsonplaceholder.typicode.com/>

Jika Anda scroll down maka Anda akan menemukan bagian Resources seperti pada
gambar 2 berikut :

![](media/9088c7bb0c074ceaaa9f7991eb9322c6.png)

Gambar 2. Tampilan fake HTTP Service pada jsonplaceholder

Ini adalah fake HTTP Service, sehingga ketika kita menambahkan sebuah data baru,
maka akan ditampilkan sesuai dengan data yang kita masukkan, tetapi jika kita
mereload halamannya, maka data yang baru kita tambahkan akan hilang karena tidak
ada database di belakang HTTP Service ini.

**Praktikum - Bagian 2 : Getting Data**

| **Langkah** | **Keterangan**                                                                                                                          |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| 1           | Buat component baru dengan nama posts dengan perintah **ng g c posts**                                                                  |
| 2           | Untuk menggunakan HTTPService, kita perlu melakukan import HttpModule pada app.module.ts.                                               |
| 3           | Modifikasi file **posts.component.ts** menjadi seperti berikut:                                                                         |
| 4           | Ubah file app.component.html seperti berikut :                                                                                          |
| 5           | Jalankan dan Catat hasilnya (soal 1)                                                                                                    |
| 6           | Bagaimana jika anda lupa melakukan import HttpModule pada langkah ke-2 ? Lakukan commenting pada HttpModule seperti pada kode berikut : |
| 7           | Apa yang terjadi pada console? Berikan penjelasan atas error yang terjadi. (soal 2)                                                     |
| 8           | Lengkapi kode program pada **posts.component.ts** menjadi :                                                                             |
| 9           | Jalankan pada browser dan jelaskan yang muncul pada console. (soal 3)                                                                   |
| 10          | Jelaskan perbedaan yang terjadi pada console jika kode pada **posts.component.ts** diubah menjadi : (soal 4)                            |
| 11          | Untuk menampilkan data pada halaman browser, ubah kode program pada **posts.component.html** seperti berikut :                          |

![](media/a460027a01428a40000da15798c961e8.png)

![](media/8939df22b1782b17decb28a8e8946556.png)

Setelah kita menambahkan HttpModule pada bagian imports, maka secara otomatis
akan menambah imports pada bagian paling atas

![](media/f1541a480f5acd69534d65eec75e2377.png)

Hint :

Jika HttpModule tidak muncul secara otomatis maka anda harus menginstal terlebih
dahulu dengan perintah **npm i \@angular/http**

![](media/2ef1b3c0a1b2e89b5112a85009ea3369.png)

Setelah \@angular/http terinstall, maka anda dapat menjalankan praktikum pada
langkah 2.

![](media/6174579d437bd84828dd7facc53c12be.png)

Class Http pada contructor digunakan untuk melakukan HTTP request ke back end.

![](media/27aa123d8b46b1739476d9c8bb6bef23.png)

![](media/6abed0793d05f28c0ce9e7566d876d6d.png)

![](media/de73a58fb5096b9ff793bbe08b38c0bd.png)

Simpan dan jalankan kembali browser.

![](media/73ada469502c9f6583d7791441bda291.png)

-   Karena saat kita mengakses api kita membutuhkan **Http **yang mana merupakan
    library dari javascript. Maka kita wajib mengimport **HttpModule **di
    app.module.ts

![](media/0bc7e55bc3e73982c7a38744d2e9ef6c.png)

![](media/35a3a0fb274d687d1a67c17e2d3f4df8.png)

![](media/221fc274dcc67897ed4133c9390b868d.png)

![](media/74fb0a837376887ff5d1e81e01030c13.png)

![](media/eee206fa31cbe6301bf0bf99ae322cbc.png)

![](media/c5f33697c9767bce070df19037e602c2.png)

| 12 | Ubah kode program pada **posts.component.ts :** |
|----|-------------------------------------------------|


![](media/b2e74b3b4ef2a5723d6ce48ed697676b.png)

| 13 | Jalankan dan jelaskan apa yang muncul pada browser. (soal 5) |   |
|----|--------------------------------------------------------------|---|


**Praktikum - Bagian 3 : Creating Data**

Perintah-perintah yang digunakan untuk melakukan HTTP Request diwakili oleh
beberapa kata kerja sebagai berikut digambarkan pada gambar 3.

| **Langkah** | **Keterangan**                                                                                         |
|-------------|--------------------------------------------------------------------------------------------------------|
| 1           | Kita akan menambahkan sebuah text area untuk memasukkan data melalui browser, seperti gambar berikut : |
| 2           | Pertama, tambahkan input elemen pada **posts.component.html** :                                        |

![](media/83fb1eed5d49f1cb1d2f79b70dc31bc4.png)

![](media/9860c74856c7c7951062a13a64d8c715.png)

| 3 | Modifikasi kode program pada **posts.component.ts** |
|---|-----------------------------------------------------|


![](media/35531d370bbb2ed9b4217c732ec77457.png)

| 4 | Simpan dan jalankan pada browser.                                                                              |   |
|---|----------------------------------------------------------------------------------------------------------------|---|
| 5 | Jelaskan dengan kalimatmu sendiri bagaimana jalannya program setiap baris pada fungsi **createPost**. (soal 6) |   |

![](media/960e09a28828e196575c219a5a8d5e07.png)

![](media/05eb897c8f84914bec95984c1de3b049.png)

-   line 20 adalah sebuah method dengan nama createPost dengan parameter input
    dan berupa HTMLInputElement

-   line 21 sebuah object **post** dengan tipe data any dan dikarenakan nanti
    pada line 26 terdapat sebuah parameter (parameter kedua =\>
    JSON.stringify(post)) yang dimana data harus diterima berupa objek maka
    dibuatlah sebuah object dengan nama **post**. Dimana object post ini harus
    mempunyai property title dan value dari title tersebut

-   line 22 mengset input.value dengan nilai string kosong

-   line 24 adalah method post dengan 2 parameter yaitu parameter pertama adalah
    url dengan tipe string dan parameter kedua adalah body dimana data yang
    harus diterima berupa objek json yang dikonversi menjadi string.

**Praktikum - Bagian 4 : Updating Data**

| **Langkah** | **Keterangan**                                                                  |
|-------------|---------------------------------------------------------------------------------|
| 1           | Kita akan menambahkan sebuah button Update untuk mengubah data melalui browser. |
| 2           | Tambahkan button Update dengan modifikasi kode program seperti di bawah ini :   |
| 3           | Tambahkan fungsi updatePost pada posts.ts seperti di bawah :                    |
| 4           | Simpan dan jalankan pada browser.                                               |
| 5           | Apa fungsi patch pada potongan kode program pada langkah 3? (soal 7)            |

![](media/dfd2bcbc614264f87595ce728d6ac67b.png)

![](media/864a6501a3d490864bb2cc5a1474c759.png)

![](media/f65c48eb4d73770166b8ee1bd392a95d.png)

-   line 35 adalah metode patch dengan parameter seperti pada gambar berikut

![](media/1e710861ff8d7f1a4ee4f7f151adbe24.png)

**Praktikum - Bagian 5 : Deleting Data**

| **Langkah** | **Keterangan**                                                                |
|-------------|-------------------------------------------------------------------------------|
| 1           | Kita akan menambahkan sebuah button Delete di sebelah button                  |
| 2           | Tambahkan button Delete dengan modifikasi kode program seperti di bawah ini : |
| 3           | Tambahkan fungsi deletePost pada posts.ts seperti di bawah :                  |
| 4           | Simpan dan jalankan pada browser.                                             |
| 5           | Apa fungsi splice pada potongan kode program pada langkah 3? (soal 8)         |

![](media/b417a28863726deddb78cff3262510c5.png)

Update untuk menghapus data melalui browser, seperti gambar berikut :

![](media/2378a601320a98e197f58fc23c99307b.png)

![](media/22688a5577ef017a1048d888f23580a1.png)

-   line 45 method splice untuk menampilkan data dengan parameter seperti pada
    gambar berikut

![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-04-15](media/0236f846103124e6fffc4c3c310e65a5.png)
