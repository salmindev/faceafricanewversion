/* BEGIN Configuration */

if(typeof _cls_config === "undefined") _cls_config = {};

/* BEGIN ajax */
  _cls_config.ajaxStruggleIgnoreCancel=true;          //185960 hmjY
  _cls_config.ajaxRecordMetadata="never";  
  _cls_config.ajaxRecordRequestBody="and(tld,statusgte(400))";
  _cls_config.ajaxRecordRequestHeaders="and(tld,statusgte(400))";
  _cls_config.ajaxRecordResponseBody="and(tld,statusgte(400))";
  _cls_config.ajaxRecordResponseHeaders="and(tld,statusgte(400))";
  _cls_config.interceptAjax=true;
  _cls_config.ajaxRecordStats="always";
/* END ajax */

/* BEGIN behavior */
  _cls_config.idleEventTimeInterval=-1;
  _cls_config.iframesAutoInject=true;
  _cls_config.iframesHandshakeTimeout=8000;
  _cls_config.recordMouseMoves=true;
  _cls_config.recordScrolls=true;
  _cls_config.recordAnimation=true;
  _cls_config.passTabIdViaWinName=true;
  _cls_config.reportToStorageAfterUnload=true;
  _cls_config.reportStorageBackedForUA = ['.*'];
  _cls_config.postRetry = true;
  _cls_config.valueAutoMasking=['creditCard'];
/* END behavior */

/*BEGIN MASKING*/

//Value Masking (INPUT)
  _cls_config.valueMaskingMode = "blacklist";
  _cls_config.maskWhitelistValueById = [];
  _cls_config.maskBlacklistValueById = ["bankRoutingNumber","credit-card-cvv","creditCardMask","creditCardNumber","credit-card-number","expMonth","expYear","firstCreditCard.encryptedNumber","firstCreditCard.number","firstCreditCard.originalMask","otherCreditCardInformationVO.number","preferredCreditCardInformationVO.creditCardCVV","preferredCreditCardInformationVO.expMonth","preferredCreditCardInformationVO.expYear","preferredCreditCardInformationVO.number","secondCreditCard.encryptedNumber","secondCreditCard.number","secondCreditCard.originalMask","my-account-user-id","user-id","field-user-id","accountIdOrEmailAddress","email","signin-userid","aaa-id"];
  _cls_config.maskWhitelistValueByClass = [];
  _cls_config.maskBlacklistValueByClass = [];
  _cls_config.valueWhitelistMaskSimpleSelector = [];
  _cls_config.valueBlacklistMaskSimpleSelector = [];

//DOM Masking
  _cls_config.domMaskingMode = "blacklist";
  _cls_config.domWhitelistMaskContentById = [];
  _cls_config.domBlacklistMaskContentById = ["bankRoutingNumber","creditCardNumber","credit-card-number"];
  _cls_config.domWhitelistMaskContentByClass = [];
  _cls_config.domBlacklistMaskContentByClass = ["selectric"];
  _cls_config.domWhitelistMaskSimpleSelector = [];
  _cls_config.domBlacklistMaskSimpleSelector = ["#DirectDepositForm>dl:nth-child(10)>dd>ul>li:nth-child(3)"];
 
  _cls_config.domOmitById=["selectric-list0"];

/*END MASKING*/

/* BEGIN required */
  _cls_config.reportURI="https://report.marriott.glassboxdigital.io/glassbox/reporting/a0db18ee-fb04-4317-9ce8-14ce393df292/cls_report"
/* END required */

/* BEGIN resource */
  _cls_config.resourcesRecordEnabled=false;
  _cls_config.recordScrollReach=true;
  _cls_config.resourceTimingRecordEnabled=true;
  _cls_config.resourceTimingRecordEnabledByChance=0.05;
  _cls_config.webVitalsRecordEnabled=true;
/* END resource */

/* BEGIN extra */
  _cls_config.captureGlobalObjects=["s.eVar1","s.eVar199","s.eVar32","s.cookiesEnabled","s.eVar101","s.eVar112","s.eVar13","s.eVar15","s.eVar2","s.eVar20","s.eVar29","s.eVar35","s.eVar36","s.eVar41","s.eVar79","s.eVar89","s.eVar90","s.eVar91","s.eVar92","s.pageName","s.prop13","s.prop14","s.prop25","s.prop26","s.prop5","s.prop56","s.prop60","s.prop71","s.prop8","s.queryVarsList","s.eVar48","dataLayer.prop_brand_code","dataLayer.brndCode","dataLayer.prop_hws_page","dataLayer.prop_hws_tier","dataLayer.prop_name","dataLayer.memState","dataLayer.prop_brand_tier","dataLayer.res_room_rate_tab","dataLayer.mr_id_alternate","dataLayer.prop_brand_name","dataLayer.mr_prof_member_program_level","dataLayer.selected_cluster_code","dataLayer.res_rate_is_member_rate","dataLayer.res_revenue_stay_total_usd","dataLayer.sessionId","dataLayer.prop_is_ers","dataLayer.res_isRedemption","dataLayer.res_cash_points_mix","s.v1","dataLayer.mr_prof_address_state","dataLayer.mr_prof_points_balance","dataLayer.mr_prof_rewards_level","dataLayer.mr_id","dataLayer.mr_prof_address_country","dataLayer.brwsrLang","dataLayer.loginEventDetails"];
  _cls_config.clientAttributesEnabled=true;
  _cls_config.clientAttributeMaxLength=100;
  _cls_config.interceptABTesting=true; 
  _cls_config.interceptAdobeABEvent=true; 
  _cls_config.abTestingGlobalObject="ttMeta";
/* END extra */

  _cls_config.recordConsoleErrors=false; 
  _cls_config.recordErrors = false;
  _cls_config.devToolsDetectionEnabled=false; //185960
  _cls_config.devToolsDebuggerBasedDetection=false; //185960
  _cls_config.recordConsoleInfo=false; //185960
  _cls_config.domMaskedAttributes = ["aria-label"];
  _cls_config.domMaskAttributesByTag = ["li", "ul","input"];
  
  //118399
  _cls_config.domFormValidationRedComponentMin=192;
  _cls_config.domFormValidationConsiderBG=false;
  
  //184570
  //_cls_config.recordConsoleErrors=true;  //conflicts with 185960
  _cls_config.recordErrors=true;

  //Resource Recording
  _cls_config.resourcesRecordEnabled = true;
  _cls_config.resourcesRecordCount = 5;
  _cls_config.resourcesRecordChance = 0.2;
  _cls_config.resourcesRecordAllowCors = true;
  _cls_config.resourceRecordCssOnly = false;

  _cls_config.domPreciseStyleSheetCloning=true;
  _cls_config.domTamperingDetectionEnabled=true;
  _cls_config.domForceUpdateOnClick=true;
  

//197800
_cls_config.SCIntegration = true; 
_cls_config.SCIntegrationURLsContainList = ["/b/ss"]; 
_cls_config.SCIntegrationKeyList = ["v1"];

//00055359
_cls_config.useIdSelectors = false;

/* END Configuration */

/* BEGIN V7 detector requirements */
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath = 'https://cdn.glassboxcdn.com/marriott/common/p/';
/* End V7 detector requirements */