export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  if (!config.public.mock) {
    return;
  }

  if (typeof window !== 'undefined') {
    const { worker } = await import('~/mocks/browser');
    worker.start();
  } else {
    const { server } = await import('~/mocks/node');
    server.listen();
  }
});
