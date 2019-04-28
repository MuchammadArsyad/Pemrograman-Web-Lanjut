Bab 6
=====

Template-Driven Forms
=====================

Pada bab ini kita akan membahas penggunaan form dengan berbagai macam inputan,
menampilkan validasi error, dan perbedaan antara template-driven forms dengan
reactive form.

1.  **Membuat Form Boostrap**

    Pada sub bab ini kita akan membuat sebuah form dengan menggunakan bootstrap.
    Untuk lebih jelasnya ikuti langkah berikut

-   buatlah sebuah component dengan nama contact

-   buka file contact.component.html dan tambahkan code berikut:

    ![](media/8acec7add54cfed2e9a3be2577ecb925.png)

-   buka file app.component.html dan tambahkan code berikut

    ![](media/78c9ab42a2c3a81dff62f66c4c9f8616.png)

-   jalankan servernya maka hasilnya seperti berikut

    ![](media/cab14badbac8a1ef9bcf41931c0010fe.png)

    1.  **Macam-Macam Form**

Dalam penggunaan form pada angular dapat menggunakan template-driven dan
reactive form. perbedaan antara template-driven dan reactive form adalah pada
reactive form biasanya juga disebut model-driven, penggunaan reactive form
menghindari penggunaan directive seperti ngModel, required dsb. Pada reactive
form ini menggunakan reactive-pattern, testing dan validasi yang bersifat
synchrous. Untuk lebih jelasnya kita buat sebuah contoh penggunakan reactive
form.

-   generate 2 buah component dengan nama reactive-form dan template-driven

-   buka file reactive-form.component.html dan buatlah code seperti berikut

    ![](media/cf0cba708cec642143639dc16ed3369b.png)

    ![](media/b62a9df0062c578bf68715aa009f1f9a.png)

-   buka file app.component.html dan tambahkan code berikut

    ![](media/88ef6d6f8cb6d9ff115ffd876784132c.png)

-   sehingga hasilnya seperti berikut

    ![](media/5133a80c6352ce02c87f594ec839b65c.png)

-   langkah berikutnya buatlah sebuah interface dengan nama
    mahasiswa.interface.ts dan tambahkan code berikut

    ![](media/b37870b52720f23d8026b68c857c7947.png)

-   Dikarenakan untuk menggunakan reactive-forms diperlukan FormBuilder dan
    FormGroup dari module ReactiveFormsModule maka kita harus tambahkan
    ReactiveFormModule dan FormGroup pada app.module.ts seperti pada gambar
    berikut

    ![](media/17315bfbbd1ff20accf7a77fb7dee8b3.png)

-   buka file reactive-form.component.ts, import terlebih dahulu FormBuilder dan
    FormsGroup dan tambahkan beberapa code berikut

    ![](media/9465b29a4be6279f6032ea5211d43b78.png)

    ![](media/ea46d18ce0b9c3aceed5ffd81d14ff8c.png)

    ![](media/4c403e9832131d76c69ab629fe801853.png)

-   buka file reactive-form.component.html dan modifikasi codenya menjadi
    seperti berikut

    ![](media/f5c02c6e9dce76c6ccc47b24fb620aaa.png)

    ![](media/863b124acec12cd8336fbfde815f20db.png)

    ![](media/4c403e9832131d76c69ab629fe801853.png)

-   jalan server localhost maka hasilnya seperti berikut

    ![](media/fd963a363f880203d10c4bc6b15817eb.png)

Percobaan diatas adalah penggunaan form menggunakan reactive-form untuk
berikutnya kita akan membuat form menggunakan template-driven. Untuk lebih jelas
ikuti langkah berikut ini:

-   untuk template-driven kita membutuhkan FormsModule pada app.module.ts, jadi
    buka file app.module.ts dan tambahkan FormsModule

    ![](media/374390a2d22b2f8e36df4025e66bee4c.png)

-   buka file template-driven.componentn.ts dan tambahkan struktur form seperti
    berikut

    ![](media/ace170f135d96b768fc4dbe617aeaa7b.png)

