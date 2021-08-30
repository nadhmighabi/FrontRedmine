import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared';

@Injectable({ providedIn: 'root' })
export class EtatCivilService {

    constructor(private http: HttpClient) {
    }

    public getListEtatCivil(): Observable<Object> {
        return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_ETAT_CIVIL}`);
    }
}
