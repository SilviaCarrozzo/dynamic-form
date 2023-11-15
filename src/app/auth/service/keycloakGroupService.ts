import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class KeycloakGroupService {

  private keycloakApiUrl = 'https://http://20.101.29.240/auth/admin/realms/your-realm/groups';
  constructor(private http: HttpClient) {}

  getGroupDetails(groupId: string) {
    return this.http.get(`${this.keycloakApiUrl}/${groupId}`);
  }

}
