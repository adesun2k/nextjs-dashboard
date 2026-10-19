import { GlobeAltIcon } from "@heroicons/react/24/outline";
//import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}

/*

2026-10-19 08:03:47.712 13358-14607 FINOPAY_TERMINALS       app.kwayet                           D  {"success":true,"message":"Merchant staff active sessions retrieved successfully","internalCode":"ZENZ-CROSS-001","dateTime":"2026-10-19T08:03:47+0100","data":{"staffSessions":[{"userId":"e4a0f40c-b21b-4518-8af6-06454319c4be","firstName":"Seun","lastName":"Adeyemi","phoneNumber":"+2348167841457","profile":"ADMINISTRATOR","activeSessions":[{"sessionId":"8af8f9b3-1420-4520-9bd3-c7603da0ba5d","ipAddress":"10.140.64.19","start":1792393063000,"lastAccess":1792393063000,"clients":{"5851dfbe-f55d-46aa-8278-4f41c8bf9331":"pos-admin-client"}}]}],"activePOSTerminals":[{"sessionId":"2b971c10-3c9e-4dc1-ac96-888892de7077","terminalId":"257ZXYNS","deviceId":"NAC201123171","virtualAccountNumber":"0000000877","walletId":"0050070663","staffUserId":"e4a0f40c-b21b-4518-8af6-06454319c4be","staffFirstName":"Seun","staffLastName":"Adeyemi","loginTime":"2026-10-19T07:57:44.7928828","sessionBalance":0.0000,"cashBalance":0.0000}]}}
2026-10-19 08:03:47.712 13358-14607 FINOPAY_TERMINALS       app.kwayet                           D  Active terminals: 1
2026-10-19 08:03:47.712 13358-14607 FINOPAY_TERMINALS       app.kwayet                           D  Terminal: 257ZXYNS, Staff: Seun Adeyemi, Balance: 0.0


export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}*/
