import mongoose from "mongoose";
const Shema = mongoose.Shema; //hangi veriyi hangi formatta ve nasıl tuttuğumuzu belirtmek için

const productShema = new Shema({
    title: {
        type: String,
        require: true
    },
    short: {
        type: String,
        require: true
    },
    long: {
        type: String,
        require: true
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productShema)
module.exports = Product;