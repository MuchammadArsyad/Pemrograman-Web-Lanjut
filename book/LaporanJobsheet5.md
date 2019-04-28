**ngIf**

Cara pertama

![](media/499632e94f680023aed38fb101281a5c.png)

![](media/e5636988f840cc8468111c6f02e643a8.png)

![](media/dbffe877d977bf5c6aaa375853586f38.png)

![](media/1bedb41149af775eaa76ae528d51c51c.png)

Contoh Kedua menggunakan else:

![](media/cd3c73ae9c4690f8e31cd27db4592ce3.png)

jalankan localhost dengan kondisi array pada app.component

dengan array kosong

![](media/8720f48b6ed59102dc5f0ecb046dd5a6.png)

Hasilnya :

![](media/1bedb41149af775eaa76ae528d51c51c.png)

Dengan array ada isi

![](media/47fde7a8e3e3d0c3310779f77cd54b07.png)

Hasilnya :

![](media/dbffe877d977bf5c6aaa375853586f38.png)

Cara ketiga :

\- buka file app.component.html modifikasi kodenya menjadi berikut

![](media/21727a07e4920680d35a7cdcf0d92fca.png)

Dengan array kosong

![](media/8720f48b6ed59102dc5f0ecb046dd5a6.png)

Hasilnya :

![](media/1bedb41149af775eaa76ae528d51c51c.png)

**Hidden property**

![](media/4272deae3bf3bdbdeb09fd41c2de5023.png)

Hasilnya :

![](media/1bedb41149af775eaa76ae528d51c51c.png)

selain contoh diatas kita juga dapat memberikan property seperti berikut

![](media/75beed085511c248e2512589b6266d75.png)

dengan catatan pada app.component.ts pada courses terdapat array courses dengan
nilai 1 dan 2

![](media/47fde7a8e3e3d0c3310779f77cd54b07.png)

![](media/dbffe877d977bf5c6aaa375853586f38.png)

Jika kita inspect element maka akan terlihat property hidden tidak terdapat
kondisi true ataupun false.

![](media/07a8d55bb271c4957c7842c251ece7eb.png)

**ngSwitchCase**

buka file app.component.html modifikasi codenya menjadi seperti berikut

![](media/2fa1c79da3cb4a3b68f69adeae163aac.png)

buka file app.component.ts tambahkan property viewMode

![](media/8ec4342ad63924a93b135262d7228739.png)

run localhost maka hasilnya seperti berikut saat diklik list view maka akan
muncul list view content dan jika kita pilih ListView maka akan tampil tulisan
List View Content

![](media/593b5550ba51bc9a64cbca6f1984f8fd.png)

![](media/96b753002b961ff4f8cd8e957c90c3ce.png)

**ngFor**

buka app.component.ts property CoursesFor yang berisikan array

![](media/6ef9850f6dc336f73217dfa6f4570308.png)

\- buka file app.component.html tambahkan directive ngFor pada element li

![](media/47aa3ff3f6610f0cc9ae71cab864d6e3.png)

![](media/54b75ec0a28f75a4de593ac4ed559726.png)

\- kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil dengan
menggunakan isEven <https://angular.io/api/common/NgForOf>

![](media/d7c47534040939be3e0c6bafbe06cdcc.png)

**ngFor dan change Detection**

Dengan memodifikasi directive ngFor kita dapat melakukan penambahan atau
pengurangan data. Untuk lebih jelasnya ikuti langkah berikut :

-   Pada percobaan ini kita akan menambahkan sebuah data array pada coursesFor

-   tambahkan button pada app.component.html

![](media/39802d0a555bd6ab374cba68dac7a277.png)

tambahkan method **onAdd()**

![](media/f05dc47d678f41a6f42fe4172499352c.png)

Jika kita tekan button add maka akan ditambahkan sebuah data courses 6

![](media/6e92427ccc88d9ed87846284dbdd888f.png)

![](media/78870eae0c39786bbfcd7b9b9fae8bac.png)

\- Setelah kita berhasil menambahkan sebuah data array pada courseFor maka untuk
selanjutnya kita akan mencoba untuk melakukan penghapusan data.

\- Tambahkan sebuah method onRemove pada app.component.ts

