const alternatif = require("../query/alternatifQuery");

const coba = async () => {
  const nilai = await alternatif.allAlternatif();

  const array = [];
  for (let i = 0; i < nilai.length; i++) {
    array[i] = nilai[i];
  }
  return array;
};

const processor = async () => {
  const array = await coba();
  const processor = array.map(function (element) {
    return element.processor ** 2;
  });
  const totalProcessor = processor.reduce((a, b) => a + b);
  const akarProcessor = [Math.sqrt(totalProcessor)];
  console.log(akarProcessor);
  return akarProcessor;
};

const ram = async () => {
  const array = await coba();
  const ram = array.map(function (element) {
    return element.ram ** 2;
  });
  const totalRam = ram.reduce((a, b) => a + b);
  const akarRam = [Math.sqrt(totalRam)];
  console.log(akarRam);
  return akarRam;
};

const penyimpanan = async () => {
  const array = await coba();
  const penyimpanan = array.map(function (element) {
    return element.penyimpanan ** 2;
  });
  const totalPenyimpanan = penyimpanan.reduce((a, b) => a + b);
  const akarPenyimpanan = [Math.sqrt(totalPenyimpanan)];
  console.log(akarPenyimpanan);
  return akarPenyimpanan;
};

const vga = async () => {
  const array = await coba();
  const vga = array.map(function (element) {
    return element.vga ** 2;
  });
  const totalVga = vga.reduce((a, b) => a + b);
  const akarVga = [Math.sqrt(totalVga)];
  console.log(akarVga);
  return akarVga;
};

const display = async () => {
  const array = await coba();
  const display = array.map(function (element) {
    return element.display ** 2;
  });
  const totalDisplay = display.reduce((a, b) => a + b);
  const akarDisplay = [Math.sqrt(totalDisplay)];
  console.log(akarDisplay);
  return akarDisplay;
};

const harga = async () => {
  const array = await coba();
  const harga = array.map(function (element) {
    return element.harga ** 2;
  });
  const totalHarga = harga.reduce((a, b) => a + b);
  const akarHarga = [Math.sqrt(totalHarga)];
  console.log(akarHarga);
  return akarHarga;
};

const lagi = async () => {
  const n1 = await coba();
  const n2 = await processor();

  const n3 = n1.map(function (element) {
    return element.processor / n2;
  });

  console.log(n3);
};

module.exports = {
  coba,
  processor,
  ram,
  penyimpanan,
  vga,
  display,
  harga,
  lagi,
};