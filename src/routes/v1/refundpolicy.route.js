const express = require('express');

const router = express.Router();
const refundPolicyController = require('../../controllers/refundpolicy.controller');

router.get('/', refundPolicyController.getRefundPolicy);
router.post('/', refundPolicyController.createOrUpdateRefundPolicy);
router.delete('/', refundPolicyController.deleteRefundPolicy);

module.exports = router;
