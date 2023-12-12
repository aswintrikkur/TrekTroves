const axios = require("axios")
const express = require("express");
const router = express.Router();
require("dotenv").config();

const TOLLGURU_API_KEY = process.env.TOLLGURU_API_KEY;
// const polyline1 = '_f`GwjixRSe@MIIEICGAIA_Al@MHIDe@VKFm@f@SLKLCFEHCF?HAF?NTH\\N`Ab@x@b@`@TZTPLTPZXDFBFXVZTrB~ARDLF~@ZJDTDPBVFJ@X@P@j@?N?d@ERC`@KhB{Al@i@f@Y~BaCPQJKbA_At@s@RSDEBEBCVU~A{ATW~@{@`@_@v@q@p@o@pA_AVSXSJIv@g@~@m@HEROTO@?rA{@VQ^UZSPMHGDEj@g@h@k@f@m@^g@vAqBTYp@_Ab@m@Va@R[Xg@b@u@^{@R]Pc@Vm@Pe@\\cA`@mAn@iB^aAp@aBn@cBt@yAFMP_@pC_GdBsDdAwBRc@fAyB`@y@Ve@pAaCxAqCf@_An@mAjBcE`BoD^w@Vo@P[Xe@JQ`@m@PULQh@o@\\_@l@m@r@m@pAeA`CoBxAoA\\YbAy@?An@i@~AqA`@a@VY^_@V[PSX_@T]T[f@y@JMHMtAcCd@}@f@_AlBoDb@y@r@sAd@{@R]\\o@h@y@Zc@n@_ABENQZc@TY@C\\_@RWFKPUPYT]BCDGl@_Af@w@^u@P_@j@sAh@mAVk@^s@^s@n@kA?Ad@u@fAeBl@eAZg@|@yA`BoCd@_AZo@Z}@J]Ng@BQJe@F_@DS@MDk@J{AFiAHmDHgDFwADiBH_D@[?E@]@c@BgALuEBcABkA@]B{AD_BBa@DaCJkCHiALyAPoAN_ALo@R}@Le@ZkAb@oATo@\\{@FK`@}@`@w@lA{BxAoC~AwCHOZm@l@eAHO^s@n@kAp@qANYL[L]J[Rs@FWNu@Jq@Fc@JiABw@@aBBaDDaA?m@D]\\cCJi@Lg@Pi@Xy@BGDMRg@DIFMHQFMJOr@qAZc@v@mAtAcBz@eANS`BuBtDoEd@m@dBoBj@o@V[LQFGhC{Cp@{@Za@LUJSHOJ[Ne@H]Fc@?AD_@Dg@@e@?I?M?M?aA?{@A}BCwA?oA?YEuB?k@Ag@C{@?A?ECs@AyA?m@ASC{CEmCA}@AYAW?KA}@CcBA{AAcA?WAUGiI?S?QAU?WAc@AgA?_@@a@@y@@e@@UBU@UVaD@MFaABc@@Y@G?i@Ak@Gk@EUI_@IY?AIUKUISQc@s@}AMWk@uAK[GOIa@I_@EYCQGm@Co@A]?M?O@]@UD[Fa@D]FWLk@Pg@N]P_@N[dBaDpBkD@AdCsEbAkBd@_APa@HUHUVaAES?EAE?E?EJ_ADk@@W@UEaAAOIm@M_ABCKa@CMESA?EMK[KWCIACAAKWs@sAq@gAEIEGS[S]GMGKWa@g@mAe@eA]OSIEAG?WAG@OBIBGDGF[b@IJKFk@`Au@pA}@~AMXcC~E_BnCY`@MT'
// const polyline2 = "_p~iF~ps|U_ulLnnqC_mqNvxq`@"


router.post("/", async (req, res) => {

    try {

        const { polyline } = req.body;
        const jsonPolyline = JSON.stringify(polyline)
        console.log(polyline,'===========polyline');
        console.log(jsonPolyline,'===========polyline');


        
        const response = await axios({
            method: 'POST',
            
            url: 'https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service',
            headers: {
                'content-type': 'application/json',
                'x-api-key': TOLLGURU_API_KEY
            },
            data: {
                "mapProvider": "google",
                // "polyline": jsonPolyline
                "polyline": polyline
            },
            // json: true
        });
        console.log(response.data);

        return res.json(response.data)


    } catch (error) {

        return res.status(400).json({
            message: error
        })
    }

});




module.exports = { tollGuruAPI: router }