/* la correction ci-dessous met en place un middlware pour verifier les privilege admin avant d'accéder a certaines routes */

/* import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'
import * as utils from '../lib/utils'
import jws from 'jws'
import { UserModel } from '../models/user'

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = utils.jwtFrom(req)

  if (token) {
    const decoded = jws.decode(token) ? jwt.decode(token) : null

    if (decoded === null || typeof decoded === 'string') {
      return
    }

    UserModel.findByPk(decoded.data.id)
      .then(user => {
        if (user && user.role === 'admin') {
          next()
        } else {
          res.status(403).send('Accès refusé : privilèges insuffisants')
        }
      })
      .catch(e => {
        console.error('Erreur DB:', e)
        res.status(500).send('Erreur interne serveur')
      })
  }
} */
