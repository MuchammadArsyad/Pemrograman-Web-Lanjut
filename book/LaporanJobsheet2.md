# Jobsheet 2 - TypeScript

### Praktikum – Bagian 1: Instalasi Typescript

- Soal 1
Cara mengistal **typescript** dengan perintah berikut `npm install -g typescript`
![](image/js1/1.PNG)


- Soal 2
Cek version dari typescript yang terinstall `tsc --version`
![](image/js1/2.PNG)

- Membuat folder **ts-hello** menggunakan `mkdir ts-hello`
- Tulisakan file **main.ts** dengan code berikut:

```typescript
function log(message) {
    console.log(message);
}

let message = "Hello World";

log(message);
```

- Kemudian ketik perintah `tsc main.ts` untuk melakukan transpile file **typescript** kedalam **javascript**
![](image/js1/3l.PNG)

- Soal 3
Cek apakah sudah terbuat file **main.js**, lakukan perintah `ls`
![](image/js1/3js.PNG)


- Soal 4
Buka file javascript, perhatikan apakah sama isi dari file **main.ts** dan `main.js`
![](image/js1/4.PNG)
![](image/js1/4.1.PNG)


- Soal 5
Lakukan execute pada file **main.js** dengan perintah `node main.js`
![](image/js1/5.PNG)


### Praktikum - Bagian 2: Declaring Variables
- Buka file **main.ts**, kemudian tulis code berikut:
```typescript
function doSomething(){
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
```


- Soal 6
Remove file **main.js** hasil praktikum bagian 1 dengan perintah `rm main.js`
![](image/js1/6.PNG)


- Soal 7
Lakukan transpile file **main.ts** dengan perintah yang ada pada praktikum bagian 1 langkah No 10

![](image/js1/3js.PNG)

- Soal 8
Execute file javascript dengan perintah `tsc main.ts`
![](image/js1/8.PNG)

### Praktikum - Bagian 3: Types
- Buka file **main.ts**, kemudian tuliskan listing program berikut:
```typescript
let count =5;
count = 'a';
```

- Akan terdapat masalah pada file **main.ts**
![](image/js1/9.PNG)

- Soal 9
Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts` 
![](image/js1/9.1.PNG)

- Hasil transpile file **main.ts**, menghasilkan file **main.js** seperti beriku:
```typescript
var count = 5;
count = 'a'; 
```

### Praktikum – Bagian 4: Type Assertion

- Buka file **main.ts**, kemudian tuliskan code berikut:
```typescript
let pesan;
pesan='abc';
let percobaan=(<string>pesan).endsWith('c');
let alternative=(pesan as string).endsWith('c');
```

- Soal 10
Remove file **main.js** sebelumnya, lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts`. Hasil file **main.js**
```typescript
var pesan;
pesan = 'abc';
var percobaan = pesan.endsWith('c');
var alternative = pesan.endsWith('c');
```

### Praktikum – Bagian 5: Arrow Function

- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
let log = function pesan(){
    console.log();
}

//kode diatas bisa disingkat menggunakan fungsi arrow
let doLog=(pesan)=>{
    console.log(pesan);
}

//atau seperti berikut
let doLog1=(pesan)=>console.log(pesan);
```

- Soal 11
Remove file **main.js** sebelumnya, lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts`. Hasil file **main.js**
```typescript
var log = function pesan() {
    console.log();
};
//kode diatas bisa disingkat menggunakan fungsi arrow
var doLog = function (pesan) {
    console.log(pesan);
};
//atau seperti berikut
var doLog1 = function (pesan) { return console.log(pesan); };
```

- Soal 12
Remove file **main.js** sebelumnya, lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts`. Hasil file **main.js**
```typescript
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 3
});
```

### Praktikum – Bagian 7: Classes

- Buka file **main.ts**, kemudian tuliskan code berikut:
```typescript
class Pointku{
    a:number;
    b:number;

    draw(){
        //...
    }

    getDistance(another:Pointku){
        //...
    }
}
```

### Praktikum – Bagian 8: Objects

- Buka file **main.ts**, kemudian tuliskan code berikut:
```typescript
class Pointku{
    a:number;
    b:number;

    draw(){
        console.log('X' + this.a + ',Y' + this.b);
    }

    getDistance(another:Pointku){
        //...
    }
}
```