![](media/8cf5ca06b3a192c0a3a23fe1a157a18c.png)

\- Buka app.component.html dan tambahkan sebuah **button** untuk menghapus (Line
107)

![](media/2a862a0b8b685e7411b8a24d4a41e45c.png)

penjelasan code : - **line 107** adalah sebuah button dimana terdapat event
click yang memanggil method onRemove dengan parameter item - hasilnya seperti
berikut (pada saat button remove diclick maka salah satu data akan hilang
sementara)

![](media/bb831a76eecf9cd5493298ed7b1b0215.png)

![](media/0a6ea99ca20711a60e40b808af10dce9.png)

\- selain itu kita juga dapat melakukan perubahan status menggunakan event click
- buka file app.component.html tambahkan button (line 108)

![](media/c21f0de56b97bd5608ce4d2f8b89c3b2.png)

penjelasan code :

\- pada line 108 terdapat sebuah button dan event click dimana event click ini
memanggil method onChange dengan parameter item

\- buka file app.component.ts buatlah sebuah method onChange dengan parameter
item dan didalam method tersebut adanya perubahan string menjadi updated

![](media/281f9ed3676ed71dad32cd6a720198c7.png)

\- hasilnya

![](media/bb831a76eecf9cd5493298ed7b1b0215.png)

![](media/741ed34a568051d159ff9acd7120bcfa.png)

**6.1 ngFor dan trackby**

Pada studi kasus berikut ini kita akan menampilkan isi array saat button
diclick. Pemasalahan yang muncul jika button click tersebut diclick
berkali-kali, maka secara tidak langsung data akan mereload ulang. Untuk lebih
jelasnya ikuti langkah berikut:

\- Buka file app.component.ts buatlah sebuah method dengan nama loadCourses
(line 32) tapi sebelumnya buat sebuah property dengan nama coursesForOne (line
31)

![](media/ef33ea9eb656c19616a86fe434c608f1.png)

\- buka file app.component.html dan tambahkan code seperti pada gambar

![](media/e43ba268de45c6d8aef3ee6fbfcaacdd.png)

\- hasilnya saat button diclick

![](media/a00744d6af7c67b95fab0bdadeb14ce6.png)

![](media/5c9cbfa26bd75a4117487f4c6bbdebe6.png)

sekarang kita lakukan analisa buka inspect element, saat button belum diclick
seperti pada gambar berikut

![](media/c18835e86a15cd2087a1b5f0437d1403.png)

dan saat button diklik maka element ul akan muncul seperti pada gambar berikut

![](media/c9c861900fcedc3de09206e7ee77eb88.png)

\- jika kita lakukan klik kembali maka button akan merespon kembali dengan
menampilkan data yang sudah ada dalam arti mengunduh ulang yang sudah ada (jika
kita lakukan klik kembali maka pada inspect element akan muncul highlight warna
ungu dimasing-masing element li)

![](media/de8c45b801c53d86434defd391ff8286.png)

\- oleh karena itu kita membutuhkan TrackBy yang nanti digunakan untuk mengecek
jika data sudah ada maka button tidak perlu melakukan actionnya kembali

\- untuk menambahkan TrackBy dengan cara menambahkan pada app.component.html
pada directive ngFor

![](media/1d4765d1ce1bfb9e62c89bcbcc9194ba.png)

![](media/796b7470bbd446e54e05fc6e52253467.png)

![](media/de0f53a57d30c8bfa1e03c7a58e25366.png)

Penjelasan code:

\- line 42 sebuah nilai kembalian jika itemone bernilai true maka itemone.id
akan ditampilkan dan jika itemone bernilai false maka itemone tidak terdefinisi

\- jika berhasil maka pada saat button tampilkan data diklik untuk kedua kalinya
pada inspect element tidak ada muncul highlight ungu pada masing-masing element
li

**Custom Directive**

pada directive kita juga dapat membuat sebuah custom directive, sebagai contoh
kita ingin membuat semua inputan pada textbox secara otomatis menjadi lowercase.
Untuk lebih jelasnya ikuti langkah-langkah berikut :

\- pertama kita harus membuat directive dengan nama input-format terlebih dahulu
dengan perintah seperti berikut

**ng g d input-format** =\> ng generate directive nama-directivenya

