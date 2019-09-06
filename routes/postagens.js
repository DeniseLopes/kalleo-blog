const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) =>{
    res.json({
        titulo: 'meu primeiro post',
        conteudo: 'Era uma vez, uma publicação',
        autor: 'Denise Lopes'
    })
})

module.exports = router