export interface IList {
    id:string,
    id_product:string,
    id_order:string,
    qty_product:number
}

export interface ICart {
    id:string,
    name:string,
    date: Date,
    products:IList[]
}

export class Cart {
    constructor (
        private id:string,
        private name:string,
        private date:Date,
        private products:IList[]
    ) {}
        public getId = () => {
            return this.id
        }
        public getName = () => {
            return this.name
        }
        public getDate = () => {
            return this.date
        }
        public getProducts = () => {
            return this.products
        }

        public setId = (newId:string) => {
            this.id = newId
        }
        public setName = (newName:string) => {
            this.name = newName
        }
        public setDate = (newDate:Date) => {
            this.date = newDate
        }
        public setProduct = (newProduct:IList[]) => {
            this.products = newProduct
        }

}

export class Products {
    constructor (
        private id:string,
        private qty:number
    ) {}
        public getId = () => {
            return this.id
        }
        public getQty = () => {
            return this.qty
        }
        public setId = (newId:string) => {
            this.id = newId
        }
        public setQty = (newQty:number) => {
            this.qty = newQty
        }
}

export interface IcreateOrderDTO {
    name:string,
    date: string,
    products:IlistDTO[]
}
export interface IlistDTO {
    id:string,
    qty:number
}