
// const maindiv = document.querySelector("#maindiv");
// const p = document.querySelector("#info");
// const phones = [
//       {

//             img: '.src./accets/s20.jpg', // Replace with the actual image path
//             brand: 'Samsung',
//             model: 'S20',
//             ram: 8,
//             rom: 256,
//             camera: '20 megapixel'
//       },
//       {
//             img: './accets/s20.jpg', // Replace with the actual image path
//             brand: 'Xiaomi',
//             model: 'Note 10',
//             ram: 4,
//             rom: 64,
//             camera: '10 megapixel'
//       },
//       {
//             brand: 'Infinix',
//             model: 'Z10',
//             ram: 2,
//             rom: 16,
//             camera: '5 megapixel'
//       },
//       {
//             brand: 'Tecno',
//             model: 'Spark 10',
//             ram: 12,
//             rom: 512,
//             camera: '25 megapixel'
//       },
//       {
//             brand: 'iPhone',
//             model: '14',
//             ram: 4,
//             rom: 1024,
//             camera: '30 megapixel'
//       },
//       {
//             brand: 'Oppo',
//             model: 'F11',
//             ram: 8,
//             rom: 256,
//             camera: '20 megapixel'
//       },
//       {
//             brand: 'Vivo',
//             model: 'Y20',
//             ram: 4,
//             rom: 64,
//             camera: '8 megapixel'
//       }
// ];
// for (let i = 0; i < phones.length; i++) {
//       maindiv.innerHTML += `<button onclick="show(${i})">${phones[i].brand} ${phones[i].model}</button><br>`;
// }


// function show(i) {
//                   const phone = phones[i];
//                   p.innerHTML = `
//           <p>Brand: ${phone.brand}</p>
//           <p>Model: ${phone.model}</p>
//           <p>RAM: ${phone.ram} GB</p>
//           <p>ROM: ${phone.rom} GB</p>
//           <p>Camera: ${phone.camera}</p>
//         `;
// }

const maindiv = document.querySelector("#maindiv");
const p = document.querySelector("#info");
const phones = [
      {
            img: './accets/white s20.png',
            brand: 'Samsung',
            model: 'S20',
            ram: 8,
            rom: 256,
            camera: '12+64 megapixel',
            frontcamera: '10 megapixel',
            price: 'PKR 429,999'
      },
      {
            img: './accets/redmi 10.png',
            brand: 'Xiaomi',
            model: 'Note 10',
            ram: 4,
            rom: 64,
            camera: '48 megapixel',
            frontcamera: '13 megapixel',
            price: 'PKR 429,999'
      },
      {
            img: './accets/zfold.png',
            brand: 'Samsung',
            model: 'Z fold',
            ram: 16,
            rom: 256,
            camera: '50 megapixel',
            frontcamera: '10+4 megapixel',
            price: 'PKR 429,999'
      },
      {
            img: './accets/white s20.png',
            brand: 'Samsung',
            model: 'S20',
            ram: 8,
            rom: 256,
            camera: '12+64 megapixel',
            frontcamera: '10 megapixel',
            price: 'PKR 429,999'
      },
      {
            img: './accets/redmi 10.png',
            brand: 'Xiaomi',
            model: 'Note 10',
            ram: 4,
            rom: 64,
            camera: '48 megapixel',
            frontcamera: '13 megapixel',
            price: 'PKR 429,999'
      },
      {
            img: './accets/zfold.png',
            brand: 'Samsung',
            model: 'Z fold',
            ram: 16,
            rom: 256,
            camera: '50 megapixel',
            frontcamera: '10+4 megapixel',
            price: 'PKR 429,999'
      },

      // ... other phone entries
];


const images=[
      {
            brand: 'redimi',
            model: 'note 10',
            img1:  './accets/redmi 10.png',
            img2:'./accets/redmi blue 10.png',
            img3:'./accets/redmi gray 10.png',
      }
]

for (let i = 0; i < phones.length; i++) {
      const phone = phones[i];
      maindiv.innerHTML += `
          <div style="display: flex; margin: 0 auto;">
              <img src="${phone.img}" alt="${phone.brand} ${phone.model}" width="100">
              <button  onclick="show(${i})">${phone.brand} ${phone.model}</button>
          </div>
      `;
}


