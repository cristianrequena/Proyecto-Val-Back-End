const jwt = require("jsonwebtoken");

const User = require("../models/users.model");

const checkToken = async (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({error: "Debes incluir el token de autorización"});
    }

    let payload
    try {
        payload = jwt.verify(token, process.env.SECRET_KEY);
        console.log(payload);
    } catch (error) {
        return res.status(401).json({error: "Token inválido o expirado"});
    }
    const [result] =await User.selectById(payload.user_id)
    req.user = result[0]
    next();

    //si se hace de pago meter el check
};

const checkAdmin = (req, res, next) => {
    if(req.user.role !== 'admin')
        return res.status(403).json({ error: 'Debes ser administrador' });
    next();
};

//Middleware con parametros ejemplo
/*const checkRole = (role) => {
    if(req.user.role !== role){
        return res.status(401).json({error: `Debes tener role ${role}`})
    }
    next()
    //ejemplo routes
    router.get ('/perfil', checkToken, checkRole('regular'), getProfile)
}
*/

module.exports = {
    checkToken,
    checkAdmin,
};
