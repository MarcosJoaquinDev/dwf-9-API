import methods from 'micro-method-router'
import { NextApiRequest, NextApiResponse } from 'next';

module.exports = methods({
  async post(req:NextApiRequest, res:NextApiResponse) {
    return res.status(200).json(`It's a POST Auth!`)
  }
})