\- jika directive berhasil digenerate maka kita pastikan di app.module.ts pada
\@NgModule terdapat nama directive yang kita buat tadi

![](media/8e6f07600936ef8794d3ba588467fb8b.png)

buka input-format.directive.ts dan tambahkan decorator HostListener seperti pada
gambar berikut

![](media/b25f25fa045c85020ffc565b09724eb2.png)

Penjelasan code :

\- line 1 kita tambahkan (mengimport) sebuah fungsi decorator HostListener agar
dapat menggunakan event DOM yang menyediakan method untuk menangani sebuah event
yang sedang berjalan. Untuk lebih jelasnya penggunaan HostListener buatlah 2
buah method dengan nama onfocus dan onblur

\- line 8 adalah sebuah method onfocus dengan menggunakan function decorator
\@HostListener dengan parameter event windows focus
(https://developer.mozilla.org/en-US/docs/Web/Events/focus) - line 9 sebuah
method onblur dengan menggunakan function decorator \@HostListener dengan
parameter event windows blur
(<https://developer.mozilla.org/en-US/docs/Web/Events/focus>)

\- Buka file app.component.html dan tambahakn code berikut

![](media/a081a78851d9da17bcdbdd5e3b098205.png)

Penjelasan code – line 125 terdapat appInputFormat adalah selector pada
**inputformat.directive.ts**

![](media/2b793b739922b8a5c509302dd7f78e64.png)

\-Kita jalan localhost:4200 setelah itu lakukan percobaan click pada textbox dan
click diluar textbox. Amati dengan menggunakan console inspect element. Pada
saat kita click pada textbox maka pada console akan muncul onFocus tetapi jika
click diluar textbox maka console akan keluat onBlur

\- Setelah kita memahami fungsi dari decorator \@HostListener maka untuk
berikutnya kita akan mencoba membuat logika untuk merubah value dari textbox
menjadi lowercase

\- buka file input-format.directive.ts dan modifikasi codenya menjadi berikut

![](media/9897db0adabe17a16cb05d88736ef46a.png)

Penjelasan code :

\- line 8 kita membutuhkan sebuah reference untuk ke host element maka kita
tambahkan (inject) pada constructor reference object ElementRef. Dengan kata
lain ElementRef digunakan untuk mengakses DOM object

\- line 11 sebuah property dengan nama value dengan tipe data string yang berisi
sebuah property nativeElement pada class ElementRef

\- line 12 untuk merubah inputan menjadi huruf kecil semua - Jalankan localhost
dan berikan masukan dengan huruf besar semua setelah itu tekan tab, jika
berhasil maka valuenya akan berubah menjadi huruf kecil semua - atau kita bisa
menggunakan cara lain dengan menggunakan **property binding** - buka file
app.component.html dan tambahkan property binding dengan nama format

![](media/cc2065f3148aed4b4b48bef47e8e13d2.png)

buka file input-format.directive.ts tambahkan decorator input dan modifikasi
codenya seperti pada gambar berikut

![](media/62a93bd34e4f617ea79fff1552a549ae.png)

Penjelasan code

\- line 7 adalah sebuah decorator input dengan nama property format

\- line 14 – 16 adalah sebuah kondisi dimana jika format sama dengan lowercase
maka semua inputan akan dibuat menjadi huruf kecil semua sedangkan jika selain
lowercase maka akan dibuat huruf besar - --cat:format disini adalah kondisi di
**app.component.html**

![](media/c3e54e52e4681b10040e95f17cf721f5.png)

atau kita juga dapat menggunakan cara lain yaitu menggunakan nama selector
sebagai property binding - buka app.component.hml modifikasi codenya menjadi
berikut

![](media/e64ad24a8ef66a85f9b18a585617157a.png)

buka input-format.directive.ts dan tambahkan decorator input dengan parameter
appInputFormat

![](media/2ed337a962b8d73ca8799bbfd451a2e1.png)

\- Jika dijalankan sebagai contoh kita memasukkan kalimat dengan huruf kecil dan
pada saat kita tab maka akan berubah menjadi huruf besar semua seperti berikut

![](media/411b5837f40aff54164cc5bacefecf92.png)

![](media/fc03ceec3a5a48753d54f042a2e51ac0.png)
