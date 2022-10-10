import axios from 'axios'

const base_URL = "https://shopper-case.herokuapp.com"

export const GetProducts = async () => {
    try {
        const res = await axios
        .get(`${base_URL}/products`)
        return res
    } catch (err) { alert("Por favor, tente novamente" )}
}

export const CreateOrder = async (body) => {
    try {
         await axios
        .post(`${base_URL}/order/create`, body)
    } catch (err) { alert( "Algum dado pode estar faltando, por favor, tente novamente" )}
}