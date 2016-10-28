import { IncomingBuildResult } from '../../test/hook-io-script/hook-io-script-tests';
import { BuildResult } from '../common/build-result';

export = (hook: any) => {

  let data: string = hook.params.data;

  if (data && data.substr(0,1) === '{') {
    let incoming: IncomingBuildResult = JSON.parse(data);
    let result: BuildResult = {
      buildName: incoming.resource.definition.name,
      contributers: undefined,
      timestamp: new Date(incoming.resource.startTime).getTime(),
      result: incoming.resource.status === 'succeeded' ? 'success' : 'failure'
    };
    console.log('Result '+ JSON.stringify(result));
    hook.res.end(JSON.stringify({success: true, parsed: result}, undefined, 2));
  } else {
    hook.res.end(JSON.stringify({success: false, message: 'Could not parse data'}, undefined, 2));
  }
}
