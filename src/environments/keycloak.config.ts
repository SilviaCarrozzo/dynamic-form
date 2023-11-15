import {KeycloakConfig} from "keycloak-js";

const keycloakConfig: KeycloakConfig = {
  url: 'http://20.101.29.240/',//Insert url from keycloak client
  realm: 'dynamic-form',//Insert realm name
  clientId: 'dynamic-form',//Insert clientId
}

export default keycloakConfig;
