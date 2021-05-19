import React from "react";
import {Helmet} from "react-helmet";
import ImageGallery from "react-image-gallery";
import SideBar from "./sidebar";
import tetra from "../assets/tetra.png";

const images = [
  {
    original: "https://i.imgur.com/DzP5wEB.png",
    thumbnail: "https://i.imgur.com/DzP5wEBs.png",
  },
  {
    original: "https://i.imgur.com/pzNaYl1.png",
    thumbnail: "https://i.imgur.com/pzNaYl1s.png",
  },
  {
    original: "https://i.imgur.com/OEy7Luf.png",
    thumbnail: "https://i.imgur.com/OEy7Lufs.png",
  },
  {
    original: "https://i.imgur.com/eYCISFB.png",
    thumbnail: "https://i.imgur.com/eYCISFBs.png",
  },
  {
    original: "https://i.imgur.com/P7pFSUz.png",
    thumbnail: "https://i.imgur.com/P7pFSUzs.png",
  },
  {
    original: "https://i.imgur.com/X8ysHwl.png",
    thumbnail: "https://i.imgur.com/X8ysHwls.png",
  },
  {
    original: "https://i.imgur.com/1YBRuBz.png",
    thumbnail: "https://i.imgur.com/1YBRuBzs.png",
  },
  {
    original: "https://i.imgur.com/miBIcu1.png",
    thumbnail: "https://i.imgur.com/miBIcu1s.png",
  },
  {
    original: "https://i.imgur.com/XZn4vf9.png",
    thumbnail: "https://i.imgur.com/XZn4vf9s.png",
  },
  {
    original: "https://i.imgur.com/lXgE3Jr.png",
    thumbnail: "https://i.imgur.com/lXgE3Jrs.png",
  },
  {
    original: "https://i.imgur.com/024jnSM.png",
    thumbnail: "https://i.imgur.com/024jnSMs.png",
  },
  {
    original: "https://i.imgur.com/2LvNZIg.png",
    thumbnail: "https://i.imgur.com/2LvNZIgs.png",
  },
  {
    original: "https://i.imgur.com/NVXez7i.png",
    thumbnail: "https://i.imgur.com/NVXez7is.png",
  },
  {
    original: "https://i.imgur.com/BpP23ww.png",
    thumbnail: "https://i.imgur.com/BpP23wws.png",
  },
  {
    original: "https://i.imgur.com/w1NHxlu.png",
    thumbnail: "https://i.imgur.com/w1NHxlus.png",
  },
  {
    original: "https://i.imgur.com/9RPhA8H.png",
    thumbnail: "https://i.imgur.com/9RPhA8Hs.png",
  },
  {
    original: "https://i.imgur.com/F4xXfjf.png",
    thumbnail: "https://i.imgur.com/F4xXfjfs.png",
  },
  {
    original: "https://i.imgur.com/QDvy0MM.png",
    thumbnail: "https://i.imgur.com/QDvy0MMs.png",
  },
  {
    original: "https://i.imgur.com/sltoIPh.png",
    thumbnail: "https://i.imgur.com/sltoIPhs.png",
  },
  {
    original: "https://i.imgur.com/3jWVxvS.png",
    thumbnail: "https://i.imgur.com/3jWVxvSs.png",
  },
  {
    original: "https://i.imgur.com/9MAqsqj.png",
    thumbnail: "https://i.imgur.com/9MAqsqjs.png",
  },
  {
    original: "https://i.imgur.com/EP1s8ZD.png",
    thumbnail: "https://i.imgur.com/EP1s8ZDs.png",
  },
  {
    original: "https://i.imgur.com/zk5YySW.png",
    thumbnail: "https://i.imgur.com/zk5YySWs.png",
  },
  {
    original: "https://i.imgur.com/pKs9dUC.png",
    thumbnail: "https://i.imgur.com/pKs9dUCs.png",
  },
  {
    original: "https://i.imgur.com/GsgAkr0.png",
    thumbnail: "https://i.imgur.com/GsgAkr0s.png",
  },
  {
    original: "https://i.imgur.com/McHb9vk.png",
    thumbnail: "https://i.imgur.com/McHb9vks.png",
  },
  {
    original: "https://i.imgur.com/Mc22MOc.png",
    thumbnail: "https://i.imgur.com/Mc22MOcs.png",
  },
  {
    original: "https://i.imgur.com/DcQhGgm.png",
    thumbnail: "https://i.imgur.com/DcQhGgms.png",
  },
  {
    original: "https://i.imgur.com/lINc4MI.png",
    thumbnail: "https://i.imgur.com/lINc4MIs.png",
  },
  {
    original: "https://i.imgur.com/zKcY9mD.png",
    thumbnail: "https://i.imgur.com/zKcY9mDs.png",
  },
  {
    original: "https://i.imgur.com/TeC2tSV.png",
    thumbnail: "https://i.imgur.com/TeC2tSVs.png",
  },
  {
    original: "https://i.imgur.com/tzg8V7Z.png",
    thumbnail: "https://i.imgur.com/tzg8V7Zs.png",
  },
  {
    original: "https://i.imgur.com/oxw95x5.png",
    thumbnail: "https://i.imgur.com/oxw95x5s.png",
  },
  {
    original: "https://i.imgur.com/7CJMfC6.png",
    thumbnail: "https://i.imgur.com/7CJMfC6s.png",
  },
  {
    original: "https://i.imgur.com/4NefVpY.png",
    thumbnail: "https://i.imgur.com/4NefVpYs.png",
  },
  {
    original: "https://i.imgur.com/ThW4wvt.png",
    thumbnail: "https://i.imgur.com/ThW4wvts.png",
  },
  {
    original: "https://i.imgur.com/Nhje2Hm.png",
    thumbnail: "https://i.imgur.com/Nhje2Hms.png",
  },
  {
    original: "https://i.imgur.com/DtvKloZ.png",
    thumbnail: "https://i.imgur.com/DtvKloZs.png",
  },
  {
    original: "https://i.imgur.com/kVGktV4.png",
    thumbnail: "https://i.imgur.com/kVGktV4s.png",
  },
  {
    original: "https://i.imgur.com/Jjy0t4y.png",
    thumbnail: "https://i.imgur.com/Jjy0t4ys.png",
  },
  {
    original: "https://i.imgur.com/HN8MVag.jpg",
    thumbnail: "https://i.imgur.com/HN8MVags.jpg",
  },
  {
    original: "https://i.imgur.com/dvChgEk.jpg",
    thumbnail: "https://i.imgur.com/dvChgEks.jpg",
  },
  {
    original: "https://i.imgur.com/LrtHZDw.png",
    thumbnail: "https://i.imgur.com/LrtHZDws.png",
  },
  {
    original: "https://i.imgur.com/0unQMrQ.png",
    thumbnail: "https://i.imgur.com/0unQMrQs.png",
  },
  {
    original: "https://i.imgur.com/YB1wahu.png",
    thumbnail: "https://i.imgur.com/YB1wahus.png",
  },
  {
    original: "https://i.imgur.com/uJNhUI6.png",
    thumbnail: "https://i.imgur.com/uJNhUI6s.png",
  },
  {
    original: "https://i.imgur.com/XvWj2y8.png",
    thumbnail: "https://i.imgur.com/XvWj2y8s.png",
  },
  {
    original: "https://i.imgur.com/yJUraHm.png",
    thumbnail: "https://i.imgur.com/yJUraHms.png",
  },
  {
    original: "https://i.imgur.com/gdPmlt6.png",
    thumbnail: "https://i.imgur.com/gdPmlt6s.png",
  },
  {
    original: "https://i.imgur.com/j5oOuUs.png",
    thumbnail: "https://i.imgur.com/j5oOuUss.png",
  },
  {
    original: "https://i.imgur.com/zp2jNjy.png",
    thumbnail: "https://i.imgur.com/zp2jNjys.png",
  },
  {
    original: "https://i.imgur.com/9lYof2g.png",
    thumbnail: "https://i.imgur.com/9lYof2gs.png",
  },
  {
    original: "https://i.imgur.com/aR4OB9N.png",
    thumbnail: "https://i.imgur.com/aR4OB9Ns.png",
  },
  {
    original: "https://i.imgur.com/BCwliTT.png",
    thumbnail: "https://i.imgur.com/BCwliTTs.png",
  },
  {
    original: "https://i.imgur.com/swbfO1Z.png",
    thumbnail: "https://i.imgur.com/swbfO1Zs.png",
  },
  {
    original: "https://i.imgur.com/bjVcSmH.png",
    thumbnail: "https://i.imgur.com/bjVcSmHs.png",
  },
  {
    original: "https://i.imgur.com/K5mKKmS.png",
    thumbnail: "https://i.imgur.com/K5mKKmSs.png",
  },
  {
    original: "https://i.imgur.com/2wWxQlz.png",
    thumbnail: "https://i.imgur.com/2wWxQlzs.png",
  },
  {
    original: "https://i.imgur.com/kuYBtw6.png",
    thumbnail: "https://i.imgur.com/kuYBtw6s.png",
  },
  {
    original: "https://i.imgur.com/KIhRw9V.png",
    thumbnail: "https://i.imgur.com/KIhRw9Vs.png",
  },
  {
    original: "https://i.imgur.com/TCGaXpk.png",
    thumbnail: "https://i.imgur.com/TCGaXpks.png",
  },
  {
    original: "https://i.imgur.com/PopMZFN.png",
    thumbnail: "https://i.imgur.com/PopMZFNs.png",
  },
  {
    original: "https://i.imgur.com/W0SXS3h.png",
    thumbnail: "https://i.imgur.com/W0SXS3hs.png",
  },
  {
    original: "https://i.imgur.com/hWcnSlU.png",
    thumbnail: "https://i.imgur.com/hWcnSlUs.png",
  },
  {
    original: "https://i.imgur.com/WEq6qRq.png",
    thumbnail: "https://i.imgur.com/WEq6qRqs.png",
  },
  {
    original: "https://i.imgur.com/8y0PQ9z.jpg",
    thumbnail: "https://i.imgur.com/8y0PQ9zs.jpg",
  },
  {
    original: "https://i.imgur.com/mGVcJMr.png",
    thumbnail: "https://i.imgur.com/mGVcJMrs.png",
  },
  {
    original: "https://i.imgur.com/PidyO87.png",
    thumbnail: "https://i.imgur.com/PidyO87s.png",
  },
  {
    original: "https://i.imgur.com/1qmHCu5.png",
    thumbnail: "https://i.imgur.com/1qmHCu5s.png",
  },
  {
    original: "https://i.imgur.com/kuRyR8X.png",
    thumbnail: "https://i.imgur.com/kuRyR8Xs.png",
  },
  {
    original: "https://i.imgur.com/cMJPgbN.png",
    thumbnail: "https://i.imgur.com/cMJPgbNs.png",
  },
  {
    original: "https://i.imgur.com/vHc1Jju.png",
    thumbnail: "https://i.imgur.com/vHc1Jjus.png",
  },
  {
    original: "https://i.imgur.com/MR0HcL7.png",
    thumbnail: "https://i.imgur.com/MR0HcL7s.png",
  },
  {
    original: "https://i.imgur.com/RlAobD6.png",
    thumbnail: "https://i.imgur.com/RlAobD6s.png",
  },
  {
    original: "https://i.imgur.com/acrN67d.png",
    thumbnail: "https://i.imgur.com/acrN67ds.png",
  },
  {
    original: "https://i.imgur.com/rPnVD7x.png",
    thumbnail: "https://i.imgur.com/rPnVD7xs.png",
  },
  {
    original: "https://i.imgur.com/FlQ7bQR.png",
    thumbnail: "https://i.imgur.com/FlQ7bQRs.png",
  },
  {
    original: "https://i.imgur.com/zVSlDRe.png",
    thumbnail: "https://i.imgur.com/zVSlDRes.png",
  },
  {
    original: "https://i.imgur.com/IdvqbAP.png",
    thumbnail: "https://i.imgur.com/IdvqbAPs.png",
  },
  {
    original: "https://i.imgur.com/8inDdoj.png",
    thumbnail: "https://i.imgur.com/8inDdojs.png",
  },
  {
    original: "https://i.imgur.com/KjmYJRz.png",
    thumbnail: "https://i.imgur.com/KjmYJRzs.png",
  },
  {
    original: "https://i.imgur.com/WJCmmE9.png",
    thumbnail: "https://i.imgur.com/WJCmmE9s.png",
  },
  {
    original: "https://i.imgur.com/Mb8DnfD.png",
    thumbnail: "https://i.imgur.com/Mb8DnfDs.png",
  },
  {
    original: "https://i.imgur.com/Z6efdgf.png",
    thumbnail: "https://i.imgur.com/Z6efdgfs.png",
  },
  {
    original: "https://i.imgur.com/IgjE1Zg.png",
    thumbnail: "https://i.imgur.com/IgjE1Zgs.png",
  },
  {
    original: "https://i.imgur.com/qgTaRDx.png",
    thumbnail: "https://i.imgur.com/qgTaRDxs.png",
  },
  {
    original: "https://i.imgur.com/2LVOPRW.png",
    thumbnail: "https://i.imgur.com/2LVOPRWs.png",
  },
  {
    original: "https://i.imgur.com/agFx7SX.png",
    thumbnail: "https://i.imgur.com/agFx7SXs.png",
  },
  {
    original: "https://i.imgur.com/PfOfT1T.png",
    thumbnail: "https://i.imgur.com/PfOfT1Ts.png",
  },
  {
    original: "https://i.imgur.com/g3cv6XU.png",
    thumbnail: "https://i.imgur.com/g3cv6XUs.png",
  },
  {
    original: "https://i.imgur.com/PnaML1e.png",
    thumbnail: "https://i.imgur.com/PnaML1es.png",
  },
  {
    original: "https://i.imgur.com/q2xd4JN.png",
    thumbnail: "https://i.imgur.com/q2xd4JNs.png",
  },
  {
    original: "https://i.imgur.com/CryidpO.png",
    thumbnail: "https://i.imgur.com/CryidpOs.png",
  },
  {
    original: "https://i.imgur.com/PEGq7M7.png",
    thumbnail: "https://i.imgur.com/PEGq7M7s.png",
  },
  {
    original: "https://i.imgur.com/kSBdLKT.png",
    thumbnail: "https://i.imgur.com/kSBdLKTs.png",
  },
  {
    original: "https://i.imgur.com/CL65gDr.png",
    thumbnail: "https://i.imgur.com/CL65gDrs.png",
  },
  {
    original: "https://i.imgur.com/bxxeiqp.png",
    thumbnail: "https://i.imgur.com/bxxeiqps.png",
  },
  {
    original: "https://i.imgur.com/C4iXcRa.png",
    thumbnail: "https://i.imgur.com/C4iXcRas.png",
  },
  {
    original: "https://i.imgur.com/2I1ECYX.png",
    thumbnail: "https://i.imgur.com/2I1ECYXs.png",
  },
  {
    original: "https://i.imgur.com/inD48Sv.png",
    thumbnail: "https://i.imgur.com/inD48Svs.png",
  },
  {
    original: "https://i.imgur.com/9WVh8TL.png",
    thumbnail: "https://i.imgur.com/9WVh8TLs.png",
  },
  {
    original: "https://i.imgur.com/2q1wTzg.png",
    thumbnail: "https://i.imgur.com/2q1wTzgs.png",
  },
  {
    original: "https://i.imgur.com/1pCNr1r.png",
    thumbnail: "https://i.imgur.com/1pCNr1rs.png",
  },
  {
    original: "https://i.imgur.com/xiOkxci.png",
    thumbnail: "https://i.imgur.com/xiOkxcis.png",
  },
  {
    original: "https://i.imgur.com/QyDmvPd.png",
    thumbnail: "https://i.imgur.com/QyDmvPds.png",
  },
  {
    original: "https://i.imgur.com/xTwyBB2.png",
    thumbnail: "https://i.imgur.com/xTwyBB2s.png",
  },
  {
    original: "https://i.imgur.com/sWt1N8I.png",
    thumbnail: "https://i.imgur.com/sWt1N8Is.png",
  },
  {
    original: "https://i.imgur.com/FqFrEKz.png",
    thumbnail: "https://i.imgur.com/FqFrEKzs.png",
  },
  {
    original: "https://i.imgur.com/obzNkPf.png",
    thumbnail: "https://i.imgur.com/obzNkPfs.png",
  },
  {
    original: "https://i.imgur.com/sWfp2jm.png",
    thumbnail: "https://i.imgur.com/sWfp2jms.png",
  },
  {
    original: "https://i.imgur.com/uaiokls.png",
    thumbnail: "https://i.imgur.com/uaioklss.png",
  },
  {
    original: "https://i.imgur.com/oOX56iM.png",
    thumbnail: "https://i.imgur.com/oOX56iMs.png",
  },
  {
    original: "https://i.imgur.com/A8PI69y.png",
    thumbnail: "https://i.imgur.com/A8PI69ys.png",
  },
  {
    original: "https://i.imgur.com/kTCUGu1.png",
    thumbnail: "https://i.imgur.com/kTCUGu1s.png",
  },
  {
    original: "https://i.imgur.com/492AtIt.png",
    thumbnail: "https://i.imgur.com/492AtIts.png",
  },
  {
    original: "https://i.imgur.com/3YAB3s9.png",
    thumbnail: "https://i.imgur.com/3YAB3s9s.png",
  },
  {
    original: "https://i.imgur.com/1GbZzrd.png",
    thumbnail: "https://i.imgur.com/1GbZzrds.png",
  },
  {
    original: "https://i.imgur.com/goWGMQE.png",
    thumbnail: "https://i.imgur.com/goWGMQEs.png",
  },
  {
    original: "https://i.imgur.com/OYxNvnQ.jpg",
    thumbnail: "https://i.imgur.com/OYxNvnQs.jpg",
  },
  {
    original: "https://i.imgur.com/9z5eU1H.png",
    thumbnail: "https://i.imgur.com/9z5eU1Hs.png",
  },
  {
    original: "https://i.imgur.com/lMhoKY8.png",
    thumbnail: "https://i.imgur.com/lMhoKY8s.png",
  },
  {
    original: "https://i.imgur.com/1YdTyG8.png",
    thumbnail: "https://i.imgur.com/1YdTyG8s.png",
  },
  {
    original: "https://i.imgur.com/bPRkj9P.png",
    thumbnail: "https://i.imgur.com/bPRkj9Ps.png",
  },
  {
    original: "https://i.imgur.com/5LAMzuq.png",
    thumbnail: "https://i.imgur.com/5LAMzuqs.png",
  },
  {
    original: "https://i.imgur.com/od3lM6x.png",
    thumbnail: "https://i.imgur.com/od3lM6xs.png",
  },
  {
    original: "https://i.imgur.com/7qRS0ni.png",
    thumbnail: "https://i.imgur.com/7qRS0nis.png",
  },
  {
    original: "https://i.imgur.com/GHwA2Op.png",
    thumbnail: "https://i.imgur.com/GHwA2Ops.png",
  },
  {
    original: "https://i.imgur.com/YT7AHOp.png",
    thumbnail: "https://i.imgur.com/YT7AHOps.png",
  },
  {
    original: "https://i.imgur.com/5XpM4Jy.png",
    thumbnail: "https://i.imgur.com/5XpM4Jys.png",
  },
  {
    original: "https://i.imgur.com/pLzQZsp.jpg",
    thumbnail: "https://i.imgur.com/pLzQZsps.jpg",
  },
  {
    original: "https://i.imgur.com/QmvzPFI.png",
    thumbnail: "https://i.imgur.com/QmvzPFIs.png",
  },
  {
    original: "https://i.imgur.com/nyyPWLL.png",
    thumbnail: "https://i.imgur.com/nyyPWLLs.png",
  },
  {
    original: "https://i.imgur.com/stSXAMn.png",
    thumbnail: "https://i.imgur.com/stSXAMns.png",
  },
  {
    original: "https://i.imgur.com/86Ff6FT.png",
    thumbnail: "https://i.imgur.com/86Ff6FTs.png",
  },
  {
    original: "https://i.imgur.com/6RifFg3.png",
    thumbnail: "https://i.imgur.com/6RifFg3s.png",
  },
  {
    original: "https://i.imgur.com/AD8PkxQ.png",
    thumbnail: "https://i.imgur.com/AD8PkxQs.png",
  },
  {
    original: "https://i.imgur.com/n166OfV.png",
    thumbnail: "https://i.imgur.com/n166OfVs.png",
  },
  {
    original: "https://i.imgur.com/WnNeTDV.png",
    thumbnail: "https://i.imgur.com/WnNeTDVs.png",
  },
  {
    original: "https://i.imgur.com/KnDKq7D.png",
    thumbnail: "https://i.imgur.com/KnDKq7Ds.png",
  },
  {
    original: "https://i.imgur.com/vEwx5Sd.png",
    thumbnail: "https://i.imgur.com/vEwx5Sds.png",
  },
  {
    original: "https://i.imgur.com/e5jOJ2r.png",
    thumbnail: "https://i.imgur.com/e5jOJ2rs.png",
  },
  {
    original: "https://i.imgur.com/D6yutQB.png",
    thumbnail: "https://i.imgur.com/D6yutQBs.png",
  },
  {
    original: "https://i.imgur.com/Lo3IhT9.png",
    thumbnail: "https://i.imgur.com/Lo3IhT9s.png",
  },
  {
    original: "https://i.imgur.com/Ezh37Wf.png",
    thumbnail: "https://i.imgur.com/Ezh37Wfs.png",
  },
  {
    original: "https://i.imgur.com/qKCmrek.png",
    thumbnail: "https://i.imgur.com/qKCmreks.png",
  },
  {
    original: "https://i.imgur.com/keFCSRM.png",
    thumbnail: "https://i.imgur.com/keFCSRMs.png",
  },
  {
    original: "https://i.imgur.com/ngT3xno.png",
    thumbnail: "https://i.imgur.com/ngT3xnos.png",
  },
  {
    original: "https://i.imgur.com/xJRMiVb.png",
    thumbnail: "https://i.imgur.com/xJRMiVbs.png",
  },
  {
    original: "https://i.imgur.com/XugSY6L.png",
    thumbnail: "https://i.imgur.com/XugSY6Ls.png",
  },
  {
    original: "https://i.imgur.com/tSfuKxd.png",
    thumbnail: "https://i.imgur.com/tSfuKxds.png",
  },
  {
    original: "https://i.imgur.com/KuwS4gS.png",
    thumbnail: "https://i.imgur.com/KuwS4gSs.png",
  },
  {
    original: "https://i.imgur.com/fZRBtun.png",
    thumbnail: "https://i.imgur.com/fZRBtuns.png",
  },
  {
    original: "https://i.imgur.com/CVV0LcM.png",
    thumbnail: "https://i.imgur.com/CVV0LcMs.png",
  },
  {
    original: "https://i.imgur.com/Y1lgY5r.png",
    thumbnail: "https://i.imgur.com/Y1lgY5rs.png",
  },
  {
    original: "https://i.imgur.com/Ns3eB0p.png",
    thumbnail: "https://i.imgur.com/Ns3eB0ps.png",
  },
  {
    original: "https://i.imgur.com/CHITxvJ.png",
    thumbnail: "https://i.imgur.com/CHITxvJs.png",
  },
  {
    original: "https://i.imgur.com/ueA0sJX.png",
    thumbnail: "https://i.imgur.com/ueA0sJXs.png",
  },
  {
    original: "https://i.imgur.com/ni00E16.png",
    thumbnail: "https://i.imgur.com/ni00E16s.png",
  },
  {
    original: "https://i.imgur.com/IsAO7Vv.png",
    thumbnail: "https://i.imgur.com/IsAO7Vvs.png",
  },
  {
    original: "https://i.imgur.com/Omhe2Ip.png",
    thumbnail: "https://i.imgur.com/Omhe2Ips.png",
  },
  {
    original: "https://i.imgur.com/PJF7hOy.png",
    thumbnail: "https://i.imgur.com/PJF7hOys.png",
  },
  {
    original: "https://i.imgur.com/9p1bUDP.png",
    thumbnail: "https://i.imgur.com/9p1bUDPs.png",
  },
  {
    original: "https://i.imgur.com/DS41QYb.png",
    thumbnail: "https://i.imgur.com/DS41QYbs.png",
  },
  {
    original: "https://i.imgur.com/mSjCYX0.png",
    thumbnail: "https://i.imgur.com/mSjCYX0s.png",
  },
  {
    original: "https://i.imgur.com/eaysDGZ.png",
    thumbnail: "https://i.imgur.com/eaysDGZs.png",
  },
  {
    original: "https://i.imgur.com/VDJvwl0.png",
    thumbnail: "https://i.imgur.com/VDJvwl0s.png",
  },
  {
    original: "https://i.imgur.com/tY5ME3T.png",
    thumbnail: "https://i.imgur.com/tY5ME3Ts.png",
  },
  {
    original: "https://i.imgur.com/6Lv1SaN.png",
    thumbnail: "https://i.imgur.com/6Lv1SaNs.png",
  },
  {
    original: "https://i.imgur.com/yc1e2Jr.png",
    thumbnail: "https://i.imgur.com/yc1e2Jrs.png",
  },
  {
    original: "https://i.imgur.com/vTHxaZN.png",
    thumbnail: "https://i.imgur.com/vTHxaZNs.png",
  },
  {
    original: "https://i.imgur.com/B0yola0.png",
    thumbnail: "https://i.imgur.com/B0yola0s.png",
  },
  {
    original: "https://i.imgur.com/pCCIuWN.png",
    thumbnail: "https://i.imgur.com/pCCIuWNs.png",
  },
  {
    original: "https://i.imgur.com/CbohSyC.png",
    thumbnail: "https://i.imgur.com/CbohSyCs.png",
  },
  {
    original: "https://i.imgur.com/tHPsEF0.png",
    thumbnail: "https://i.imgur.com/tHPsEF0s.png",
  },
  {
    original: "https://i.imgur.com/WFtr7Jc.png",
    thumbnail: "https://i.imgur.com/WFtr7Jcs.png",
  },
  {
    original: "https://i.imgur.com/oaqczas.png",
    thumbnail: "https://i.imgur.com/oaqczass.png",
  },
];

images.reverse();

function Gallery() {
  return (
    <div id="App">
      <Helmet>
        <title>Tetra | Gallery</title>
      </Helmet>
      <SideBar
        customBurgerIcon={<img src={tetra} alt="menu button" />}
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
      />
      <div id="page-wrap">
        <ImageGallery
          lazyLoad={true}
          showPlayButton={false}
          showIndex={true}
          showFullscreenButton={false}
          items={images}
        />
      </div>
    </div>
  );
}

export default Gallery;
