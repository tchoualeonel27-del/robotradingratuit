// RoboTradingRatuit — Données produits
// Généré automatiquement depuis le Dashboard Admin
// COMMENT METTRE À JOUR : Allez dans Admin → "Exporter & Publier" → Téléchargez ce fichier → Uploadez sur GitHub

var RTR_PRODUCTS_DATA = {
  "robots": [
    {"id":1,"name":"Gold Hunter V8","plat":"MT4/MT5","cat":"or","price":30,"oldPrice":null,"badge":"bs","free":false,"stars":5,"desc":"EA de référence pour XAUUSD basé sur la détection des zones de liquidité. Drawdown contrôlé, backtests 2019-2024.","feats":["XAUUSD/Gold optimisé","Drawdown max < 12%","Presets Exness & Roboforex","No DLL requis"],"img":"","imgs":["","","","",""]},
    {"id":2,"name":"AI Gold Sniper MT4 V1.4","plat":"MT4","cat":"or","price":20,"oldPrice":null,"badge":"hot","free":false,"stars":5,"desc":"Expert Advisor IA de sniper sur l'Or. Entrées chirurgicales XAUUSD haute précision.","feats":["IA-powered XAU/USD","Haute précision","Version 1.4"],"img":"","imgs":["","","","",""]},
    {"id":3,"name":"Dominant EA MT5","plat":"MT5","cat":"forex","price":50,"oldPrice":299,"badge":"sale","free":false,"stars":5,"desc":"EA complet 3 modes de risque. EUR/USD, GBP/USD, USD/JPY et XAU/USD.","feats":["3 niveaux: Low/Medium/Aggressive","Presets Exness fournis"],"img":"","imgs":["","","","",""]},
    {"id":4,"name":"AI Golden Jet Fighter GTX MT4","plat":"MT4","cat":"forex","price":15,"oldPrice":null,"badge":"","free":false,"stars":4,"desc":"EA Forex agressif — entrées rapides, sorties précises.","feats":["Scalping rapide","EUR/USD, GBP/USD"],"img":"","imgs":["","","","",""]},
    {"id":5,"name":"AiMaxPro EA V2","plat":"MT4","cat":"indices","price":15,"oldPrice":null,"badge":"","free":false,"stars":4,"desc":"EA pour indices US30, NAS100, SP500. IA v2.","feats":["US30, NAS100, SP500","IA v2"],"img":"","imgs":["","","","",""]},
    {"id":6,"name":"Alpha Scalper Pro MT5","plat":"MT5","cat":"forex","price":50,"oldPrice":500,"badge":"sale","free":false,"stars":5,"desc":"Scalper professionnel ultra-rapide MT5.","feats":["Scalping milliseconde","Multi-sessions"],"img":"","imgs":["","","","",""]},
    {"id":7,"name":"ICT Venom XAUUSD MT5","plat":"MT5","cat":"or","price":35,"oldPrice":null,"badge":"","free":false,"stars":4,"desc":"EA basé sur la méthodologie ICT. Order Blocks et FVG automatiques.","feats":["Méthodologie ICT 100%","Order Blocks & FVG"],"img":"","imgs":["","","","",""]}
  ],
  "indicators": [
    {"id":1,"name":"V2 Price Action Volumetric OB & Trend Strength","compat":"TradingView","type":"Premium","price":15,"free":false,"stars":4,"desc":"Order Blocks volumétriques + force tendance.","img":"","imgs":["","","","",""]},
    {"id":2,"name":"100% Pine Script — Système Complet","compat":"TradingView","type":"Premium","price":20,"free":false,"stars":4,"desc":"Script Pine complet signaux entrée/sortie.","img":"","imgs":["","","","",""]},
    {"id":3,"name":"Fiona V.01","compat":"MT4","type":"Gratuit","price":0,"free":true,"stars":4,"desc":"Indicateur tendance MT4 gratuit.","img":"","imgs":["","","","",""]}
  ],
  "systems": [
    {"id":1,"name":"100% Winrate System MT4 (Source Code MQ4)","plat":"MT4/MT5","price":25,"free":false,"stars":5,"desc":"Système code source MQ4 complet. Vérifiés MyFxBook.","feats":["Code MQ4 inclus","MyFxBook vérifié"],"img":"","imgs":["","","","",""]}
  ],
  "ebooks": [
    {"id":1,"title":"Maîtriser le Forex de A à Z","pages":120,"cat":"formation","price":29,"free":false,"stars":5,"desc":"120 pages formation complète pour débuter et progresser en Forex.","img":"","imgs":["","","","",""]},
    {"id":2,"title":"Smart Money Concepts (SMC) — Guide Complet","pages":95,"cat":"smc","price":39,"free":false,"stars":5,"desc":"95 pages sur les stratégies institutionnelles SMC et ICT.","img":"","imgs":["","","","",""]},
    {"id":3,"title":"Guide Installation EA MT4/MT5","pages":40,"cat":"ea","price":0,"free":true,"stars":4,"desc":"Manuel illustré installation robots.","img":"","imgs":["","","","",""]}
  ],
  "videos": [
    {"id":1,"title":"Comment installer un EA sur MT4/MT5","url":"https://youtu.be/example1","dur":"12:34","cat":"Installation EA"}
  ]
};

var RTR_LOGO = 'logo.jpg';

// Chargement automatique dans le site
if(typeof window !== 'undefined'){
  try{
    localStorage.setItem('rtr_products', JSON.stringify(RTR_PRODUCTS_DATA));
    if(RTR_LOGO && RTR_LOGO !== 'logo.jpg') localStorage.setItem('rtr_logo', RTR_LOGO);
    console.log('RoboTradingRatuit: données chargées —', RTR_PRODUCTS_DATA.robots.length, 'robots EA');
  }catch(e){ console.error('RTR data error', e); }
}
