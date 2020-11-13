import { Router } from 'express'
import  * as enterpriseCtrl from '../controllers/enterprise.controllers'

const EnterpriseRoter = Router()

EnterpriseRoter.get('/prueba', enterpriseCtrl.prueba);

export default EnterpriseRoter