-   buka file template-driven.component.html dan tambahkan code berikut

    ![](media/60019b486fd615d8161e4848e100bfb2.png)

    ![](media/c9a1314eee3dc7203d108f5697b23fe6.png)

-   tambahkan method onSubmit pada template-driven.component.ts

![](media/73e64d047befee90290d46c35440e602.png)

-   buka file app.component.html tambahkan code berikut

    ![](media/776c9f3619fd5ba65aa72f5dd39793cf.png)

-   hasil

    ![](media/4c20ccda36ae957e988d82fd520cda2e.png)

    jika kita lihat hasilnya sama tetapi penggunaan directivenya yang berbeda

    1.  **ngModel**

        ngModel adalah sebuah directive untuk binding data atau value ke
        variable, semisalnya terdapat kode seperti berikut :

-   *[(ngModel)]=”nama”*

    berarti value/nilai yang ada pada input yang memilki attribute tersebut akan
    masuk kedalam variable nama. Sebagai pembuktian lakukan beberapa percobaan
    berikut :

-   buka file contact-form.component.html dan tambahkan ngmodel seperti berikut

    ![](media/8015bf8a7c3157ec5a34c76df609e248.png)

-   buka file contact-form.component.ts dan tambahkan decorator input ( line 9
    dan 10)

    ![](media/c3038613ca119ad4c520cf336405a571.png)

-   coba jalan servernya dan lihat terdapat pesan error seperti pada gambar
    berikut

    ![](media/faa63cbf5c8cf06f48ca30ac743288d7.png)

    penjelasan error : hal ini disebabkan jika kita menggunakan ngModel maka
    kita harus menambahkan atribut name pada tag tersebut

-   tambahkan atribut name pada tag input

    ![](media/7b66272d9beff206c4b52bcaf393b94c.png)

-   jalankan servernya ( cat:tidak perlu diklik button untuk menampilkan data
    karena tidak menggunakan event binding jadi inputan akan langsung tampil
    saat user memasukan data)

-   buka file app.component.html

![](media/a557523e6f75bc8026d46b1b876150e6.png)

-   Buka file app.modules.ts

![](media/85401c6168ecb8f056c0f7a38bda6fb0.png)

![](media/812854a2715f9f17e06e1e13b36102a1.png)

kita juga dapat melihat properties pada ngModel, Untuk lebih jelasnya ikuti
langkah bertikut

-   buka file contact.component.html modifikasi code berikut ini:

    ![](media/62b57d0fd84a57ccbd56ede5808462e7.png)

    Pada textarea tambahkan juga ngModel seperti pada gambar berikut line 43

    ![](media/6c243ac02a860717c1b69210230e19ed.png)

-   buka file contact.component.ts modifikasi code berikut ini

![](media/5b1fb7c4754ae365fdd6bf1521348761.png)

-   jalankan server dan lihat pada inspect maka akan muncul property dari
    ngModel

    ![](media/0da5069375675b233687b21bb35c8be6.png)

    Penjelasan gambar

-   jika kita click pada (…) pada control maka akan muncul FormControl dan
    dimana terdapat instance dari FormControl Class di angular. Sebagai contoh
    ada property dirty yang digunakan untuk menentukan jika nilai dari inputan
    field berubah. jika kita click maka nilainya true hal ini karenakan kita
    memasukkan value di input field dan ada perubahan inputan sehingga dirty
    bernilai true

-   sedangkan kebalikan dari property dirty adalah pristine dan bernilai false

    1.  **Validasi**

        Pada sub bab ini kita akan membuat sebuah validasi dengan menggunakan
        bantuan directive, untuk lebih jelasnya ikuti langkah berikut

-   buka file contact.component.html dan tambahkan code berikut

    ![](media/7b44330a99f1f8f894ce2570018cf377.png)

    ![](media/d6f3977a90a5f343940a524379565f98.png)

-   jalankan localhost dan lihat hasilnya

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17](media/a57f83dc250be1b48c620c9545d48cc8.png)

