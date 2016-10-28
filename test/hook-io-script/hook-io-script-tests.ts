import { BuildResult } from '../../src/common/build-result';
var hookIoScript = require('../../src/hook-io-script/hook-io-script');

import { expect } from '../utilities';

let sampleData = {
  "createdDate" : "2016-10-25T19:49:00.6277628Z",
  "detailedMessage" : {
    "html" : "Build <a href=\"https://tfsai.afasgroep.nl/tfs/web/build.aspx?pcguid=5a2b5394-8944-4238-9b8f-44771cbab164&amp;builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f48224\">RAN01636-distributed Integration_161025.01</a> failed",
    "markdown" : "Build [RAN01636-distributed Integration_161025.01](https://tfsai.afasgroep.nl/tfs/web/build.aspx?pcguid=5a2b5394-8944-4238-9b8f-44771cbab164&builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f48224) failed",
    "text" : "Build RAN01636-distributed Integration_161025.01 failed"
  },
  "eventType" : "build.complete",
  "id" : "0fe20bce-2ab9-4ad7-80a3-facbcc9f09c7",
  "message" : {
    "html" : "Build <a href=\"https://tfsai.afasgroep.nl/tfs/web/build.aspx?pcguid=5a2b5394-8944-4238-9b8f-44771cbab164&amp;builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f48224\">RAN01636-distributed Integration_161025.01</a> failed",
    "markdown" : "Build [RAN01636-distributed Integration_161025.01](https://tfsai.afasgroep.nl/tfs/web/build.aspx?pcguid=5a2b5394-8944-4238-9b8f-44771cbab164&builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f48224) failed",
    "text" : "Build RAN01636-distributed Integration_161025.01 failed"
  },
  "notificationId" : 45,
  "publisherId" : "tfs",
  "resource" : {
    "buildNumber" : "RAN01636-distributed Integration_161025.01",
    "definition" : {
      "definitionType" : "xaml",
      "id" : 929,
      "name" : "RAN01636-distributed Integration",
      "url" : "https://tfsai.afasgroep.nl/tfs/Next/7bc18aca-03dc-4b4c-8ceb-c69bab5fd6aa/_apis/build/Definitions/929"
    },
    "finishTime" : "2016-10-25T19:48:58.0488238Z",
    "id" : 48224,
    "lastChangedBy" : {
      "displayName" : "[Next]\\Project Collection Service Accounts",
      "id" : "32a4d035-d577-4398-b2ad-87f19e252ee8",
      "imageUrl" : "https://tfsai.afasgroep.nl/tfs/Next/_api/_common/identityImage?id=32a4d035-d577-4398-b2ad-87f19e252ee8",
      "uniqueName" : "vstfs:///Framework/IdentityDomain/5a2b5394-8944-4238-9b8f-44771cbab164\\Project Collection Service Accounts",
      "url" : "https://tfsai.afasgroep.nl/tfs/Next/_apis/Identities/32a4d035-d577-4398-b2ad-87f19e252ee8"
    },
    "queue" : {
      "id" : 1,
      "name" : "Default",
      "queueType" : "buildController",
      "url" : "https://tfsai.afasgroep.nl/tfs/Next/_apis/build/Queues/1"
    },
    "reason" : "schedule",
    "requests" : [ {
      "id" : 48224,
      "requestedFor" : {
        "displayName" : "[Next]\\Project Collection Service Accounts",
        "id" : "32a4d035-d577-4398-b2ad-87f19e252ee8",
        "uniqueName" : "vstfs:///Framework/IdentityDomain/5a2b5394-8944-4238-9b8f-44771cbab164\\Project Collection Service Accounts"
      },
      "url" : "https://tfsai.afasgroep.nl/tfs/Next/7bc18aca-03dc-4b4c-8ceb-c69bab5fd6aa/_apis/build/Requests/48224"
    } ],
    "retainIndefinitely" : false,
    "sourceGetVersion" : "C24906",
    "startTime" : "2016-10-25T19:30:03.1416476Z",
    "status" : "failed",
    "uri" : "vstfs:///Build/Build/48224",
    "url" : "https://tfsai.afasgroep.nl/tfs/Next/7bc18aca-03dc-4b4c-8ceb-c69bab5fd6aa/_apis/build/Builds/48224"
  },
  "resourceVersion" : "1.0",
  "subscriptionId" : "d371ff29-c553-4439-8e7b-a5f033b4502e"
};

export type IncomingBuildResult = typeof sampleData;

describe('Hook-io-script', () => {

  it('converts into a readable format', () => {
    let result: BuildResult;
    let hook = {
      params: {
        data: JSON.stringify(sampleData)
      },
      res: {
        end: (resultData: string) => { result= JSON.parse(resultData).parsed}
      }
    }
    hookIoScript(hook);
    expect(result).to.deep.include({result: 'failure'});
  });

});
