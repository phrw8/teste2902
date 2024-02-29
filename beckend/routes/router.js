const express = require('express')
const Router = express.Router()
const conecction = require('../infra/bd')
const body_parser = require('body-parser')

Router.use(body_parser.json());
Router.use(body_parser.urlencoded({ extended: true }));
Router.get('/',(req,res)=>{
    const sql = 'SELECT * FROM usuario';

    conecction.query(sql, (err, results) => {
      if (err) {
        console.error('Erro ao executar consulta:', err);
        res.status(500).send('Erro ao buscar dados do banco de dados');
      } else {
        res.json(results)
      }
    });
})

Router.post('/registra', (req,res)=>{
     
  const { nome, descricao } = req.body;

  const sql = 'INSERT INTO usuario (nome,descricao) VALUES (?, ?)';

  conecction.query(sql, [nome,descricao], (err, results) => {
    if (err) {
      console.error('Erro ao registrar usuário:', err);
      res.status(500).send('Erro ao inserir dados no banco de dados');
    }
     else {
      res.status(201).send('Usuário registrado com sucesso');
    }
  });
})

Router.delete('/delete/:id', (req,res)=>{
    const userId = req.params.id;

    const sql = 'DELETE FROM usuario WHERE id = ?';
  
    conecction.query(sql, [userId], (err, results) => {
      if (err) {
        console.error('Erro ao excluir usuário:', err);
        res.status(500).send('Erro ao excluir usuário do banco de dados');
      } else {
        if (results.affectedRows > 0) {
          res.status(200).send('Usuário excluído com sucesso');
        } else {
          res.status(404).send('Usuário não encontrado');
        }
      }
    });
})



Router.put('/atualiza/:id', (req, res) => {
    const userId = req.params.id;
    const { nome, descricao } = req.body;
  
    const sql = 'UPDATE usuario SET nome = ?, descricao = ? WHERE id = ?';
  
    conecction.query(sql, [nome, descricao, userId], (err, results) => {
      if (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).send('Erro ao atualizar usuário no banco de dados');
      } else {
        if (results.affectedRows > 0) {
          res.status(200).send('Usuário atualizado com sucesso');
        } else {
          res.status(404).send('Usuário não encontrado');
        }
      }
    });
  });

module.exports = Router