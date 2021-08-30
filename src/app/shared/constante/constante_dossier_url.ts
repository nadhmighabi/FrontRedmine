import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const CONSTANTE_DOSSIER_URL = {
  URL_DOSSIER_LIST: url + "/app/vDossier/",
  URL_DOSSIER_LIST_SEARCH: url + "/app/vDossier/data",
  URL_ETAT_DOSSIER_LIST: url + "/app/nmEtatDossier/",
  URL_LIST_EVENEMENT: url + "/app/evenement/data",
  URL_LIST_CONSIGNATION_COURRIER: url + "/app/courrierArrivee/data/dossier",
  URL_LIST_CONSIGNATION_COURRIER_SOURCE_SEARCH: `${url}/app/nomenclature/typeCorrespCourr/`,
  URL_LIST_CONSIGNATION_COURRIER_SOURCE_TYPE_AFFAIRE_PARENT: `${url}/app/courrierArrivee/data/type/affire`,
  URL_LIST_CONSIGNATION_COURRIER_SOURCE_TYPE_AFFAIRE_FILS: `${url}/app/courrierArrivee/data/child/type/affire`,
  URL_SAVE_CONSIGNATION_COURRIER: `${url}/app/courrierArrivee/send/dossier/`,
  URL_LIST_DOSSIER: `${url}/app/vDossier/listDossier`,
  URL_LIST_MOTIF_DECISON_DOSSIER: `${url}/app/nomenclature/nmMotifDecison/listMotifRetourCourier`,
  URL_LIST_ATTRIBUS_TYPE_AFFAIRE: `${url}/app/nomenclature/typeAffaire/listAttributsPrm`,
  URL_FIND_VDOSSIER_BY_ID: `${url}/app/vDossier/`,
  URL_SAVE_AFFECTATION_NUM_DOSS: `${url}/app/dossier/ref/`,
  URL_FIN_CREATION_AFFAIRE: `${url}/app/dossier/miseEnEtat/`,
  URL_SAVE_DOSSIER_INFOS: `${url}/app/dossierInfos/`,
  URL_SAVE_DOSSIER: `${url}/app/dossier/`,
  URL_LIST_AVOCAT: `${url}/app/avocat/listVavocat`,
  URL_LIST_EXPERT: `${url}/app/expert/listvexpert`,
  URL_LIST_JURID: `${url}/app/nomenclature/jurid/`,
  URL_LIST_Huissier: `${url}/app/huissier/listvhuissier`,
  URL_LIST_ALL_TYPE_AFFAIRE: `${url}/app/nomenclature/typeAffaire/listParentNmTypeAffaire`,
  URL_LIST_ALL_NUM_DOSS: `${url}/app/vDossier/listAllDossier`,
  URL_LIST_DETTES_BY_ID_DOSSIER: `${url}/app/dettes/listDettesByIdDossier`,
  URL_LIST_DETTES_BY_ID_DOSSIER_WITH_FILTER: `${url}/app/dettes/data`,
  URL_SAVE_DETTES: `${url}/app/dettes/saveDettes`,
  URL_LIST_Typ_Document : `${url}/app/nmTypeDoc/`,
  URL_DOC_NOT_FILTRE: `${url}/ged/document/documents`,
  URL_DELEE_DETTES :`${url}/app/dettes/`,
  URL_update_DETTES :`${url}/app/dettes/updateDettes`,
  URL_FIND_DETTES_BY_ID :`${url}/app/dettes/findByID/`,
  URL_DOSSIER_PARAM :`${url}/app/dossier/dossierParam?idDossier=`,
  url_find_doss_by_id  :`${url}/app/dossier/`,
  url_list_devise : `${url}/app/nomenclature/devise/`,
  url_list_typ_courrier : `${url}/app/nomenclature/typeCourrier/`,

  url_find_devise_by_id : `${url}/app/nomenclature/devise/`,
  
};