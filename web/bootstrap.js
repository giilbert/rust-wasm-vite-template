import init from '../pkg/project';

(async () => {
  const { start } = await init();
  start();
})()
