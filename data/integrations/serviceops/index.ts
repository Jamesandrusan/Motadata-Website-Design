import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

import { googleWorkspaceData } from "./google-workspace";
import { azureAdData } from "./azure-ad";
import { oktaData } from "./okta";
import { keycloakData } from "./keycloak";
import { oneloginData } from "./onelogin";
import { adfsData } from "./adfs";
import { wso2Data } from "./wso2";
import { jumpcloudData } from "./jumpcloud";
import { jiraData } from "./jira";
import { microsoftTeamsData } from "./microsoft-teams";
import { whatsappData } from "./whatsapp";
import { slackData } from "./slack";
import { viberData } from "./viber";
import { azureData } from "./azure";
import { office365Data } from "./office-365";
import { telegramData } from "./telegram";
import { facebookMessengerData } from "./facebook-messenger";
import { observeopsData } from "./observeops";

export const serviceOpsIntegrationPages: Record<string, ServiceOpsIntegrationData> = {
  "google-workspace": googleWorkspaceData,
  "azure-ad": azureAdData,
  "okta": oktaData,
  "keycloak": keycloakData,
  "onelogin": oneloginData,
  "adfs": adfsData,
  "wso2": wso2Data,
  "jumpcloud": jumpcloudData,
  "jira": jiraData,
  "microsoft-teams": microsoftTeamsData,
  "whatsapp": whatsappData,
  "slack": slackData,
  "viber": viberData,
  "azure": azureData,
  "office-365": office365Data,
  "telegram": telegramData,
  "facebook-messenger": facebookMessengerData,
  "observeops-integration": observeopsData,
};
