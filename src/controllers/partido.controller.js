const Partido = require('../models/partido');
partidoController = {};
partidoController.savePartido = async (req, res) => {
    try {
        const partido = new Partido(req.body);
        await partido.save();
        res.json({
            partido,
            message: 'partido guardado'
        });
    } catch (e) {
        console.log('Hubo un error al guardar el partido');
    }

}
partidoController.getPartidos = async (req, res) => {
    try {
        const partidos = await Partido.find();
        res.json(partidos);
    } catch (e) {
        console.log('Hubo un error al obtener los partidos');
    }
}

partidoController.updatePartido = async (req, res) => {
    try {
        await Partido.updateOne({ _id: req.params.id }, req.body);
        res.json({ message: 'Actualizado' });
    } catch (e) {
        console.log('Hubo un error al obtener los partidos');
    }
}
partidoController.getPartido = async (req, res) => {
    const partido = await Partido.findById(req.params.id);
    res.json(partido);
}

// userController.getUsers = async (req, res) => {
//     const users = await User.find();
//     res.json(users);
// }

// userController.getUser = async (req, res) => {
//     const user = await User.findById(req.params.id);
//     res.json(user);
// }

// userController.saveUser = async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.json(user);
//     } catch (e) {
//         console.log('Hubo un error');
//     }

// }

// userController.updateUser = async (req, res) => {
//     const { id } = req.params;
//     await User.update({ _id: id }, req.body);
//     res.redirect('/users');
// }

// userController.deleteUser = async (req, res) => {
//     const { id } = req.params;
//     await User.deleteOne({ _id: id });
//     res.redirect('/users');
// }

// const otherFunction = async () => {
//     const user = await User.findOneAndUpdate({ username: 'fazt' }, {
//         name: 'Ryan Ray'
//     }, { new: true });
//     console.log(user);
// };

// user.save((err, document) => {
//     if (err) console.log(err);
//     console.log('saved:', document);
// });

module.exports = partidoController;