function show(i) {
      const phone = phones[i];
      const imageSet = images[i];
      p.innerHTML = `
            <div style="text-align: center;">

                  <img src="${phone.img}" alt="${phone.brand} ${phone.model}" width="400"
                  style="display: block; margin: 0 auto;">
                 

            </div>
            <div style="text-align: center; display: flex; justify-content: center;">
                 <img src="${images.img1}" alt="${images.brand} ${images.model}" width="100">
                 <img src="${images.img2}" alt="${images.brand} ${images.model}" width="100">
                 <img src="${images.img3}" alt="${images.brand} ${images.model}" width="100">
            </div>

          <p>Brand: ${phone.brand}</p>
          <p>Model: ${phone.model}</p>
          <p>RAM: ${phone.ram} GB</p>
          <p>ROM: ${phone.rom} GB</p>
          <p>Back Camera: ${phone.camera}</p>
          <p>Front Camera: ${phone.frontcamera}</p>
          <p>Price: ${phone.price}</p>
          <button style="background-color: #118811; color: #fff;">Add tocart</button>
          <button style="background-color: #dc1b1b; color: #fff;">Order Now</button>
      `;
}













<!DOCTYPE html>
<html>
<head>
    <title>Phone List</title>
</head>
<body>
    <div id="maindiv"></div>
    <p id="info"></p>

    <script>
        const maindiv = document.querySelector("#maindiv");
        const p = document.querySelector("#info");
        const phones = [
            {
                img: './accets/white s20.png',
                brand: 'Samsung',
                model: 'S20',
                ram: 8,
                rom: 256,
                camera: '12+64 megapixel',
                frontcamera: '10 megapixel',
                price: 'PKR 429,999'
            },
            {
                img: './accets/redmi 10.png',
                brand: 'Xiaomi',
                model: 'Note 10',
                ram: 4,
                rom: 64,
                camera: '48 megapixel',
                frontcamera: '13 megapixel',
                price: 'PKR 429,999'
            },
            {
                img: './accets/zfold.png',
                brand: 'Samsung',
                model: 'Z fold',
                ram: 16,
                rom: 256,
                camera: '50 megapixel',
                frontcamera: '10+4 megapixel',
                price: 'PKR 429,999'
            },
            // ... other phone entries
        ];

        const images = [
            {
                brand: 'redmi',
                model: 'note 10',
                img1: './accets/redmi 10.png',
                img2: './accets/redmi blue 10.png',
                img3: './accets/redmi gray 10.png',
            }
            // ... other image entries
        ];

        for (let i = 0; i < phones.length; i++) {
            const phone = phones[i];
            maindiv.innerHTML += `
                <div style="display: flex; margin: 0 auto;">
                    <img src="${phone.img}" alt="${phone.brand} ${phone.model}" width="100">
                    <button onclick="show(${i})">${phone.brand} ${phone.model}</button>
                </div>
            `;
        }

        function show(i) {
            const phone = phones[i];
            const imageSet = images[i];

            p.innerHTML = `
                <div style="text-align: center;">
                    <img src="${phone.img}" alt="${phone.brand} ${phone.model}" width="400" style="display: block; margin: 0 auto;">
                </div>
                <div style="text-align: center; display: flex; justify-content: center;">
                    <img src="${imageSet.img1}" alt="${imageSet.brand} ${imageSet.model}" width="100">
                    <img src="${imageSet.img2}" alt="${imageSet.brand} ${imageSet.model}" width="100">
                    <img src="${imageSet.img3}" alt="${imageSet.brand} ${imageSet.model}" width="100">
                </div>
                <p>Brand: ${phone.brand}</p>
                <p>Model: ${phone.model}</p>
                <p>RAM: ${phone.ram} GB</p>
                <p>ROM: ${phone.rom} GB</p>
                <p>Back Camera: ${phone.camera}</p>
                <p>Front Camera: ${phone.frontcamera}</p>
                <p>Price: ${phone.price}</p>
                <button style="background-color: #118811; color: #fff;">Add to cart</button>
                <button style="background-color: #dc1b1b; color: #fff;">Order Now</button>
            `;
        }