-   jika kita jalankan maka secara default alert akan muncul. Untuk itu kita
    membutuhkan sebuah kondisi lagi. Buka file contact.component.html dan
    tambahkan code berikut (line 39)

    ![](media/477321be6a3f3c7873e93d9b104854ee.png)

-   jalankan localhost pada saat dijalankan maka secara default alert tidak akan
    muncul dan pada saat field nama dikosongkan maka akan muncul alert “Nama
    harus diisi”

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17](media/204e56f01c92dd1d02011fa7b7da3219.png)

    ![](media/7c241e74596c4db82a8d295a0a6f70b3.png)

    1.  **spesific validasi error**

        Ada beberapa macam untuk validasi error seperti minlength, maxlength,
        pattern dan required. Untuk lebih jelasnya ikuti langkah-langkah berikut
        :

-   buka file conctact.component.html dan tambahkan beberapa code berikut

    ![](media/274efae66935dd6bae65001ca9e6887e.png)

    penjelasan code :

-   line 32 minlength adalah min abjad yang harus diisi

-   line 33 maxlenth adalah max panjang abjad

-   line 34 pattern adalah yang harus diisi

-   line 44 ngif (error required) adalah sebuah kondisi jika line 42 tidak
    terpenuhi

-   line 45 ngif (error minlength) adalah sebuah kondisi dimana nama kurang dari
    3 abjad

-   linr 47 ngif (error pattern) adalah sebuah kondisi dimana jika inputan user
    tidak sesuai dengan patternnya

-   jalankan localhost jika kita masukkan angka 1

    ![](media/57f4cb8d4ad256e70726cf839ff7fb86.png)

jika kita inspect element maka pada bagian property errors terdapat jenis-jenis
validasi yang digunakan seperti pada gambar berikut

![](media/e559a17b3c21f98a56e0e3b9da1edd9e.png)

1.  **styling Invalid input field**

    Kita dapat menambahkan sebuah style pada input fieldnya sebagai contoh jika
    terdapat error maka selain menampilkan. Untuk lebih jelasnya ikuti langkah
    berikut

-   jika kita inspect element pada tab element dan kita click pada bagian form
    validation, maka pada element akan menunjukkan sebuah code angular
    ng-content class ng-invalid,ng-dirty dan ng-touched.

-   pada sub bab ini kita akan memodifikasi agar selain muncul alert pada form
    input akan merah juga

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17](media/9a6442ba21dabc6783194b182928d342.png)

-   buka file contact.component.css dan tambahkan code berikut

    ![](media/2764cdea259c831e7d720df5026579d7.png)

-   jalankan localhost jika kita inputkan salah

![](media/98aab85233b3600413fd125031f1ce9a.png)

**ngForm**

ngForm adalah directive Angular yang penting untuk membuat template-driven
forms. Mari kita mulai dengan ngForm dulu. Berikut adalah kutipan tentang ngForm
dari dokumentasi Angular.

Directive NgForm melengkapi elemen form dengan fitur tambahan. Ini memegang
kendali yang kamu buat untuk elemen dengan directive ngModel dan atribut name,
dan memonitor properti mereka, termasuk keabsahannya. Ini juga memiliki
properti valid sendiri yang mana hanya benar *jika setiap kontrol yang
terkandung* itu benar. Untuk lebih jelasnya ikuti langkah-langkah berikut :

-   buka file contact.component.ts dan tambahkan sebuah method submit seperti
    pada gambar berikut (line 23-25)

    ![](media/162265ad3b56def1371c0843a70c847d.png)

-   buka file contact.component.html dan buatlah sebuah template variabel ngForm
    atau property ngForm dengan nama form (\#form) yang nanti digunakan sebagai
    parameter dari method submit seperti pada gambar berikut (line 24)

![](media/b581392566a8c7f893f13cc2221ff2a3.png)

-   pada button rubah codenya menjadi \<button type="submit" class="btn
    btn-primary"\>

-   jalankan localhost dan inspect element, masukkan pada field nama adalah
    pisang dan tambahkan pada text area kata-kata setelah itu tekan button. Maka
    pada saat di inspect element pada ngform property value:object terdapat
    nilai dari yang diinputkan user seperti pada gambar berikut

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17](media/bd2dea95bba7bdf5eafe54f19ed15bba.png)

    1.  **ngModelGroup**

        Terkadang kita bekerja dengan banyak form dan kita ingin membuat
        beberapa group dalam form tersebut sebagai contoh kita ingin inputan
        nama sebagai modelGroup sendiri maka lakukan hal berikut:

