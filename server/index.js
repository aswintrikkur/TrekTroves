const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { tollGuruAPI } = require("./routes/tollGuruAPI");
const { encodePath, decodeString } = require("./utils/polyline");
const { fetchRoute } = require("./utils/gmap");

app.use(cors());
app.use(express.json());




app.use("/api/TollGuru", tollGuruAPI);

app.all("*", (req, res) => {
    res.status(404).json("This page does not exist");
});


// const path=[
//         [38.5, -120.2],
//         [40.7, -120.95],
//         [43.252, -126.453],
//       ]

// encodePath(path)


// const poyline ='_f`GwjixRSe@MIIEICGAIA_Al@MHIDe@VKFm@f@SLKLCFEHCF?HAF?NTH\\N`Ab@x@b@`@TZTPLTPZXDFBFXVZTrB~ARDLF~@ZJDTDPBVFJ@X@P@j@?N?d@ERC`@KhB{Al@i@f@Y~BaCPQJKbA_At@s@RSDEBEBCVU~A{ATW~@{@`@_@v@q@p@o@rA_ATSXSJIv@g@~@m@HEROTO@?rA{@VQ^UZSPMHGDEj@g@h@k@f@m@^g@vAqBTYp@_Ab@m@Va@R[Xg@b@u@^{@R]Pc@Vm@Re@ZcA`@mAn@iB^aAp@aBn@cBt@yAFMP_@rC_GdBsDbAwBRc@hAyB`@y@Te@pAaCxAqCf@_An@mAjBcE`BoD`@w@To@P[Ze@HQ`@m@PULQh@o@\\_@n@m@p@m@pAeA`CoBxAoA\\YbAy@?An@i@~AqA`@a@VY^_@V[PSX_@T]T[f@y@JMHMtAcCd@}@h@_AjBoDb@y@r@sAd@{@R]\\o@h@y@Zc@n@_ABENQZc@VY?C\\_@RWFKPURYR]BCDGl@_Af@w@^u@P_@j@sAh@mAVk@^s@^s@n@kA?Ad@u@fAeBl@eAZg@|@yA`BoCf@_AXo@Z}@L]Lg@DQHe@F_@DSBMDk@H{AFiAHmDHgDHwADiBF_D@[?EB]?c@BgANuE@cABkA@]D{AB_BBa@DaCJkCHiALyAPoAN_ALo@R}@Le@ZkAb@oATo@\\{@HK`@}@^w@lA{BxAoC`BwCFOZm@l@eAHO^s@n@kAp@qANYL[L]J[Rs@FWNu@Jq@Fc@JiABw@@aBDaDDaA?m@B]\\cCLi@Lg@Ni@Xy@BGFMRg@BIHMFQFMJOr@qAZc@v@mAtAcB|@eALS`BuBtDoEd@m@dBoBj@o@V[LQFGjC{Cn@{@Za@LUJSHOJ[Pe@F]Fc@?AD_@Dg@@e@?I?M?M?aA?{@A}BCwA?oA?YCuB?k@Cg@A{@?A?EEs@AyA?m@ASC{CEmCA}@AYAW?KA}@CcBA{A?cA?WCUGiI?S?QAU?W?c@CgA?_@Ba@?y@@e@@UBU@UVaD@MFaABc@@YBG?i@Ck@Gk@EUI_@IY?AIUKUISQc@s@}AMWi@uAM[EOKa@I_@EYCQGm@Co@A]?M?O@]@UF[Da@D]FWLk@Rg@L]R_@L[dBaDpBkD@AdCsEbAkBf@_ANa@JUFUVaAES?E?E?E?EH_ADk@@W@UEaA?OKm@M_ADCMa@CMESA?EMK[IWEIACAAKWs@sAo@gAGIEGS[S]GMEKYa@g@mAc@eA_@OSIEAG?UAI@OBGBIDGF[b@GJMFk@`Au@pA}@~AMXcC~E}AnC[`@KT';

// decodeString(poyline)

const PORT = 3006;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);