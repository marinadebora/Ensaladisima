const Usuarios = require('../../../modelos/Usuarios');
const Pedidos = require('../../../modelos/Pedidos')
const EnsaladaMed = require('../../../modelos/EnsaladasMedian')
var findOrCreate = require('mongoose-findorcreate')

const sesionMidelwere = async (req,res,next)=>{
    const { email, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts } = req.body;
    try {
        const usuario = await Usuarios.find({email})
        const buscarPedido = await Pedidos.find({user: usuario[0]._id})
        if(!buscarPedido[0].saladsMenu[0] || !buscarPedido[0].saladsMenuBig[0] || !buscarPedido[0].saladsMed[0] || !buscarPedido[0].saladsBig[0] || !buscarPedido[0].beverages[0] || !buscarPedido[0].desserts[0]){
            c/* onst crearMedianas = saladsMed ? saladsMed.map( async( e )=>{
                const llamar = await EnsaladaMed.findOrCreate({
                    base: e.base,
                    protein: e.proteinas,
                    complement: e.complement,
                    suace: e.salsa,
                    topping: e.topping
                })
                return llamar
            }): []
            const crearGrandes = saladsBig ? saladsBig.map( async( e )=>{
                const llamar = await EnsaladaMed.findOrCreate({
                    base: e.base,
                    protein: e.proteinas,
                    complement: e.complement,
                    suace: e.salsa,
                    topping: e.topping
                })
                return llamar
            }): [] */
            
            const agregarAlPedido = await Pedidos.findOneAndUpdate({_id:buscarPedido[0]._id},{
                saladsMenu: saladsMenu ? saladsMenu: [],
                saladsMenuBig: saladsMenuBig ? saladsMenuBig: [],
                beverages: beverages ? beverages: [],
                desserts: desserts ? desserts: [],
                /* saladsMed: buscarEnsaladaM ? buscarEnsaladaM?.map(e=> e): [],
                saladsBig: buscarEnsaladaG ? buscarEnsaladaG?.map(e=> e): [] */
            })
            
        }else{
            const BuscarUsuario = await Usuarios.find({email})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports ={ sesionMidelwere}