-   buka file **contact.component.html** dan tambahkan code seperti berikut

![](media/e2812edcad7cb7b7a318c931a732b571.png)

1.  **Disabling the submit button**

>   Kita dapat membuat atau mengkondisikan button submit seperti button submit
>   tidak akan dapat diklik jika nilai validnya sama dengan false. Untuk lebih
>   jelasnya ikuti langkah berikut **( kondisikan contact.component.html seperti
>   semula sebelum menggunakan ngFormGroup )**

-   buka file contact.component.html dan tambahkan code berikut pada tag button

    ![](media/1d126be63f6fe81d52291d43676706bb.png)

-   jalankan localhost jika berhasil secara default button akan disable, button
    akan enable saat terdapat inputan

![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17](media/47c7baf270203260751b363fa3317d99.png)

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17](media/aaa1acb86a45e486c6f88a10a20c5a59.png)

    1.  **bekerja dengan check box**

        Kita juga dapat menambahkan check box pada angular seperti berikut

-   buka file contact.component.html dan tambahkan code check box seperti pada
    gambar berikut (line 66-73)

    ![](media/2de7fb6d93f2e65aeb1adb2490254cb3.png)

-   jalankan localhost

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17](media/fe64eebb95846b57e95787d6b3429a69.png)

    1.  **bekerja dengan drop-down list**

        selain menggunakan check box kita juga dapat menggunakan dropdown list.
        Untuk lebih jelasnya ikuti langkah berikut

-   buka file contact.component.html tambahkan code untuk dropdown list seperti
    pada gambar berikut

    ![](media/ddc7c17476418cc5ec0067dee0726a3c.png)

-   buka file contact.component.ts dan tambahkan code berikut (line 21-24)

    ![](media/d7f2dd98309e39432a73d1211da2a706.png)

![](media/c229c15d1036b8194f8edf5bf74531c2.png)

jalankan localhost maka hasilnya seperti berikut

-   Selain itu kita juga dapat menampilkan property id dan property nama dengan
    menggunakan property ngValue seperti berikut

    ![](media/1c375add812ada256e47128ca2080af4.png)

    sehingga hasilnya seperti berikut

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17%](media/be7e31fa11c78437034352084a95481b.png)

    selain itu juga kita dapat menggunakan multiple (line 74) jika ingin memilih
    keduanya seperti pada gambar berikut

    ![](media/fb985303ce11fdb0e1bb0a4b3c3a60e3.png)

    sehingga hasilnya seperti berikut (tekan control untuk dapat memilih
    keduanya)

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17%](media/84fd61e764c879b5b406bd70868af72f.png)

    1.  **bekerja dengan radio button**

        Selain menggunakan check box dan dropdown list kita juga dapat
        menggunakan radio button, seperti berikut

-   buka file contact.component.html dan tambahkan code berikut (line 83-94)

-   catatan jika kita tidak menambahkan ngModel (line 85 dan line 91) pada input
    maka saat kita memilih salah satu radio button value tidak bisa muncul

    ![](media/04acdcb72463d33f42747b5aa2b83a09.png)

-   jalankan localhost (menggunakan ngModel)

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17%](media/0fdffef1329e0b27bd9f6fee9e3844b1.png)

-   jalankan localhost (tanpa menggunakan ngModel)

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17%](media/653fa44f6049ef4af49189b931e1c7d2.png)

    atau kita bisa menggunakan directive ngFor untuk menampilkan value seperti
    berikut

    ![](media/68530a20689af37bafa369903308e0d8.png)

    sehingga hasilnya juga sama

    ![../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-03-17%](media/0fdffef1329e0b27bd9f6fee9e3844b1.png)
