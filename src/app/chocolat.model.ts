export class chocolat {
    constructor(
        public ref: string,
        public marque: string,
        public gout: string,
        public promotion: string,
        public imageUrl: string,
        public prix: number,
        public Disponible: boolean,) {
        this.ref = ref;
        this.marque = marque;
        this.gout = gout;
        this.promotion = promotion;
        this.Disponible = Disponible;
        this.prix = prix;
        this.imageUrl = imageUrl;
    }
}