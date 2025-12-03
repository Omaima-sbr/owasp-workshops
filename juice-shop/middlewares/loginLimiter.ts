import { rateLimit } from 'express-rate-limit'

// Limiteur par IP - protection générale
export const loginLimiter = rateLimit({
   windowMs: 10 * 60 * 1000, // 10 minutes
  max: 2, // 5 tentatives max par compte
  message: 'Trop de tentatives , Veuiller ressayer dans 10 minutes.  ',
  standardHeaders: true,
  legacyHeaders: false
})
