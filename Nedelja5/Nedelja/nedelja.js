//Napraviti hijerarhiju klasa koje opisuje ljude na fakultetu.
// Osnovne klase koje treba implementirati (sa njihovim poljima):
// Čovek: ime, prezime, godina rođenja
// Student: trenutna godina studija, trenutni prosek
// Student osnovnih studija: smer osnovnih studija
// Student master studija: smer master studija
// Zaposleni: godina zaposlenja, plata
// Nastavnik: omiljeni predmet, listu predmeta na kojima drži nastavu
// Profesor: titula (docent, vanredni, redovni)
// Asistent: smer doktorskih studija
// Službenik: odsek

class Covek{
    constructor(ime, prezime, godiste){
        this.ime = ime
        this.prezime = prezime
        this.godiste = godiste
    }
}

class Student extends Covek{
    constructor(ime, prezime, godiste, trenutnaGodinaStudija, trenutniProsek){
    super(ime, prezime, godiste)
    this.trenutnaGodinaStudija= trenutnaGodinaStudija
    this.trenutniProsek= trenutniProsek
    }
}
class OsnovneStudije extends Student{
    constructor(ime, prezime, godiste,trenutnaGodinaStudija,trenutniProsek, smerOsnovnihStudija){
        super(ime, prezime, godiste, trenutnaGodinaStudija, trenutniProsek)
        this.smerOsnovnihStudija = smerOsnovnihStudija
    }
}

class MasterStudije extends Student{
    constructor(ime, prezime, godiste,trenutnaGodinaStudija,trenutniProsek, smerMasterStudija){
        super(ime, prezime, godiste, trenutnaGodinaStudija, trenutniProsek)
        this.smerMasterStudija = smerMasterStudija
    }
}

class Zaposleni extends Covek{
    constructor(ime, prezime, godiste, godinaZaposlenja, plata){
        super(ime, prezime, godiste)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}

class Nastavnik extends Zaposleni{
    constructor(ime, prezime, godiste, godinaZaposlenja, plata, omiljeniPredmet, nastavaLista){
        super(ime, prezime, godiste, godinaZaposlenja, plata)
        this.omiljeniPredmet = omiljeniPredmet
        this.nastavaLista = nastavaLista
    }
}

class Profesor extends Nastavnik{
    constructor(ime, prezime, godiste, godinaZaposlenja, plata, omiljeniPredmet, nastavaLista, titula){
        super(ime, prezime, godiste, godinaZaposlenja, plata, omiljeniPredmet, nastavaLista)
        this.titula = titula
    }
}

class Asistent extends Nastavnik{
    constructor(ime, prezime, godiste, godinaZaposlenja, plata, omiljeniPredmet, nastavaLista, smerDoktorskihStudija){
        super(ime, prezime, godiste, godinaZaposlenja, plata, omiljeniPredmet, nastavaLista)
        this.smerDoktorskihStudija = smerDoktorskihStudija
    }
}

class Sluzbenik extends Covek{
    constructor(ime, prezime, godiste,odsek){
        super(ime, prezime, godiste)
        this.odsek = odsek
    }
}

// let covek = new Covek('Milica', 'Pantelic', 1994)
// console.log(covek)

// let student1 = new Student('Milica', 'Pantelic', 1994, 4, 8.7)
// console.log(student1)

// let studentOS = new OsnovneStudije('Pera', 'Peric', 1989, 4, 8.9, 'Biohemicar')
// console.log(studentOS)