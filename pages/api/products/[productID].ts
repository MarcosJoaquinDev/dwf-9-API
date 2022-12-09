import methods from 'micro-method-router'
import { NextApiRequest, NextApiResponse } from 'next';

module.exports = methods({
  async get(req:NextApiRequest, res:NextApiResponse) {
    const { productID } = req.query; 
    return res.status(200).json(`It's a GET product/${productID}!`)
  }
})