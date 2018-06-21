const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = config.app.logLevel

const router = express.Router()

router.route('/:uuid/customer').get((req, res) => {
  let sql = `
    select
      *
    from
      customer
    where
      user_uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

router.route('/login').post((req, res) => {
  let sql = `
    select
      uuid, account, password, name, valid
    from
      user
    where
      account = :account
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    if (result.length === 1) {
      delete result[0].password
      res.json({ content: result[0], message: '' })
    } else {
      res.json({ content: '', message: '账号密码错误或用户不存在。' })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

router.route('/register').post((req, res) => {
  let sql = `
    select id from user where account = :account
  `
  sequelize.query(sql, {
    replacements: { account: req.body.account },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    if (result.length !== 0) {
      res.json({ content: '', message: '账号重复。' })
      return false
    }
    sql = `
      insert into
        user
      set
        uuid = uuid(),
        account = :account,
        password = :password,
        name = :name
    `
    sequelize.query(sql, {
      replacements: req.body,
      type: sequelize.QueryTypes.INSERT
    }).then(result => {
      res.json({ content: result[0], message: '' })
    }).catch(err => {
      logger.error(err)
      res.json({ content: '', message: '服务器错误。' })
    })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

module.exports = router