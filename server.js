import express from 'express'

const servidor = express()
servidor.use(express.json());

const filme = []


servidor.get('/netoFilho', (req, res) => {
  res.send(filme)
})

servidor.post('/catalogo', (req, res) => {
  filme.push(req.body)
    res.send('um new felmi foi cadastrado com sucesso!!')
})

const jogo = []

servidor.get('/game-up', (req, res) => {
  res.send(jogo)
})

servidor.post('/catalojogos', (req, res) => {
  jogo.push(req.body)
  res.send('JOGOS IRADOS foiram cadastrado com sucesso!!!!')
})


servidor.listen(3000, () =>{
 console.log('deu bao')

})