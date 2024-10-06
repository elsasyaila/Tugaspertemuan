class Kapal {   
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }

    turunkanPenumpang(jumlahPenumpangTurun) {
        if (jumlahPenumpangTurun <= this.kapasitasPenumpang) {
            this.kapasitasPenumpang -= jumlahPenumpangTurun;
            return `${jumlahPenumpangTurun} penumpang telah diturunkan. Kapasitas sekarang: ${this.kapasitasPenumpang} orang.`;
        } else {
            return `Jumlah penumpang yang ingin diturunkan melebihi kapasitas yang ada.`;
        }
    }
}

class KapalBarang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasBarang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasBarang = kapasitasBarang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas barang sebesar ${this.kapasitasBarang} ton.`;
    }

    muatBarang(jumlahBarang) {
        this.kapasitasBarang += jumlahBarang;
        return `${jumlahBarang} ton barang berhasil dimuat. Kapasitas total sekarang: ${this.kapasitasBarang} ton.`;
    }
}

class KapalPesiar extends KapalPenumpang {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang, fasilitas) {
        super(nama, jenis, panjang, lebar, kapasitasPenumpang);
        this.fasilitas = fasilitas;
    }

    infoKapal() {
        return `${super.infoKapal()} Fasilitas kapal ini meliputi: ${this.fasilitas.join(', ')}.`;
    }

    tambahFasilitas(fasilitasBaru) {
        this.fasilitas.push(fasilitasBaru);
        return `Fasilitas ${fasilitasBaru} berhasil ditambahkan. Daftar fasilitas sekarang: ${this.fasilitas.join(', ')}.`;
    }
}

// Contoh penggunaan
const kapalFerry = new KapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600);
console.log(kapalFerry.infoKapal());
console.log(kapalFerry.turunkanPenumpang(100));

const kapalCargo = new KapalBarang("Kargo Nusantara", "Kapal Barang", 250, 120, 500);
console.log(kapalCargo.infoKapal());
console.log(kapalCargo.muatBarang(50));

const kapalPesiar = new KapalPesiar("Surya Bahari", "Kapal Pesiar", 300, 150, 800, ["Kolam Renang", "Restoran", "Spa"]);
console.log(kapalPesiar.infoKapal());
console.log(kapalPesiar.tambahFasilitas("Bioskop"));
