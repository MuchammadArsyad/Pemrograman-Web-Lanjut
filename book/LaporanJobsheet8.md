**Praktikum – Bagian 1: Building a Bootstrap Form**

| **Langkah** | **Keterangan**                                                                     |
|-------------|------------------------------------------------------------------------------------|
| 1           | Buat component baru dengan nama signup-form dengan perintah **ng g c signup-form** |
| 2           | Modifikasi app.component.html menjadi seperti berikut:                             |
| 3           | Modifikasi file signup-form.component.html menjadi seperti berikut:                |
| 4           | Jalankan dan Catat hasilnya (soal 1)                                               |

![](media/e30190023001bd8aa66272067c7c14b7.png)

![](media/7d80963c14f2c2a75d120bc34ce0d784.png)

![](media/5e2411ae9f155a554b0279fb0d193873.png)

**Praktikum – Bagian 2: Control Programmatically**

| **Langkah** | **Keterangan**                                                                                          |
|-------------|---------------------------------------------------------------------------------------------------------|
| 1           | Modifikasi file signup-form.component.ts seperti dibawah ini:                                           |
| 2           | Modifikasi signup-form.component.html menjadi seperti berikut:                                          |
| 3           | Jalankan dan Catat hasil inspect elemen pada bagian console (soal 2), Akan muncul eror seperti berikut: |
| 4           | Modifikasi file app.module.ts tambahkan kode berikut:                                                   |
| 5           | Jalankan dan Catat hasilnya di bagian console pada browser (soal 3)                                     |

![](media/0d451efbc13cbd9e4dd879c5fd355abf.png)

![](media/23461c57a9595f571de08540c3bddacb.png)

![](media/b7d3d980ec9c2d44f67dca74d58fa9ae.png)

![](media/6b14e701f5c22f836fa26d8f42d55cc4.png)

![](media/c4ef21dce54a999a4fc46d3c670f5453.png)

![](media/2c4675cfd332b85656a6e2d9de6ef3e3.png)

**Praktikum - Bagian 3: Adding Validation**

| **Langkah** | **Keterangan**                                                 |
|-------------|----------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.ts menjadi seperti berikut:   |
| 2           | Modifikasi signup-form.component.html menjadi seperti berikut: |

![](media/ca25c8a665975fdef24596ecd9fa02ab.png)

![](media/6a6a7e313c047aee1c75540f5bb59c7c.png)

![](media/aa715d02cbfd95e30623fd673be49a8e.png)

| 3 | Jalankan, apakah validasi formnya berfungsi dan Catat hasilnya (soal 4) |
|---|-------------------------------------------------------------------------|


![](media/058fe509432d2472734670e0aa75ae02.png)

| 4 | Tambahkan get username pada file signup-form.component.ts seperti berikut: |   |
|---|----------------------------------------------------------------------------|---|
| 5 | Modifikasi file signup-form.component.html menjadi seperti berikut:        |   |

![](media/821a4f72399ad39a51d02e6c3badde9d.png)

![](media/b62d3d6324a8d79beb65cc25350cc75b.png)

| 6 | Jalankan dan Catat hasilnya (soal 5) |
|---|--------------------------------------|


![](media/058fe509432d2472734670e0aa75ae02.png)

**Praktikum - Bagian 4: Specific Validation Errors**

| **Langkah** | **Keterangan**                                                 |
|-------------|----------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.ts menjadi seperti berikut:   |
| 2           | Modifikasi signup-form.component.html menjadi seperti berikut: |

![](media/f9febeac3c839d066634539e74cb116d.png)

![](media/1dadb065695ac5e6b385e28bbb7fef6e.png)

| 3 | Jalankan dan Catat hasilnya (soal 6) |
|---|--------------------------------------|


![](media/2cc30f4ab0cb4e519ed86cef3cf7c35d.png)

| 4 | Modifikasi signup-form.component.html menjadi seperti berikut: |   |
|---|----------------------------------------------------------------|---|
| 5 | Jalankan dan Catat hasilnya (soal 7)                           |   |

![](media/f097e94b6f29a90f063daf18477bb8ce.png)

![](media/8547f7d9d94acc3b9f16d9e5b18d5005.png)

**Praktikum - Bagian 5: Custome Validation**

| **Langkah** | **Keterangan**                                                                                                       |
|-------------|----------------------------------------------------------------------------------------------------------------------|
| 1           | Buat file baru pada folder signup-form dengan nama **username.validators.ts** dan isi dengan script sebagai berikut: |
| 2           | Modifikasi signup-form.component.ts menjadi seperti berikut:                                                         |
| 3           | Modifikasi signup-form.component.html menjadi seperti berikut:                                                       |
| 4           | Jalankan dan Catat hasilnya (soal 8)                                                                                 |

![](media/09c992231ec0e0c2d71a2d7b1cf41ca8.png)

![](media/d51e541acbef09807ee387e9c005733e.png)

![](media/9b9b1dbbf4ee8d9667d7fe30d1686506.png)

![](media/7503ba1f7c6bb11f6abea22fb3f151a0.png)

**Praktikum - Bagian 6: Asyncronus Validation**

| **Langkah** | **Keterangan**                                                            |
|-------------|---------------------------------------------------------------------------|
| 1           | Modifikas file username.validators.ts seperti berikut:                    |
| 2           | Modifikasi signup-form.component.ts menjadi seperti berikut:              |
| 3           | Modifikasi signup-form.component.html, tambahkan \<div\> seperti berikut: |

![](media/69ba2a83e87e8ee92e048d8eec86954c.png)

![](media/9afa1bf14e76fde345aaf0fcf7f35320.png)

![](media/ea101ed4854b4b43130d615fd32f92e1.png)

| 4 | Jalankan dan Catat hasilnya (soal 9) |
|---|--------------------------------------|


![](media/1c3c271da3cb535c4ffff4e618c63dee.png)

**Praktikum - Bagian 7: Displaying a Loader Image**

| **Langkah** | **Keterangan**                                                            |
|-------------|---------------------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.html, tambahkan \<div\> seperti berikut: |

![](media/666d559852c96f1e1770c2180703eb4b.png)

| 2 | Jalankan dan Catat hasilnya (soal 10) |
|---|---------------------------------------|


![](media/b8a9e61a10129553a9b20230f0df1cc4.png)

**Praktikum - Bagian 8: Validating Form on Submit**

| **Langkah** | **Keterangan**                                                                          |
|-------------|-----------------------------------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.ts, dengan menambahkan method login() seperti berikut: |
| 2           | Modifikasi signup-form.component.html seperti berikut:                                  |

![](media/87793a16e67d52946feb0112df654e92.png)

![](media/1d708a7bd5e9ff41f8480aa0dba8e0b5.png)

| 3 | Jalankan dan Catat hasilnya (soal 11) |
|---|---------------------------------------|


-   Ketika mengisikan username dan password tidak sesuai ketentuan dan kemudian
    mengklik button Sign Up maka akan muncul alert “Username and password is
    invalid”.

![](media/344e35faa4ab27c6842beeb51af1ed22.png)
